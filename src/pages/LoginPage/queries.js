import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      errorCode
      errorMessage
      refreshToken
      token
    }
  }
`;

export const SAVE_TOKEN = gql`
  mutation ($token: String!, $refreshToken: String!) {
    saveToken(token: $token, refreshToken: $refreshToken) @client
  }
`
