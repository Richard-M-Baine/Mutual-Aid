import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';


// thunks
import { getOneGroupThunk } from '../../../store/groups';
import { editGroupThunk } from '../../../store/groups';

import './editGroupForm.css'


function EditCharityForm() {
    const history = useHistory()
    const { id } = useParams()

    const group = useSelector((state) => state?.groups);



    const dispatch = useDispatch();
    const [loaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        dispatch(getOneGroupThunk(id)).then(() => setIsLoaded(true))
    }, [dispatch, id])

    const [name, setName] = useState(group[id]?.name)
    const [about, setAbout] = useState(group[id]?.about)
    const [purpose, setPurpose] = useState(group[id]?.purpose)
    const [privatee, setPrivatee] = useState(group[id]?.private)
    

    const submit = async (e) => {
        e.preventDefault();
    
        const payload = {
           name,
           about,
           purpose, 
           private: privatee
           
        };

         dispatch(editGroupThunk(payload, id))
       
        history.push(`/mylistings`)
}


  

    

  

    return loaded && (
        <div className='editGroupMainDiv'>
            <div className='editGroupTextBox'>
                <h1>Welcome feel free to alter the listing as you see fit</h1>

            </div>
            <form className='editGroupForm' onSubmit={submit}>
                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>Name</label>
                    <input
                        type='text'
                        value={name}
                        className='editgroupinput'
                        onChange={e => setName(e.target.value)}
                        required
                        id='editgroupnameinput'
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>About</label>
                    <textarea
                        rows='20'
                        cols='100'
                        type='text'
                        maxLength='2000'
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        required
                        id='editgroupabouttextarea'
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>Purpose</label>
                    <input
                        type='text'
                        className='editgroupinput'
                        id='editgrouppurposeinput'
                        value={purpose}
                        onChange={e => setPurpose(e.target.value)}
                        required
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>Private</label>
                    <select className='editGroupselect' name='type' value={privatee} onChange={e => setPrivatee(e.target.value)} >
                        <option >Are Barriers Present</option>
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div>
                <button className='editgroupsubmitbutton' type="submit" disabled={about.length < 2 || about.length > 2000 || privatee === 'Are Barriers Present' || name.length < 2 || name.length > 30 || purpose.length < 2 || purpose.length > 70 }>Update The Listing</button>
            </form>
        </div>
    )
}

export default EditCharityForm