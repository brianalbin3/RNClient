import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import EventIcon from '@material-ui/icons/Event';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import './App.css';

function App() {
  
  return (
    <div>
      <div className="app-bar-container">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className="title"></Typography>
            <nav>
                <div className="icon-container">
                  <LocalHospitalIcon className="icon" />
                  <div className="icon-description">Medicines</div>
                </div>
                <div className="icon-container icon-container-active">
                  <SettingsPhoneIcon className="icon icon-active" />
                  <div className="icon-description icon-description-active">Calls</div>
                </div>
                <div className="icon-container">
                  <AccessAlarmIcon className="icon" />
                  <div className="icon-description">Alarms</div>
                </div>
                <div className="icon-container">
                  <EventIcon className="icon" />
                  <div className="icon-description">Schedule</div>
                </div>
                <div className="icon-container">
                  <AccountCircle className="icon" />
                  <div className="icon-description">Account</div>
                </div>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
      <main></main>
    </div>
  );
}

export default App;
