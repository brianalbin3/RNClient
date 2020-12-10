import React, { Component } from 'react';

type AccountSettingsState = {
  
}

type AccountSettingsProps = {

}

class AccountSettings extends React.Component<{}, AccountSettingsState> {
    constructor(props: AccountSettingsProps) {
        super(props);
    }

    render() {
        return (
            <h1>Account Settings</h1>
        );
    }
}

export default AccountSettings;