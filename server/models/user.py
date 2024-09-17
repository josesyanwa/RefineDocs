from . import db
from sqlalchemy_serializer import SerializerMixin

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    # One-to-Many: A user can have multiple documents
    documents = db.relationship('Document', backref='user', lazy=True)

    def __repr__(self):
        return f"<User {self.username}>"
