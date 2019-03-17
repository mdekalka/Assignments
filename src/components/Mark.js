import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done'
import cls from 'classnames'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    padding: `0 ${theme.spacing.unit / 2}px`,
    verticalAlign: 'middle',
    minWidth: 22,
    height: 22,
    fontStyle: 'normal',
    borderRadius: '50%',
    color: theme.palette.common.white,
    backgroundColor: theme.custom.violet,
    fontSize: '.75rem',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    cursor: 'pointer',
    zIndex: 10,
  },
  pulse: {
    '&::after': {
      content: "''",
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      borderRadius: 'inherit',
      animation: 'pulse 2s infinite'
    }
  },
  icon: {
    fontSize: 14
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      boxShadow: 'inset 0 0 1px 1px rgba(119, 73, 191, 0.8)'
    },
    '50%': {
      boxShadow: 'inset 0 0 1px 1px rgba(119, 73, 191, 0.8)'
    },
    '100%': {
      transform: 'scale(1.6)',
      boxShadow: 'inset 0 0 1px 1px rgba(119, 73, 191, 0)'
    },
  }
})


class Mark extends Component {
  static defaultProps = {
    onClick: () => {}
  }

  render() {
    const { classes, value, pulse, top, left, onClick, done } = this.props
    const styles = (top || left) ? { top, left, position: 'absolute' } : {}

    return (
      <span style={styles} className={cls(classes.root, { [classes.pulse]: !done && pulse })} onClick={() => onClick(value)} title={value}>
        {done ? <DoneIcon className={classes.icon} /> : value}
      </span>
    )
  }
}


export default withStyles(styles)(Mark)
