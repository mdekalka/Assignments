import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  formControl: {
    marginBottom: theme.spacing.unit * 2
  },
  buttonWrapper: {
    position: 'relative',
    marginTop: theme.spacing.unit * 2
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

class SigninForm extends Component {
  state = {
    submitted: false
  }

  onSubmit = (event) => {
    this.setState({ submitted: true })

    this.props.onSubmit(event)
  }

  isEmptyField(field) {
    return this.state.submitted && !field.trim().length
  }

  render() {
    const { classes, loading, username, password, error, onChange }= this.props
    const isUsernameEmpty = this.isEmptyField(username)
    const isPasswordEmpty = this.isEmptyField(password)

    return (
      <form noValidate autoComplete="off" className={classes.form} onSubmit={this.onSubmit}>
      <FormControl fullWidth error={isUsernameEmpty} className={classes.formControl}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          autoFocus
          name="username"
          value={username}
          onChange={onChange}
          disabled={loading}
        />
        {isUsernameEmpty && <FormHelperText>Username is required</FormHelperText>}
      </FormControl>

      <FormControl fullWidth error={isPasswordEmpty} className={classes.formControl}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          value={password}
          type="password"
          onChange={onChange}
          disabled={loading}
        />
        {isPasswordEmpty && <FormHelperText>Password is required</FormHelperText>}
      </FormControl>

      {error && <FormHelperText className={classes.error} error>{error}</FormHelperText>}

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
  }
}

export default  withStyles(styles)(SigninForm)

