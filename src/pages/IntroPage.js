import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TaskList from '../components/TaskList'
import background from '../assets/code-bg.svg'

const styles = theme => ({
  title: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'center',
    overflow:'hidden',
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
    backgroundColor: '#2d9dc7',
    color: theme.palette.common.white
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '400%',
    width: '100%',
    background: `url(${background})`,
    backgroundPosition: 'center center',
    backgroundSize: 500,
    animation: 'scroll 20s linear infinite'
  },
  intro: {
    marginTop: theme.spacing.unit * 3,
    fontSize: '1.15rem',
    color: theme.palette.common.white
  },
  taskListWrapper: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 6}px 0 0`,
    backgroundColor: theme.palette.grey[200]
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translate3d(0, 0, 0)'
    },
    '100%': {
      transform: 'translate3d(0, -320px, 0)'
    }
  }
})

class IntroPage extends Component {
  render() {
    const { classes } = this.props
    
    return (
      <Fragment>
        <div className={classes.title}>
          <div className={classes.background}></div>
          <Typography variant="h3" color="inherit">{`<Welcome to Assignments/>`}</Typography>
          <Typography variant="body1" className={classes.intro}>
            Here you can download testing tasks or just read them in live mode.
            <br/>
            Click on necessary topic and follow the intructions.
            <br/>
            Good Luck.
          </Typography>
        </div>

        <div className={classes.taskListWrapper}>
          <TaskList />
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(IntroPage)

