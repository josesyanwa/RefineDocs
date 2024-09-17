from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from datetime import timedelta
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

# Simple route to check if the server is running
@app.route('/')
def index():
    return jsonify({"message": "RefineDocs API is running!"})

# Example route: User Registration
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Hash the password
    password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user
    new_user = User(username=username, email=email, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully!"}), 201

# Example route: Upload Document
@app.route('/documents/upload', methods=['POST'])
def upload_document():
    data = request.get_json()
    user_id = data.get('user_id')
    original_content = data.get('original_content')

    # Create and save the document
    new_document = Document(user_id=user_id, original_content=original_content)
    db.session.add(new_document)
    db.session.commit()

    return jsonify({"message": "Document uploaded successfully!", "document_id": new_document.id}), 201

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
