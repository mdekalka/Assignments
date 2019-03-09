import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    fontStyle: 'italic',
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
    borderLeft: `3px solid #61dafb`,
    fontSize: 15
  }
})

class TaskItem extends Component {
  render() {
    const { classes, item } = this.props

    return (
      <Typography className={classes.root}>{item}</Typography>
    )
  }
}

export default withStyles(styles)(TaskItem)
