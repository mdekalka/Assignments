import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from "react-apollo";

import App from './App/App';
import { client } from '../apolloClient'

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CssBaseline />
        <App />
      </ApolloProvider>
    );
  }
}

export default Root;
