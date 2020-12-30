import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import * as userAPI from '../api/user';

import './FindAccount.css';

type FindAccountState = {
    searchEmailFailureType: SearchEmailFailureType
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

    private emailRef: any; // TODO: Type

    constructor(props: FindAccountProps) {
        super(props);

        this.state = { searchEmailFailureType: SearchEmailFailureType.NONE };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.emailRef = React.createRef();
    }

    async handleSubmit(e: any) {
        const emailToSearch: string = this.emailRef.current.value;

        try {
            await userAPI.findAccount(emailToSearch);
            this.setState({searchEmailFailureType: SearchEmailFailureType.NONE});
            this.props.history.push(`/resetpassword?email=${emailToSearch}`)
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

    displayError(): boolean {
        return this.state.searchEmailFailureType !== SearchEmailFailureType.NONE;
    }

    getErrorText(): string {
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
                        <TextField inputRef={this.emailRef} className="auth-txt-field" label="Email" variant="filled"/>
                        <Button onClick={ this.handleSubmit } className="auth-btn" variant="contained" color="primary" size="medium">Search</Button>
                        <FormHelperText className={`auth-err ${this.displayError() ? "" : "display-none"}`} error={true}>{this.getErrorText()}</FormHelperText>
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