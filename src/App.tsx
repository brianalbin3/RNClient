import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router-dom';

import Medicine from './components/Medicine';
import Main from './components/Main';

import './App.css';
const history = createBrowserHistory();


function App() {


  return (

    <div>
      <Router history={history}>
        <Main>
          <Route path="/medicine" component={Medicine} />
        </Main>
      </Router>
    </div>
  );
}

export default App;
