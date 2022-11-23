
const ALL_LOCATIONS ='locations/all'
const ONE_LOCATION = 'locations/one'
const CREATE_LOCATION = 'location/new'



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

const createLocationAction = payload => {

    return {
        type: CREATE_LOCATION,
        payload
    }
}

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
    console.log('i am payload ',payload)
    const response = await fetch('/api/location/create',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    const data = await response.json()
    console.log('i am data ',data)

    if (response.ok) {
        await dispatch(createLocationAction(data))
        return data
    } else { // any bad requests and errors
        return data
    }

}



// reducerville
const initialState = {}

const locationReducer = ( state = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case CREATE_LOCATION: { 
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }

        case ALL_LOCATIONS: {
            action.payload.locations.forEach(location => {
                newState[location.id] = location
            })
            return newState
        }

        case ONE_LOCATION: {

            newState = {...state };
            newState[action.payload.id] = action.payload;

            return newState
            
        }

        default: {
            return state;
        }
    }}


    export default locationReducer;