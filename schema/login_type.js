const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = graphql;

const LoginType = new GraphQLObjectType({
  name:  'LoginType',
  fields: () => ({
    token: { type: GraphQLID },
    refreshToken: { type: GraphQLID },
    errorCode: { type: GraphQLInt },
    errorMessage: { type: GraphQLString },
    firstNameEng: { type: GraphQLString },
    lastNameEng: { type: GraphQLString },
    image: { type: GraphQLString },
    position: { type: GraphQLString },
    profileId: { type: GraphQLString },
  })
});

module.exports = LoginType;