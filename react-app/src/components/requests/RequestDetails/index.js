// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';





export default function CharityDetails() {

    const dispatch = useDispatch();
    const { id } = useParams();
    

    
    const charityId = parseInt(id)
    

    const thisUser = useSelector(state => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false)
    const [first, setFirst] = useState(0)

    const history = useHistory();


   

    useEffect(() => {
        dispatch(getOneGroupThunk(id))
            .then(() => setFirst(1))
    }, [dispatch])

    const charity = useSelector(state => state?.groups)
  
     
    
    
    
    
    
    useEffect(() => {
        dispatch(getOneLocationThunk(id))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const location = useSelector(state => state?.locations)


    


    const isOwner = thisUser?.id === charity?.founder


    
    return isLoaded && first && (

        <div>
            <h1>{charity[charityId].name}</h1>
            <h3>{charity[charityId].purpose}</h3>
            <h3>{charity[charityId].about}</h3>

            <h4>{location[charityId].address}</h4>
            <h5>{location[charityId].city}</h5>


        </div>




    )


}