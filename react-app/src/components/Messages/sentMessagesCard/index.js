import { NavLink, useHistory} from 'react-router-dom';
import React from 'react'
import { useDispatch} from 'react-redux'

import { deleteMessageThunk} from '../../../store/messages'


function MySentMessageCard({message}){

    const history = useHistory()
    const dispatch = useDispatch()

    const destroyMessage = e => {
        e.preventDefault()
        dispatch(deleteMessageThunk(message?.id))
        .then(() => history.push('/mylistings'))
    }


    return (
        <div>
            <div> sent to {message?.recipient}</div>
            <div>{message.body}</div>
            <button onClick={destroyMessage}>delete</button>

        </div>
    )
}

export default MySentMessageCard