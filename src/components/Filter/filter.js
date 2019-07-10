import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './filter.css';
class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,

    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div >
        {/* <AppBar
          position="fixed"
          className="filter-navbar"
        >
          <Toolbar>
            <Typography onClick={this.handleDrawerOpen} className="filter-menu">
              <i class="fa fa-chevron-left"></i>&nbsp;
              Filter By</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={this.state.open}
          style={{position:"fixed"}}
        >
           <div className="header-drawer">
              <IconButton onClick={this.handleDrawerClose}
                style={{ margin:0 }}>
                <i class="fa fa-times"></i>
              </IconButton>
              <Typography className="filter-menu" onClick={this.handleDrawerClose}>
              <i class="fa fa-chevron-left"></i>&nbsp;
              Filter By</Typography>
            </div> 
          <Divider />
          <List>
            sl;a;a;a;a;a;a;a;a;a;a;a;a;ls;lslsssssssss;l;
        </List>
        </Drawer> */}
      </div>
    );
  }
}
export default Filter;
