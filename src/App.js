import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import Searchpage from './SearchPage';
import Header from './components/Header';
import Results from './Results';
import Footer from './components/Footer';
import SearchContext from './context/SearchContext';
import { BASE_API_URL } from './config';
import SavedSearches from './components/SavedSearches';

import  './App.css';




class App extends Component {

  state = {
    artist: "",
    mood: "",
    genre: "",
    username: "",
    password: "",
    playlists: [],
    error: null
  }

  displaySearchResults = (m, g, a) => {
    console.log('Search ended');
    console.log(m, g);
    console.log(BASE_API_URL);
    fetch(`${BASE_API_URL}/search?mood=${m}&genre=${g}`, {
      'content-type': 'application-json',
    })
    .then(res => res.json())
    .then(data => {
      let newList = data;
      console.log(newList);
      this.setState({ playlists: newList });
    
    });
  }

  captureSearchResults = (m,g) => {
    
    console.log('search saved');
    console.log(m);
    console.log(g);
  }

  updateArtist = (name) => {
    console.log(name);
    this.setState({
      artist: name
    })
  }

  updateMood = (name) => {
    console.log(name);
    this.setState({
      mood: name
    })
  }

  updateGenre = (name) => {
    console.log(name);
    this.setState({
      genre: name
    })
  }

  setUsername = (name) => {
    console.log(name);
    this.setState({
      username: name
    })
  }

  setPassword = (name) => {
    console.log(name);
    this.setState({
      password: name
    })
  }

  displaySavedSearches = () => {
    console.log('started');
    fetch(`${BASE_API_URL}/saved`,{
      method: 'GET',
      'content-type': 'application-json',
     

    })
    .then(res => res.json())
    .then(search => {
      console.log(search)
    })
  }


  render() {
    const contextValue = {
      artist: this.state.artist,
      mood: this.state.mood,
      genre: this.state.genre,
      playlists: this.state.playlists,
      username: this.state.username,
      password: this.state.password,
      setUsername: this.setUsername,
      setPassword: this.setPassword,
      updateArtist: this.updateArtist,
      updateMood: this.updateMood,
      updateGenre: this.updateGenre,
      displaySearchResults: this.displaySearchResults,
      captureSearchResults: this.captureSearchResults,
      displaySavedSearches: this.displaySavedSearches
    }
    return (
      <div className="App">
        <Header />
        <main>
        <SearchContext.Provider value={contextValue}>  
        
        <Route
        exact path='/'
        component={Homepage} />
        <Route
        path='/search' 
        component={Searchpage}/>
        <Route 
        path='/results'
        component={Results}
        />
        <Route
        path='/saved'
        component={SavedSearches}
        />
       
        </SearchContext.Provider>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
