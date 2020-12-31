import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Divider from '@material-ui/core/Divider';
import Radio, { RadioProps } from '@material-ui/core/Radio';

import qs from 'qs'

import AccountCircle from '@material-ui/icons/AccountCircle';

import * as userAPI from '../api/user';

import './ResetPassword.css';

type ResetPasswordState = {
    email: string,
    selectedContactMethod: string
}

type ResetPasswordProps = {
    location: any // TODO: params
}

// TODO: Rename to find account
// Make second ResetPassword
class ResetPassword extends React.Component<ResetPasswordProps, ResetPasswordState> {

    constructor(props: ResetPasswordProps) {
        super(props);

        let email: any = '';

        if ( qs.parse(this.props.location.search, { ignoreQueryPrefix: true }) ) {
            email = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).email;
        }

        this.state = { email, selectedContactMethod: "email" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({selectedContactMethod: e.target.value});
    }
      
    async handleSubmit(e: any) {
        try {

        }
        catch(error) {
        }
    }

    // TODO: IMPORTANT, BUTTON IS 300px IS CONTROLLING WIDTH OF ENTIRE FORM

    // TODO: Think of a better header title
    // TODO: auth-err really should be renamed
    render() {
        return (
            <div className="auth-page-container">
                <div className="auth-page">
                    <Typography className="auth-header" color="primary" variant="h4">Reset Password</Typography>
                    <form className="auth-form">
                        <Paper elevation={1} className="find-account-icon-container">
                            <AccountCircle color="primary" className="find-account-icon" />
                            <div>{this.state.email}</div>
                        </Paper>
                        <div className="reset-instructions">Select how you would like to recieve the code.</div>
                        <Divider className="contact-divider" />
                        <div className="contact">
                            <div>
                                <div className="contact-method">Send Code Via Email</div>
                                <div className="contact-detail">{this.state.email}</div>
                            </div>
                            <div className="radio-container">
                                <Radio color="primary" checked={this.state.selectedContactMethod === 'email'} onChange={this.handleChange} value="email"/>
                            </div>
                        </div>
                        <Divider className="contact-divider" />
                        <div className="contact">
                            <div>
                                <div className="contact-method">Send Code Via SMS</div>
                                <div className="contact-detail">410-017-6440</div>
                            </div>
                            <div className="radio-container">
                                <Radio color="primary" checked={this.state.selectedContactMethod === 'sms'} onChange={this.handleChange} value="sms"/>
                            </div>
                        </div>
                        <Divider className="contact-divider" />
                        <Button onClick={ this.handleSubmit } className="auth-btn" variant="contained" color="primary" size="medium">Send Code</Button>
                    </form>
                    <div className="non-important-btns-container">
                        <Link className="no-underline" to="/findaccount">
                            <Button className="find-email-btn non-important-btn" color="primary">Not You?</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;