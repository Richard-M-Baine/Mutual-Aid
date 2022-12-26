import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {fetchAPIKeyThunk} from '../../../store/maps'
import './mapStuff.css'




// Ryan Login Modal

function MapStuff() {

  const [loaded , setLoaded] = useState(false)
  
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchAPIKeyThunk())
      .then(() => setLoaded(true))
  }, [dispatch])

  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: useSelector(state => state?.maps?.key),
  });


 const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
  return isLoaded && loaded && (
    
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainerMain">
    <Marker position={center} />
  </GoogleMap>
)
}

export default MapStuff;