import geopandas
from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required, current_user

from datetime import datetime
import googlemaps, os
from app.models import User, Locations, Groups, db

from app.forms.group_form import NewGroup



group_routes = Blueprint('groups', __name__ )


# get all groups
@group_routes.route('/all')

def get_all_groups():
    groups = Groups.query.all()
    response = {"groups": [group.to_dict() for group in groups]}
    return make_response(response, 200)


# get group by id

@group_routes.route("/<int:id>")

def single_group(id):
  single_group = Groups.query.get(id)
  
  
  return make_response(single_group.to_dict(), 200)


# post a group works

@group_routes.route("/create", methods=['post'])

def new_group():
    
    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    # figure out locationID and private

    if form.validate_on_submit():
        key = os.environ.get('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')
        gmaps = googlemaps.Client(key=key)
        geocode_result = gmaps.geocode([f'{form.data["address"]}, {form.data["city"]}, {form.data["state"]}' ])
        location = Locations(

            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            lat = geocode_result[0]["geometry"]["location"]["lat"],
            lng = geocode_result[0]["geometry"]["location"]["lng"],
            
        )
        db.session.add(location)

        group = Groups(

            founder = current_user.username,
            name = form.data['name'],
            about = form.data['about'],
            purpose = form.data['purpose'],
            locationID = location.id,
            private = form.data['private']
        )

        db.session.add(group)
        db.session.commit()
    return make_response({'location': location.to_dict(), 'group': group.to_dict()}, 201
)

# edit a group Trevor Put Route

@group_routes.route("/<int:id>/edit", methods=['PUT'])

def update_group(id):

    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    one_group = Groups.query.get(id)

    if(not one_group):
            return "<h1>No Group</h1>"

    if one_group.founder == current_user.username:
        
             
        one_group.name = form.data["name"]
        one_group.about = form.data["about"]
        one_group.purpose = form.data["purpose"]
        one_group.private = form.data["private"]
        
        db.session.commit()

        return make_response(one_group.to_dict(), 201)
    return "you are a failure"

# make a group go bye bye


@group_routes.route("/<int:id>/edit", methods=['DELETE'])

def delete_group(id):
    one_group = Groups.query.get(id)

    if(not one_group):
            return '<h1>No such Task Exists</h1>'


    if one_group.founder == current_user.username:
            db.session.delete(one_group)
            db.session.commit()

            return {
            "message": "Successfully deleted",
            "statusCode": 200
            }
            



@group_routes.route('/current')

def my_groups():
    my_groups = Groups.query.filter_by(founder = current_user.username).all()

    response = {"groups": [group.to_dict() for group in my_groups]}
    return make_response(response, 200)