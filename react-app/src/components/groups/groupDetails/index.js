// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


import { getOneGroupThunk } from '../../../store/groups';


export default function CharityDetails() {

    const dispatch = useDispatch();
    const { id } = useParams();
    

    
    const charityId = parseInt(id)
    

    const thisUser = useSelector(state => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false)

    const history = useHistory();


   

    useEffect(() => {
        dispatch(getOneGroupThunk(id))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    const charity = useSelector(state => state.groups)
    

    return isLoaded && (

        <div>
            <h1>{charity[charityId].name}</h1>
            <h3>{charity[charityId].purpose}</h3>
            <h3>{charity[charityId].about}</h3>


        </div>




    )


}