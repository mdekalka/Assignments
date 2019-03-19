import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import cls from 'classnames'

import Mark from '../components/Mark'

const styles = theme => ({
  root: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',

    '&::before': {
      content: "''",
      position: 'absolute',
      display: 'block',
      width: 0,
      height: '100%',
      top: 0,
      left: -1,
      border: `1px solid #edeff4`,
      zIndex: 1
    }
  },
  title:{
    fontSize: 16,
    fontWeight: 500
  },
  icon: {
    position: 'absolute',
    left: -11,
  },
  formControl: {
    marginLeft: 0
  },
  done: {
    backgroundColor: '#edeff4',
    opacity: .4,
    
    '&::before': {
      border: `1px solid ${theme.custom.violet}`
    }
  },
})

class TaskSection extends Component {
  render() {
    const { classes, title, mark, completed, children, onToggle } = this.props
    const done = completed.includes(mark)

    return (
      <div className={cls(classes.root, { [classes.done]: done })} onClick={() => onToggle(mark)}>
        {mark && <div className={classes.icon}>
          <Mark value={mark} done={done} />
        </div>}
        <Typography variant="subtitle1" gutterBottom className={classes.title}>{title}</Typography>
        <div>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(TaskSection)
