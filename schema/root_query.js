const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    root: {
      type: GraphQLString,
      resolve() {
        return Promise.resolve('root')
      }
    },
  })
});

module.exports = RootQuery;