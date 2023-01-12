from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user

import googlemaps, os

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


    if one_requests.username == current_user.username:
            db.session.delete(one_requests)
            db.session.commit()

            return {
            "message": "Successfully deleted",
            "statusCode": 200
            }
    
@request_routes.route('/current')

def my_requests():
    my_requests = Requests.query.filter_by(username = current_user.username).all()

    response = {"requests": [request.to_dict() for request in my_requests]}
    return make_response(response, 200)



# post / new request

@request_routes.route("/create", methods=['post'])

def new_request():



    form = NewRequest()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    first = request.json['start_time']
    
    
    second = first.split('-')
    
    year = second[0]
    month = second[1]
    
    third = second[2].split('T')
    day = third[0] 
    
    last = third[1].split(':')
    hour = last[0]
    minute = last[1]

    
    first_end = request.json['end_time']

    second_end = first_end.split('-')
    
    yeare = second_end[0]
    monthe = second_end[1]

    third_end = second_end[2].split('T')
    daye = third_end[0]
    
    last_end = third_end[1].split(':')

    houre = last_end[0]
    minutee = last_end[1]
    
    

        
    key = os.environ.get('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')
    gmaps = googlemaps.Client(key=key)
    geocode_result = gmaps.geocode([f'{request.json["address"]}, {request.json["city"]}, {request.json["state"]}' ])
    
    
        
    new_request = Requests(
        username = current_user.username,
        title = request.json['title'],
        start_time = datetime(int(year),int(month),int(day),int(hour),int(minute)),
        end_time = datetime(int(yeare),int(monthe),int(daye),int(houre),int(minutee)),
        details = request.json['details'],
        address = request.json['address'],
        city = request.json['city'],
        state = request.json['state'],
        lat = geocode_result[0]["geometry"]["location"]["lat"],
        lng = geocode_result[0]["geometry"]["location"]["lng"],

        )
    db.session.add(new_request)
    db.session.commit()

    return make_response(new_request.to_dict(), 201)


# edit request

@request_routes.route('/edit/<int:id>', methods=['PUT'])

def update_request(id):

    form = NewRequest()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    one_request = Requests.query.get(id)


    if (not one_request):
        return '<h1>No Request</h1>'

    print('i am request json --------',request.json)
    first = request.json['start_time']
    
    
    
    second = first.split('-')
    
    year = second[0]
    month = second[1]
    
    third = second[2].split('T')
    day = third[0] 
    
    last = third[1].split(':')
    hour = last[0]
    minute = last[1]

    
    first_end = request.json['end_time']

    second_end = first_end.split('-')
    
    yeare = second_end[0]
    monthe = second_end[1]

    third_end = second_end[2].split('T')
    daye = third_end[0]
    
    last_end = third_end[1].split(':')

    houre = last_end[0]
    minutee = last_end[1]
    
    

    
    if one_request.username == current_user.username:
        key = os.environ.get('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')
        gmaps = googlemaps.Client(key=key)
        one_request.title = form.data['title']
        one_request.start_time = datetime(int(year),int(month),int(day),int(hour),int(minute))
        one_request.end_time = datetime(int(yeare),int(monthe),int(daye),int(houre),int(minutee))
        one_request.details = form.data['details']
        one_request.address = form.data['address']
        one_request.city = form.data['city']
        one_request.state = form.data['state']
        geocode_result = gmaps.geocode([f'{form.data["address"]}, {form.data["city"]}, {form.data["state"]}' ])
        one_request.lat = geocode_result[0]["geometry"]["location"]["lat"]
        one_request.lng = geocode_result[0]["geometry"]["location"]["lng"]

        db.session.commit()
        return make_response(one_request.to_dict(), 201)
    return "you are a failure"
