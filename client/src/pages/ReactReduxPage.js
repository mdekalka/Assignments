import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { compose } from 'react-apollo'
import Typography from '@material-ui/core/Typography';
import RootRef from '@material-ui/core/RootRef';
import Button from '@material-ui/core/Button';

import reactLogo from '../assets/icons/react.svg'
import reduxLogo from '../assets/icons/redux.svg'
import preview1 from '../assets/preview1.png'
import preview2 from '../assets/preview2.png'
import TaskSection from '../components/TaskSection'
import Mark from '../components/Mark'
import TaskItem from '../components/TaskItem'
import Highlight from '../components/Highlight'
import { storage } from '../services/storage'
import { REACT_REDUX_COMPLETED_KEY, HEADER_HEIGHT } from '../utils/constants'
import { tasks, firstMarks, secondMarks } from '../data/reactReduxData'
import downloadTask from '../files/tasks.rar'


const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    backgroundColor: '#20222d'
  },
  logo: {
    marginRight: theme.spacing.unit * 6,

    '& img': {
      marginRight: theme.spacing.unit * 2,

      '&:last-child': {
        marginRight: 0
      }
    }
  },
  header: {
    ...theme.custom.wrapper,
    display: 'flex',
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.common.white,

    '& img': {
      width: 100,
      height: 100
    }
  },
  content: {
    ...theme.custom.wrapper,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.common.white,
    boxShadow: 'rgba(102, 119, 136, 0.03) 0px 6px 8px, rgba(102, 119, 136, 0.3) 0px 1px 2px'
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
  attention:{
    backgroundColor: '#61dafb',
    padding: theme.spacing.unit,
    marginBottom: 60
  },
  preTitle: {
    fontSize: 16,
  },
  partTitle: {
    color: theme.custom.violet
  }
})

class ReactReduxPage extends Component {
  refsHash = {}

  state = {
    completed: []
  }

  onToggleCompleted = (markId) => {
    const { completed } = this.state
    let updated

    if (completed.includes(markId)) {
      updated = completed.filter(id => id !== markId)
    } else {
      updated = [...completed, markId]
    }

    this.setState({ completed: updated })
    storage.setItem(REACT_REDUX_COMPLETED_KEY, updated)
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
    const { classes } = this.props
    const { completed } = this.state

    return (
      <div className={classes.root}>
        <div className={classes.headerWrapper}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img src={reactLogo} alt="react" />
              <img src={reduxLogo} alt="redux" />
            </div>
            <div>
              <Typography variant="h4" color="primary">React/Redux</Typography>
              <Typography variant="subtitle1" color="inherit">Shop cart application</Typography>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            This task consists of 2 two parts: <br />
            - pure <Highlight>React</Highlight> application <br />
            - adding <Highlight>Redux</Highlight> into the React app which you did first.
          </Typography>

          <div className={classes.attention}>
            <Typography variant="subtitle1">
              If you prefer<Highlight>PDF</Highlight>format you can download this task here <Button variant="contained" color="primary" download href={downloadTask}>Download</Button> and close this page. It fully contains this assignments with screens and description.
              <br/>
              If you prefer<Highlight>Web</Highlight>version please follow the instructions below.
            </Typography>
          </div>

          <Typography variant="h6" gutterBottom className={classes.partTitle}>React part:</Typography>
          <Typography variant="body1" className={classes.preTitle}>User have ability to:</Typography>
          <Typography variant="subtitle1" gutterBottom>
            <TaskItem>— enter product name and price, increase/decrease quantity and select icon for the product.</TaskItem>
            <TaskItem>— add product to produst list via <Mark value={5} /> button if all input values are valid.</TaskItem>
            <TaskItem>— to remove chosen product item via <Mark value={6} /> button.</TaskItem>
            <TaskItem>— to navigate to separate product item view via <Mark value={7} /> link.</TaskItem>
            <TaskItem>— to increase/decrease quantity of chosen product item <Mark value={8} /> and total price will change accordingly.</TaskItem>
          </Typography>

          <Typography variant="h6" gutterBottom className={classes.partTitle}>Redux part:</Typography>
          <Typography variant="subtitle1" gutterBottom>
          <TaskItem>— Load initial product list via HTTP with any mock API (<a target="_blank" rel="noopener noreferrer" href="https://www.mockable.io">https://www.mockable.io</a>, <a target="_blank" rel="noopener noreferrer" href="https://beeceptor.com/">https://beeceptor.com/</a>) or any else.</TaskItem>
            <TaskItem>— Refactor required application events to Redux actions/action creators/reducers.</TaskItem>
          </Typography>

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

          <div className={classes.workLine}>
            {tasks.map(task => (
              <RootRef key={task.id} rootRef={this.defineRef(task.id)}>
                <TaskSection title={task.title} mark={task.mark} completed={completed} onToggle={this.onToggleCompleted}>
                  {task.content.map((content, i) => <TaskItem key={i}>{content}</TaskItem>)}
                </TaskSection>
              </RootRef>
            ))}
          </div>
        </div>

      </div>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(ReactReduxPage)
