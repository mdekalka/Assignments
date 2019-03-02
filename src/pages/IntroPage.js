import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TaskList from '../components/TaskList'

const styles = theme => ({
  title: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
  },
  intro: {
    marginTop: theme.spacing.unit * 3,
    fontSize: '1.15rem'
  }
})

class IntroPage extends Component {
  render() {
    const { classes } = this.props
    
    return (
      <div>
        <div className={classes.title}>
          <Typography variant="h3">Welcome to Assignments</Typography>
          <Typography variant="body1" className={classes.intro}>
            Here you can download testing tasks or just read them in live mode.
            <br/>
            Click on necessary topic and follow the intructions.
            <br/>
            Good Luck.
          </Typography>
        </div>
        <TaskList />
      </div>
    )
  }
}

export default withStyles(styles)(IntroPage)

