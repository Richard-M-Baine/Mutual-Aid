from .db import db, environment, SCHEMA, add_prefix_for_prod

from datetime import datetime


class Locations(db.Model):
    __tablename__ = 'locations'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key = True)
    address = db.Column(db.String(200), nullable = False)
    city = db.Column(db.String(200), nullable = False)
    state = db.Column(db.String(2), nullable = False)
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)
    
    


    def to_dict(self):
        return {
            'id': self.id,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'lat': self.lat,
            'lng': self.lng
        }