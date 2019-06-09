import React from 'react';

const SearchContext = React.createContext({
    artist: "",
    mood: "",
    genre: "",
    users: [],
    playlist: [],
    username: "",
    password: "",
    savedSearches: [],
    setUsername: () => {},
    setPassword: () => {},
    updateArtist: () => {},
    updateMood: () => {},
    updateGenre: () => {},
    displaySearchResults: () => {},
    captureSearchResults: () => {},
    displaySavedSearches: () => {}
});

export default SearchContext;