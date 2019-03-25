import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import TaskHeader from '../components/TaskHeader'
import jsLogo from '../assets/icons/js.svg'

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
      <div>
        <TaskHeader
          title="JavaScript"
          description="Tasks including writing own utils functions and implementing real-world user story."
          logos={logos}
        />
      </div>
    )
  }
}

export default withStyles(styles)(JSPage)
