from . import db
from sqlalchemy_serializer import SerializerMixin

class Suggestion(db.Model, SerializerMixin):
    __tablename__ = 'suggestions'

    id = db.Column(db.Integer, primary_key=True)
    document_id = db.Column(db.Integer, db.ForeignKey('documents.id'), nullable=False)
    suggestion_text = db.Column(db.Text, nullable=False)
    is_accepted = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f"<Suggestion {self.id} for Document {self.document_id}>"
