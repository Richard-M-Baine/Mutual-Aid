const ALL_GROUPS ='groups/all'



const getAllGroupsAction = payload => {

    return {
        type: ALL_GROUPS,
        payload
    }
}

// thunkville

export const fetchAllGroupsThunk = () => async dispatch => {

    const response = await fetch('/api/groups/all')

    if (response.ok) {

        const groups = await response.json()

        dispatch(getAllGroupsAction(groups))

        return groups
    }

}



// reducerville
const initialState = {}

const groupReducer = ( state = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case ALL_GROUPS: {
            action.payload.groups.forEach(group => {
                newState[group.id] = group
            })
            return newState
        }

        default: {
            return state;
        }
    }}


    export default groupReducer;