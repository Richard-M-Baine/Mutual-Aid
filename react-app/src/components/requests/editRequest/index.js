import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';


// thunks
import { getOneRequestThunk } from '../../../store/requests.js'
import { editRequestThunk } from '../../../store/requests.js';

import './editRequest.css'


function EditRequestForm() {
    const history = useHistory()
    const { id } = useParams()

    const request = useSelector((state) => state?.requests)
    const sessionUser = useSelector((state) => state?.session?.user)
    const dispatch = useDispatch();

    const [address, setAddress] = useState(request[id]?.address)
    const [city, setCity] = useState(request[id]?.city)
    const [details, setDetails] = useState(request[id]?.details)
    const [end_time, setEndTime] = useState(request[id]?.end_time)
    const [start_time, setStartTime] = useState(request[id]?.start_time)
    const [statee, setStatee] = useState(request[id]?.state)
    const [title, setTitle] = useState(request[id]?.title)
    const [loaded, setIsLoaded] = useState(false)

    useEffect(() => {

        dispatch(getOneRequestThunk(id)).then(() => setIsLoaded(true))
    }, [dispatch])

    if (!sessionUser) {

        history.push('/login')
    }


    return loaded && (
        <div>
            <div>
                <h1>Feel free to alter your request as you see fit</h1>
            </div>

            <form>
                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>address</label>
                    <input
                        type='text'
                        value={address}
                        className='editgroupinput'
                        onChange={e => setAddress(e.target.value)}
                        required
                        id='editgroupnameinput'
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>City</label>
                    <input
                        type='text'
                        value={city}
                        className='editgroupinput'
                        onChange={e => setCity(e.target.value)}
                        required
                        id='editgroupnameinput'
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>State</label>
                    <input
                        type='text'
                        value={statee}
                        className='editgroupinput'
                        onChange={e => setStatee(e.target.value)}
                        required
                        id='editgroupnameinput'
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>Title</label>
                    <input
                        type='text'
                        value={title}
                        className='editgroupinput'
                        onChange={e => setTitle(e.target.value)}
                        required
                        id='editgroupnameinput'
                    />
                </div>

                <div className='editGroupEditDiv'>
                    <label className='editGroupLabel'>details</label>
                    <textarea
                        rows='20'
                        cols='100'
                        type='text'
                        maxLength='2000'
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                        required
                        id='editgroupabouttextarea'
                    />
                </div>

                <div className='createEventDiv'>

                    <h3>When will you need help?</h3>
                    <input
                        className='ceselectEvent'
                        required
                        name="event-start-date"
                        type="datetime-local"
                        max={"9999-12-31T00:00"}
                        value={start_time}
                        onChange={e => setStartTime(e.target.value)}
                    />

                </div>

                <div className='createEventDiv'>

                    <h3>When will you need help?</h3>
                    <input
                        className='ceselectEvent'
                        required
                        name="event-start-date"
                        type="datetime-local"
                        max={"9999-12-31T00:00"}
                        value={end_time}
                        onChange={e => setEndTime(e.target.value)}
                    />

                </div>
                <button className='editgroupsubmitbutton' type="submit" disabled={address < 1 || address > 30}>Update Your Request</button>

            </form>
        </div>
    )
}

export default EditRequestForm