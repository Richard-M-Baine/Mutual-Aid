const ALL_REQUESTS = 'requests/all'

const getAllRequestsAction = payload => {

    return {
        type: ALL_REQUESTS,
        payload
    }
}


export const fetchAllRequestsThunk = () => async dispatch => {

    const response = await fetch('/api/requests/all')

    if (response.ok) {

        const requests = await response.json()

        dispatch(getAllRequestsAction(requests))

        return requests
    }

}


// reducerville

const initialState = {}

const requestReducer = ( state = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case ALL_REQUESTS: {
            action.payload.requests.forEach(request => {
                newState[request.id] = request
            })
            return newState
        }

        default: {
            return state;
        }
    }}

export default requestReducer