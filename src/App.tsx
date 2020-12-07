import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import EventIcon from '@material-ui/icons/Event';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    iconsContainer: {
      display: 'flex',
      height: '100%',
      alignItems: 'center'
    },
    iconContainer: {
      width: '64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '8px',
      marginRight: '8px',
      height: '100%'
    },
    icon: {
      fontSize: '24px',
      width: '24px',
      height: '24px',
      marginBottom: '2px'
    },
    iconDescription: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: '12px',
      textAlign: 'center',
      cursor: 'pointer'
    },
    iconContainerActive: {
      backgroundColor: 'white'
    },
    iconActive: {
      color: '#009688'
    },
    iconDescriptionActive: {
      color: '#009688'
    }

  }),
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <header>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>RoboNurse</Typography>
            <div className={classes.iconsContainer}>
                <div className={classes.iconContainer}>
                  <LocalHospitalIcon className={classes.icon} />
                  <div className={classes.iconDescription}>Medicines</div>
                </div>
                <div className={classes.iconContainer}>
                  <SettingsPhoneIcon className={classes.icon} />
                  <div className={classes.iconDescription}>Calls</div>
                </div>
                <div className={classes.iconContainer}>
                  <AccessAlarmIcon className={classes.icon} />
                  <div className={classes.iconDescription}>Alarms</div>
                </div>
                <div className={classes.iconContainer}>
                  <EventIcon className={classes.icon} />
                  <div className={classes.iconDescription}>Schedule</div>
                </div>
                <div className={classes.iconContainer}>
                  <AccountCircle className={classes.icon} />
                  <div className={classes.iconDescription}>Account</div>
                </div>
            </div>
          </Toolbar>
        </AppBar>
      </header>
      <main></main>
    </div>
  );
}

export default App;
