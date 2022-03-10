import React from 'react';
import './Login.css';
export default function Login({loginPage}) {
    const handleSubmit = async e => {
        e.preventDefault();
      }
    return(
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" onChange />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )
  }