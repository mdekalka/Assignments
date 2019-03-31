import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import cls from 'classnames';


const styles = theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',

    '&::before, &::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      height: 1,
      background: theme.custom.violet,
      width: `calc(50% - 20px)`,
    },

    '&::before': {
      left: 0,
      marginRight: 20,
    },

    '&::after': {
      right: 0,
      marginLeft: 20,
    },
  },
  small: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  medium: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  large: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  }
})

class Divider extends Component {
  render() {
    const { classes, title, offset = 'medium' } = this.props

    return (
      <div className={cls(classes.root, classes[offset])}>
        <Typography align="center" variant="button" gutterBottom>{title}</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Divider)
