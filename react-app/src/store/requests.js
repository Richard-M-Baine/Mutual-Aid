const ALL_REQUESTS = 'requests/all'
const ONE_REQUEST = 'requests/one'
const MY_REQUESTS = 'requests/mine'
const DESTROY_REQUEST = 'requests/destroy'
const CREATE_REQUEST = 'requests/new'
const EDIT_REQUEST = 'request/edit'


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

const myRequestsGetAction = payload => {

    return {
        type: MY_REQUESTS,
        payload:payload
    }
}

const deleteRequestAction = (requestId) => {
    return {
       type: DESTROY_REQUEST,
       requestId
   }
}

const createRequestAction = payload => {

    return {
        type: CREATE_REQUEST,
        payload: payload
    }
}

const editRequestAction = payload => {
    return {
        type: EDIT_REQUEST,
        payload
    }
}

export const createRequestThunk = (payload) => async dispatch => {
    
    const response = await fetch('/api/requests/create',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    const data = await response.json()

    if (response.ok) {
        await dispatch(createRequestAction(data))
        return data
    } else { // any bad requests and errors
        return data
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

export const fetchMyRequestsThunk = () => async dispatch => {

    const response = await fetch('/api/requests/current')

    if (response.ok) {

        const requests = await response.json()

        dispatch(myRequestsGetAction(requests))

        return requests
    }

}

export const deleteRequestThunk = (id) => async dispatch => {
    const response = await fetch(`/api/requests/${id}/edit`, {
        method: 'DELETE'
    });

    if(response.ok){
        const request = `${id}`
        dispatch(deleteRequestAction(request));
    }
}


export const editRequestThunk = (payload, id) => async (dispatch) => {

     
    const response = await fetch(`/api/requests/edit/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        
    })
    const data = await response.json();

    dispatch(editRequestAction(data))
    return data
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

        case MY_REQUESTS: {
           
            action.payload.requests.forEach(request => {
                newState[request.id] = request
            })
            return newState
        }

        case DESTROY_REQUEST: {
            newState = { ...state}
            delete newState[action.requestId]
            return newState
    }

    case CREATE_REQUEST: {
        newState = { ...state }
        newState[action.payload.id] = action.payload.request
        return newState
    }

    case EDIT_REQUEST: {

        const newerState = Object.assign({}, state);
        newerState.request = action.payload;
        return newerState;
    }

        default: {
            return state;
        }
    }}

export default requestReducer