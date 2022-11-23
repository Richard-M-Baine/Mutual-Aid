


const ALL_GROUPS ='groups/all'
const ONE_GROUP = 'groups/one'



const getAllGroupsAction = payload => {

    return {
        type: ALL_GROUPS,
        payload
    }
}

const getOneGroupAction = payload => {

    return {
        type: ONE_GROUP,
        payload
    }
}

// thunkville


// all groups
export const fetchAllGroupsThunk = () => async dispatch => {

    const response = await fetch('/api/groups/all')

    if (response.ok) {

        const groups = await response.json()

        dispatch(getAllGroupsAction(groups))

        return groups
    }

}

// one group

export const getOneGroupThunk = id => async dispatch => {
    console.log(id)
    const res = await fetch(`/api/groups/${id}`);
    if (res.ok) {
        console.log(res)
        
        
        const singleGroup = await res.json()
        
        dispatch(getOneGroupAction(singleGroup))
        return singleGroup
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

        case ONE_GROUP: {

            newState = {...state };
            newState[action.groups.id] = action.group;
        }

        default: {
            return state;
        }
    }}


    export default groupReducer;