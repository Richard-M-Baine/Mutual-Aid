const GET_KEY = 'location/map'


const getMapKeyAction = payload => {
    return {
        type: GET_KEY,
        payload
    }
}


export const fetchAPIKeyThunk = () => async dispatch => {
   
    const res = await fetch('/api/map/key', {
        method: 'POST'
    })

    if (res.ok) {

        const data = await res.json()

        dispatch(getMapKeyAction(data.googleMapsAPIKey))

    }

}

const initialState = {key: null}

const mapReducer= (state = initialState, action) => {
    switch(action.type){
        case GET_KEY:
            return {key: action.payload}
        default:
            return state
    }
}

export default mapReducer;