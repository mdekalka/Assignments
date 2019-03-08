import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import cls from 'classnames'

const styles = theme => ({
  root: {
    position: 'relative',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    backgroundColor: theme.palette.common.white,
    borderTop: `1px solid ${theme.palette.grey[400]}`,
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
  },
  title: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    fontSize: 16
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  content: {
    fontSize: 15,
  },
  formControl: {
    marginLeft: 0
  },
  done: {
    backgroundColor: theme.palette.grey[400]
  }
})

class ResourceSection extends Component {
  state = {
    done: false
  }

  onHandleChange = (event) => {
    this.setState(prevState => ({ done: !prevState.done }))
  }

  render() {
    const { classes, title, icon, children } = this.props
    const { done } = this.state

    return (
      <div className={cls(classes.root, { [classes.done]: done })}>
        <FormControlLabel
          control={
            <Checkbox
              checked={done}
              onChange={this.onHandleChange}
              color="primary"
              
            />
          }
          labelPlacement="start"
          className={classes.formControl}
          label={
            <Typography className={classes.title} variant="subtitle2">
              <div className={classes.icon}>{icon}</div>
              {title}
            </Typography>
          }
        />
        <Typography className={classes.content}>{children}</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(ResourceSection)
