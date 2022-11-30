import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import './requestcard.css'

function RequestCard({request}) {
    
    let date = request?.start_time?.slice(5, 7)
    let day = request?.start_time?.slice(0, 3)
    let month = request?.start_time?.slice(8, 11)
    let hour = request?.start_time?.slice(17, 19)
    let minute = request?.start_time?.slice(20, 22)
    let zeit
    if (hour > 12) {
        zeit = `${hour - 12}:${minute} PM`
    }
    else {
        zeit = `${hour}:${minute} AM`
    }

    let endHour = request?.end_time?.slice(17, 19)
    let endMinute = request?.end_time?.slice(20, 22)
    let endZeit
    if (endHour > 12) {
        endZeit = `${endHour - 12}:${endMinute} PM`
    }
    else {
        endZeit = `${endHour}:${endMinute} AM`
    }

    let suffix
    if (date ==='01'){
        suffix = 'st'
    }
    else if (date ==='02'){
        suffix = 'nd'
    }
    else if (date ==='03'){
        suffix = 'rd'
    }
    else{
        suffix = 'th'
    }
    


    return (
        <NavLink className='navReqestCardAllRequests' to={`/requests/${request.id}`}>
        <h3>{request.address} - {request.city} {request.state}</h3>
        <h3>Date of request {day} {month} {date}{suffix} at {zeit}</h3>
        <h3>Request will end at {endZeit}</h3>     
        <h3 className='detailsRequestAllCard'>{request.details}</h3>
       
        
        </NavLink>


    )
}


export default RequestCard