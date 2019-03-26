import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cls from 'classnames'

import Mark from '../../components/Mark'


const styles = theme => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#f7f7f7'
    }
  },
  markLine: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,

    '&::before': {
      content: "''",
      position: 'absolute',
      display: 'block',
      width: 0,
      height: '100%',
      top: 0,
      left: -1,
      border: `1px solid ${theme.custom.lightGray}`,
      zIndex: 1
    }
  },
  done: {
    backgroundColor: theme.custom.lightGray,
    opacity: .4,

    '&:hover': {
      backgroundColor: theme.custom.lightGray
    },
    
    '&::before': {
      border: `1px solid ${theme.custom.violet}`
    }
  },
  icon: {
    position: 'absolute',
    left: -11,
  },
  formControl: {
    marginLeft: 0
  },
})

class TaskSection extends Component {
  static defaultProps = {
    showMark: true,
    completed: [],
    onToggle: () => {}
  }

  render() {
    const { classes, mark, showMark, completed, children, onToggle } = this.props
    const done = completed.includes(mark)

    return (
      <div
        className={cls(classes.root, { [classes.done]: done, [classes.markLine]: showMark })}
        onClick={() => onToggle(mark)}
      >
        {showMark &&
          <div className={classes.icon}>
            <Mark value={mark} done={done} />
          </div>
        }
        <div>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(TaskSection)
