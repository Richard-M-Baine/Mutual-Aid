import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';


// group stuff

import AllCharities from './components/groups/allGroups/index.js'
import CharityDetails from './components/groups/groupDetails/index.js'
import CreateGroupForm from './components/groups/createGroup/index.js';
import MyCharities from './components/groups/myGroups/index.js'
import EditCharityForm from './components/groups/editGroup';

// request stuff

import AllRequests from './components/requests/allRequests/index.js'
import RequestDetails from './components/requests/RequestDetails/index.js'


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/groups' exact={true}>
          <AllCharities />
        </Route>

        <Route path='/requests' exact={true}>
        <AllRequests />
        </Route>

        <Route path='/groups/:id' exact={true}>
          <CharityDetails />
        </Route>

        <Route path='/requests/:id' exact={true}>
          <RequestDetails />
        </Route>

        <ProtectedRoute path='/newgroup' exact={true}>
          < CreateGroupForm  />
        </ProtectedRoute>

        <ProtectedRoute path='/groups/edit/:id' exact={true}>
          < EditCharityForm  />
        </ProtectedRoute>

        <ProtectedRoute path='/mylistings' exact={true}>
          < MyCharities  />
        </ProtectedRoute>

        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

       

      

        <Route path='/' exact={true} >
          <h1>Splash page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
