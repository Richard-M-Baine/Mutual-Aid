import React, { useState } from 'react';
import { Modal } from '../../../context/Modal'
import createMessageForm from './createMessageForm.js';





function CreateMessageModal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      
      <button className='buttonsplash' onClick={() => setShowModal(true)}>Offer Help</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <createMessageForm />
        </Modal>
      )}
    </>
  );
}

export default CreateMessageModal;