import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      errorCode
      errorMessage
      refreshToken
      token
      profileId
      image
      firstName
      lastName
      employmentDate
    }
  }
`;
