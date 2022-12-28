import React, { useState, useEffect, useMemo, useRef, useCallback  } from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerClusterer, InfoWindow  } from "@react-google-maps/api";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete'



import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {fetchAPIKeyThunk} from '../../../store/maps'
import './mapStuff.css'




// Ryan Login Modal

function MapStuff() {
  const history = useHistory()
  const keyy = useSelector(state => state?.maps?.key)
  const [loaded , setLoaded] = useState(false)
  const [stateKey, setStateKey] = useState('')
  
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchAPIKeyThunk())
      .then(() => setLoaded(true))
      if (loaded){
        setStateKey(keyy)
      }

  }, [dispatch])

  
 
  
  let { isLoaded } = useLoadScript({
    googleMapsApiKey: keyy,
    libraries: ['places'],
  });

 


 const center = useMemo(() => ({ lat: 40, lng: -74.5 }), []);
   
  return isLoaded &&(
    
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainerMain">
    <Marker position={center} />
  </GoogleMap>
)
}

export default MapStuff;