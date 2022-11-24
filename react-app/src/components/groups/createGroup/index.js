import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

// thunk imports
import {createLocationThunk} from '../../../store/locations'
import {createGroupThunk} from '../../../store/groups'


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

        
        const newGroup = {
            founder: sessionUser.id,
            name:name,
            about:about,
            purpose:purpose,
           
            private:privatee,
            address: address,
            city: city,
            state: state
        }


        await dispatch(createGroupThunk(newGroup))


        history.push('/groups')

    }

    return (

        <form onSubmit={submit}>

            <div>
            <label>address</label>
            <input
            type='text'
            onChange={text => setAddress(text.target.value)}
            value={address}
            />
            </div>

            <div>
            <label>city</label>
            <input 
            type='text'
            onChange={text => setCity(text.target.value)}
            value={city}
            />
            </div>

            <div>
            <label>state</label>
            <input 
            type='text'
            onChange={text => setState(text.target.value)}
            value={state}
            />
            </div>

            
            <div>
            <label>group name</label>
            <input 
            type='text'
            onChange={text => setName(text.target.value)}
            value={name}
            />
            </div>

            <div>
            <label>group about</label>
            <input 
            type='text'
            onChange={text => setAbout(text.target.value)}
            value={about}
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

            <select className='select' name='type' value={privatee} onChange={e => setPrivatee(e.target.value)} >
                <option >true or false private test</option>
                    <option value={false}>False</option>
                    <option value={true}>True</option>
            </select>

            <button className="submit" type="submit">make it so</button>
      
        </form>
        
    );
}

export default CreateGroupForm