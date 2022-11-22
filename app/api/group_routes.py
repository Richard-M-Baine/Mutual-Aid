from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user

from datetime import datetime

from app.models import User, Groups, db

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


# post a group

@group_routes.route("/create", methods=['post'])

def new_group():
    
    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        group = Groups(

            founder = current_user.id,
            name = form.data['name'],
            about = form.data['about'],
            purpose = form.data['purpose'],
            locationID = 1,
            private = False,
        )
        db.session.add(group)
        db.session.commit()
    return make_response(group.to_dict(), 201)


        