import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


// thunks
import { getOneGroupThunk } from '../../../store/groups';
import {getOneLocationThunk} from '../../../store/locations'


function EditCharityForm(){

    const {id} = useParams()

    const history = useHistory();
    const dispatch = useDispatch();

    const [loaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getOneGroupThunk(id)).then(() => setIsLoaded(true))       
    }, [dispatch])

    useEffect(() => {
        dispatch(getOneLocationThunk(id)).then(() => setIsLoaded(true))       
    }, [dispatch])

    return loaded && (
        <div>
            <form>
        <div>
            <label>name</label>
            <input />
        </div>

        <div>
            <label>about</label>
            <input />
        </div>

        <div>
            <label>purpose</label>
            <input />
        </div>

        <div>
            <label>private</label>
            <select className='select' name='type'>
                <option >true or false private test</option>
                    <option value={false}>False</option>
                    <option value={true}>True</option>
            </select>
        </div>
        </form>
        </div>
    )
}

export default EditCharityForm