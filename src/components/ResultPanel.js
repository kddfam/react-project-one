import React, { Component } from 'react';

export default class ResultPanel extends Component {

    render() {
        const images = this.props.images;
        return images.map(img => {
            return <img src={img.urls.regular} style={{height: "200px", width: "200px"}} alt={img.alt_description} />
        })
    }
    
}