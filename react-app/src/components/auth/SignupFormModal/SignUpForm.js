import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword && email.includes('@')) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    }

    return setErrors([{ password: 'Confirm Password field must be the same as the Password field or your email is invalid / already registered.' }])
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/mylistings' />;
  }

  return (
    <form className='signupFormOut' onSubmit={onSignUp}>
    <ul>
            {errors.map((error, index) => <li key={index}>{Object.values(error)[0]}</li>)}
          </ul>

      <div className='signupFormDiv'>
        <label className='signupFormLabel'>First Name</label>
        <input
          className='signupformInputBox'
          type='text'
          name='username'
          onChange={blah => setFirstName(blah.target.value)}
          value={firstName}
        ></input>
      </div>

      <div className='signupFormDiv'>
        <label className='signupFormLabel'>Last Name</label>
        <input
          className='signupformInputBox'
          type='text'
          name='username'
          onChange={blah => setLastName(blah.target.value)}
          value={lastName}
        ></input>
      </div>

      <div className='signupFormDiv'>
        <label className='signupFormLabel'>User Name</label>
        <input
          className='signupformInputBox'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='signupFormDiv'>
        <label className='signupFormLabel'>Email</label>
        <input
          className='signupformInputBox'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='signupFormDiv'>
        <label className='signupFormLabel'>Password</label>
        <input
          className='signupformInputBox'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='signupFormDiv'>
        <label className='signupFormLabel'>Verify Password</label>
        <input
          className='signupformInputBox'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className='submitSignupButton' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
