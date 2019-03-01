export const TOKEN_KEY = 'x-token'
export const REFRESH_TOKEN_KEY = 'x-refresh-token'

export const auth = {
  setToken(token, refreshToken) {
    if (token && refreshToken) {
      try {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
      } catch(err) {
        throw new Error(err.message)
      }
    }
  },

  getToken() {
    try {
      return {
        token: localStorage.getItem(TOKEN_KEY),
        refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
      }
    } catch(err) {
      return {
        token: null,
        refreshToken: null
      };
    }
  },

  removeToken() {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    } catch(err) {
      throw new Error(err.message)
    }
  },
}