import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from './context/SearchContext';
import './Results.css';

class Results extends Component {
  
    static contextType = SearchContext;

    

    componentDidMount(){
        const { mood, genre } = this.context
        // let url = playlists.external_urls.spotify;
        // console.log(url);
        this.context.displaySearchResults(mood, genre);
    }

   
    
    render(){
        const { artist, mood, genre, playlists } = this.context;
        // let url = playlists.external_urls.spotify;
      
        return(
        <>    
          
            <h3>Here are your {mood} & {genre} search results for {artist} </h3>
            <div className="result-list">
                <ul>
                   {playlists.map((note, index) =>{

                       
                       return (
                           <li key={index}>
                             <div className="result-name" id={index}>
                              <p>Playlist Name: {note.name}</p>
                             </div>
                             <div className="result-image">
                              <img src={note.images[0].url} alt="" width="300" height="300"/>
                             </div>
                             <div className="result-tracks">
                              <p>Tracks: {note.tracks.total}</p>
                             </div>
                             
                             <div className="result-url">
                             <p><a href={note.external_urls}>Start Listening Here</a></p>
                             </div>
                           </li>  
                       )
                   })}
                </ul>
               
            </div>
            <div className="new-search">
              <Link to='/search'>
                <button type='submit'>Search Again</button>
              </Link>
            </div>
            
         
        </>
        )
    }
}

export default Results