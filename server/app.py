import os
from flask import Flask, jsonify, request, redirect, url_for, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_restful import Api, Resource
from datetime import timedelta
from sqlalchemy import func
from datetime import datetime, timezone
from werkzeug.utils import secure_filename
import spacy
import PyPDF2
import docx
from flask import jsonify


from models import db, User, Document, Suggestion, DocumentHistory

# Initialize the Flask app
app = Flask(__name__)


# Configure the app for SQLite
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///refinedocs.db'  # Using SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'  # Change to your secret key
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change to your JWT secret key
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=1)  # Token expiration (1 day)

# Initialize extensions

db.init_app(app) 
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
api = Api(app)  # Initialize the Api for flask_restful

# Simple route to check if the server is running
@app.route('/')
def index():
    return jsonify({"message": "RefineDocs API is running!"})

# CHECKSESSION

class CheckSession(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        if user_id:
            user = User.query.filter_by(id=user_id).first()
            if user:
                user_data = user.to_dict()
                print("User Data:", user_data)  # Print the user data
                return {'user_type': 'user', 'user_data': user_data}, 200
        
        return jsonify({'message': '401: Not Authorized'}), 401

api.add_resource(CheckSession, '/check_session')


# ROUTES FOR USER

@app.route('/users/registration', methods=['POST'])
def register_user():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        email = data.get('email').strip().lower()
        password = data.get('password')

        # Check if the email or username is already registered
        existing_user = User.query.filter(
            (func.lower(User.email) == email) | (User.username == username)
        ).first()
        
        if existing_user:
            error_message = "Email or Username already registered. Please use a different one."
            return jsonify({'error': error_message}), 400
        
        # Create new user
        new_user = User(
            username=username, 
            email=email, 
            password_hash=bcrypt.generate_password_hash(password).decode('utf-8')
        )

        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(identity=new_user.id, expires_delta=timedelta(hours=24))
        return jsonify({'access_token': access_token}), 201

    return redirect(url_for('index'))


@app.route('/users/signin', methods=['POST'])
def signin_user():
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email').strip().lower()
        password = data.get('password')

        user = User.query.filter(func.lower(User.email) == email).first()

        if user and bcrypt.check_password_hash(user.password_hash, password):
            access_token = create_access_token(identity=user.id, expires_delta=timedelta(hours=24))
            return jsonify({'access_token': access_token}), 200
        else:
            error_message = "Invalid email or password."
            return jsonify({'error': error_message}), 401

    return redirect(url_for('index'))


@app.route('/users/logout', methods=['DELETE'])
def logout_user():
    # JWT does not store sessions server-side, so there is no need to manage server-side session here.
    # Simply inform the client to discard the token.
    logout_dict = {'message': 'Logout successful. Goodbye!'}
    response = make_response(
        jsonify(logout_dict),
        200
    )
    return response


# EXTRACT FILE

def extract_text(filepath):
    _, file_extension = os.path.splitext(filepath)

    if file_extension.lower() == '.txt':
        with open(filepath, 'r') as file:
            return file.read()
    elif file_extension.lower() == '.pdf':
        with open(filepath, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            for page_num in range(len(reader.pages)):
                text += reader.pages[page_num].extract_text()
            return text
    elif file_extension.lower() == '.docx':
        doc = docx.Document(filepath)
        return '\n'.join([para.text for para in doc.paragraphs])
    else:
        raise ValueError(f"Unsupported file type: {file_extension}")


# IMPROVE DOCUMENTS.

def improve_document(original_content):
    # Load the spaCy NLP model
    nlp = spacy.load("en_core_web_sm")
    
    # Process the text through the NLP pipeline
    doc = nlp(original_content)
    
    # Improve the document content (for simplicity, this example returns the original)
    improved_content = original_content
    
    # Example of extracting suggestions
    suggestions = []
    for token in doc:
        if token.is_stop:
            suggestions.append(f"Consider removing stopword: {token.text}")
        elif token.is_alpha and len(token.text) > 6:  # Example of a rule to improve word usage
            suggestions.append(f"Try simplifying: {token.text}")
    
    return improved_content, suggestions


# POST DOCUMENT

UPLOAD_FOLDER = 'assets'
ALLOWED_EXTENSIONS = {'txt', 'docx', 'pdf'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/documents/upload', methods=['POST'])
@jwt_required()
def upload_document():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({'error': 'Unauthorized'}), 401

    if 'file' not in request.files:
        return jsonify({'error': 'No file selected'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Extract text from the uploaded document (based on the file type)
        original_content = extract_text(filepath)

        # Process the document with spaCy to improve it
        improved_content, suggestions = improve_document(original_content)

        # Create a new Document object and save it in the database
        new_document = Document(
            user_id=user.id,
            upload_date=datetime.now(timezone.utc),
            original_content=original_content,
            improved_content=improved_content
        )

        db.session.add(new_document)
        db.session.commit()

        # Add each suggestion to the suggestions table
        for suggestion_text in suggestions:
            new_suggestion = Suggestion(
                document_id=new_document.id,
                suggestion_text=suggestion_text,
                is_accepted=False  # Default to not accepted
            )
            db.session.add(new_suggestion)

        db.session.commit()

        return jsonify({
            'message': 'Document uploaded and processed successfully',
            'original_content': original_content,
            'improved_content': improved_content,
            'suggestions': suggestions
        }), 201

    return jsonify({'error': 'Invalid file format'}), 400


# FETCH DOCUMENT

@app.route('/documents/latest', methods=['GET'])
@jwt_required()  # Ensure the user is authenticated
def get_latest_document():
    user_id = get_jwt_identity()  # Get the current user's ID from the JWT token
    
    # Fetch the most recent document for the user
    latest_document = Document.query.filter_by(user_id=user_id).order_by(Document.upload_date.desc()).first()
    
    if not latest_document:
        return jsonify({'error': 'No documents found for this user'}), 404

    # Serialize the document data
    document_data = {
        'original_content': latest_document.original_content,
        'improved_content': latest_document.improved_content,
        # 'upload_date': latest_document.upload_date.isoformat()  
    }

    return jsonify({'latest_document': document_data}), 200


# FETCH SUGGESTION

@app.route('/documents/<int:document_id>/suggestions', methods=['GET'])
@jwt_required()
def get_document_suggestions(document_id):
    # Check if the document exists
    document = Document.query.get(document_id)

    if not document:
        return jsonify({'error': 'Document not found'}), 404

    # Fetch all suggestions for the given document
    suggestions = Suggestion.query.filter_by(document_id=document_id).all()

    if not suggestions:
        return jsonify({'message': 'No suggestions found for this document'}), 404

    # Manually serialize suggestions using to_dict method
    suggestions_data = [suggestion.to_dict() for suggestion in suggestions]

    return jsonify({
        'document_id': document_id,
        'suggestions': suggestions_data
    }), 200


# ACCEPT SUGGESTION

@app.route('/suggestions/accept/<int:suggestion_id>', methods=['POST'])
@jwt_required()
def accept_suggestion(suggestion_id):
    # Get the suggestion
    suggestion = Suggestion.query.get(suggestion_id)

    if not suggestion:
        return jsonify({'error': 'Suggestion not found'}), 404

    # Find the related document
    document = Document.query.get(suggestion.document_id)
    if not document:
        return jsonify({'error': 'Document not found'}), 404

    # Modify the improved_content by applying the suggestion
    # This can vary based on how suggestions modify the text. Here, we'll append the suggestion text to the document content as an example.
    document.improved_content += f"\n{suggestion.suggestion_text}"

    # Mark the suggestion as accepted
    suggestion.is_accepted = True

    # Commit the changes to the database
    db.session.commit()

    return jsonify({
        'message': 'Suggestion accepted and applied to the document',
        'improved_content': document.improved_content
    }), 200


# DENY SUGGESTION

@app.route('/suggestions/deny/<int:suggestion_id>', methods=['DELETE'])
@jwt_required()
def deny_suggestion(suggestion_id):
    # Get the suggestion
    suggestion = Suggestion.query.get(suggestion_id)

    if not suggestion:
        return jsonify({'error': 'Suggestion not found'}), 404

    # Delete the suggestion
    db.session.delete(suggestion)
    db.session.commit()

    return jsonify({'message': 'Suggestion denied and deleted'}), 200



# Run the app
if __name__ == '__main__':
    app.run(port=5555)
