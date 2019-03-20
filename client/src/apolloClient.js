import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';

import { GRAPHQL_URL } from './utils/constants'
import { defaults, resolvers, typeDefs } from './graphql/resolvers'
import { auth, TOKEN_KEY, REFRESH_TOKEN_KEY } from './services/auth'

const cache = new InMemoryCache()

const authLink = setContext(async (req, { headers }) => {
  const { token, refreshToken } = auth.getToken()

  return {
    ...headers,
    headers: {
      [TOKEN_KEY]: token || '',
      [REFRESH_TOKEN_KEY]: refreshToken || ''
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = new HttpLink({
  uri: GRAPHQL_URL,
  credentials: 'same-origin',
})

const stateLink = withClientState({ resolvers, defaults, cache, typeDefs });

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    errorLink,
    stateLink,
    authLink,
    link,
  ]),
});
