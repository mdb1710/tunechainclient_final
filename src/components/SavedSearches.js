import React, { Component } from 'react';

import SearchContext from '../context/SearchContext';

class SavedSearches extends Component {

    static contextType = SearchContext;

    componentDidMount(){
        console.log('here are your saved searches');
        this.context.displaySavedSearches();
    }

    state = {
        saved: []
    }

    render () {
        return (
            <div className='saved-searches'>
              <h3>Here are your saved searches</h3>
              <ol>
              <li>Playlist 1: Sad Soul</li>
              <li>Playlist 2: Happy Rock</li>
              </ol>
            </div>

        )
    }
}

export default SavedSearches;