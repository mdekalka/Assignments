import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Mutation, compose, withApollo, Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg'
import { styles } from './styles'
import { SIGN_IN, SAVE_TOKEN, GET_AUTH_STATE } from '../../graphql/queries'


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    error: null,
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
      this.setState({ error: login.errorMessage});

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
    const { username, password, error } = this.state
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
                    {(signIn, { loading, newtworkError }) => {
                      /* TODO: do a f*cking snackbar */
                      if (newtworkError) throw newtworkError
        
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
                              onChange={this.onInputChange}
                              disabled={loading}
                            />
                            { this.isInvalidField(password) && <FormHelperText>Password is required</FormHelperText> }
                          </FormControl>
        
                          { error && <FormHelperText className={classes.error} error>{error}</FormHelperText> }
        
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            className={classes.button}
                            disabled={loading}
                            >
                            Sign In
                          </Button>
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
