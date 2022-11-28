// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


import { getOneGroupThunk } from '../../../store/groups';
import { getOneLocationThunk} from '../../../store/locations'

import './groupDetails.css'


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
            <h1>All about {charity[charityId].name}</h1>
            
            <h3>primary listed purpose {charity[charityId].purpose}</h3>
            <div>
            <h3>details</h3>
            <h3>{charity[charityId].about}</h3>
            </div>
            <h4>{charity[charityId].private}</h4>

            <h4>{location[charityId].address}</h4>
            <h5>{location[charityId].city} {location[charityId].state}</h5>
            <h5>Primary phone number</h5>


        </div>




    )


}