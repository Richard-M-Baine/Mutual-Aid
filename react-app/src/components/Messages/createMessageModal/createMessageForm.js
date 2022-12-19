import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import './createMessage.css'

import { getOneRequestThunk } from '../../../store/requests.js'
import { createMessageThunk } from '../../../store/messages';


const CreateMessageForm = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => state.session.user)

  const { id } = useParams()
  const requestId = parseInt(id)
  const request = useSelector(state => state?.requests)
  const [body, setBody] = useState('')
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    dispatch(getOneRequestThunk(id))
      .then(() => setLoaded(true))
  }, [dispatch])

  const submit = async e => {
    e.preventDefault()

    const payload = {
      body,
      recipient: request[requestId]?.username
    }
    
    await dispatch(createMessageThunk(payload))

    history.push('/requests')
  }

  return loaded && (
    <form className='signupFormOut' onSubmit={submit} >
      <h1> Enter your message below.</h1>
      <h3> Please enter your real name and other pertinent information.  We do not give any information about you to the poster besides your userName. </h3>


      <span className="text14 textcolor-grey">Character count: {2000 - body.length} remaining</span>
      <textarea
        rows='14'
        cols='100'
        type='text'
        placeholder='please enter between 1 and 2000 characters'
        maxLength='2000'
        onChange={text => setBody(text.target.value)}
        value={body}
      />
      <button type='submit' disabled={body.length < 1 || body.length > 2000}>Submit Request</button>
    </form>
  );
};

export default CreateMessageForm;
