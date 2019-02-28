const TOKEN = 'sessionId';

export const auth = {
  setToken(token) {
    if (token) {
      try {
        localStorage.setItem(TOKEN, token);
      } catch(err) {
        console.log(err);
      }
    }
  },

  getToken() {
    try {
      return localStorage.getItem(TOKEN);
    } catch(err) {
      console.log(err);
      return null;
    }
  },

  removeToken() {
    try {
      localStorage.removeItem(TOKEN);
    } catch(err) {
      console.log(err);
    }
  },

  isAuthenticated() {
    const token = this.getToken();
    this.isAuth = !!token && !this.isTokenExpired(token);
    
    return !!token && !this.isTokenExpired(token);
  }
}