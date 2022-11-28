import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';


const LandingPage = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser){
        history.push('/mylistings')
    }

    return (
        <h1>imagine yayyyy!</h1>
    )
}


export default LandingPage