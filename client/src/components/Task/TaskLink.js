import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  root: {
    fontSize: 16,
    position: 'relative',

    '&::before': {
      content: "'\\00bb'",
      position: 'relative',
      top: -2,
      marginRight: 4
    }
  },
})

class TaskLink extends Component {
  render() {
    const { classes, title,href } = this.props

    return (
      <div>
        <Link href={href} variant="body2" className={classes.root} target="_blank" rel="noopener">
          {title}
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(TaskLink);
