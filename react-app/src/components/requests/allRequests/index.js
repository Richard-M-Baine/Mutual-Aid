import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import RequestCard from './RequestCard/index.js'



import { fetchAllRequestsThunk } from '../../../store/requests'


function AllRequests(){
    const dispatch = useDispatch()
    const requests = useSelector(state => state.requests)


    
    const requestList = Object.values(requests)
        

    
     
    

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchAllRequestsThunk())
        .then(() => setLoaded(true))
    },[dispatch])
    
    console.log(requestList)
    return loaded && (
    <div className='main'>
       
             <div className='groupPart'>
                <div className='groupTextDiv'>
                    <h1> All Requests</h1>
                </div>

                <div className='groupsAllPart'>
            {requestList.map(request => (
                <RequestCard request={request} key={request.id}/>
            ))}
                </div>
                
           
        </div>
    </div>
    )
    
}

export default AllRequests;