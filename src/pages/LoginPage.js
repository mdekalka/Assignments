import React, { Component } from 'react'
import { Mutation, compose, withApollo, Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import logo from '../assets/icons/logo.svg'
import { SIGN_IN, SAVE_TOKEN, GET_AUTH_STATE } from '../graphql/queries'

const styles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
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
  formControl: {
    marginBottom: theme.spacing.unit * 2
  },
  error: {
    fontSize: 15,
  },
  buttonWrapper: {
    position: 'relative',
    marginTop: theme.spacing.unit * 2,
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  }
})

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: null,
    submitted: false
  }

  onInputChange = (event) => {
    const { target } = event

    this.setState({
      [target.name]: target.value
    })
  }

  onSignIn = (signInMutation) => (event) => {
    event.preventDefault()
    this.setState({ submitted: true })

    if (!this.state.username.trim() || !this.state.password.trim()) {
      return
    }

    signInMutation({ variables: {
      login: this.state.username,
      password: this.state.password
    }})
  }

  onSignInCompleted = async ({ login }) => {
    if (login.errorCode !== 0 && login.errorMessage) {
      this.setState({ errorMessage: login.errorMessage});

      return
    }

    await this.props.client.mutate({
      mutation: SAVE_TOKEN,
      variables: {
        token: login.token,
        refreshToken: login.refreshToken
      }
    })

    this.props.history.push('/')
  }

  isInvalidField(field) {
    return this.state.submitted && !field.trim().length
  }

  render() {
    const { username, password, errorMessage } = this.state
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
        
                  <Typography variant="subtitle1" gutterBottom>Login with your domain account:</Typography>
        
                  <Mutation mutation={SIGN_IN} onCompleted={this.onSignInCompleted}>
                    {(signIn, { loading, error }) => {
                      /* TODO: do a f*cking snackbar */
                      if (error) throw error
        
                      return (
                        <form noValidate autoComplete="off" className={classes.form} onSubmit={this.onSignIn(signIn)}>
                          <FormControl fullWidth error={this.isInvalidField(username)} className={classes.formControl}>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input
                              name="username"
                              value={username}
                              onChange={this.onInputChange}
                              disabled={loading}
                            />
                            { this.isInvalidField(username) && <FormHelperText>Username is required</FormHelperText> }
                          </FormControl>
        
                          <FormControl fullWidth error={this.isInvalidField(password)} className={classes.formControl}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                              name="password"
                              value={password}
                              type="password"
                              onChange={this.onInputChange}
                              disabled={loading}
                            />
                            { this.isInvalidField(password) && <FormHelperText>Password is required</FormHelperText> }
                          </FormControl>
        
                          { errorMessage && <FormHelperText className={classes.error} error>{errorMessage}</FormHelperText> }
        
                          <div className={classes.buttonWrapper}>
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              fullWidth
                              disabled={loading}
                              >
                              Sign In
                            </Button>
                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                          </div>

                        </form>
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
