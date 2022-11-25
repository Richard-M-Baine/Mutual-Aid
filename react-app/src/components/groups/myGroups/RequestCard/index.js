import { NavLink, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {deleteRequestThunk} from '../../../../store/requests.js'


function MyRequestsCard({request}) {

    

    const history = useHistory()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    
   
    const destroyRequest = e => {
        e.preventDefault()
        dispatch(deleteRequestThunk(request.id)).then(() => history.push('/mylistings'))
    }

    
  

    return (
        <div>
        <NavLink className='navGroupAll' to={`/requests/${request.id}`}> 
        <h1>{request.title}</h1>
        <p>{request.city}</p>
        <p>{request.start_time}</p>
        </ NavLink>
        <button >Edit Request</button>
        <button onClick={destroyRequest}>Remove Request</button>
        </div>

    )
}


export default MyRequestsCard