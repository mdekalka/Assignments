import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles= (theme) => ({
  link: {
    textDecoration: 'none',
  },
  card: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  header: {
    height: 150,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1e232a',
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
