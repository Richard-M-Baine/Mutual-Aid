from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user


from datetime import datetime

from app.models import User, Locations, Messages, db

from app.forms.messages_form import NewMessage


message_routes = Blueprint('messages', __name__)


@message_routes.route('/sent')

def my_sent_messages():
    my_sent_messages = Messages.query.filter_by(senderId = current_user.id).all()

    response = {"messages": [message.to_dict() for message in my_sent_messages]}
    return make_response(response, 200)

@message_routes.route('/received')
def my_received_messages():
   
    my_received_messages = Messages.query.filter_by(recipientId = current_user.id).all()
    response = {"messages": [message.to_dict() for message in my_received_messages]}
    return make_response(response, 200)

@message_routes.route('/create', methods=['post'])
def create_message():
    
    form = NewMessage()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('i am form data!!!!!! ',form.data)
    

    mess = Messages(
            senderId = current_user.id,
            body = form.data["body"],
            recipientId = form.data["recipientId"]
        )
    db.session.add(mess)
    db.session.commit()

    return make_response(mess.to_dict(), 201)

@message_routes.route("/<int:id>/edit", methods=['DELETE'])

def destroy_message(id):
    one_message = Messages.query.get(id)

    if(not one_message):
            return '<h1>No such Request Exists</h1>'

    if one_message.senderId == current_user.id:
        db.session.delete(one_message)
        db.session.commit()

        return {
            "message": "Successfully deleted",
            "statusCode": 200
            }
        

        
