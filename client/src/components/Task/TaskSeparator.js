import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cls from 'classnames'

const styles = theme => ({
  root: {
    position: 'relative',
    borderBottom: `1px solid ${theme.custom.violet}`,
  },
  square: {
    display: 'block',
    position: 'absolute',
    background: theme.custom.lightGray,
    border: `1px solid ${theme.custom.violet}`,
    left: '50%',
    top: '50%',
    marginLeft: -4,
    marginTop: -4,
    width: 8,
    height: 8,
    transform: 'rotate(45deg)'
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
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  }
})

class TaskSeparator extends Component {
  static defaultProps = {
    offset: 'medium'
  }

  render() {
    const { classes, offset }= this.props

    return (
      <div className={cls(classes.root, classes[offset])}>
        <span className={classes.square}></span>
      </div>
    );
  }
}

export default withStyles(styles)(TaskSeparator);
