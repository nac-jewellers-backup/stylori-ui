import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import posed from 'react-pose';
import MenuListItem from './MenuList';


const Notification = posed.div({
  visible: {

    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'linear', duration: 500 }
    },
  },
  hidden: {
    opacity: 0, scaleX: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300, },
      default: { ease: 'linear', duration: 500 }
    },
  }
});
class JewelleryMenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: true };
  }
  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <Notification pose={isVisible ? 'visible' : 'hidden'} onMouseLeave={this.props.onMouseLeave}>

          <Paper style={{ position: "absolute", zIndex: "10000", top: '148px', left: '190px', width: '76vw' }}>
          <MenuListItem/>
          
          </Paper>

        </Notification>
      </div>
    ); 
}
}
      export default JewelleryMenuItem;