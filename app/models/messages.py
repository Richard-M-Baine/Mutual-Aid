from .db import db, environment, SCHEMA, add_prefix_for_prod

from datetime import datetime


class Messages(db.Model):
    __tablename__ = 'messages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key = True)
    senderId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    body = db.Column(db.String(2000), nullable = False)
    recipientId = db.Column(db.Integer, nullable = False)


    def to_dict(self):
        return {
            'id': self.id,
            'senderId': self.senderId,
            'body': self.body,
            'recipientId': self.recipientId

        }