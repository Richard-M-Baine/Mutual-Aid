import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CharityCard from './GroupCard/index.js'



import { fetchAllGroupsThunk } from '../../../store/groups.js'
import { fetchAllLocationsThunk } from '../../../store/locations.js'

function AllCharities() {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.groups)
    const locations = useSelector(state => state.locations)


    const groupsList = Object.values(groups)






    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchAllGroupsThunk())
            .then(() => setLoaded(true))
    }, [dispatch])


    return loaded && (
        <div className='main'>

            <div className='groupPart'>
                <div className='groupTextDiv'>
                    <h1>Groups</h1>
                </div>

                <div className='groupsAllPart'>
                    {groupsList.map(group => (
                        <CharityCard group={group} key={group.id} />
                    ))}
                </div>


            </div>
        </div>
    )

}

export default AllCharities;