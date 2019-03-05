import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
    backgroundColor: theme.palette.common.white
  },
  title: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    fontSize: 16
  },
  icon: {
    position: 'absolute',
    left: -25
  },
  content: {
    fontSize: 15
  }
})

class ResourceSection extends Component {
  render() {
    const { classes, title, icon, children } = this.props

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="subtitle2">
          <div className={classes.icon}>{icon}</div>
          {title}
        </Typography>
        <Typography className={classes.content}>{children}</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(ResourceSection)
