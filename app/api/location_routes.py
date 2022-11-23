from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user


from datetime import datetime

from app.models import User, Locations, db

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



# make new location
@location_routes.route("/create", methods=['post'])

def new_location():
    
    form = NewLocation()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    

    if form.validate_on_submit():

        location = Locations(

            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            
        )
        db.session.add(location)
        db.session.commit()
        return location.to_dict()
    


# update a location

@location_routes.route("/<int:id>/edit", methods=['PUT'])

def update_location(id):

    form = NewLocation()
    form['csrf_token'].data = request.cookies['csrf_token']
    location = Locations.query.get(id)

    if(not location):
            return "<h1>No Group</h1>"

    
    address = form.data['address']
    city = form.data['city']
    state = form.data['state']
    


    if form.validate_on_submit():
             
        location.address = address
        location.city = city
        location.state = state
            
        
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
            