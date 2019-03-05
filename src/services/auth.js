import { storage } from './storage'

export const TOKEN_KEY = 'x-token'
export const REFRESH_TOKEN_KEY = 'x-refresh-token'

export const auth = {
  setToken(token, refreshToken) {
    if (token && refreshToken) {
      storage.multiSet([
        {
          key: TOKEN_KEY,
          value: token
        },
        {
          key: REFRESH_TOKEN_KEY,
          value: refreshToken
        }
      ]);
    }
  },

  getToken() {
    const tokens = storage.multiGet([TOKEN_KEY, REFRESH_TOKEN_KEY])

    return {
      token: tokens[TOKEN_KEY],
      refreshToken: tokens[REFRESH_TOKEN_KEY]
    }
  },

  removeToken() {
    storage.multiRemove([TOKEN_KEY, REFRESH_TOKEN_KEY])
  },
}