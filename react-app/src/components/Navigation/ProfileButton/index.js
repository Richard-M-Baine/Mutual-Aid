import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {useHistory} from 'react-router-dom'

import * as sessionActions from '../../../store/session';
import './profile.css'

import profileImage from './profileImage.png'

const ProfileButton = ({user}) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [showMenu, setShowMenu] = useState(false);

  // open close menu stuff

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout  = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    history.push('/')
  };

  // end menu stuff and logout function





  

  return (
    <div>
      <button className='buttonprofilegood' onClick={openMenu}>
        <img src={profileImage} alt='the letter a but with holded hands'/>
      </button>

      {showMenu && (
        <ul className="profile-dropdown">
          <li className='profileNavName'>Welcome {user.firstName}</li>
          <li className='profileNavName'>logged in with {user.email}</li>
         
          <li className='profileNavName'>
            <button className="profileButtonp" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}


    </div>
  );
};

export default ProfileButton;
