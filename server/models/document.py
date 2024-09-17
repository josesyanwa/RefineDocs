from . import db
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

class Document(db.Model, SerializerMixin):
    __tablename__ = 'documents'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    upload_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    status = db.Column(db.String(20), default='pending', nullable=False)
    original_content = db.Column(db.Text, nullable=False)
    improved_content = db.Column(db.Text)
    suggestions = db.Column(db.Text)  # Optional: JSON format to store suggestions

    # One-to-Many: A document can have multiple suggestions
    suggestions_relation = db.relationship('Suggestion', backref='document', lazy=True)

    # One-to-Many: A document can have multiple history versions
    history = db.relationship('DocumentHistory', backref='document', lazy=True)

    def __repr__(self):
        return f"<Document {self.id} by User {self.user_id}>"
