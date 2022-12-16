// bloody definitions or whatever

const MY_MESSAGES = 'messages/all'
const MAKE_MESSAGE = 'messages/create'



// action makers

const getMyMessagesAction = payload => {

    return {
        type: MY_MESSAGES,
        payload
    }
}

const createMessageAction = payload => {

    return {
        type: MAKE_MESSAGE,
        payload: payload
    }
}


// thunkville



// all messsages the author wrote
export const fetchMyMessagesThunk = () => async dispatch => {

    const response = await fetch('/api/messages/sent')

    if (response.ok) {
        const messages = await response.json()

        dispatch(getMyMessagesAction(messages))

        return messages
    }
}

export const createMessageThunk = (payload) => async dispatch => {
    console.log('i am here ',payload)
    const response = await fetch('/api/messages/create',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    const data = await response.json()

    if (response.ok) {
        await dispatch(createMessageAction(data))
        return data
    } else { // any bad requests and errors
        return data
    }

}






const initialState = {}

const messageReducer = (state = initialState, action) => {

    let newState = {}

    switch (action.type) {

        case MY_MESSAGES: {

            action.payload.messages.forEach(message => {
                newState[message.id] = message
            })
            return newState
        }

        case MAKE_MESSAGE: {
            newState = { ...state }
            newState[action.payload.id] = action.payload.messages
            return newState
        }


        default: {
            return state;
        }
    }
}

export default messageReducer
