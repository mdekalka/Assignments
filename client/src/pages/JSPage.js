import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'react-apollo';

import { TaskJumbotron, TaskHeadline, TaskContent, TaskSection, TaskDescription, TaskExtra, TaskLink, TaskSeparator } from '../components/Task'
import withCompleted from '../HOCs/withCompleted'

import jsLogo from '../assets/icons/js.svg'
import { utilsTask, robotTask, loggerData, lectures } from '../data/javaScriptData'
import { JAVASCRIPT_COMPLETED_KEY } from '../utils/constants'


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
    const { classes, completed, onToggle } = this.props

    return (
      <div className={classes.root}>
        <TaskJumbotron
          title="JavaScript"
          description="Create your own JavaScript utils functions. Implement real-world user story"
          logos={logos}
        />

        <TaskContent>
          <TaskExtra title="Before you start you can take a look at JavaScript screencasts & useful links:">
            {lectures.map(lecture => <TaskLink key={lecture.id} title={lecture.title} href={lecture.href} />)}
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Utils task" gutter />
          {utilsTask.map(task => (
            <TaskSection completed={completed} onToggle={onToggle} key={task.id} mark={task.mark}>
              <TaskDescription title={task.title}>{task.content}</TaskDescription>
            </TaskSection>
          ))}

          <TaskSeparator offset="large" />

          <TaskHeadline title="Robot task" gutter />
          {robotTask.map(task => (
            <TaskSection completed={completed} onToggle={onToggle} key={task.id} mark={task.mark} showMark={false}>
              <TaskDescription title={task.title}>{task.content}</TaskDescription>
            </TaskSection>
          ))}
          
          <TaskSeparator offset="large" />

          <TaskHeadline title="Logging library" gutter />
          {loggerData.map(task => (
            <TaskSection completed={completed} onToggle={onToggle} key={task.id} mark={task.mark} showMark={false}>
              <TaskDescription title={task.title}>{task.content}</TaskDescription>
            </TaskSection>
          ))}

          <TaskDescription title={"piu"}></TaskDescription>
        </TaskContent>
      </div>
    )
  }
}

export default compose(
  withCompleted(JAVASCRIPT_COMPLETED_KEY),
  withStyles(styles)
)(JSPage)
