import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'



function RequestCard({request}) {
    
    


    return (
        <NavLink className='navGroupAll' to={`/requests/${request.id}`}> 
        <h3>{request.details}</h3>
        <h5>{request.start_time}</h5>
        <h5>{request.end_time}</h5>
        
        </NavLink>


    )
}


export default RequestCard