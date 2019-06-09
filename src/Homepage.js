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
                   <h3>About this app...</h3>
                   <p>Regardless what mood you are in there were always songs that match it.</p>
               
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