import { NavLink, useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import './receivedMessages.css'

// thunks
import {markReadThunk} from '../../../store/messages'

function MyReceivedMessageCard({receivedMessage}){

    const history = useHistory()
    const dispatch = useDispatch()
    
    const markMessageRead = e => {
        e.preventDefault()
        dispatch(markReadThunk(receivedMessage?.id))
        .then(() => history.push('/mylistings'))
    }


    return (
        <div className='sentMessageCardMainDiv'>
            <div className='sentMessageCardRecipient'> sent by {receivedMessage?.sender}</div>
            <div className='sentMessageCardBody'>{receivedMessage?.body}</div>
            <button className='sentMessageCardDelete' onClick={markMessageRead}>mark read</button>

        </div>
    )
}

export default MyReceivedMessageCard