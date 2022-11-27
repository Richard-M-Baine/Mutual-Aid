import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

// thunk imports
import {createRequestThunk} from '../../../store/requests.js'

import './createRequest.css'

function CreateRequestForm(){

    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)

    const [loaded, setLoaded] = useState(false)
    const [title, setTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [details, setDetails] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [part, setPart] = useState('Part One')

    if (!sessionUser) {
        history.push('/')
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


    return (
        <form className='createRequestForm'>
            <h2 className='createRequestPartDiv'>
                {part} of Three
            </h2>

            {
                part === 'Part One' && (
                    <div className='createGroupPartOne'>

                        <div className='createGroupPartOneFlavorText'>
                            <h1 id='cfponeheader'>Enter The Organization's Address</h1>
                            <p className='cfponeParagraph'>If this group meets and / or serves various locations it is usually best to enter an individual listing for each one. This way the information can be tailored to the location.  This also helps with searching in a geographical area.  If this group has no fixed address please enter some place where someone can physically contact someone.  We also suggest that you explain that you have no fixed address in the about section (Part 3) along with a phone number / email you can be contacted with etc.</p>
                            <p className='cfponeParagraph'>Furthermore, the address does not have to be an address feel free to enter the nearest street corner in the address section or describe the area. "Lakewood Town Square" or "Clifton Ave and 3rd Street" are good examples.  To help with searching please enter <a href='https://www.faa.gov/air_traffic/publications/atpubs/cnt_html/appendix_a.html'>the appropriate state abbreviation.</a></p>
                        </div>
                        <div className='createGroupPartOneDiv'>
                            <label className='createGrouppartonelabel'>Address</label>
                            <input
                                className='createGroupPartOneInput'
                                id='cgpoinputone'
                                type='text'
                                maxLength='70'
                                placeholder='please enter between 2 and 70 characters'
                                onChange={text => setAddress(text.target.value)}
                                value={address}
                            />
                        </div>

                        <div className='createGroupPartOneDiv'>
                            <label className='createGrouppartonelabel'>City</label>
                            <input
                                className='createGroupPartOneInput'
                                id='cgpoinputtwo'
                                type='text'
                                maxLength='70'
                                onChange={text => setCity(text.target.value)}
                                placeholder='please enter between 2 and 70 characters'
                                value={city}
                            />
                        </div>

                        <div className='createGroupPartOneDiv'>
                            <label className='createGrouppartonelabel'>State</label>
                            <input
                                className='createGroupPartOneInput'
                                type='text'
                                id='cgpoinputthree'
                                maxLength='2'
                                onChange={text => setState(text.target.value)}
                                value={state}
                                placeholder='enter the proper state abbreviation'
                            />
                        </div>

                        <div className='createGroupPartOneButtons'>
                            <button className='return' style={{ visibility: 'hidden' }}></button>
                            <button className="creategrouppartonesubmit" disabled={city.length < 3 || (!USstates.includes(state.toUpperCase()))} onClick={e => setPart('Part Two')}>Next</button>
                        </div>
                    </div>
                )
            }



        </form>
    )
}

export default CreateRequestForm