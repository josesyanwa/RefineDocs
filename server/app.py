from flask import Flask, jsonify, request, redirect, url_for, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_restful import Api, Resource
from datetime import timedelta
from sqlalchemy import func

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

# Run the app
if __name__ == '__main__':
    app.run(port=5555)
