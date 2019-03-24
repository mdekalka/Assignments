import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import jsLogo from '../assets/icons/js.svg'

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
})

class JSPage extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <div className={classes.headerWrapper}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img src={jsLogo} alt="react" />
            </div>
            <div>
              <Typography variant="h4" color="primary">Javascript</Typography>
              <Typography variant="subtitle1" color="inherit">Tasks including writing own utils functions and implementing real-world user story.</Typography>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(JSPage)
