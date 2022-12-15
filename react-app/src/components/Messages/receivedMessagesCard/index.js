import { NavLink, useHistory} from 'react-router-dom';
import React from 'react'
import { useDispatch} from 'react-redux'



function MyReceivedMessageCard({receivedMessage}){

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div>
            <div> sent to {receivedMessage?.senderId}</div>
            <div>{receivedMessage.body}</div>

        </div>
    )
}

export default MyReceivedMessageCard