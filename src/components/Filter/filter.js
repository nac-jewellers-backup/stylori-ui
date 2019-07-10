import React,{Component}from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Filter extends Component {
constructor(props){
    super(props)
    this.state={
        open:false,
     
    }
}
     handleDrawerOpen =()=> {
        this.setState({open:true})
      }
    
       handleDrawerClose=()=> {
        this.setState({open:false})
      }

render(){
  return (
    <div >
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={this.state.open}
      >
        <div >
          <IconButton onClick={this.handleDrawerClose}>
              d
          </IconButton>
        </div>
        <Divider />
        <List>
         ewewewewewewewewewewewew   
        </List>
      </Drawer>
    </div>
  );
}
}
export default Filter;
