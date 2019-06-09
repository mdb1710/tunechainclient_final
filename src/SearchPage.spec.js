import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Searchpage from './SearchPage';



Enzyme.configure({ adapter: new Adapter() });

describe ('Search page component', () => {
    let wrapper;

    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
              <Searchpage />
            </BrowserRouter>, 
        div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('renders a heading', () => {
        wrapper=shallow(
            <h2>Fill Out At Least One of the Search Area</h2>
        )
        expect(wrapper.find('h2'))
    });

    it('renders a search-form div', () => {
        wrapper=shallow(
           <Searchpage />
        )

        expect(wrapper.find(".searchform"));
        expect(wrapper.find('#artist-search-form'));
    })
})