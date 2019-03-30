import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Highlight from './Highlight'

const styles = (theme) => ({
  formControl: {
    marginBottom: theme.spacing.unit * 4
  }
})

class SigninTokenForm extends Component {
  state = {
    submitted: false
  }

  onSubmit = (event) => {
    this.setState({ submitted: true })

    this.props.onSubmit(event);
  }

  render() {
    const { loading, onChange, token, classes } = this.props
    const isEmpty = this.state.submitted && !token.trim().length

    return (
      <form onSubmit={this.onSubmit}>
        <Typography variant="subtitle1">
          Log in using <Highlight>secret token</Highlight>, which you can ask for from your mentor or group manager.
        </Typography>
        <FormControl fullWidth className={classes.formControl} error={isEmpty}>
          <InputLabel htmlFor="tokenString">Token string</InputLabel>
          <Input
            name="tokenString"
            value={token}
            type="password"
            onChange={onChange}
            disabled={loading}
          />
          {isEmpty && <FormHelperText>Token string is required</FormHelperText>}
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={loading}
          >
          Sign In via token
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(SigninTokenForm)