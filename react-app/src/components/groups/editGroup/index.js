import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


// thunks
import { getOneGroupThunk } from '../../../store/groups';
import {getOneLocationThunk} from '../../../store/locations'


function EditCharityForm(){

    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    

    // useState
    const [isLoaded, setIsLoaded] = useState(false)
    const [first, setFirst] = useState(0)


    useEffect(() => {
        dispatch(getOneGroupThunk(id))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    useEffect(() => {
        dispatch(getOneLocationThunk(id))
            .then(() => setFirst(true))
    }, [dispatch])
  

    
    
    

    return isLoaded && first && (
        <div>blah</div>
    )
}

export default EditCharityForm