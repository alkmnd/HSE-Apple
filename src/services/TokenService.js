class TokenService {
  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  delToken() {
    localStorage.setItem('token', '');
  }
}

export default new TokenService();
