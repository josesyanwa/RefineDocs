from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin



db = SQLAlchemy()

from .user import User
from .document import Document
from .suggestion import Suggestion
from .document_history import DocumentHistory


app = Flask(__name__)

