import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Homepage from './Homepage';

Enzyme.configure({ adapter: new Adapter() });

describe ('Homepage component', () => {
    
    let wrapper;

    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
         <BrowserRouter>
           <Homepage />
         </BrowserRouter>,
          
          div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('contains a header div', () => {
        wrapper = shallow(
            <header>
              <h2>Find the perfect songs for your current mood</h2>
            </header>
        )

        expect(wrapper.find('h2'));
    })
})