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
    const [part, setPart] = useState('Part One')
    const [newSTime, setNewSTime] = useState('')
    const [newETime, setNewETime] = useState('')

    let date = start_time?.slice(5, 7)
    let day = start_time?.slice(0, 3)
    let month = start_time?.slice(8, 11)
    let year = start_time?.slice(12, 16)
    let hour = start_time?.slice(17, 19)
    let minute = start_time?.slice(20, 22)
    let zeit
    if (hour > 12) {
        zeit = `${hour - 12}:${minute} PM`
    }
    else {
        zeit = `${hour}:${minute} AM`
    }
    

    let endDate = start_time?.slice(5, 7)
    let endDay = start_time?.slice(0, 3)
    let endMonth = start_time?.slice(8, 11)
    let endYear = start_time?.slice(12, 16)
    let endHour = start_time?.slice(17, 19)
    let endMinute = start_time?.slice(20, 22)
    let endZeit
    if (hour > 12) {
        endZeit = `${hour - 12}:${minute} PM`
    }
    else {
        endZeit = `${hour}:${minute} AM`
    }

    


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

    console.log(newSTime)
    console.log(start_time)
    function monthConverter (month){
        if (month === 'Jan') return '01'
        if (month === 'Feb') return '02'
        if (month === 'Mar') return '03'
        if (month === 'Apr') return '04'
        if (month === 'May') return '05'
        if (month === 'Jun') return '06'
        if (month === 'Jul') return '07'
        if (month === 'Aug') return '08'
        if (month === 'Sep') return '09'
        if (month === 'Oct') return '10'
        if (month === 'Nov') return '11'
        if (month === 'Dec') return '12'
    }
    

    const submit = async e => {
        e.preventDefault()
            let blah
            let endBlah
            if (!newSTime){
                let mo = monthConverter(month)
                blah = `${year}-${mo}-${date}T${hour}:${minute}`
            } 
            if (newSTime){
                blah = newSTime
            }
        
        
        const payload = {
            title: title,
            start_time: blah,
            end_time: newETime,
            details: details,
            address: address,
            city: city,
            state: statee,

        }


        await dispatch(editRequestThunk(payload, id))

        history.push('/mylistings')

    }



    return loaded && (
        <div>
            <div>
                <h1>Feel free to alter your request as you see fit</h1>
                <h2>{part} of Two</h2>
            </div>

            <form onSubmit={submit}>

                {
                    part === 'Part One' && (
                        <>
                            <div className='editGroupEditDiv'>
                                <label className='editGroupLabel'>address</label>
                                <input
                                    type='text'
                                    value={address}
                                    maxLength='30'
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
                                    maxLength='30'
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
                                    maxLength='2'
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
                            
                            <button className='editgroupsubmitbutton' disabled={address?.length < 1 || address?.length > 30 || city?.length < 3 || city?.length > 30 || !USstates?.includes(statee?.toUpperCase()) || title?.length < 1 || title?.length > 70 || details?.length < 1} onClick={e => setPart('Part Two')}>Confirm Times</button>
                        </>
                    )
                }

                {
                    part === 'Part Two' && (
                        <>
                            <div className='createEventDiv'>

                                <h3>Alter your current start time of  {day} {date} {month} {year} at {zeit}</h3>
                                <input
                                    className='ceselectEvent'


                                    type="datetime-local"
                                    max={"9999-12-31T00:00"}
                                    defaultValue={newSTime}
                                    onChange={e => setNewSTime(e.target.value)}
                                />

                            </div>

                            <div className='createEventDiv'>

                            <h3>Alter your current stop time of  {endDay} {endDate} {endMonth} {endYear} at {endZeit}</h3>
                                <input
                                    className='ceselectEvent'


                                    type="datetime-local"
                                    max={"9999-12-31T00:00"}
                                    value={newETime}
                                    onChange={e => setNewETime(e.target.value)}
                                />

                            </div>

                        

                            <button className='editgroupsubmitbutton' onClick={e => setPart('Part One')}>Go to part one</button>
                            <button className='editgroupsubmitbutton' type="submit" disabled={address?.length < 1 || address?.length > 30 || city?.length < 3 || city?.length > 30 || !USstates?.includes(statee?.toUpperCase()) || title?.length < 1 || title?.length > 70 || details?.length < 1} >Update Your Request</button>
                        </>)}
            </form>
        </div>


    )
}

export default EditRequestForm