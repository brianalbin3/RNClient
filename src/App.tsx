import React, { createContext, useState, useContext } from 'react';
// import { createBrowserHistory } from 'history';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ContactSettings from './components/ContactSettings';
import Main from './components/Main';
import Medicine from './components/Medicine';
import Alarms from './components/Alarms';
import Schedule from './components/Schedule';
import AccountSettings from './components/AccountSettings';
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';

import { AuthContextConsumer } from './contexts/authContext';

import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
<div>
    <AuthContextConsumer>
          {

          (context) => { return context.isLoggedIn ? (<div>Logged In</div>)
            : (<div>Not logged in</div>)
          }
          
          }
    </AuthContextConsumer>

    <Router>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Splash} />
      <PrivateRoute path="/features">
        <Main>
          <Route path="/features/medicine" component={Medicine} />
          <Route path="/features/contactsettings" component={ContactSettings} />
          <Route path="/features/alarms" component={Alarms} />
          <Route path="/features/schedule" component={Schedule} />
          <Route path="/features/accountsettings" component={AccountSettings} />
        </Main>
      </PrivateRoute>
    </Router>
    </div>
  );
}

export default App;
