from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user
import os


from datetime import datetime

from app.models import User, Locations, Groups, db




map_routes = Blueprint('maps', __name__)


@map_routes.route('/key', methods=['POST'])

def load_map_key():
    
    key = os.environ.get('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')
    
    return {'googleMapsAPIKey': key}
