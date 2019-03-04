import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';

import reactLogo from '../assets/icons/react.svg'
import reduxLogo from '../assets/icons/redux.svg'
import preview from '../assets/preview.gif'

const styles = theme => ({
  root: {
    // width: 1200,
    // margin: '15px auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    backgroundColor: theme.custom.shark
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
    backgroundColor: theme.palette.grey[200]
  },
  gridItem: {
    padding: theme.spacing.unit * 2
  },
  badge: {
    left: '50%',
    right: 'auto'
  },

  step:{
    padding: theme.spacing.unit * 2
  },
  preview: {
    width: '100%'
  }

})

class TaskPage extends Component {
  render() {
    const { classes, history } = this.props

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
              <Typography variant="subtitle1" color="inherit">Shopping Cart app</Typography>
              <Typography variant="body1" className={classes.description}>Descriptions</Typography>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <Grid container spacing={24}>
            <Grid item xs={9}>
              <div className={classes.gridItem}>
              <Badge classes={{ badge: classes.badge }} badgeContent={1} color="primary">
                <Paper className={classes.step}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit officia eaque nobis et at accusamus magni quisquam placeat recusandae, cum minus quod doloremque illum laborum rem animi eos dolores!
                </Paper>
              </Badge>
              <img src={preview} className={classes.preview} alt="gif preview" />

              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.gridItem}>
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    )
  }
}

export default withRouter(withStyles(styles)(TaskPage))
