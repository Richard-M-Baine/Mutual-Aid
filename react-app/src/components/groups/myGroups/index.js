import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MyCharityCard from './GroupCard/index.js'



import { fetchMyGroupsThunk } from '../../../store/groups.js'
import { fetchMyRequestsThunk }from '../../../store/requests.js'


function MyCharities() {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.groups)
    const requests = useSelector(state => state.requests)

    const groupsList = Object.values(groups)
    const requestList = Object.values(requests)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchMyGroupsThunk())
            .then(dispatch(fetchMyRequestsThunk()))
            .then(() => setLoaded(true))
    }, [dispatch])


    return loaded && (
        <div className='main'>

            <div className='groupPart'>
                <div className='groupTextDiv'>
                    <h1>My Groups</h1>
                </div>

                <div className='groupsAllPart'>
                    {groupsList.map(group => (
                        <MyCharityCard group={group} key={group.id} />
                    ))}
                </div>
            </div>

        <div className='taskpart'>
            <div className='requestheader'>
                <h1>My Requests</h1>
            </div>

        </div>
        </div>
    )

}

export default MyCharities;