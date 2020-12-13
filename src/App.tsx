import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, useHistory, Switch } from 'react-router-dom';

import ContactSettings from './components/ContactSettings';
import Main from './components/Main';
import Medicine from './components/Medicine';
import Alarms from './components/Alarms';
import Schedule from './components/Schedule';
import AccountSettings from './components/AccountSettings';
import Splash from './components/Splash';

import './App.css';
const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Splash} />
      <Route path="/features">
        <Main>
          <Route path="/features/medicine" component={Medicine} />
          <Route path="/features/contactsettings" component={ContactSettings} />
          <Route path="/features/alarms" component={Alarms} />
          <Route path="/features/schedule" component={Schedule} />
          <Route path="/features/accountsettings" component={AccountSettings} />
        </Main>
      </Route>
    </Router>
  );
}

export default App;
