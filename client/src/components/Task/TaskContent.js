import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.custom.wrapper,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.common.white,
    boxShadow: 'rgba(102, 119, 136, 0.03) 0px 6px 8px, rgba(102, 119, 136, 0.3) 0px 1px 2px'
  },
})


class TaskContent extends Component {
  render() {
    const { classes, children } = this.props

    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(TaskContent);
