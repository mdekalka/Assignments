import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage/LoginPage'
import HomePage from './HomePage'
// import withAuth from '../HOCs/withAuth'
import AuthRoute from '../components/AuthRoute'

// const WithAuthHomePage = withAuth(HomePage)

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <AuthRoute path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default App;
