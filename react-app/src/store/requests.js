const ALL_REQUESTS = 'requests/all'
const ONE_REQUEST = 'requests/one'

const getAllRequestsAction = payload => {

    return {
        type: ALL_REQUESTS,
        payload
    }
}

const getOneRequestAction = payload => {

    return {
        type: ONE_REQUEST,
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

export const getOneRequestThunk = id => async dispatch => {
    
    const res = await fetch(`/api/requests/${id}`);
    if (res.ok) {
        
        
        const singleRequest = await res.json()
        
        dispatch(getOneRequestAction(singleRequest))
        return singleRequest
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

        case ONE_REQUEST: {

            newState = {...state };
            newState[action.payload.id] = action.payload;

            return newState
            
        }

        default: {
            return state;
        }
    }}

export default requestReducer