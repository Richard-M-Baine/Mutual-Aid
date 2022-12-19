from .db import db, environment, SCHEMA, add_prefix_for_prod

from datetime import datetime


class Requests(db.Model):
    __tablename__ = 'requests'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(200), db.ForeignKey(add_prefix_for_prod('users.username')))
    title = db.Column(db.String(200), nullable = False)
    start_time = db.Column(db.DateTime, nullable = False)
    end_time = db.Column(db.DateTime, nullable = False)
    details = db.Column(db.String(2000), nullable = False)
    address = db.Column(db.String(500))
    city = db.Column(db.String(500), nullable=False)
    state = db.Column(db.String(2), nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'title': self.title,
            'start_time': self.start_time,
            'end_time': self.end_time,
            'details': self.details,
            'address': self.address,
            'city': self.city,
            'state': self.state

        }