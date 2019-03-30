import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      errorCode
      errorMessage
      refreshToken
      token
      firstNameEng
      lastNameEng
      image
      position
      profileId
    }
  }
`;

export const SIGN_IN_WITH_TOKEN = gql`
  mutation($token: String!) {
    tokenLogin(token: $token) {
      errorCode
      errorMessage
      refreshToken
      token
      firstNameEng
      lastNameEng
      image
      position
      profileId
    }
  }
`

export const GET_AUTH_STATE = gql`
  query {
    isAuthenticated @client
  }
`

export const SAVE_TOKEN = gql`
  mutation ($token: String!, $refreshToken: String!) {
    saveToken(token: $token, refreshToken: $refreshToken) @client
  }
`
