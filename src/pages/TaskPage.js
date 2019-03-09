import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { compose } from 'react-apollo'
import Typography from '@material-ui/core/Typography';
import RootRef from '@material-ui/core/RootRef';

import reactLogo from '../assets/icons/react.svg'
import reduxLogo from '../assets/icons/redux.svg'
import preview1 from '../assets/preview1.png'
import preview2 from '../assets/preview2.png'
import TaskSection from '../components/TaskSection'
import Mark from '../components/Mark'
import Highlight from '../components/Highlight'
import TaskItem from '../components/TaskItem'
import { storage } from '../services/storage'
import { REACT_REDUX_COMPLETED_KEY, HEADER_HEIGHT } from '../utils/constants'
import { data } from '../data/reactReduxData'


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
  description: {
    color: theme.palette.grey[300]
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
  }
})

class TaskPage extends Component {
  refsHash = {}

  state = {
    completed: []
  }

  componentDidMount() {
    const completed = storage.getItem(REACT_REDUX_COMPLETED_KEY) || []

    this.setState({ completed })
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
              <Typography variant="h4" gutterBottom color="primary">React/Redux</Typography>
              <Typography variant="subtitle1" color="inherit">Shop cart application</Typography>
              <Typography variant="body1" className={classes.description}>Descriptions</Typography>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.preview}>
            <img src={preview1} alt="preview" />
            <Mark top={'17%'} left={'2%'} value={1} pulse onClick={this.onScrollToTarget} />
            <Mark top={'40%'} left={'2%'} value={2} pulse onClick={this.onScrollToTarget} />
            <Mark top={'47%'} left={'20%'} value={3} pulse onClick={this.onScrollToTarget} />
            <Mark top={'63%'} left={'22%'} value={4} pulse onClick={this.onScrollToTarget} />
            <Mark top={'79%'} left={'20%'} value={5} pulse onClick={this.onScrollToTarget} />
            <Mark top={'22%'} left={'90%'} value={6} pulse onClick={this.onScrollToTarget} />
            <Mark top={'22%'} left={'96%'} value={7} pulse onClick={this.onScrollToTarget} />
            <Mark top={'33%'} left={'70%'} value={8} pulse onClick={this.onScrollToTarget} />
            <Mark top={'84%'} left={'57%'} value={9} pulse onClick={this.onScrollToTarget} />
          </div>
          <div className={classes.preview}>
            <img src={preview2} alt="preview" />
            <Mark top={'27%'} left={'72%'} value={10} pulse onClick={this.onScrollToTarget} />
            <Mark top={'68%'} left={'69%'} value={11} pulse onClick={this.onScrollToTarget} />
            <Mark top={'84%'} left={'68%'} value={12} pulse onClick={this.onScrollToTarget} />
          </div>

          <div className={classes.workLine}>
          {data.map(item => (
            <RootRef rootRef={this.defineRef(item.id)}>
              <TaskSection title={item.title} mark={item.mark} completed={completed} onToggle={this.onToggleCompleted}>
                {item.content.map(content => <TaskItem item={content} />)}
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
)(TaskPage)
