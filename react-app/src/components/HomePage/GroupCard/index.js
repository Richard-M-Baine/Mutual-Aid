import { NavLink, useHistory} from 'react-router-dom';
import React from 'react'
import { useDispatch} from 'react-redux'

import { deleteGroupThunk } from '../../../store/groups.js'

import './groupCard.css'


function MyCharityCard({ group }) {



    const history = useHistory()
    const dispatch = useDispatch()


    const editGroup = e => {
        e.preventDefault()
        history.push(`/groups/edit/${group?.id}`)
    }
    const updateAddress = e => {
        e.preventDefault()
        history.push(`/groups/editAddress/${group?.id}`)
    }

    const destroyGroup = e => {
        e.preventDefault()
        dispatch(deleteGroupThunk(group?.id)).then(() => history.push('/mylistings'))
    }





    return (
        <div>
            <NavLink className='navGroupAllgroupcard' to={`/groups/${group?.id}`}>
                <div className='groupcardhometext'>
                    <h2 className='homegroupcardname'>{group?.name}</h2>
                    <p className='homegroupcardpurpose'>{group?.purpose}</p>
                </div>
            </ NavLink>
            <div className='buttondivgroupcard'>
                <button className='groupcardbutton' onClick={editGroup}>Edit details</button>
                <button className='groupcardbutton' onClick={destroyGroup}>Remove listing</button>
                <button className='groupcardbutton' onClick={updateAddress}>Update Address</button>
            </div>
        </div>

    )
}


export default MyCharityCard