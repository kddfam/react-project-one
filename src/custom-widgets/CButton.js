import React, { Component } from 'react';

export default class CButton extends Component {
    
    render() {
        const buttonText = this.props.buttonText;
        const buttonType = this.props.buttonType;
        return(
            <button type={buttonType}>{buttonText}</button>
        );
    }

}