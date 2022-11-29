import React, { useState } from 'react';
import { Modal } from '../../../context/Modal'
import LoginForm from './LoginForm.js';

import './loginform.css'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal)
  return (
    <>
      
      <button className='buttonsplash' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm  />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;