import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import * as userAPI from '../api/user';

import './FindAccount.css';

type FindAccountState = {
    email: string,
    searchEmailFailureType: SearchEmailFailureType,
    submitIsTouched: boolean
}

type FindAccountProps = {
    history: any
}

enum SearchEmailFailureType {
    ACCOUNT_NOT_FOUND,
    INTERNAL_SERVER_ERROR,
    NONE
}

class FindAccount extends React.Component<FindAccountProps, FindAccountState> {

    constructor(props: FindAccountProps) {
        super(props);

        this.state = { email: '', searchEmailFailureType: SearchEmailFailureType.NONE, submitIsTouched: false };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(e: any) {
        const email = e.target.value;
        this.setState({email});
    }

    emailHasError(): boolean {
        const { submitIsTouched, email } = this.state;

        return email.length === 0 && submitIsTouched;
    }

    async handleSubmit(e: any) {
        const { email } = this.state;

        this.setState({submitIsTouched: true});

        if ( email.length === 0 ) {
            return;
        }

        try {
            await userAPI.findAccount(email);
            this.setState({searchEmailFailureType: SearchEmailFailureType.NONE, submitIsTouched: false});
            this.props.history.push(`/pickresetmethod?email=${email}`);
        }
        catch(error) {
            if ( error.response.status === 404 ) {
                this.setState({searchEmailFailureType: SearchEmailFailureType.ACCOUNT_NOT_FOUND});
            }
            else if ( error.response.status === 500 ) {
                this.setState({searchEmailFailureType: SearchEmailFailureType.INTERNAL_SERVER_ERROR});
            }
        }
    }

    displayFormError(): boolean {
        return this.state.searchEmailFailureType !== SearchEmailFailureType.NONE;
    }

    getFormErrorText(): string {
        if ( this.state.searchEmailFailureType === SearchEmailFailureType.ACCOUNT_NOT_FOUND ) {
            return 'We couldnt find that email.';
        }
        else if ( this.state.searchEmailFailureType === SearchEmailFailureType.INTERNAL_SERVER_ERROR ) {
            return 'Internal error. Refresh the page.';
        }

        return '';
    }

    // TODO: auth-err really should be renamed
    render() {
        return (
            <div className="auth-page-container">
                <div className="auth-page">
                    <Typography className="auth-header" color="primary" variant="h4">Find Account</Typography>
                    <form className="auth-form">
                        <FormHelperText className="forgot-pw-desc">Enter your email to search for your account.</FormHelperText>
                        <TextField onChange={this.handleEmailChange} className="auth-txt-field" label="Email" variant="filled" error={this.emailHasError()} helperText="Enter your email"/>
                        <Button onClick={ this.handleSubmit } className="auth-btn" variant="contained" color="primary" size="medium">Search</Button>
                        <FormHelperText className={`auth-err ${this.displayFormError() ? "" : "display-none"}`} error={true}>{this.getFormErrorText()}</FormHelperText>
                    </form>
                    <div className="non-important-btns-container">
                        <Link className="no-underline" to="/login">
                            <Button className="find-email-btn non-important-btn" color="primary">Cancel</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default FindAccount;