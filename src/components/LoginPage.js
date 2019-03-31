import React, { Component } from 'react';
import SearchContext from '../context/SearchContext';
import Login from './AppLogin';

class LoginPage extends Component {

    render () {
        return (
            <div className='app-login'>
              <Login />
            </div>
        )
    }
}

export default LoginPage;