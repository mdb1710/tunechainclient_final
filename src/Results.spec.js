import React from 'react';
import ReactDOM from 'react-dom';
import getContextProvider from 'react-test-context-provider';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import config from './config';
import { BrowserRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Results from './Results';
import SearchContext from './context/SearchContext';

Enzyme.configure({ adapter: new Adapter() });


const playlists = 
     [
        {
            index: 1,
    name: 'SWV Playlist',
    images: [
        {url: 'http://www.swv.com/group.png'}
    ],
    tracks: {
        total: 20
    },
    external_urls: 'http://www.swv.com'
        }
    ]

     const displaySearchResults = (m, g) => {
    
        fetch(`${config.BASE_API_URL}/search?mood=${m}&genre=${g}`, {
          'content-type': 'application-json',
        })
        .then(res => res.json())
        .then(data => {
          let newList = data;
          
          this.setState({ playlists: newList });
        
        });
      }
    
    const contextValue = {
        mood: 'happy',
        genre: 'r&b',
        playlists: playlists,
        displaySearchResults: displaySearchResults,
        
      }



describe('Results component', () => {
    let wrapper;

    

    it ('renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(
         <BrowserRouter>
           <SearchContext.Provider value={contextValue}>
             <Results />
             </SearchContext.Provider>
         </BrowserRouter>,
          
          div);
        ReactDOM.unmountComponentAtNode(div);
    })
})