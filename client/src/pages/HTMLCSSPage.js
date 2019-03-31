import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

 class HTMLCSSPage extends Component {
  render() {
    return (
      <div>
        html
      </div>
    )
  }
}

export default withStyles(styles)(HTMLCSSPage)