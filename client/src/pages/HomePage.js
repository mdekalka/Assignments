import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header'
import IntroPage from './IntroPage'
import ReactReduxPage from './ReactReduxPage'
import JSPage from './JSPage'

const styles = (theme) => ({
  main: {
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

class HomePage extends Component {
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Header />
        <main className={classes.main}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/task/react-redux" component={ReactReduxPage} />
            <Route exact path="/task/javascript" component={JSPage} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(HomePage)
