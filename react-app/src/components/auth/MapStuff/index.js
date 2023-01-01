import React, { useState, useEffect, useMemo, useRef, useCallback  } from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerClusterer, InfoWindow} from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper"

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

 // the markers are what you want


 const center = useMemo(() => ({ lat: 40.049568, lng: -74.11982949999999}), []);
 const secondCenter = useMemo(() => ({ lat: 40.1, lng: -74.5 }), []);
 const options = useMemo(() => ({ disableDefaultUI: false, clickableIcons: true}), []);
   
  return isLoaded &&(
    
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainerMain" options={options}>
    <Marker position={center} />
    <Marker position={secondCenter} />
  </GoogleMap>
)
}

export default MapStuff;