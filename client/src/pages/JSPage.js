import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import TaskHeader from '../components/TaskHeader'
import TaskHeadeline from '../components/TaskHeadline'
import TaskContent from '../components/TaskContent'
import TaskSection from '../components/TaskSection'
import TaskItem from '../components/TaskItem'

import jsLogo from '../assets/icons/js.svg'
import { utilsTask, robotTask } from '../data/javaScriptData'

const logos = [jsLogo]

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

class JSPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <TaskHeader
          title="JavaScript"
          description="Create your own JavaScript utils functions. Implement real-world user story"
          logos={logos}
        />
        <TaskContent>
          <TaskHeadeline title="Utils task" gutter />
          {utilsTask.map(task => (
            <TaskSection
              key={task.id}
              title={task.title}
              mark={task.mark}
            >
              {task.content.map((content, i) =>
                <TaskItem key={i}>{content}</TaskItem>
              )}
            </TaskSection>
          ))}
          <br/>
          <TaskHeadeline title="Robot task" gutter />
          {robotTask.map(task => (
            <TaskSection
              key={task.id}
              title={task.title}
              mark={6}
              >
              {task.content.map((content, i) =>
                <TaskItem key={i}>{content}</TaskItem>
              )}
            </TaskSection>
          ))}
          <br/>
          <TaskHeadeline title="Logging library" gutter />
        </TaskContent>
      </div>
    )
  }
}

export default withStyles(styles)(JSPage)
