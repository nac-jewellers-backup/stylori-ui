import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuListItem from '../../components/Header/HoverNavBarListing/MenuList';
import Collapse from '@material-ui/core/Collapse';

class JewelleryMenuItem extends Component {
 
  render() {
    const  Checked  = this.props.Checked;
    {console.log(this.props.Checked)}
    
    return (
      <div>
 
 <Collapse in={Checked}>
          <Paper style={{ position: "absolute", zIndex: "10000", top: '148px', left: '190px', width: '76vw' }} onMouseLeave={this.props.onMouseLeave} >
          <MenuListItem/>
          
          </Paper>
          </Collapse>
      </div>
    ); 
}
}
      export default JewelleryMenuItem;