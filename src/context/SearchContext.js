import React from 'react';

const SearchContext = React.createContext({
    artist: "",
    mood: "",
    genre: "",
    users: [],
    playlist: [],
    username: "",
    password: "",
    setUsername: () => {},
    setPassword: () => {},
    updateArtist: () => {},
    updateMood: () => {},
    updateGenre: () => {},
    displaySearchResults: () => {}
});

export default SearchContext;