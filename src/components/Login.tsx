import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import './Login.css';

type LoginState = {

}

type LoginProps = {

}

class Login extends React.Component<{}, LoginState> {
    constructor(props: LoginProps) {
        super(props);
    }

    render() {
        return (
            <div className="login-container">
                <div className="login">
                    <Typography className="login-header" color="primary" variant="h4">Login to Your Account</Typography>
                    <form className="login-form">
                        <TextField className="login-txt-field" id="filled-basic" label="Email" variant="filled" error={true} helperText="Invalid email"/>
                        <TextField className="login-txt-field" id="standard-password-input" variant="filled" label="Password" type="password" error={true} helperText="Invalid password"/>
                        <Button className="login-btn" variant="contained" color="primary" size="medium">Login</Button>
                        <div className="non-important-btns-container">
                            <Button className="non-important-btn" color="primary">Create Account</Button>
                            <Button className="non-important-btn" color="primary">Forgot Password?</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;