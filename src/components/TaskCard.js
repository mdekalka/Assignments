import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles= (theme) => ({
  link: {
    textDecoration: 'none',
  },
  card: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'box-shadow .2s',

    '&:hover': {
      boxShadow: theme.shadows[10],
      '&::before': {
        opacity: 1
      }
    },
    '&::before': {
      content: "''",
      opacity: 0,
      position: 'absolute',
      top: 0,
      right: 15,
      width: 16,
      height: 32,
      padding: 0,
      transform: 'rotate(0deg) skew(0deg)',
      borderLeft: `9px solid #2d9dc7`,
      borderRight: `9px solid #2d9dc7`,
      borderBottom: '9px solid transparent',
      transition:'opacity .2s'
    },
  },
  header: {
    height: 150,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.custom.shark,
    '& img': {
      height: 70,
      width: 70
    }
  },
  body: {
    padding: theme.spacing.unit * 2
  },
  description: {
    marginTop: theme.spacing.unit 
  }
})

class TaskCard extends Component {
  render() {
    const { classes, header, title, description, href }= this.props

    return (
      <Link to={href} className={classes.link}>
        <div className={classes.card}>
          <div className={classes.header}>{header}</div>
          <div className={classes.body}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </div>
        </div>
      </Link>
    )
  }
}

export default withStyles(styles)(TaskCard)
