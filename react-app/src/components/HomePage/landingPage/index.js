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

    if (sessionUser) {
        history.push('/mylistings')
    }

    return (
        <>
            <div className='sppictureDiv'>
                <div className='sptitleDiv'>
                    <h1 className='spheaderone'>Penguins rely on each other to survive </h1>
                    <h1 className='spheadertwo'>They quickly freeze to death if left alone</h1>
                </div>


            </div>
            <div className='sppictureHumanDiv'>
                <div className='sphumanDiv'>
                    <h1 className='spheaderThree'>Humans are not any different</h1>
                    <h1 className='spheaderFour'>TriState Mutual Aid</h1>
                </div>
                <div className='enlistsplashpage'>
                    <button className='buttonsplash'>Login</button>
                    <button className='buttonsplash'>About Mutual Aid</button>
                    <button className='buttonsplash'>SignUp</button>
                </div>

            </div>


        </>
    )
}


export default LandingPage