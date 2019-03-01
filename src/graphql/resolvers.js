import gql from 'graphql-tag';

export const defaults = {
  __typename: 'Query',
  isAuthenticated: false,
  user: {
    image: '',
    firstName: '',
    lastName: ''
  }
}

export const typeDefs = gql`
  extend type Query {
    isAuthenticated: Boolean!
    user: User!
  }

  extend type User {
    image: String
    firstName: String
    lastName: String
  }
`

export const resolvers = {
  Query: {
    isAuthenticated: (_, __, { cache }) => {
      const query = gql`
        query {
          isAuthenticated @client
        }
      `

      const { isAuthenticated } = cache.readQuery(query)
      debugger

      return isAuthenticated
    }
  }
}
