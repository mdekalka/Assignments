import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'react-apollo';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { TaskJumbotron, TaskHeadline, TaskContent, TaskSection, TaskDescription, TaskExtra, TaskLink, TaskSeparator } from '../components/Task'
import Highlight from '../components/Highlight'
import htmlLogo from '../assets/icons/html.svg';
import cssLogo from '../assets/icons/css.svg';
import responsiveGif from '../assets/responsive.gif'
import { HTML_CSS_COMPLETED_KEY } from '../utils/constants'
import withCompleted from '../HOCs/withCompleted'
import landingPageFile from '../assets/files/landing_page.psd'
import templatePreview from '../assets/files/landing_page.jpg'

const logos = [htmlLogo, cssLogo]

const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  download: {
    padding: '26px 20px',
    color: 'white',
    background: theme.custom.shark,
    textAlign: 'center',
  },
  preview: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
})

 class HTMLCSSPage extends Component {
  render() {
    const { classes, completed, onToggle } = this.props

    return (
      <div className={classes.root}>
        <TaskJumbotron
          title="HTML/CSS"
          description="Create website layout with HTML and CSS."
          logos={logos}
        />

        <TaskContent>
          <TaskExtra title="Before you start you can take a look at HTML/CSS screencasts & useful links:">
          <Fragment>
            <TaskLink title="HTML/CSS screencasts" href="https://wiki.itechart-group.com/pages/viewpage.action?pageId=18415838" />
            <TaskLink title="Introduction to Basic HTML" href="https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5/" />
            <TaskLink title="Introduction to Basic CSS" href="https://learn.freecodecamp.org/responsive-web-design/basic-css/" />
            <TaskLink title="Learn HTML & CSS" href="https://ilovecoding.org/courses/htmlcss2" />
            <TaskLink title="Introduction to the Responsive Web Design" href="https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles/" />
            <TaskLink title="Responsive design by Udacity" href="https://classroom.udacity.com/courses/ud893" />
            <TaskLink title="Learning HTML: Guides and tutorials by MDN" href="https://developer.mozilla.org/en-US/docs/Learn/HTML" />
            <TaskLink title="Introduction to CSS
 by MDN" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS" />
          </Fragment>
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskExtra title="When you are ready to implement:">
            <Fragment>
            <Typography>1) Create new account at <a target="_blank" rel="noopener noreferrer" href="https://github.com/">Github</a> or <a target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/">Bitbucket</a> ( if you don't have it yet) and create new repository.</Typography>
            <Typography>2) Push your code to master branch in this repo.</Typography>
            <Typography>3) When you finish - ping your mentor via slack/skype/email and share repository link with him.</Typography>
            </Fragment>
          </TaskExtra>

          <TaskExtra>
            <Typography>- You can download Photopshop from <Highlight>local network by the address "\\FILESRV\Distributives\Software\Grafics_Design"</Highlight> or log in(domain credentials) into <a target="_blank" rel="noopener noreferrer" href="https://192.168.10.150:5001/">file serv</a> and select path <Highlight>"File Station->/Distributives/Software/Grafics_Design"</Highlight>. You can also use any graphics editor you like <a target="_blank" rel="noopener noreferrer" href="https://www.gimp.org/">GIMP</a>.</Typography>
          </TaskExtra>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Layout overview:" gutter />
          <TaskSection completed={completed} onToggle={onToggle} mark="html-css" showMark={false}>
            <TaskDescription title="Implementation details:">
              <Fragment>— no need to <Highlight>add dynamic JS plugins such as slider/Google maps/masonry/etc.</Highlight>, focus on creating static layout.</Fragment></TaskDescription>
            <TaskDescription><Fragment>— responsive layout should be implemented in this task. Don't think too much about what is the best mobile/tablet layout for provided template, just make it looks fluid across <Highlight>480px-1200px+ breakpoints.</Highlight><br /><img width="200" src={responsiveGif} alt="" /></Fragment></TaskDescription>
            <TaskDescription><Fragment>— you can use any frameworks (<a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/docs/4.3/layout/grid/">Bootsrap</a>, <a target="_blank" rel="noopener noreferrer" href="https://foundation.zurb.com/sites/docs/flex-grid.html">Foundation</a>, etc.) to make <Highlight>responsive design easier</Highlight>(also you can use class utils function from them)</Fragment></TaskDescription>
            <TaskDescription><Fragment>— you can style template with <Highlight>pure CSS</Highlight> or you can use your favourite <Highlight>dynamic preprocessor</Highlight> like <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/">Sass</a>, <a target="_blank" rel="noopener noreferrer" href="http://lesscss.org/">LESS</a>, <a target="_blank" rel="noopener noreferrer" href="http://stylus-lang.com/">Stylus</a>.</Fragment></TaskDescription>

            <TaskDescription><Fragment>— try to use latest HTML features like new tags <Highlight>header, footer, section, article, figure, figcaption,</Highlight> other <a target="_blank" rel="noopener noreferrer" href="https://www.bitdegree.org/learn/html5-tags">tags</a>, <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">etc.</a> It's not a big deal, but creating more semantic-correct layout gives better readability for you as well as crawlers and readers.</Fragment></TaskDescription>
          </TaskSection>

          <div className={classes.download}>
            <Button variant="contained" color="secondary" href={landingPageFile} className={classes.button}>
                Download Template PSD
            </Button>
          </div>

          <TaskSeparator offset="large" />

          <TaskHeadline title="Template preview:" gutter />
          <div className={classes.preview}>
            <img src={templatePreview} alt="" />
          </div>


        </TaskContent>
      </div>
    )
  }
}

export default compose(
  withCompleted(HTML_CSS_COMPLETED_KEY),
  withStyles(styles)
)(HTMLCSSPage)
