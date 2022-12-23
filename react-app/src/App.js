import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from './components/Navigation/NavBar.js';
import ProtectedRoute from './components/auth/ProtectedRoute';

import { authenticate } from './store/session';


// group stuff

import AllCharities from './components/groups/allGroups/index.js'
import CharityDetails from './components/groups/groupDetails/index.js'
import CreateGroupForm from './components/groups/createGroup/index.js';
import MyCharities from './components/HomePage/myPage/index'
import EditCharityForm from './components/groups/editGroup';
import UpdateAddressForm from './components/groups/editGroup/updateaddresspractice';


// request stuff

import AllRequests from './components/requests/allRequests/index.js'
import RequestDetails from './components/requests/RequestDetails/index.js'
import CreateRequestForm from './components/requests/createRequest';
import EditRequestForm from './components/requests/editRequest';

//  landing stuff

import LandingPage from './components/HomePage/landingPage/index.js'
import About from './components/HomePage/about/index.js'

// messaging and map stuff

import MyMessages from './components/Messages/messageHome/index.js'
import MapStuff from './components/auth/MapStuff/index.js'


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar loaded={loaded} />
      <Switch>

        <Route path='/about' exact={true}>
          <About />
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
          < CreateGroupForm />
        </ProtectedRoute>

        <ProtectedRoute path='/newrequest' exact={true}>
          < CreateRequestForm />
        </ProtectedRoute>

        <ProtectedRoute path='/groups/edit/:id' exact={true}>
          < EditCharityForm />
        </ProtectedRoute>

        <ProtectedRoute path='/requests/edit/:id' exact={true}>
          <EditRequestForm />
        </ProtectedRoute>

        <ProtectedRoute path='/groups/editAddress/:id' exact={true}>
          < UpdateAddressForm />
        </ProtectedRoute>

        <ProtectedRoute path='/mylistings' exact={true}>
          < MyCharities />
        </ProtectedRoute>

        <ProtectedRoute path='/messages' exact={true}>
          < MyMessages />
        </ProtectedRoute>
        <ProtectedRoute path='/map' exact={true}>
        <MapStuff />
        </ProtectedRoute>





        <Route path='/' exact={true} >
          <LandingPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
