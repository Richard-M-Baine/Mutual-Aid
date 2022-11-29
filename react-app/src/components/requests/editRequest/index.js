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

    const USstates = [
        'AL', 'AK', 'AS', 'AZ', 'AR',
        'CA', 'CO', 'CT', 'DE', 'DC',
        'FM', 'FL', 'GA', 'GU', 'HI',
        'ID', 'IL', 'IN', 'IA', 'KS',
        'KY', 'LA', 'ME', 'MH', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO',
        'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'MP',
        'OH', 'OK', 'OR', 'PW', 'PA',
        'PR', 'RI', 'SC', 'SD', 'TN',
        'TX', 'UT', 'VT', 'VI', 'VA',
        'WA', 'WV', 'WI', 'WY'
    ];

    const submit = async e => {
        e.preventDefault()
    
        const payload = {
            title: title,
            start_time: start_time,
            end_time: end_time,
            details: details,
            address: address,
            city: city,
            state:statee,
            
        }
        

        await dispatch(editRequestThunk(payload, id))

       history.push('/mylistings')

    }



    return loaded && (
        <div>
            <div>
                <h1>Feel free to alter your request as you see fit</h1>
            </div>

            <form onSubmit={submit}>
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

                    <h3>Confirm start time</h3>
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

                    <h3>Confirm end time</h3>
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
                <button className='editgroupsubmitbutton' type="submit" disabled={address?.length < 1 || address?.length > 30 || city?.length < 3 || city?.length > 30 || !USstates?.includes(statee?.toUpperCase()) || title?.length <1 ||title?.length > 70 || details?.length< 1} >Update Your Request</button>

            </form>
        </div>
    )
}

export default EditRequestForm