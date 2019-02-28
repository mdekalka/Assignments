import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage'
import HomePage from './HomePage'
import PrivateRoute from '../components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default App;
