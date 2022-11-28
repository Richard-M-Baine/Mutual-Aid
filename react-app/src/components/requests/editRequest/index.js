import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';


// thunks
import {getOneRequestThunk} from '../../../store/requests.js'
import { editRequestThunk } from '../../../store/requests.js';

import './editRequest.css'


function EditRequestForm() {
    const history = useHistory()
    const { id } = useParams()

    const request = useSelector((state) => state?.requests)

    const dispatch = useDispatch();

    const [address, setAddress] = useState(request[id]?.address)
    const [city, setCity] = useState(request[id]?.city)
    const [details, setDetails] = useState(request[id]?.details)
    const [end_time, setEndTime] = useState(request[id]?.end_time)
    const [start_time, setStartTime] = useState(request[id]?.start_time)
    const [statee, setStatee] = useState(request[id]?.state)
    const [title, setTitle] = useState(request[id]?.title)
    const [loaded, setIsLoaded] = useState(false)

    useEffect(() => {
        
        dispatch(getOneRequestThunk(id)).then(() => setIsLoaded(true))
    }, [dispatch])


    return loaded && (
        <h1>blah</h1>
    )
}

export default EditRequestForm