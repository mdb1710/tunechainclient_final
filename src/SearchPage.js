import React, { Component } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

import SearchContext from './context/SearchContext';

import './SearchPage.css';


class Searchpage extends Component{
    
    static contextType = SearchContext;

    

    

    handleFirstArtistChange = (e) => {
       
        console.log(e.target.value);
        this.context.updateArtist(e.target.value);
    };
   
   
    handleMoodChange = (e) =>{
       
        
        console.log(e.target.value);
        this.context.updateMood(e.target.value);
    };

    handleGenreChange = (e) =>{
       
        
        console.log(e.target.value);
        this.context.updateGenre(e.target.value);
    };

    

    handleArtistSearch = (e) => {
     e.preventDefault();   
     const { artist, mood, genre } = this.state;
     console.log('Search started');
     console.log('artist', artist);
     console.log('mood', mood);
     console.log('genre', genre);
    //  this.context.displaySearchResults(mood, genre);
     
    };

    // resetArtistSearch(event){
    //     event.preventDefault();
    //     console.log('Search has reset');
        
    // }
    
    render() {
        const { artist, mood, genre } = this.context;
        // console.log(artist, mood, genre);

        return(
        <>
            <h2>Fill Out At Least One of the Search Area</h2>
            <div className="searchform">
                <form id='artist-search-form' onSubmit={this.handleArtistSearch}>
                   <fieldset>
                    <div className="form-section">
                   <label name="Mood">Your Mood</label>
                   <input type="text"  name='mood-search' onChange={this.handleMoodChange}/>
                   </div>
                   <br />
                   <div className="form-section">
                   <label name="Genre">Your Genre</label>
                   <input type="text"  name='genre-search' onChange={this.handleGenreChange}/>
                   </div>
                   <br />
                   </fieldset>
                   <button type="Reset" id="reset-button" >Start Over</button>
                   <Link to="/results">
                   <button type="submit" id="match-button">Show Matches</button>
                   </Link>
                </form>
            </div>
            <div className="search-results">
             
            </div>
            
        </>
        )
    
  }
};

export default Searchpage;