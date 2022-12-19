import { NavLink, useHistory} from 'react-router-dom';
import React from 'react'
import { useDispatch} from 'react-redux'

import './receivedMessages.css'

function MyReceivedMessageCard({receivedMessage}){

    const history = useHistory()
    const dispatch = useDispatch()
    


    return (
        <div className='sentMessageCardMainDiv'>
            <div className='sentMessageCardRecipient'> sent by {receivedMessage?.sender}</div>
            <div className='sentMessageCardBody'>{receivedMessage.body}</div>
            

        </div>
    )
}

export default MyReceivedMessageCard