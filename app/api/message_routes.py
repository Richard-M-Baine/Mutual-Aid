from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user
from sqlalchemy import and_


from datetime import datetime

from app.models import User, Locations, Messages, db

from app.forms.messages_form import NewMessage


message_routes = Blueprint('messages', __name__)


@message_routes.route('/sent')

def my_sent_messages():
    my_sent_messages = Messages.query.filter_by(sender = current_user.username).all()

    response = {"messages": [message.to_dict() for message in my_sent_messages]}
    return make_response(response, 200)

@message_routes.route('/received')
def my_received_messages():
   
    my_received_messages = Messages.query.filter_by(recipient = current_user.username, read = False)
    response = {"messages": [message.to_dict() for message in my_received_messages]}
    return make_response(response, 200)

@message_routes.route('/create', methods=['post'])
def create_message():
    
    form = NewMessage()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    

    mess = Messages(
            sender = current_user.username,
            body = form.data["body"],
            recipient = form.data["recipient"],
            read = False
        )
    db.session.add(mess)
    db.session.commit()

    return make_response(mess.to_dict(), 201)

@message_routes.route("/<int:id>/edit", methods=['DELETE'])

def destroy_message(id):
    one_message = Messages.query.get(id)

    if(not one_message):
            return '<h1>No such Request Exists</h1>'

    if one_message.sender == current_user.username:
        db.session.delete(one_message)
        db.session.commit()

        return {
            "message": "Successfully deleted",
            "statusCode": 200
            }


@message_routes.route("/<int:id>/edit", methods=['PUT'])


def update_message(id):
    one_message = Messages.query.get(id)

    print(one_message.id, ' i am one message')

    if one_message.recipient == current_user.username:

        one_message.read = True

        db.session.commit()

        return make_response(one_message.to_dict(),201)

    form = NewMessage()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    
    
    if(not one_message):
            return "<h1>No Group</h1>"

    

        

        
