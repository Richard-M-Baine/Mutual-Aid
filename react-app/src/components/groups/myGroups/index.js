import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import MyCharityCard from './GroupCard/index.js'



import { fetchMyGroupsThunk } from '../../../store/groups.js'


function MyCharities(){
    const dispatch = useDispatch()
    const groups = useSelector(state => state.groups)
   
        const groupsList = Object.values(groups)
        
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchMyGroupsThunk())
        .then(() => setLoaded(true))
    },[dispatch])
    

    return loaded && (
    <div className='main'>
       
             <div className='groupPart'>
                <div className='groupTextDiv'>
                    <h1>My Groups</h1>
                </div>

                <div className='groupsAllPart'>
            {groupsList.map(group => (
                <MyCharityCard group={group} key={group.id}/>
            ))}
                </div>
                
           
        </div>
    </div>
    )
    
}

export default MyCharities;