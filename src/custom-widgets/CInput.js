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
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group" style={{margin: "auto"}}>
                        <input 
                            style={{marginRight: "25px"}}
                            className="form-control"
                            type={inputType} 
                            placeholder={inputPlaceholder} 
                            value={this.state.searchWord}
                            onChange={this.handleChange} 
                        />
                        <CButton buttonText="Search" buttonType="submit" />
                    </div>
                </form>
            </div>
        );
    }

}