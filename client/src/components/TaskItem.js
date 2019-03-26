import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import cls from 'classnames'

const styles = theme => ({
  root: {
    backgroundColor: theme.custom.lightGray,
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
    borderLeft: `3px solid #61dafb`,
    fontSize: 15
  },
  large: {
    fontSize: 16,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  }
})

class TaskItem extends Component {
  render() {
    const { classes, children, large } = this.props

    return (
      <Typography className={cls(classes.root, { [classes.large]: large })}>{children}</Typography>
    )
  }
}

export default withStyles(styles)(TaskItem)
