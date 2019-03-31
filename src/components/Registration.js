import React, { Component } from 'react';

class Registration extends Component{


    render(){
        return(
            <>
              <div className="login-form">
                <h3>First Time Users Register Here</h3>
                <form>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                        <label htmlFor="username-confirm">Confirm Username</label>
                        <input type="text" name="username" />
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" />
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input type="text" name="password" />
                        <button type='submit'>Submit</button>
                    </fieldset>
                </form>
              </div>
            </>
        )
    }
}