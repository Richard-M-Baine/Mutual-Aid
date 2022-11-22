from .db import db, environment, SCHEMA, add_prefix_for_prod

from datetime import datetime


class Requests(db.Model):
    __tablename__ = 'requests'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key = True)
    userID = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    startDate = db.Column(db.DateTime, nullable = False)
    endDate = db.Column(db.DateTime, nullable = False)
    details = db.Column(db.String(2000), nullable = False)


    def to_dict(self):
        return {
            'id': self.id,
            'userID': self.userID,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'details': self.details

        }