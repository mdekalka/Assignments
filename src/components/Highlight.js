import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

})

 class Highlight extends Component {
  render() {
    const { classes, children } = this.props

    return (
      <span className={classes.root}>
        {children}
      </span>
    )
  }
}

export default withStyles(styles)(Highlight)
