import React, { Component } from 'react';
import '../css/resultpanel.css';

export default class ResultPanel extends Component {

    render() {
        const images = this.props.images;
        return(
            <div className="panel-container container-fluid">
                <div className="image">
                    {
                        images.map(img => {
                            return <img src={img.urls.regular} alt={img.alt_description} />
                        })
                    }
                </div>
            </div>
        );
    }
    
}