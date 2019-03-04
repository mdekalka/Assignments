import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import AuthRoute from '../components/AuthRoute'


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
