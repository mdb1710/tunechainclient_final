import React, { Component } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

import SearchContext from './context/SearchContext';

import './SearchPage.css';


class Searchpage extends Component{
    
    static contextType = SearchContext;

    

    

    handleFirstArtistChange = (e) => {
       
        
        this.context.updateArtist(e.target.value);
    };
   
   
    handleMoodChange = (e) =>{
       
        
        
        this.context.updateMood(e.target.value);
    };

    handleGenreChange = (e) =>{
       
        
        
        this.context.updateGenre(e.target.value);
    };

    

    handleArtistSearch = (e) => {
     e.preventDefault();   
     
     
     
    };

    
    
    render() {
        
       

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