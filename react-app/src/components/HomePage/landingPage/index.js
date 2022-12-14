import React from 'react';
import { useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';


import './landingPage.css'
import LoginFormModal from '../../auth/LoginFormModal/index';
import SignupFormModal from '../../auth/SignupFormModal/index'
import DemoUser from '../Demonstration/index.js'


const LandingPage = () => {


    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user)
    function aboutclick() {
        history.push('/about')
    }
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
                    <div><LoginFormModal /></div>
                    <button className='buttonsplash' onClick={aboutclick}>About Mutual Aid</button>
                    <div><SignupFormModal /></div>
                    <div><DemoUser /></div>
                </div>



            </div>


        </>
    )
}


export default LandingPage