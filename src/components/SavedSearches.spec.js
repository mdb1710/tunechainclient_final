import React from 'react';
import ReactDOM from 'react-dom';
import getContextProvider from 'react-test-context-provider';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

import SavedSearches from './SavedSearches';

Enzyme.configure({ adapter: new Adapter() });




describe('Saved searches component', () => {
    let wrapper;

    

    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
         <BrowserRouter>
           <SavedSearches />
         </BrowserRouter>,
          
          div);
        ReactDOM.unmountComponentAtNode(div);
    })
})