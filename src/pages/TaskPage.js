import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { compose } from 'react-apollo'
import Typography from '@material-ui/core/Typography';

import reactLogo from '../assets/icons/react.svg'
import reduxLogo from '../assets/icons/redux.svg'
import preview1 from '../assets/preview1.png'
import preview2 from '../assets/preview2.png'
import ResourceSection from '../components/ResourceSection'
import Mark from '../components/Mark'

const styles = theme => ({
  root: {
    // width: 1200,
    // margin: '15px auto',
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
    backgroundColor: theme.palette.common.white,
    boxShadow: 'rgba(102, 119, 136, 0.03) 0px 6px 8px, rgba(102, 119, 136, 0.3) 0px 1px 2px'
  },
  gridItem: {
    // padding: theme.spacing.unit * 2
  },
  badge: {
    left: '50%',
    right: 'auto'
  },

  step:{
    padding: theme.spacing.unit * 2
  },
  preview: {
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,

    '& img': {
      width: '100%',
      height: 'auto'
    }
    // width: '100%'
  }

})

class TaskPage extends Component {
  render() {
    const { classes } = this.props

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
          <div className={classes.preview}>
            <img src={preview1} alt="preview" />
            <Mark top={'17%'} left={'2%'} value={1} pulse/>
            <Mark top={'40%'} left={'2%'} value={2} pulse/>
            <Mark top={'47%'} left={'20%'} value={3} pulse/>
            <Mark top={'63%'} left={'22%'} value={4} pulse/>
            <Mark top={'79%'} left={'20%'} value={5} pulse/>
            <Mark top={'22%'} left={'90%'} value={6} pulse/>
            <Mark top={'22%'} left={'96%'} value={7} pulse/>
            <Mark top={'33%'} left={'70%'} value={8} pulse/>
            <Mark top={'84%'} left={'57%'} value={9} pulse/>
          </div>
          <div className={classes.preview}>
            <img src={preview2} alt="preview" />
            <Mark top={'27%'} left={'72%'} value={10} pulse/>
            <Mark top={'68%'} left={'69%'} value={11} pulse/>
            <Mark top={'84%'} left={'68%'} value={12} pulse/>
          </div>

              <div className={classes.gridItem}>
            <ResourceSection
                title="Product name input"
                icon={<Mark value={1} />}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, nam placeat. Voluptates sunt est aliquid eligendi officia. Odit, amet officiis ipsum, cumque saepe non expedita, magni cum alias error perferendis?Mollitia aut nostrum optio quidem sint animi, pariatur corrupti qui blanditiis. Fuga, doloremque? Nam numquam nihil, ipsa officiis odit asperiores reiciendis fuga, officia neque nulla dolorem! Expedita iusto dolores sapiente.
              </ResourceSection>
              {/* <img src={preview} className={classes.preview} alt="gif preview" /> */}

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
