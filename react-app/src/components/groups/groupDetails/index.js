// group details react template

import React from 'react'
import { useEffect, useState } from 'react';

import CreateGroupMessageModal from '../../Messages/groupMessageModal'

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


import { getOneGroupThunk } from '../../../store/groups';
import { getOneLocationThunk } from '../../../store/locations'

import './groupDetails.css'


export default function CharityDetails() {

    const dispatch = useDispatch();
    const { id } = useParams();



    const charityId = parseInt(id)




    const [isLoaded, setIsLoaded] = useState(false)
    const [first, setFirst] = useState(0)






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


    // matt H group details function

    return isLoaded && first && (

        <div className='groupdetailsouterdiv'>
            <h1 className='groupdetailsheader'>All about {charity[charityId]?.name}</h1>

            <h3>Purpose - - {charity[charityId].purpose}</h3>
            <div className='groupdetailaboutsectionwrapneeded'>
                <h2>Details</h2>
                <p className='groupdetailaboutsectionwrapneeded'>{charity[charityId].about}</p>
            </div>
            <h4>{charity[charityId].private}</h4>

            <h2>Located At {location[charityId].address}</h2>
            <h3>{location[charityId].city} {location[charityId].state}</h3>
            <div><CreateGroupMessageModal /></div>


        </div>




    )


}