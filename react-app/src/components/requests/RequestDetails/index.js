// group details react template

import React from 'react'
import { useEffect, useState } from 'react';
import * as sessionActions from '../../../store/session';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getOneRequestThunk } from '../../../store/requests.js'
import './requestDetails.css'


export default function RequestDetails() {

    const dispatch = useDispatch();
    const { id } = useParams();



    const requestId = parseInt(id)


    const thisUser = useSelector(state => state?.session?.user);

    const [loaded, setLoaded] = useState(false)

    const history = useHistory();




    useEffect(() => {
        dispatch(getOneRequestThunk(id))
            .then(() => setLoaded(true))
    }, [dispatch])

    const request = useSelector(state => state?.requests)

    let date = request[requestId]?.start_time.slice(5, 7)
    let day = request[requestId]?.start_time.slice(0, 3)
    let month = request[requestId]?.start_time.slice(8, 11)
    let hour = request[requestId]?.start_time.slice(17, 19)
    let minute = request[requestId]?.start_time.slice(20, 22)

    let zeit
    if (hour > 12) {
        zeit = `${hour - 12}:${minute} PM`
    }
    else {
        zeit = `${hour}:${minute} AM`
    }

    let suffix
    if (date === '01') {
        suffix = 'st'
    }
    else if (date === '02') {
        suffix = 'nd'
    }
    else if (date === '03') {
        suffix = 'rd'
    }
    else {
        suffix = 'th'
    }

    let enddate = request[requestId]?.end_time?.slice(5, 7)
    let endday = request[requestId]?.end_time?.slice(0, 3)
    let endMonth = request[requestId]?.end_time.slice(8, 11)

    let endHour = request[requestId]?.end_time.slice(17, 19)
    let endMinute = request[requestId]?.end_time.slice(20, 22)
    let endZeit
    if (endHour > 12) {
        endZeit = `${endHour - 12}:${endMinute} PM`
    }
    else {
        endZeit = `${endHour}:${endMinute} AM`
    }

    return loaded && (

        <div className='requestDetailsOuterDiv'>
            <div className='requestdetailsfiller'>
                <h3 className='rdfiller'>Address - {request[requestId]?.address} - {request[requestId]?.city}, {request[requestId]?.state}</h3>
                <h3 className='rdfiller'>Time of request - {day} {month} {date}{suffix} at {zeit}</h3>
                <h3 className='rdfiller'>Ends at - {endday} {endMonth} {enddate} at {endZeit}</h3>
            </div>
            <div className='mainrequestdetailswrapper'>
                <h1 className='h1forrequestdetails'>{request[requestId]?.title}</h1>
                <p id='rdparagraph' className='groupdetailaboutsectionwrapneeded'>{request[requestId]?.details}</p>
            </div>

        </div>




    )


}