import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/icons/logo.svg'


const styles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  paper: {
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`,
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
  form: {
    maxWidth: 350,
    // backgroundColor: theme.palette.background.default
  },
  button: {
    marginTop: theme.spacing.unit * 2
  }
})

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

  onSignIn = (event) => {
    event.preventDefault()

    this.setState({ submitted: true })
  }

  isInvalidField(field) {
    return this.state.submitted && !field.trim().length
  }

  render() {
    const { username, password, error } = this.state
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={16}>
          <div className={classes.headline}>
            <img src={logo} alt="main logo" className={classes.logo} />
            <Typography variant="h4">Assignments</Typography>
          </div>

          <Typography variant="subtitle1">Login to your account:</Typography>

          <form noValidate autoComplete="off" className={classes.form} onSubmit={this.onSignIn}>

            <FormControl fullWidth error={this.isInvalidField(username)} className={classes.formControl}>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                name="username"
                value={username}
                onChange={this.onInputChange}
              />
              { this.isInvalidField(username) && <FormHelperText>Username is required</FormHelperText> }
            </FormControl>

            <FormControl fullWidth error={this.isInvalidField(password)} className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                value={password}
                onChange={this.onInputChange}
              />
              { this.isInvalidField(password) && <FormHelperText>Password is required</FormHelperText> }
            </FormControl>

            <Button variant="contained" color="primary" type="submit" className={classes.button} fullWidth>
              Sign In
            </Button>
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(LoginPage)
