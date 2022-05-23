import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import tokenService from '../../services/TokenService';
import api from '../../http';

/**
 * Страница для авторизации.
 * @returns Возвращает html-компонент.
 */
export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState('');

  /**
   * Отправка кода.
   * @param {*} event - событие.
   */
  async function sendCode(event) {
    event.preventDefault();
    const status = await api.sendCode(email);
    if (status !== 200) return;
    event.target.value = '';
    setSent(!sent);
  }

  /**
   * Проверка кода и перенаправление на страницу с профилем,
   * если код введен.
   * @param {*} event 
   * @returns 
   */
  async function confirmCode(event) {
    event.preventDefault();
    const token = await api.login(email, code);
    if (!token) return;
    // Сохранение токена.
    tokenService.saveToken(token);
    navigate("/profile");
  }

  return(
    <div className="login-wrapper">
      {!sent ?
        <form className="login-form" onSubmit={sendCode}>
          <h1 className='login-header'>Вход в систему</h1>
          <label>
            <p>Email</p>
            <input className="login-input" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <div>
            <button type="submit" className='submit-button'>Отправить код</button>
          </div>
        </form>
      :
        <form className="login-form" onSubmit={confirmCode}>
          <h1 className='login-header'>Вход в систему</h1>
          <label>
            <p>Код подтверждения</p>
            <input className="login-input" type="text" value={code} onChange={e => setCode(e.target.value)} />
          </label>
          <div>
            <button type="submit" className='submit-button'>Подтвердить код</button>
          </div>
        </form>
      }
      
    </div>
  )
}
