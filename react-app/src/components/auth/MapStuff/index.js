import React, { useState, useEffect, useMemo } from 'react';

import { GoogleMap, useLoadSript, Marker } from 'react-google-maps';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {fetchAPIKeyThunk} from '../../../store/locations'
import './mapStuff.css'




// Ryan Login Modal

function MapStuff() {

  
  return (
    <div>You are terrible</div>
  );
}

export default MapStuff;