import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#202934'
  }
})

class NoMatchPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        404
      </div>
    )
  }
}

export default withStyles(styles)(NoMatchPage)
