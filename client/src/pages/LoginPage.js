import React, { Component } from 'react'
import { Mutation, compose, withApollo, Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SigninForm from '../components/SigninForm'
import SigninTokenForm from '../components/SigninTokenForm'
import logo from '../assets/icons/logo.svg';
import { SIGN_IN, SIGN_IN_WITH_TOKEN, SAVE_TOKEN, GET_AUTH_STATE } from '../graphql/queries';
import { storage } from '../services/storage';
import { PROFILE_KEY } from '../utils/constants';
import svg from '../assets/main-bg.svg';


const styles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#202934',
    background: `url(${svg}) no-repeat center center fixed`,
    backgroundSize: 'cover'
  },
  paper: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`,
    maxWidth: 450,
  },
  logo: {
    marginRight: theme.spacing.unit * 2
  },
  headline: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 3
  },
  divider: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  }
})

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    tokenString: '',
    errorMessage: null,
    submitted: false,
  }

  onInputChange = (event) => {
    const { target } = event

    this.setState({
      [target.name]: target.value
    })
  }

  onSignIn = (signIn) => (event) => {
    event.preventDefault()
    this.setState({ submitted: true, errorMessage: null })

    if (!this.state.username.trim() || !this.state.password.trim()) {
      return
    }

    signIn({ variables: {
      login: this.state.username,
      password: this.state.password
    }})
  }

  onSignInWithToken = (signInWithToken) => (event) => {
    event.preventDefault()
  }

  onSignInCompleted = async ({ login }) => {
    if (login.errorCode !== 0 && login.errorMessage) {
      this.setState({ errorMessage: login.errorMessage});

      return
    }

    storage.setItem(PROFILE_KEY, login.profileId)

    await this.props.client.mutate({
      mutation: SAVE_TOKEN,
      variables: {
        token: login.token,
        refreshToken: login.refreshToken
      }
    })

    this.props.history.push('/')
  }

  onSignInFailed = (error) => {
    this.setState({ errorMessage: error.message })
  }

  isInvalidField(field) {
    return this.state.submitted && !field.trim().length
  }

  render() {
    const { username, password, tokenString, errorMessage } = this.state
    const { classes } = this.props

    return (
      <Query query={GET_AUTH_STATE}>
        {({ data, loading }) => {
          if (loading) return null

          if (data.isAuthenticated) {
            return <Redirect to={{ pathname: "/" }} />
          } else {
            return (
              <div className={classes.root}>
                <Paper className={classes.paper} elevation={16}>
                  <div className={classes.headline}>
                    <img src={logo} alt="main logo" className={classes.logo} />
                    <Typography variant="h4">Assignments</Typography>
                  </div>
        
                  <Typography variant="subtitle1" gutterBottom>Log in with your domain account.</Typography>
        
                  <Mutation mutation={SIGN_IN} onCompleted={this.onSignInCompleted} onError={this.onSignInFailed}>
                    {(signIn, { loading }) => {
                      return (
                        <SigninForm
                          error={errorMessage}
                          loading={loading}
                          username={username}
                          password={password}
                          onChange={this.onInputChange}
                          onSubmit={this.onSignIn(signIn)}
                        />
                      )
                    }}
                  </Mutation>

                  <Typography className={classes.divider} align="center" variant="button" gutterBottom>or</Typography>

                  <Mutation mutation={SIGN_IN_WITH_TOKEN}>
                    {(signInWithToken, { loading }) => {
                      return (
                        <SigninTokenForm
                          loading={loading}
                          token={tokenString}
                          onChange={this.onInputChange}
                          onSubmit={this.onSignInWithToken(signInWithToken)}
                        />
                      )
                    }}
                  </Mutation>
                </Paper>
              </div>
            )
          }
        }}
      </Query>
    )
  }
}

export default compose(
  withApollo,
  withStyles(styles)
)(LoginPage)
