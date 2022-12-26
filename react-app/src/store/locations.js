
const ALL_LOCATIONS ='locations/all'
const ONE_LOCATION = 'locations/one'
const CREATE_GROUP = 'groups/new'
const DELETE_LOCATION = 'location/delete'
const EDIT_LOCATION = 'location/edit'




const getAllLocationsAction = payload => {

    return {
        type: ALL_LOCATIONS,
        payload
    }
}

const getOneLocationAction = payload => {

    return {
        type: ONE_LOCATION,
        payload
    }
}

const deleteLocationAction = (locationId) => {
    return {
        type: DELETE_LOCATION,
        locationId
    }
}

const editLocationAction = payload => {
    return {
        type: EDIT_LOCATION,
        payload
    }
}



// no need for CREATE action the group one pulls double duty

// thunkville


// all groups
export const fetchAllLocationsThunk = () => async dispatch => {

    const response = await fetch('/api/location/all')

    if (response.ok) {

        const locations = await response.json()

        dispatch(getAllLocationsAction(locations))

        return locations
    }

}

// one group

export const getOneLocationThunk = id => async dispatch => {
    
    const res = await fetch(`/api/location/${id}`);
    if (res.ok) {
        
        
        const singleLocation = await res.json()
        
        dispatch(getOneLocationAction(singleLocation))
        return singleLocation
    }

}

export const createLocationThunk = (payload) => async dispatch => {
    
    const response = await fetch('/api/location/create',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    const data = await response.json()
    

    if (response.ok) {
        
        return data
    } else { // any bad requests and errors
        return data
    }

}


export const deleteLocationThunk = (id) => async dispatch => {
    const response = await fetch(`/api/locations/${id}/edit`, {
        method: 'DELETE'
    });

    if(response.ok){
        const location = `${id}`
        dispatch(deleteLocationAction(location));
    }
}


export const editLocationThunk = (payload, id) => async (dispatch) => {
    
    const response = await fetch(`/api/location/${id}/edit`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload), 
    })

    const data = await response.json();
    
    dispatch(editLocationAction(data));
    return data;
}



// reducerville
const initialState = {}

const locationReducer = ( state = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case CREATE_GROUP: { 
            newState = { ...state }
            newState[action.payload.location.id] = action.payload.location
            return newState
        }

        case ALL_LOCATIONS: {
            action.payload.locations.forEach(location => {
                newState[location.id] = location
            })
            return newState
        }

    

        case DELETE_LOCATION: {
            newState = { ...state}
            delete newState[action.locationId]
            return newState
        }

        case EDIT_LOCATION: {

            const newerState = Object.assign({}, state);
            newerState.locations = action.payload;
            return newerState;
        }

       

        case ONE_LOCATION: {

            newState = {...state };
            newState[action.payload[0]] = action.payload[1];

            return newState
            
        }

        default: {
            return state;
        }
    }}


    export default locationReducer;