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


# post a group works

@group_routes.route("/create", methods=['post'])

def new_group():
    
    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    # figure out locationID and private

    if form.validate_on_submit():

        group = Groups(

            founder = current_user.id,
            name = form.data['name'],
            about = form.data['about'],
            purpose = form.data['purpose'],
            locationID = 1,
            private = form.data['private']
        )
        db.session.add(group)
        db.session.commit()
    return make_response(group.to_dict(), 201)

# edit a group Trevor Put Route

@group_routes.route("/<int:id>/edit", methods=['PUT'])

def update_group(id):

    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    one_group = Groups.query.get(id)

    if(not one_group):
            return "<h1>No Group</h1>"

    if one_group.founder == current_user.id:
            name = form.data['name']
            about = form.data['about']
            purpose = form.data['purpose']
            private = form.data['private']


    if form.validate_on_submit():
             
            one_group.name = name
            one_group.about = about
            one_group.purpose = purpose
            one_group.private = private
        
            db.session.commit()

            return make_response(one_group.to_dict(), 201)
    

# make a group go bye bye


@group_routes.route("/<int:id>/edit", methods=['DELETE'])

def delete_group(id):
    one_group = Groups.query.get(id)

    if(not one_group):
            return '<h1>No such Task Exists</h1>'


    if one_group.founder == current_user.id:
            db.session.delete(one_group)
            db.session.commit()

            return {
            "message": "Successfully deleted",
            "statusCode": 200
            }
            


