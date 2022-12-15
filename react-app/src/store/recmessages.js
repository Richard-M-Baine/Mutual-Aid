// bloody definitions or whatever

const RECEIVED_MESSAGES = 'message/got'

// action makers

const getReceivedMessagesAction = payload => {

    return {
        type: RECEIVED_MESSAGES,
        payload
    }
}


// thunkville

export const fetchReceivedMessagesThunk = () => async dispatch => {

    const response = await fetch('/api/messages/received')

    if (response.ok) {
        const messages = await response.json()

        dispatch(getReceivedMessagesAction(messages))

        return messages
    }
}


const initialState = {}

const messageReducer = (state = initialState, action) => {

    let newState = {}

    switch (action.type) {


        case RECEIVED_MESSAGES: {

            action.payload.messages.forEach(message => {
                newState[message.id] = message
            })
            return newState
        }

        default: {
            return state;
        }
    }
}

export default messageReducer