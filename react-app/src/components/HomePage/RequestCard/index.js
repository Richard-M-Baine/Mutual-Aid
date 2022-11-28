import { NavLink, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {deleteRequestThunk} from '../../../store/requests.js'
import './requestCard.css'

function MyRequestsCard({request}) {

    

    const history = useHistory()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    
   
    const destroyRequest = e => {
        e.preventDefault()
        dispatch(deleteRequestThunk(request?.id)).then(() => history.push('/mylistings'))
    }

    const editRequest = e => {
        
        e.preventDefault()
        history.push(`/requests/edit/${request?.id}`)
        }


    


    
  

    return (
        <div>
        <NavLink className='navRequestAllgroupcard' to={`/requests/${request?.id}`}> 
        <div className='groupcardtext' id='requestcardtextdiv'>
        <h1 id='requestcardtitle'>{request?.title}</h1>
        <p>{request?.address} {request?.city}</p>
        <p>{request?.start_time}</p>
        </div>
        </ NavLink>
        <div className='buttondivgroupcard'>
        <button className='groupcardbutton' onClick={editRequest}>Edit Request</button>
        <button className='groupcardbutton' onClick={destroyRequest}>Remove Request</button>
        </div >
        </div >

    )
}


export default MyRequestsCard