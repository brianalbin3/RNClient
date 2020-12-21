import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import PasswordInput from './PasswordInput';

import * as auth from '../api/auth';



import './Register.css';

type RegisterState = {
    email: string,
    password: string,
    emailIsTouched: boolean,
    passwordIsTouched: boolean,
    submitIsTouched: boolean,
    emailIsTaken: boolean,
    internalServerError: boolean
}

type RegisterProps = {}

class Register extends React.Component<{}, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);

        this.state = { email: '', password: '', emailIsTouched: false, passwordIsTouched: false, submitIsTouched: false, emailIsTaken: false, internalServerError: false };
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleEmailChange(e: any) {
        const email = e.target.value;
        this.setState({email, emailIsTouched: true, emailIsTaken: false});
    }

    isValidEmail(): boolean {
        const email = this.state.email;

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(String(email).toLowerCase());
    }

    passwordHasCorrectLength(): boolean {
        const password = this.state.password;

        return password.length >= 8 && password.length <= 32;
    }

    // Checks if the password contains numbers, letters, and special characters
    passwordIsValid(): boolean {
        const password = this.state.password;

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,32}$/

        return regex.test(password);
    }

    handlePasswordChange(e: any) {
        const password = e.target.value;
        this.setState({password, passwordIsTouched: true});
    }

    emailHasError(): boolean {
        const { submitIsTouched } = this.state;

        return !this.isValidEmail() && submitIsTouched;
    }

    getEmailHelperText(): string {
        if ( this.emailHasError() ) {
            return 'Please enter a valid email';
        }
        else if ( this.state.emailIsTaken ) {
            return 'This email is taken, try another.';
        }
        
        return 'Enter your email';
    }

    passwordHasError(): boolean {
        const { submitIsTouched } = this.state;

        return !this.passwordIsValid() && submitIsTouched;
    }

    getPasswordHelperText(): string {
        if ( !this.passwordHasError() ) {
            return 'Enter a password';
        }
        else if ( this.passwordHasCorrectLength() ) {
            return 'Enter between 8 and 32 characters';
        }
    
        return 'Include a letter, number, and special character';
    }

    hasIternalServerError(): boolean {
        return this.state.internalServerError;
    }

    async handleSubmit() {
        const { email, password } = this.state;

        this.setState({submitIsTouched: true, internalServerError: false});

        if ( !this.isValidEmail() || !this.passwordIsValid() ) {
            return;
        }

        try {
            await auth.register(email,password);
        }
        catch ( error ) {
            if ( error.response.status === 409 ) {
                this.setState({emailIsTaken: true});
            }
            else if ( error.response.status === 500 ) {
                this.setState({internalServerError: true});
            }
            else {
                console.error('Unhandled error'); // TODO: Handle this
            }
        }
    }

    render(): JSX.Element {
        return (
            <div className="register-container">
                <div className="register">
                    <Typography className="register-header" color="primary" variant="h4">Create a New Account</Typography>
                    <form className="register-form">
                        <TextField onChange={this.handleEmailChange} name="email" className="register-txt-field" label="Email" variant="filled" error={this.emailHasError() || this.state.emailIsTaken} helperText={this.getEmailHelperText()}/>
                
                        <PasswordInput inputProps={{ maxLength: 32 }} onChange={this.handlePasswordChange} className="register-txt-field" label="Password" error={this.passwordHasError()} helperText={this.getPasswordHelperText()} />

                        <Button onClick={this.handleSubmit} className="register-btn" variant="contained" color="primary" size="medium">Register</Button>

                        <FormHelperText className={ this.hasIternalServerError() ? "" : "display-none"} error={true}>Uh-oh! A problem occured. Please refresh the page and try again.</FormHelperText>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;