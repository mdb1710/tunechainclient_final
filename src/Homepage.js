import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Homepage extends Component {
    
    handleStartSearch = () => {
        console.log('Search has started');
    }

    render(){
        return(
            <div className="landing-page">
                <header>
                    <h2>Find the perfect songs for your current mood</h2>
                </header>
                <div className='intro'>
                   <h3>What is 'Tunechain'</h3>
                   <p>Tunechain is an app that help you search Spotify to find music 'chained' to your current mood. You can search for user-curated playlists from all of Spotify even you don't have a Spotify account</p>
                   <h3>How To Use Tunechain</h3>
                   <ul>
                     <li>Click The Start Here Button Below</li>
                     <li>Enter the 'mood' and 'genre in the Search form</li>
                     <li>Click 'Show Matches'</li>
                     <li>See The Playlists and start listening!</li>
                   </ul>
                </div>

                <div className="start">
                   <Link to='/search'>
                     <button type="submit" onClick={() => this.handleStartSearch()}>Start Here</button>
                   </Link>
                   
                </div>
                
            </div>
        )

    }
};

export default Homepage;