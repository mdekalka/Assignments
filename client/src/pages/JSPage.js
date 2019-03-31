import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { TaskJumbotron, TaskHeadline, TaskContent, TaskSection, TaskDescription, TaskExtra, TaskLink, TaskSeparator } from '../components/Task'
import withCompleted from '../HOCs/withCompleted'
import jsLogo from '../assets/icons/js.svg'
import downloadJS from '../assets/files/js-task.docx'
import { utilsTask, robotTask, loggerData, lectures } from '../data/javaScriptData'
import { JAVASCRIPT_COMPLETED_KEY, HEADER_HEIGHT } from '../utils/constants'


const logos = [jsLogo]

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  section: {
    position: 'relative',
    padding: '26px 20px 50px',
    color: 'white',
    background: theme.custom.shark,
    textAlign: 'center',
    marginBottom: 80,
  },
  button: {
    marginTop: 14,
    marginBottom: 14
  },
  fab: {
    position: 'absolute',
    left: '50%',
    marginLeft: -28,
    bottom: -28
  }
})

class JSPage extends Component {
  taskRef = React.createRef();

  scrollTo = () => {
    window.scrollTo(0, this.taskRef.current.offsetTop - HEADER_HEIGHT);
  }

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
          <div className={classes.section}>
            <Typography color="inherit" variant="subtitle1">If you prefer "paper" version of this assignment - you can download it here:</Typography>
            <Button variant="contained" color="secondary" href={downloadJS} className={classes.button}>
              Download JavaScript Assignment
            </Button>
            <Typography color="inherit" variant="subtitle1"> and leave this page. <br/> Downloaded document contains all tasks steps & descriptions,    otherwise continue with Web version.</Typography>
            <Fab color="primary" className={classes.fab} onClick={this.scrollTo}>
              <ExpandMore />
            </Fab>
          </div>

          <div ref={this.taskRef}/>

          <TaskExtra title="Before you start you can take a look at JavaScript screencasts & useful links:">
            {lectures.map(lecture => <TaskLink key={lecture.id} title={lecture.title} href={lecture.href} />)}
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskExtra title="When you are ready to implement:">
            <Fragment>
            <Typography>1) Create new account at <a target="_blank" rel="noopener noreferrer" href="https://github.com/">Github</a> or <a target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/">Bitbucket</a> ( if you don't have it yet)</Typography>
            <Typography>2) Create new repository and then create 3 branches in this repository for each JavaScript task.</Typography>
            <Typography>3) Push your code for each task into related branch.</Typography>
            <Typography>4) When you finish all tasks - ping your mentor via slack/skype/email and share repository link with him.</Typography>
            </Fragment>
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskHeadline title="1) Utils task" gutter />
          {utilsTask.map(task => (
            <TaskSection completed={completed} onToggle={onToggle} key={task.id} mark={task.mark}>
              <TaskDescription title={task.title}>{task.content}</TaskDescription>
            </TaskSection>
          ))}

          <TaskSeparator offset="large" />

          <TaskHeadline title="2) Robot task" gutter />
          {robotTask.map(task => (
            <TaskSection completed={completed} onToggle={onToggle} key={task.id} mark={task.mark} showMark={false}>
              <TaskDescription title={task.title}>{task.content}</TaskDescription>
            </TaskSection>
          ))}
          
          <TaskSeparator offset="large" />

          <TaskHeadline title="3) Logging library (read some notes for this task below)" gutter />
          {loggerData.map(task => (
            <TaskSection completed={completed} onToggle={onToggle} key={task.id} mark={task.mark} showMark={false}>
              <TaskDescription title={task.title}>{task.content}</TaskDescription>
            </TaskSection>
          ))}

          <TaskExtra title="Significant implementation details & design goals:">
            <Fragment>
              <Typography>a) Architecture of the library is what matters most. Following SOLID principles is crucial to  successfully manage dependencies in your code.</Typography>
              <Typography>b) Extensibility matters.</Typography>
              <Typography>c) Use your existing knowledge to design clean API for your library. But keep in mind that API design is always a tradeoff: API that good for everybody, good for no one.</Typography>
              <Typography>d) Don’t take word “method” literally when reading user stories. In your implementation “method” can be mapped to construct of JavaScript language or OOP concept.</Typography>
            </Fragment>
          </TaskExtra>
        </TaskContent>
      </div>
    )
  }
}

export default compose(
  withCompleted(JAVASCRIPT_COMPLETED_KEY),
  withStyles(styles)
)(JSPage)
