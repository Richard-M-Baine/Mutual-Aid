from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user


from datetime import datetime

from app.models import User, Locations, Messages, db

from app.forms.messages_form import NewMessage


message_routes = Blueprint('messages', __name__)


@message_routes('/sent')

def my_sent_messages():
    my_sent_messages = Messages.query.filter(senderId = current_user.id).all()

    response = {"messages": [message.to_dict() for message in my_sent_messages]}
    return make_response(response, 200)

@message_routes('/received')
def my_received_messages():
    my_received_messages = Messages.query.filter(recipientId = current_user.id).all()
    response = {"messages": [message.to_dict() for message in my_received_messages]}
    return make_response(response, 200)

@message_routes('/create')
def create_message():

    form = NewMessage()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        mess = Messages(
            senderId = current_user.id,
            body = form.data['body'],
            recipientId = 2
        )
        db.session.add(mess)
        db.session.commit()
        

        
