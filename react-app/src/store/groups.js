
// what are these things called

const ALL_GROUPS = 'groups/all'
const ONE_GROUP = 'groups/one'
const CREATE_GROUP = 'groups/new'
const MY_GROUPS = 'groups/mine'
const DESTROY_GROUP = 'groups/destroy'
const EDIT_GROUP = 'group/edit'



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

const createGroupAction = payload => {

    return {
        type: CREATE_GROUP,
        payload: payload
    }
}

const myGroupsGetAction = payload => {

    return {
        type: MY_GROUPS,
        payload: payload
    }
}

const deleteGroupAction = (groupId) => {
    return {
        type: DESTROY_GROUP,
        groupId
    }
}

const EditGroupAction = group => {
    return {
        type: EDIT_GROUP,
        group
    }
}

// thunkville


// create group thunk also includes locations

export const createGroupThunk = (payload) => async dispatch => {

    const response = await fetch('/api/groups/create',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    const data = await response.json()

    if (response.ok) {
        await dispatch(createGroupAction(data))
        return data
    } else { // any bad requests and errors
        return data
    }

}

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

    const res = await fetch(`/api/groups/${id}`);
    if (res.ok) {


        const singleGroup = await res.json()

        dispatch(getOneGroupAction(singleGroup))
        return singleGroup
    }

}

// current users' groups

export const fetchMyGroupsThunk = () => async dispatch => {

    const response = await fetch('/api/groups/current')

    if (response.ok) {

        const groups = await response.json()

        dispatch(myGroupsGetAction(groups))

        return groups
    }

}

export const deleteGroupThunk = (id) => async dispatch => {
    const response = await fetch(`/api/groups/${id}/edit`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const group = `${id}`
        dispatch(deleteGroupAction(group));
    }
}

export const editGroupThunk = (payload, id) => async (dispatch) => {
    
   
    const response = await fetch(`/api/groups/${id}/edit`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
        
    })

    const data = await response.json();
    


    dispatch(EditGroupAction(data));
    return data;
}






// reducerville
const initialState = {}

const groupReducer = (state = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case CREATE_GROUP: {
            newState = { ...state }
            newState[action.payload.group.id] = action.payload.group
            return newState
        }

        case ALL_GROUPS: {
            action.payload.groups.forEach(group => {
                newState[group.id] = group
            })
            return newState
        }

        case ONE_GROUP: {

            newState = { ...state };
            newState[action.payload.id] = action.payload;

            return newState

        }

        case MY_GROUPS: {

            action.payload.groups.forEach(group => {
                newState[group.id] = group
            })
            return newState
        }

        case EDIT_GROUP: {

            const newerState = Object.assign({}, state);
            newerState.group = action.payload;
            return newerState;
        }

        case DESTROY_GROUP: {
            newState = { ...state }
            delete newState[action.groupId]
            return newState
        }


        default: {
            return state;
        }
    }
}


export default groupReducer;