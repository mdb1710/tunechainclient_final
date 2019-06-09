import React from 'react';
import ReactDOM from 'react-dom';
import getContextProvider from 'react-test-context-provider';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Results from './Results';

Enzyme.configure({ adapter: new Adapter() });


const context = {
    playlists: [
        {
            index: 1,
    name: 'SWV Playlist',
    url: 'http://www.swv.com/group.png',
    tracks: {
        total: 20
    },
    external_urls: 'http://www.swv.com'
        }
    ]
    


}

describe('Results component', () => {
    let wrapper;

    

    it ('renders without crashing', () => {
      wrapper = shallow(<Results />)
      wrapper.setContext( { context })
      expect(wrapper.find('h3'));
    })
})