import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import AuthRoute from '../components/AuthRoute'
import { client } from '../apolloClient'

const theme = createMuiTheme({
  custom: {
    wrapper: {
      maxWidth: 1300,
      width: '100%',
      margin: '0 auto'
    },
    shark: '#26293a',
    violet: '#764abc'
  }
});

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default Root;
