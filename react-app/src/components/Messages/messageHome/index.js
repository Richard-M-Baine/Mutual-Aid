import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import { fetchMyMessagesThunk } from '../../../store/messages.js'


function MyMessages(){

    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)

    const messageList = Object.values(messages)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchMyMessagesThunk())
            .then(() => setLoaded(true))
    }, [dispatch])


    return loaded && (
        <h1>Your Messages</h1>
    )
}

export default MyMessages