import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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

        const { mood, genre, savedSearches } = this.context;
        return (
            <div className='saved-searches'>
              <h3>Here are your saved searches</h3>
              <ul>
               {savedSearches.map(list => {
                   return(
                       <li key={list.id}>Playlist {list.id}: {list.user_mood} {list.user_genre} <br />
                       <button type='submit'>See Results Again</button>
                       </li>
                   )
               })}
              </ul>
              <Link to='/search'>
                <button type='button'>Search Again</button>
              </Link>
            </div>
            

        )
    }
}

export default SavedSearches;