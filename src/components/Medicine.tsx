import React, { Component } from 'react';

type MedicineState = {
  
}

type MedicineProps = {

}

class Medicine extends React.Component<MedicineProps, MedicineState> {
    constructor(props: MedicineProps) {
        super(props);
    }

    render() {
        return (
            <h1>Medicine</h1>
        );
    }
}

export default Medicine;