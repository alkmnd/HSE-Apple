import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './../components/styles.css';
import tokenService from './../services/TokenService';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
export default function Password() {
    let navigate = useNavigate();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username
        });
        tokenService.saveToken(token);
        navigate("/profile");
      }
    
    return(
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className='login-header'>Вход в систему</h1>
          <label>
            <p>Код доступа</p>
            <input className="login-input" type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          {/* <label>
            <p>Password</p>
            <input className="login-input" type="password" onChange={e => setPassword(e.target.value)} />
          </label> */}
          <div>
            <button type="submit" className='submit-button'>Войти</button>
          </div>
        </form>
      </div>
    )
  }
  