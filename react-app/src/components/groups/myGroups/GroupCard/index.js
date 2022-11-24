import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'



function MyCharityCard({group}) {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    console.log(group)
   

    return (
        <NavLink className='navGroupAll' to={`/groups/${group.id}`}> 
        <h1>{group.name}</h1>
        <p>{group.purpose}</p>
        </ NavLink>

    )
}


export default MyCharityCard