import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


// thunks
import { getOneGroupThunk } from '../../../store/groups';
import {getOneLocationThunk} from '../../../store/locations'


function EditCharityForm(){

    const {id} = useParams()
    
    const group = useSelector((state) => state?.groups);
    
    const figureOne = group[id]?.about
    console.log(figureOne)
    

    const history = useHistory();
    const dispatch = useDispatch();

    const [about, setAbout] = useState(group[id]?.about)
    const [loaded, setIsLoaded] = useState(false)
    const [second, setSecond] = useState(false)
    
    console.log('i am about ',about)

    useEffect(() => {
        dispatch(getOneGroupThunk(id)).then(() => setIsLoaded(true))       
    }, [dispatch])

    useEffect(() => {
        dispatch(getOneLocationThunk(id)).then(() => setSecond(true))       
    }, [dispatch])

    return loaded && second && (
        <div>
            <form>
        <div>
            <label>name</label>
            <input
            type='text' 
            value={about}
            
            onChange={e => setAbout(e.target.value)}
            required
            />
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