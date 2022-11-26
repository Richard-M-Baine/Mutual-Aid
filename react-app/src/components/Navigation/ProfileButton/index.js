import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/session';
import {useHistory} from 'react-router-dom'

import * as sessionActions from '../../../store/session';

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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  // end menu stuff and logout function





  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')

  };

  return (
    <div>
      <button onClick={openMenu}>
        <img src={profileImage}/>
      </button>

      {showMenu && (
        <ul className="profile-dropdown">
          <li className='profileNavName'>Welcome {user.firstName} {user.lastName}</li>
          <li className='profileNavName'>logged in with {user.email}</li>
         
          <li id='profileNavButton'>
            <button className="profileButtonp" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}


    </div>
  );
};

export default ProfileButton;