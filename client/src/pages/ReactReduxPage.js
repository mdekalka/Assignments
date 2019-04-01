import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { compose } from 'react-apollo'
import Typography from '@material-ui/core/Typography';
import RootRef from '@material-ui/core/RootRef';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ExpandMore from '@material-ui/icons/ExpandMore';

import reactLogo from '../assets/icons/react.svg'
import reduxLogo from '../assets/icons/redux.svg'
import preview1 from '../assets/preview1.png'
import preview2 from '../assets/preview2.png'
import previewGif from '../assets/React_Redux_Preview.gif'


import Highlight from '../components/Highlight'
import { TaskSection, TaskDescription, TaskJumbotron, TaskHeadline, TaskContent, TaskExtra, TaskLink, TaskSeparator } from '../components/Task'
import Mark from '../components/Mark'
import { REACT_REDUX_COMPLETED_KEY, HEADER_HEIGHT } from '../utils/constants'
import { tasks, firstMarks, secondMarks } from '../data/reactReduxData'
import downloadTask from '../assets/files/react-redux.rar'
import withCompleted from '../HOCs/withCompleted'

const logos = [reactLogo, reduxLogo]

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  preview: {
    position: 'relative',
    textAlign: 'center',

    '& img': {
      width: '100%',
      height: 'auto'
    }
  },
  workLine: {
    position: 'relative'
  },
  preTitle: {
    fontSize: 16,
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

class ReactReduxPage extends Component {
  refsHash = {}
  taskRef = React.createRef()

  scrollTo = () => {
    window.scrollTo(0, this.taskRef.current.offsetTop - HEADER_HEIGHT);
  }

  onScrollToTarget = (id) => {
    const currentRef = this.refsHash[id]
    
    if (currentRef) {
      const { top } = currentRef.getBoundingClientRect()

      window.scrollTo(0, top + window.pageYOffset - HEADER_HEIGHT)
    }
  }

  defineRef = (id) => (element) => {
    this.refsHash[id] = element
  }

  render() {
    const { classes, completed, onToggle } = this.props

    return (
      <div className={classes.root}>
        <TaskJumbotron
          title="React/Redux"
          description="Create shop application with adding/removing items to a cart list, having separate route for each product."
          logos={logos}
        />
        <TaskContent>
          <div className={classes.section}>
            <Typography color="inherit" variant="subtitle1">If you prefer "paper" version of this assignment - you can download it here:</Typography>
            <Button variant="contained" color="secondary" href={downloadTask} className={classes.button}>
              Download React-Redux Assignment
            </Button>
            <Typography color="inherit" variant="subtitle1"> and leave this page. <br/> Downloaded document contains all screens and descriptions,    otherwise continue with Web version.</Typography>
            <Fab color="primary" className={classes.fab} onClick={this.scrollTo}>
              <ExpandMore />
            </Fab>
          </div>

          <div ref={this.taskRef}/>

          <TaskExtra title="Before you start you can take a look at JavaScript screencasts & useful links:">
            <Fragment>
              <TaskLink key={1} title="React official documentation" href="https://reactjs.org/" />
              <TaskLink key={2} title="Redux official documentation" href="https://redux.js.org/introduction/getting-started" />
              <TaskLink key={3} title="Official React bindings for Redux" href="https://github.com/reduxjs/react-redux" />
              <TaskLink key={4} title="React Web router" href="https://reacttraining.com/react-router/web/guides/quick-start" />
              <TaskLink key={5} title="Getting Started with Redux" href="https://egghead.io/courses/getting-started-with-redux" />
              <TaskLink key={6} title="Idiomatic Redux" href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux" />
              <TaskLink key={7} title="Thunk middleware for Redux" href="https://github.com/reduxjs/redux-thunk" />
            </Fragment>
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskExtra title="When you are ready to implement:">
            <Fragment>
            <Typography>1) Create new account at <a target="_blank" rel="noopener noreferrer" href="https://github.com/">Github</a> or <a target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/">Bitbucket</a> ( if you don't have it yet)</Typography>
            <Typography>2) Create new repository and start implementing React task</Typography>
            <Typography>3) When you finish with React task, create new branch(checkout from React branch)and refactor local React state to Redux store.</Typography>
            <Typography>4) When you finish all tasks - ping your mentor via slack/skype/email and share repository link with him.</Typography>
            </Fragment>
          </TaskExtra>

          <TaskExtra>
            <Fragment>
            <Typography>5) Focus on <Highlight>application functionality</Highlight>, not on visual styling, you can use any CSS-framework(Bootstrap, Foundation).</Typography>
            <Typography>6) For quick start you can use <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebookincubator/create-react-app">create-react-app</a> ) or any other react/redux boilerplate.</Typography>
            </Fragment>
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskHeadline title="React part" gutter />
          <TaskSection completed={completed} onToggle={onToggle} mark="redux" showMark={false}>
            <TaskDescription title="User have ability to:">— enter product name and price, increase/decrease quantity and select icon for the product.</TaskDescription>
            <TaskDescription><Fragment>— add product to produst list via <Mark value={5} /> button if all input values are valid.</Fragment></TaskDescription>
            <TaskDescription><Fragment>— to remove chosen product item via <Mark value={6} /> button.</Fragment></TaskDescription>
            <TaskDescription><Fragment>— to navigate to separate product item view via <Mark value={7} /> link.</Fragment></TaskDescription>
            <TaskDescription><Fragment>— to increase/decrease quantity of chosen product item <Mark value={8} /> and total price will change accordingly.</Fragment></TaskDescription>
          </TaskSection>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Redux part" gutter />
          <TaskSection completed={completed} onToggle={onToggle} mark="react" showMark={false}>
            <TaskDescription title="Redux additions:"><Fragment>— Load initial product list via HTTP with any mock API (<a target="_blank" rel="noopener noreferrer" href="https://www.mockable.io">https://www.mockable.io</a>, <a target="_blank" rel="noopener noreferrer" href="https://beeceptor.com/">https://beeceptor.com/</a>) or any else.</Fragment></TaskDescription>
            <TaskDescription><Fragment>— Refactor local React state to Redux store and transform required application events to Redux actions/action creators/reducers.</Fragment></TaskDescription>
          </TaskSection>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Task overview" gutter />
          <div className={classes.preview}>
            <img src={preview1} alt="preview" />
            {firstMarks.map(mark =>
              <Mark
                key={mark.id}
                top={mark.top}
                left={mark.left}
                value={mark.mark}
                pulse
                onClick={this.onScrollToTarget}
              />
            )}
          </div>

          <div className={classes.preview}>
            <img src={preview2} alt="preview" />
            {secondMarks.map(mark =>
              <Mark
                key={mark.id}
                top={mark.top}
                left={mark.left}
                value={mark.mark}
                pulse
                onClick={this.onScrollToTarget}
              />
            )}
          </div>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Final preview of your product app" gutter />
          <div className={classes.preview}>
            <img src={previewGif} alt="preview gif" />
          </div>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Description of entities:" gutter />
          <div className={classes.workLine}>
            {tasks.map(task => (
              <RootRef key={task.id} rootRef={this.defineRef(task.id)}>
                <TaskSection completed={completed} onToggle={onToggle} mark={task.mark}>
                  <TaskDescription title={task.title}>{task.content}</TaskDescription>
                </TaskSection>
              </RootRef>
            ))}
          </div>
        </TaskContent>
      </div>
    )
  }
}

export default compose(
  withRouter,
  withCompleted(REACT_REDUX_COMPLETED_KEY),
  withStyles(styles)
)(ReactReduxPage)
