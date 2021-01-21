import React, { Component } from 'react';
import CInput from '../custom-widgets/CInput';

export default class SearchBar extends Component {

    submitResult = value => {
        this.props.keyword(value);
    }

    render() {
        return(
            <div>
                <CInput inputType="text" inputPlaceholder="Search..." submitResult={this.submitResult} />
            </div>
        );
    }

}