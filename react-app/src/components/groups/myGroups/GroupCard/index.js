import { NavLink, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {deleteGroupThunk} from '../../../../store/groups.js'


function MyCharityCard({group}) {

    

    const history = useHistory()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    
    const editGroup = e => {
        e.preventDefault()
        history.push(`/groups/edit/${group.id}`)
    }

    const destroyGroup = e => {
        e.preventDefault()
        dispatch(deleteGroupThunk(group.id)).then(() => history.push('/mygroups'))
    }


    
  

    return (
        <div>
        <NavLink className='navGroupAll' to={`/groups/${group.id}`}> 
        <h1>{group.name}</h1>
        <p>{group.purpose}</p>
        </ NavLink>
        <button onClick={editGroup}>edit button</button>
        <button onClick={destroyGroup}>delete button</button>
        </div>

    )
}


export default MyCharityCard