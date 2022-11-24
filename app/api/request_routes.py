from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user


from datetime import datetime

from app.models import User, Requests, db
from app.forms.request_form import NewRequest


request_routes = Blueprint('requests', __name__ ) 


# get all requests

@request_routes.route('/all')

def get_all_requests():
    requests = Requests.query.all()
    response = {"requests": [request.to_dict() for request in requests]}
    return make_response(response, 200)