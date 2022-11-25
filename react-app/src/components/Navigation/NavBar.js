
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
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
            Create a Group
          </NavLink>
        </div>
        <div className='navigationLogInDiv'>
          <LogoutButton />
        </div>
      </nav>

    )
  }


  else {

    sessionLinks=(
    <nav className='navigationOuterDiv'>

    <div className='navigationLogInDiv'>
      <NavLink to='/' exact={true} activeClassName='active'>
        Home
      </NavLink>
    </div>
    <div >
      <NavLink to='/login' exact={true} activeClassName='active'>
        Login
      </NavLink>
    </div>
    <div>
      <NavLink to='/sign-up' exact={true} activeClassName='active'>
        Sign Up
      </NavLink>
    </div>
    <div>
      <NavLink to='/users' exact={true} activeClassName='active'>
        Users
      </NavLink>
    </div>
    
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
