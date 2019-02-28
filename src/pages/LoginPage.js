import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

const styles = (theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },

  paper: {
    padding: theme.spacing.unit * 2,
  },

  form: {
    maxWidth: 450,
    backgroundColor: theme.palette.background.default
  }
})

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    error: null
  }

  onInputChange = (event) => {
    const { target } = event

    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    const { username, password, error,  } = this.state
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={4}>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField
              label="Name"
              name="username"
              // className={classes.textField}
              value={username}
              onChange={this.onInputChange}
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              name="password"
              // className={classes.textField}
              value={password}
              onChange={this.onInputChange}
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(LoginPage)
