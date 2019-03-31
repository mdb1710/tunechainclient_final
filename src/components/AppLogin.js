import React, { Component } from 'react';
import SearchContext from '../context/SearchContext';
import { BASE_API_URL } from '../config';

class Login extends Component {

static contextType = SearchContext;

handleUserChange = (e) => {
    console.log(e.target.value);
    this.context.setUsername(e.target.value);
   
}

handlePassChange = (e) => {
    console.log(e.target.value);
    this.context.setPassword(e.target.value);
}

handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const { username, password } = this.context;
    
    // let username = this.refs.username.value;
    // let password = this.refs.password.value;
    console.log(username, password);
    // fetch(`${BASE_API_URL}/login?username=${username}&password=${password}`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application-json'
    //     },
    //     body: JSON.stringify({ username, password })
    // })
    // .then (res => res.json());
    // .then()
    
    // this.context.onLoginSuccess()
}


    

    render () {
        return (
            <>
              <div className="login-form">
                <h3>Sign In Here</h3>
                <form onSubmit={(event) => this.handleLoginSubmit(event)}>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" ref="username" onChange={this.handleUserChange}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" ref="password" onChange={this.handlePassChange}/>
                        <button type='submit'>Submit</button>
                    </fieldset>
                </form>
              </div>
            </>
        )
    }
}

export default Login;