import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import pictureone from './backgroundideaone.png'
import penguins from './Penguins-interior.jpg'

import './landingPage.css'


const LandingPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser){
        history.push('/mylistings')
    }

    return (
        <div className='pictureDiv'>
            <h1>imagine yaaaay</h1>
        </div>
    )
}


export default LandingPage