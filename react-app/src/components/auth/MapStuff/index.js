import React, { useState, useEffect, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {fetchAPIKeyThunk} from '../../../store/maps'
import './mapStuff.css'




// Ryan Login Modal

function MapStuff() {
  const keyy = useSelector(state => state?.maps?.key)
  const [loaded , setLoaded] = useState(false)
  const [stateKey, setStateKey] = useState(keyy)
  
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchAPIKeyThunk())
      .then(() => setLoaded(true))

  }, [dispatch])

  
 
  
  let { isLoaded } = useLoadScript({
    googleMapsApiKey: keyy,
  });


 const center = useMemo(() => ({ lat: 40, lng: -74.5 }), []);
  
  return isLoaded && loaded && (
    
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainerMain">
    <Marker position={center} />
  </GoogleMap>
)
}

export default MapStuff;