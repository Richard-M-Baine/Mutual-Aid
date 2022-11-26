import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

// thunk imports
import { createLocationThunk } from '../../../store/locations'
import { createGroupThunk } from '../../../store/groups'

import './createGroup.css'


function CreateGroupForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)

    // thunk loading part
    const [loaded, setLoaded] = useState(false)

    //location part
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    //group part
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [purpose, setPurpose] = useState('')
    const [privatee, setPrivatee] = useState('')

    // form part
    const [part, setPart] = useState('Part One')


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


        const newGroup = {
            founder: sessionUser.id,
            name: name,
            about: about,
            purpose: purpose,

            private: privatee,
            address: address,
            city: city,
            state: state
        }


        await dispatch(createGroupThunk(newGroup))


        history.push('/mylistings')

    }


    if (!sessionUser) {
        history.push('/')
    }

    return (

        <form className='createGroupForm'onSubmit={submit}>

            <h2 className='createGroupPartDiv'>
                {part} of Three
            </h2>
            {
                part === 'Part One' && (
                    <div className='createGroupPartOne'>

                        <div className='createGroupPartOneFlavorText'>
                            <h1 id='cfponeheader'>Enter Your Address</h1>
                            <p className='cfponeParagraph'>If this group meets and / or serves various locations it is usually best to enter an individual listing for each one. This way the information can be tailored to the location.  This also helps with searching in a geographical area.  If this group has no fixed address please enter some place where someone can physically contact someone.  We also suggest that you explain that you have no fixed address in the about section (Part 3) along with a phone number / email you can be contacted with etc.</p>
                            <p className='cfponeParagraph'>Furthermore, the address does not have to be an address feel free to enter the nearest street corner in the address section or describe the area. "Lakewood Town Square" or "Clifton Ave and 3rd Street" are good examples.  To help with searching please enter <a href='https://www.faa.gov/air_traffic/publications/atpubs/cnt_html/appendix_a.html'>the appropriate state abbreviation.</a></p>
                        </div>
                        <div>
                            <label className='createGrouppartonelabel'>address</label>
                            <input
                                className='createGroupPartOneInput'
                                type='text'
                                maxLength='200'
                                onChange={text => setAddress(text.target.value)}
                                value={address}
                            />
                        </div>

                        <div>
                            <label className='createGrouppartonelabel'>city</label>
                            <input
                                className='createGroupPartOneInput'
                                type='text'
                                maxLength='200'
                                onChange={text => setCity(text.target.value)}
                                value={city}
                            />
                        </div>

                        <div>
                            <label className='createGrouppartonelabel'>state</label>
                            <input
                                className='createGroupPartOneInput'
                                type='text'
                                maxLength='2'
                                onChange={text => setState(text.target.value)}
                                value={state}
                            />
                        </div>

                        <div className='createGroupPartOneButtons'>
                             <button className='return' style={{ visibility: 'hidden' }}></button>
                              <button className="creategrouppartonesubmit" disabled={city.length < 3 || (!USstates.includes(state.toUpperCase()))} onClick={e => setPart('PART 2')}>Next</button>
                        </div>
                    </div>
                )
            }

        {
            part === 'Part Two' && (
                <div>
            <div>
                <label>group name</label>
                <input
                    type='text'
                    onChange={text => setName(text.target.value)}
                    value={name}
                />
            </div>
            <div>
                <label>group purpose</label>
                <input
                    type='text'
                    onChange={text => setPurpose(text.target.value)}
                    value={purpose}
                />
            </div>
            </div>
            )
        }

            {
                part === 'Part Three' && (
                <div>
            <div>
                <label>group about</label>
                <input
                    type='text'
                    onChange={text => setAbout(text.target.value)}
                    value={about}
                />
            </div>

            <select className='select' name='type' value={privatee} onChange={e => setPrivatee(e.target.value)} >
                <option >true or false private test</option>
                <option value={false}>False</option>
                <option value={true}>True</option>
            </select>

            <button className="submit" type="submit">make it so</button>
            </div>
                )
            }
        </form>

    );
}

export default CreateGroupForm