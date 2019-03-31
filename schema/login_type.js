const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const LoginType = new GraphQLObjectType({
  name:  'LoginType',
  fields: () => ({
    token: { type: GraphQLString },
    refreshToken: { type: GraphQLString },
  })
});

module.exports = LoginType;