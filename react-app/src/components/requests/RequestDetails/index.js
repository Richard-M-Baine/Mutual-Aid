// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {getOneRequestThunk} from '../../../store/requests.js'



export default function RequestDetails() {

    const dispatch = useDispatch();
    const { id } = useParams();
    

    
    const requestId = parseInt(id)
    

    const thisUser = useSelector(state => state.session.user);

    const [first, setFirst] = useState(0)

    const history = useHistory();


   

    useEffect(() => {
        dispatch(getOneRequestThunk(id))
            .then(() => setFirst(1))
    }, [dispatch])

    const request = useSelector(state => state?.requests)
  
         

    const isOwner = thisUser?.id === request?.userID


    
    return first && (

        <div>
            <h1>{request[requestId].details}</h1>
            <h3>{request[requestId].address}</h3>
            <h3>{request[requestId].start_time}</h3>



        </div>




    )


}