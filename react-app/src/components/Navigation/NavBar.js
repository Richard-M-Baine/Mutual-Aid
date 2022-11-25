
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './navigation.css'

const NavBar = () => {



  
  return (
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
        <div className='navigationLogInDiv'>
          <LogoutButton />
        </div>
      
    </nav>
  );
}

export default NavBar;