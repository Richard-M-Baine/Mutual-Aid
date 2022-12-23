import React, { useState, useEffect, useMemo } from 'react';



import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {fetchAPIKeyThunk} from '../../../store/maps'
import './mapStuff.css'
import Maps from './Map'



// Ryan Login Modal

function MapStuff() {

  const [loaded , setLoaded] = useState(false)
  const key = useSelector(state => state?.map?.key)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchAPIKeyThunk())
      .then(() => setLoaded(true))
  }, [dispatch])

 
  
  return loaded && (
    <Maps apiKey={key} />
)
}

export default MapStuff;