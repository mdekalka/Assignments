import gql from 'graphql-tag';

import { auth } from '../services/auth'

export const defaults = {}

export const typeDefs = gql`
  extend type Query {
    isAuthenticated: Boolean
  }
`

export const resolvers = {
  Query: {
    isAuthenticated: () => {
      const { token, refreshToken } = auth.getToken()

      return !!(token && refreshToken)
    }
  },
  Mutation: {
    saveToken: (_, { token, refreshToken }, { cache }) => {
      if (token && refreshToken) {
        auth.setToken(token, refreshToken);

        return null
      }

      return null
    }
  }
}
