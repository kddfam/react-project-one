import React, { Component } from 'react';
import CButton from './CButton';

export default class CInput extends Component {

    state = {
        searchWord: ''
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        this.setState({searchWord: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.submitResult(this.state.searchWord);
    }

    render() {
        const inputType = this.props.inputType;
        const inputPlaceholder = this.props.inputPlaceholder;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type={inputType} 
                        placeholder={inputPlaceholder} 
                        value={this.state.searchWord}
                        onChange={this.handleChange} 
                    />
                    <CButton buttonText="Search" buttonType="submit" />
                </form>
            </div>
        );
    }

}