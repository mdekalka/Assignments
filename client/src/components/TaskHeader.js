import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
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


class TaskHeader extends Component {
  render() {
    const { classes, title, description, logos } = this.props

    return (
      <div className={classes.headerWrapper}>
        <div className={classes.header}>
          <div className={classes.logo}>
            {logos.map((logo, index) => <img src={logo} key={index} alt="this is just a logo"/>)}
          </div>
          <div>
            <Typography variant="h4" color="primary">{title}</Typography>
            <Typography variant="subtitle1" color="inherit">{description}</Typography>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TaskHeader)
