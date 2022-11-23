from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user


from datetime import datetime

from app.models import User, Locations, db


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