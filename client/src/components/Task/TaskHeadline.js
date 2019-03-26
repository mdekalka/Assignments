import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    borderBottom: `2px solid ${theme.custom.violet}`,
    color: theme.custom.violet,
  },
})

class TaskHeadline extends Component {
  render() {
    const { classes, title, gutter } = this.props

    return (
      <div>
        <Typography variant="h6" gutterBottom={gutter} className={classes.root}>{title}</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(TaskHeadline);
