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



# get one request

@request_routes.route("/<int:id>")

def get_one_request(id):

    thing = Requests.query.get(id)
    
    return make_response(thing.to_dict(), 200)



@request_routes.route("/<int:id>/edit", methods=['DELETE'])

def delete_request(id):
    one_requests = Requests.query.get(id)

    if(not one_requests):
            return '<h1>No such Request Exists</h1>'


    if one_requests.userID == current_user.id:
            db.session.delete(one_requests)
            db.session.commit()

            return {
            "message": "Successfully deleted",
            "statusCode": 200
            }
    
@request_routes.route('/current')

def my_requests():
    my_requests = Requests.query.filter_by(userID = current_user.id).all()

    response = {"requests": [request.to_dict() for request in my_requests]}
    return make_response(response, 200)



# post / new request

@request_routes.route("/create", methods=['post'])

def new_request():

    form = NewRequest()
    form['csrf_token'].data = request.cookies['csrf_token']

    first = request.form['start_time']

    second = first.split(',')
    
    year = second[0]
    month = second[1]
    day = second[2]
    hour = second[3]
    minute = second[4]
    

    first_end = request.form['start_time']

    second_end = first_end.split(',')
    
    yeare = second_end[0]
    monthe = second_end[1]
    daye = second_end[2]
    houre = second_end[3]
    minutee = second_end[4]
    
    

        

    
        
    new_request = Requests(
        userID = current_user.id,
        title = request.form['title'],
        start_time = datetime(int(year),int(month),int(day),int(hour),int(minute)),
        end_time = datetime(int(yeare),int(monthe),int(daye),int(houre),int(minutee)),
        details = request.form['details'],
        address = request.form['address'],
        city = request.form['city'],
        state = request.form['state'],
        )
    db.session.add(new_request)
    db.session.commit()

    return make_response(new_request.to_dict(), 201)


