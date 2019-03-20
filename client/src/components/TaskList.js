import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TaskCard from '../components/TaskCard'
import reactLogo from '../assets/icons/react.svg'
import reduxLogo from '../assets/icons/redux.svg'
import jsLogo from '../assets/icons/js.svg'
import htmlLogo from '../assets/icons/html.svg'
import cssLogo from '../assets/icons/css.svg'

const styles = (theme) => ({
  taskList: {
    width: 1200,
    margin: '0 auto'
  },
})

class TaskList extends Component {
  render() {
    const { classes }= this.props
    
    return (
      <div className={classes.taskList}>
        <Grid container justify="center" spacing={24}>
          <Grid item xs={3}>
            <TaskCard
              href="/task/react-redux"
              title="React/Redux"
              description="Create shop application with adding/removing items to a cart list, having separate route for each item."
              header={
                <Fragment>
                  <img src={reactLogo} alt="react" />
                  <img src={reduxLogo} alt="redux" />
                </Fragment>
              }
              />
          </Grid>
          <Grid item xs={3}>
            <TaskCard
              href="/task/javascript"
              title="Javascript"
              description="Create shop application with adding/removing items to a cart list, having separate route for each item."
              header={
                <Fragment>
                  <img src={jsLogo} alt="javascript" />
                </Fragment>
              }
              />
          </Grid>
          <Grid item xs={3}>
            <TaskCard
              href="/task/react-redux"
              title="React/Redux"
              description="Create shop application with adding/removing items to a cart list, having separate route for each item."
              header={
                <Fragment>
                  <img src={htmlLogo} alt="HTML" />
                  <img src={cssLogo} alt="CSS" />
                </Fragment>
              }
              />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(TaskList)