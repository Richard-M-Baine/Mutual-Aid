import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

// thunk imports
import {fetchAllLocationsThunk} from '../../../store/locations.js'


function CreateGroupForm(){
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

        const newLocation = {
            address: address,
            city: city,
            state: state
        }

        const newGroup = {
            name:name,
            about:about,
            purpose:purpose,
            locationID: 4,
            private:privatee
        }


    }

    return (

        <form>

            <label>address</label>
            <input
            type='text'
            onChange={text => setAddress(text.target.value)}
            value={address}
            />
            <label>city</label>
            <input 
            type='text'
            onChange={text => setAddress(text.target.value)}
            value={address}

            />
            
           

        </form>
        
    );
}

export default CreateGroupForm