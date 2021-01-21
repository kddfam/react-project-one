import React, { Component } from 'react';

export default class CButton extends Component {
    
    render() {
        const buttonText = this.props.buttonText;
        const buttonType = this.props.buttonType;
        return(
            <button className="btn btn-primary" type={buttonType}>{buttonText}</button>
        );
    }

}