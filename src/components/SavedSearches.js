import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import SearchContext from '../context/SearchContext';

class SavedSearches extends Component {

    static contextType = SearchContext;

    componentDidMount(){
        
        this.context.displaySavedSearches();
        this.setState({
            saved: this.context.savedSearches
        })
    }

    state = {
        saved: []
    }

    // searchResultsAgain = () => {
    //     console.log('search again');
    // }

    

    render () {

        const { savedSearches} = this.context;
        return (
            <div className='saved-searches'>
              <h3>Here are your saved searches</h3>
              <ul>
               {savedSearches.map(list => {
                   return(
                       <li key={list.id}>Playlist {list.id}: {list.user_mood} {list.user_genre} <br />
                       
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