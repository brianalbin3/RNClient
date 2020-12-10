import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router-dom';

import ContactSettings from './components/ContactSettings';
import Main from './components/Main';
import Medicine from './components/Medicine';
import Alarms from './components/Alarms';
import Schedule from './components/Schedule';
import AccountSettings from './components/AccountSettings';


import './App.css';
const history = createBrowserHistory();


function App() {
  return (
    <div>
      <Router history={history}>
        <Main>
          <Route path="/medicine" component={Medicine} />
          <Route path="/contactsettings" component={ContactSettings} />
          <Route path="/alarms" component={Alarms} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/accountsettings" component={AccountSettings} />
        </Main>
      </Router>
    </div>
  );
}

export default App;
