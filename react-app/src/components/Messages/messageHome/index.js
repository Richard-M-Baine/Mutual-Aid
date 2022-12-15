import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MySentMessageCard from '../sentMessagesCard/index.js'
import MyReceivedMessageCard from '../receivedMessagesCard/index.js'

import { fetchMyMessagesThunk } from '../../../store/messages.js'
import { fetchReceivedMessagesThunk } from '../../../store/recmessages.js'

function MyMessages() {

    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)
    const receivedMessages = useSelector(state => state.recmessages)

    const messageList = Object.values(messages)
    const receivedMessageList = Object.values(receivedMessages)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        dispatch(fetchMyMessagesThunk())
        .then(dispatch(fetchReceivedMessagesThunk()))
            .then(() => setLoaded(true))
    }, [dispatch])


    return loaded && (
        <div>
            <h1>Your Messages</h1>

            <div className='hpgroupsAllPart'>
                <h2>My sent messages</h2>
                {messageList.map(message => (
                    <MySentMessageCard message={message} key={message?.id} />
                ))}
            </div>

            <div className='hpgroupsAllPart'>
                <h2>My received messages</h2>
                {receivedMessageList.map(receivedMessage => (
                    <MyReceivedMessageCard receivedMessage={receivedMessage} key={receivedMessage?.id} />
                ))}
            </div>

        </div>
    )
}

export default MyMessages