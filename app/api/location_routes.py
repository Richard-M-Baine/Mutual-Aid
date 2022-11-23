from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user


from datetime import datetime

from app.models import User, Locations, db


location_routes = Blueprint('location', __name__)


@location_routes.route('/all')


def get_all_locations():

    locations = Locations.query.all()
    response = {"locations": [location.to_dict() for location in locations]}
    return make_response(response, 200)