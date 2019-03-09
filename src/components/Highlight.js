import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'inline-block',
    color: '#764abc',
    padding: `0 ${theme.spacing.unit / 2}px`,
    fontWeight: 500
  }
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
