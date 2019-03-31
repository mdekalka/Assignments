import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import MainHeader from '../components/MainHeader'
import IntroPage from './IntroPage'
import NoMatchPage from './NoMatchPage'
import ReactReduxPage from './ReactReduxPage'
import HTMLCSSPage from './HTMLCSSPage'
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
        <MainHeader />
        <main className={classes.main}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/task/react-redux" component={ReactReduxPage} />
            <Route exact path="/task/javascript" component={JSPage} />
            <Route exact path="/task/html-css" component={HTMLCSSPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(HomePage)
