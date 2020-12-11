import React, { ReactChildren, ReactChild } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import EventIcon from '@material-ui/icons/Event';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { NavLink } from 'react-router-dom';

import Header from './Header';

interface MainProps {
  children: any; /* ReactChild | ReactChildren; */
}

interface MainState {}

class Main extends React.Component <{}, MainState > {

  constructor(props: MainProps) {
    super(props);
}

  render() {
    return (
      <div>
        <div className="app-bar-container">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className="title"></Typography>
              <nav>
                <NavLink className="icon-container" to="/medicine" activeClassName="icon-container-active"> 
                  <LocalHospitalIcon className="icon" />
                  <div className="icon-description">Medicines</div>
                </NavLink>
                <NavLink className="icon-container" to="/contactsettings" activeClassName="icon-container-active">
                  <SettingsPhoneIcon className="icon" />
                  <div className="icon-description">Calls</div> 
                </NavLink>
                <NavLink className="icon-container" to="/alarms" activeClassName="icon-container-active">
                  <AccessAlarmIcon className="icon" />
                  <div className="icon-description">Alarms</div>
                </NavLink>
                <NavLink className="icon-container" to="/schedule" activeClassName="icon-container-active">
                  <EventIcon className="icon" />
                  <div className="icon-description">Schedule</div>
                </NavLink>
                <NavLink className="icon-container" to="/accountsettings" activeClassName="icon-container-active">
                  <AccountCircle className="icon" />
                  <div className="icon-description">Account</div>
                </NavLink>
              </nav>
            </Toolbar>
          </AppBar>
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Main;