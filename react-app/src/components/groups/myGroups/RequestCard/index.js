import { NavLink, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

//import {deleteGroupThunk} from '../../../../store/groups.js'


function MyRequestsCard({request}) {

    

    const history = useHistory()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    
   


    
  

    return (
        <div>
        <NavLink className='navGroupAll' to={`/requests/${request.id}`}> 
        <h1>{request.title}</h1>
        <p>{request.city}</p>
        <p>{request.start_time}</p>
        </ NavLink>
        <button >Edit Group</button>
        <button>Remove Group</button>
        <button>Update Address</button>
        </div>

    )
}


export default MyRequestsCard