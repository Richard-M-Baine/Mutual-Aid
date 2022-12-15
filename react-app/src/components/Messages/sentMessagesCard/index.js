import { NavLink, useHistory} from 'react-router-dom';
import React from 'react'
import { useDispatch} from 'react-redux'



function MySentMessageCard({message}){

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div>
            <div> sent to {message?.recipientId}</div>
            <div>{message.body}</div>

        </div>
    )
}

export default MySentMessageCard