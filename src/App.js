import React from 'react';
import BackendConfig from './api/BackendConfig';
import ResultPanel from './components/ResultPanel';
import SearchBar from './components/SearchBar';

export default class App extends React.Component {

    state = {
        images: []
    }

    performSearch = async value => {
        const response = await BackendConfig.get('/search/photos',{
            params: {query: value}
        });
        this.setState({images: response.data.results});
    }

    render() {
        return(
            <div>
                <SearchBar keyword={this.performSearch} />
                <ResultPanel images={this.state.images} />
            </div>
        );
    }
}