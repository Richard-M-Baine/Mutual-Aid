// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


import { getOneGroupThunk } from '../../../store/groups';


export default function CharityDetails() {

    const dispatch = useDispatch();
    const { groupId } = useParams();
    const reduxstate = useSelector((state) => state.groups);
    const singleCharity = reduxstate[groupId]


    const thisUser = useSelector(state => state.session.user);

    const [isLoaded, setIsLoaded] = useState(false)

    const history = useHistory();


    const isOwner = thisUser?.id === singleCharity?.founder

    useEffect(() => {
        dispatch(getOneGroupThunk(groupId))
            .then(() => setIsLoaded(true))
    }, [dispatch, groupId])


    return isLoaded && (

        <div>
            <h1> {singleCharity.name}    </h1>
            <h3>{singleCharity.purpose}</h3>
            <p>{singleCharity.about}</p>


        </div>




    )


}