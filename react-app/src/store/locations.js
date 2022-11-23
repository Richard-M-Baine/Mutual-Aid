
const ALL_LOCATIONS ='locations/all'
const ONE_LOCATION = 'locations/one'



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

export const getOneLocationsThunk = id => async dispatch => {
    
    const res = await fetch(`/api/locations/${id}`);
    if (res.ok) {
        
        
        const singleLocation = await res.json()
        
        dispatch(getOneLocationAction(singleLocation))
        return singleLocation
    }

}



// reducerville
const initialState = {}

const locationReducer = ( state = initialState, action) => {

    let newState = {};

    switch (action.type) {

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