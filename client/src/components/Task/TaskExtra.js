import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { TaskHeadline } from './index'

const styles = theme => ({
  content: {
    padding: theme.spacing.unit,
    background: theme.custom.lightGray,
    border: `1px solid ${theme.palette.primary.light}`
  }
})

class TaskExtra extends Component {
  render() {
    const { classes, title, children } = this.props

    return (
      <div>
        <TaskHeadline title={title} gutter />
        <div className={classes.content}>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(TaskExtra)
