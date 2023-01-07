from .db import db, environment, SCHEMA, add_prefix_for_prod

from datetime import datetime


class Groups(db.Model):
    __tablename__ = 'groups'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key = True)
    founder = db.Column(db.String(45), db.ForeignKey(add_prefix_for_prod('users.username')))
    name = db.Column(db.String(200), nullable = False)
    about = db.Column(db.String(2000), nullable = False)
    purpose = db.Column(db.String(70), nullable = False)
    locationID = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('locations.id')))
    private = db.Column(db.Boolean, nullable = False)
    created_at = db.Column(db.DateTime, default= datetime.utcnow)
    updated_at = db.Column(db.DateTime, default= datetime.utcnow)
    location = db.relationship("Locations", cascade="all,delete",backref='locations')

    def to_dict(self):
        return {
            'id': self.id,
            'founder': self.founder,
            'name': self.name,
            'about': self.about,
            'purpose': self.purpose,
            'locationID': self.locationID,
            'private': self.private,
            'created_at': self.created_at,
            'updated_at': self.updated_at

        }