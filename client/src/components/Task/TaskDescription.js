import React, { Component, Fragment, Children } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import cls from 'classnames'

const styles = theme => ({
  root: {
    backgroundColor: theme.custom.lightGray,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit + 2}px`,
    borderLeft: `3px solid #61dafb`,
    fontSize: 15
  },
  title:{
    fontSize: 16,
    fontWeight: 500
  },
  large: {
    fontSize: 16,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  }
})

class TaskDescription extends Component {
  render() {
    const { classes, children, title, large } = this.props

    return (
      <Fragment>
        {title && <Typography variant="subtitle1" className={classes.title}>{title}</Typography>}
        {Children.map(children, (item, index) => (
          <Typography key={index} className={cls(classes.root, { [classes.large]: large })}>{item}</Typography>
        ))}
      </Fragment>
    )
  }
}

export default withStyles(styles)(TaskDescription)
