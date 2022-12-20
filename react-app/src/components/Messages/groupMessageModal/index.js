import React, { useState } from 'react';
import { Modal } from '../../../context/Modal'
import GroupMessageForm from './groupMessageForm.js';





function CreateMessageModal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      
      <button className='buttonsplash' onClick={() => setShowModal(true)}>Offer Help</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <GroupMessageForm />
        </Modal>
      )}
    </>
  );
}

export default CreateMessageModal;