from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user

from datetime import datetime

from app.models import User, Groups, db

group_routes = Blueprint('groups', __name__ )



@group_routes.route('/all')

def get_all_groups():
    groups = Groups.query.all()
    response = {"groups": [group.to_dict() for group in groups]}
    return make_response(response, 200)