
import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton/index.js';
import { useSelector } from 'react-redux';

import './navigation.css'

const NavBar = ({ loaded }) => {

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <nav className='navigationOuterDiv'>
        <div className='navigationLogInDiv'>
          <NavLink to='/mylistings' exact={true} activeClassName='active'>
            My Home Page
          </NavLink>
        </div>

        <div>
          <NavLink to='/newgroup' exact={true} activeClassName='active'>
            Add Organization
          </NavLink>
        </div>

        <div>
          <NavLink to='/groups' exact={true} activeClassName='active'>
            Nearby Organizations
          </NavLink>
        </div>

        <div>
          <NavLink to='/requests' exact={true} activeClassName='active'>
            Nearby Requests
          </NavLink>
        </div>

        <div>
          <NavLink to='/newrequest' exact={true} activeClassName='active'>
            Make a Request
          </NavLink>
        </div>

        <div className='navigationLogInDiv'>
          <ProfileButton user={sessionUser}/>
        </div>
      </nav>

    )
  }


  else {

    sessionLinks=(
    <nav className='navigationSignoutOuterDiv'>

    
  </nav>
    )


  }

  return (
    <div>
    {loaded && sessionLinks}
    </div>
  );
}

export default NavBar;
