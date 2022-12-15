// bloody definitions or whatever

const MY_MESSAGES = 'messages/all'


// action makers

const getMyMessagesAction = payload => {

    return {
        type: MY_MESSAGES,
        payload
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


const initialState = {}


