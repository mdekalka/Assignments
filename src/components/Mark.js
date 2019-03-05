import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: `0 ${theme.spacing.unit / 2}px`,
    minWidth: 20,
    borderRadius: 4,
    color: theme.palette.common.white,
    backgroundColor: '#764abc',
    fontSize: '.75rem',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500
  }
})


class Mark extends Component {
  render() {
    const { classes, value } = this.props

    return (
      <span className={classes.root}>
        {value}
      </span>
    )
  }
}

export default withStyles(styles)(Mark)
