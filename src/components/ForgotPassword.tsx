import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import PasswordInput from './PasswordInput';

import * as auth from '../api/auth';

import './ForgotPassword.css';

type ForgotPasswordState = {
}

type ForgotPasswordProps = {
}

class ForgotPassword extends React.Component<ForgotPasswordProps, ForgotPasswordState> {
    constructor(props: ForgotPasswordProps) {
        super(props);

        this.state = { };
    }

    // TODO: Think of a better header title
    render() {
        return (
            <div className="auth-page-container">
                <div className="auth-page">
                    <Typography className="auth-header" color="primary" variant="h4">Forgot Password</Typography>
                    <form className="auth-form">
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;