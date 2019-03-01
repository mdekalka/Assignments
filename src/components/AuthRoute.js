import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { GET_AUTH_STATE } from '../graphql/queries'


class AuthRoute extends React.Component {
  render() {
    const  { component: Component, ...rest } = this.props

    return (
      <Query query={GET_AUTH_STATE}>
        {({ data, loading }) => {
          if (loading) return null

          return (
            <Route {...rest} render={props =>
              data.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
              }
            />
          )
        }}
      </Query>
    )
  }
}

export default AuthRoute
