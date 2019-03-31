import React, { Component } from 'react'
import { Query, Mutation, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { storage } from '../services/storage';
import { PROFILE_KEY } from '../utils/constants';
import defaultAvatar from '../assets/defaultAvatar.png';


const GET_USER_INFO = gql`
  query($profileId: Int!) {
    getUser(profileId: $profileId) {
      firstNameEng
      lastNameEng
      image,
      position
    }
  }
`

const LOG_OUT = gql`
  mutation {
    logout @client
  }
`

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white
  },
  appBar: {
    backgroundColor: theme.custom.shark
  },
  grow: {
    flexGrow: 1
  },
  avatar: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    boxShadow: `0px 1px 16px 1px #2b2626`
  },
  profile: {
    textAlign: 'right',
  },
  position: {
    color: theme.palette.grey[300]
  }
})

class MainHeader extends Component {
  state = {
    profileId: storage.getItem(PROFILE_KEY)
  }

  createMockUser() {
    return {
      image: defaultAvatar,
      firstNameEng: 'Princess',
      lastNameEng: 'Bubblegum',
      position: 'Ruler of the Candy Kingdom'
    }
  }

  // TODO: move to separate SFC
  renderUser(user) {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.profile}>
          <Typography variant="subtitle1" color="inherit">{`${user.firstNameEng} ${user.lastNameEng}`}</Typography>
          <Typography variant="caption" className={classes.position}>{user.position}</Typography>
        </div>
        <Avatar alt="Your depressed hopeless face" className={classes.avatar} src={user.image} />
        <Mutation mutation={LOG_OUT}>
          {logout => (
            <Tooltip title="Log out">
              <IconButton aria-label="Log out" color="inherit" onClick={() => {
                  logout()
                  this.props.history.replace('/login')
                }}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          )}
        </Mutation>
      </div>
    )
  }

  render() {
    const { classes } = this.props
    const { profileId } = this.state
    const isProfileIdExists = !!parseInt(profileId, 10)

    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            <Button color="inherit" component={props => <Link {...props} to="/" />}>Home</Button>
          </div>

          {isProfileIdExists ?
            <Query query={GET_USER_INFO} variables={{ profileId: parseInt(profileId, 10) }}>
              {({ data, loading, }) => {
                if (loading) return null
  
                return this.renderUser(data.getUser)
              }}
            </Query> :
            this.renderUser(this.createMockUser())
        }
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(MainHeader)
