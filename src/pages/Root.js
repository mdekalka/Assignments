import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { client } from '../apolloClient'

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    );
  }
}

export default Root;
