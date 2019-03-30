const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const { defaultUser }  = require('../constants/constants')
const LoginType = require('./login_type');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    tokenLogin: {
      type: LoginType,
      args: {
        token: { type: GraphQLID },
      },
      resolve(parentValue, { token }) {
        if (token === process.env.SECRET_TOKEN) {
          return Promise.resolve(defaultUser)
        } else {
          return Promise.reject({
            errorMessage: 'Provided token is not valid.'
          })
        }
      }
    },
  }
});

module.exports = mutations;