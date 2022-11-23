import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {fetchAllLocationsThunk} from '../../../../store/locations.js'

function CharityCard({group}) {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const locations = useSelector (statee => statee.locations)

    const rightLocationId = group.locationID

    const charityLocation = locations[rightLocationId]
    

    useEffect(() => {
        dispatch(fetchAllLocationsThunk())
        .then(() => setLoaded(true))
    },[dispatch])

    return loaded && (
        <NavLink className='navGroupAll' to={`/groups/${group.id}/about`}> 
        
        <h1>{group.name}</h1>
        <h2>{group.about}</h2>
        <h3>{charityLocation.address}</h3>
        <h3>{charityLocation.city}</h3>
        <h4>{charityLocation.state}</h4>
        
        
        
        
        
        </NavLink>


    )
}


export default CharityCard