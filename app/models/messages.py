from .db import db, environment, SCHEMA, add_prefix_for_prod

from datetime import datetime


class Messages(db.Model):
    __tablename__ = 'messages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key = True)
    sender = db.Column(db.String(2000), db.ForeignKey(add_prefix_for_prod('users.username')))
    body = db.Column(db.String(2000), nullable = False)
    recipient = db.Column(db.String(2000), nullable = False)
    read = db.Column(db.Boolean, default=False)


    def to_dict(self):
        return {
            'id': self.id,
            'sender': self.sender,
            'body': self.body,
            'recipient': self.recipient,
            'read': self.read

        }