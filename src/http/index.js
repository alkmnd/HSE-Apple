const BASE_URL = 'http://localhost:8080';

/**
 * Api для отправки кода.
 */
class Api {
  async sendCode(email) {
    return fetch(`${BASE_URL}/code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(response => response.status);
  }

  async login(email, code) {
    return fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        code: code
      })
    })
      .then(response => response.json())
      .then(data => data.token)
      .catch(err => null);
  }
}

export default new Api();