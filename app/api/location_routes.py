from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user
import os


from datetime import datetime

from app.models import User, Locations, Groups, db

from app.forms.location_form import NewLocation


location_routes = Blueprint('location', __name__)


@location_routes.route('/all')

# all locations probably wont need
def get_all_locations():

    locations = Locations.query.all()
    response = {"locations": [location.to_dict() for location in locations]}
    return make_response(response, 200)


# one location
@location_routes.route("/<int:id>")

def single_group(id):
  single_location = Locations.query.get(id)
  
  
  return make_response(single_location.to_dict(), 200)


# update a location

@location_routes.route("/<int:id>/edit", methods=['PUT'])

def update_location(id):

    form = NewLocation()
    form['csrf_token'].data = request.cookies['csrf_token']
    location = Locations.query.get(id)
    one_group = Groups.query.get(id)

    

    if(not location):
            return "<h1>No Location Exists</h1>"

    
    
    if one_group.founder == current_user.id:
        location.address = form.data['address']
    
        location.city = form.data['city']
        location.state = form.data['state']
        db.session.commit()

        return make_response(location.to_dict(), 201)


@location_routes.route("/<int:id>/edit", methods=['DELETE'])

def delete_location(id):
    one_location = Locations.query.get(id)

    if(not one_location):
            return '<h1>No such Task Exists</h1>'


    
    db.session.delete(one_location)
    db.session.commit()

    return {
        "message": "Successfully deleted",
        "statusCode": 200
        }
            
# google map api call area fitting area

@location_routes.route('/key', methods=['POST'])
@login_required
def load_map_key():
    key = os.environ.get('MAPS_API_KEY')
    return {'googleMapsAPIKey': key}
