import gql from 'graphql-tag';

import { auth } from '../services/auth'


export const defaults = {
}

export const typeDefs = gql`
  extend type Query {
    isAuthenticated: Boolean,
  }
`

export const resolvers = {
  Query: {
    isAuthenticated: () => {
      const { token, refreshToken } = auth.getToken()

      return !!(token && refreshToken)
    },
  },
  Mutation: {
    saveToken: (_, { token, refreshToken, profileId }, { cache }) => {
      if (token && refreshToken) {
        auth.setToken(token, refreshToken);

        cache.writeData({ data: { isAuthenticated: true } });

        return null
      }

      return null
    },

    logout: (_, __, { cache }) => {
      cache.writeData({ data: { isAuthenticated: false } });
      auth.removeToken()

      return null
    }
  }
}
