const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const { generateToken } = require('../utils/utils')
const LoginType = require('./login_type');
const randomToken = generateToken()

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    tokenLogin: {
      type: LoginType,
      args: {
        token: { type: GraphQLString },
      },
      resolve(_, { token }) {
        if (token === process.env.SECRET_TOKEN) {
          return Promise.resolve({
            token: randomToken,
            refreshToken: randomToken
          })
        } else {
          throw new Error('Provided token is not valid.')
        }
      }
    },
  }
});

module.exports = mutations;