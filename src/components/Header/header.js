import React, { Component } from 'react';
import './header.css';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Hidden } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import JewelleryMenuItem from '../../screens/Stylori/JewlleryMenuItem';
import HeaderNotification from './Notification/HeaderNotification'
import { mainliast, Jewellery } from './headerData'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      panel: false,
      panel1: false,
      Menuopen: false,
      selected: '',
      Checked: false,
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }
  handleClick = (e, name, value) => {
    this.setState({ [name]: !value })
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value })
  }
  render() {
    let { selected } = this.state;
    return (
      <div>
        <Hidden smDown>

          <AppBar className="header-appbar">
            <HeaderNotification />
            <Grid container spacing={12} >
              <Grid item xs={3}>
                <div className="head-icons">
                  <i class="fa fa-truck "></i>
                  <i class="fa fa-phone"></i>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div >
                  <img className="img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
                </div>
              </Grid>
              <Grid item xs={5}>
                <div className="head-icons" style={{ fontFamily: "fontawesome" }}>
                  <InputBase
                    className="search"
                    placeholder='&#xf002; Search here'
                  />
                  <i class="fa fa-user"></i>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-heart"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-shopping-bag"></i>
                  </Badge>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={12} className="header-navbar-list">
                <nav >
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Whats New</a>
                  <a href="" onMouseOver={() => { this.setState({ Menuopen: true, Checked: true }) }} >
                    <i class="fa fa-plus-circle"></i>&nbsp;Jewellery</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Solitaires</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Gold Coins</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Gifts</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Collections</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;One Day Sipping</a>
                  <a href=""><i class="fa fa-plus-circle"></i>&nbsp;Stories</a>
                </nav>
              </Grid>
            </Grid>
            <div className="header-bottom"></div>
          </AppBar>
        </Hidden>
        <Hidden mdUp>

          <AppBar
            className="header-appbar-moblie"
          >

            <Toolbar>
              <Grid item xs={2}>
                <IconButton
                  onClick={this.handleDrawerOpen}
                >
                  <MenuIcon style={{ color: '#222', fontSize: '30px' }} />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <div >
                  <img className="mobile-img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="mobli-icon">
                  <Badge >
                    <i class="fa fa-comments"></i>
                  </Badge>
                  <Badge >
                    <i class="fa fa-search"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-heart"></i>
                  </Badge>
                  <Badge badgeContent={4} color="secondary">
                    <i class="fa fa-shopping-bag"></i>
                  </Badge>
                </div>
              </Grid>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor="left"
            open={this.state.open}
            className="nav-drawer"
          >
            <div className="header-drawer">
              <IconButton onClick={this.handleDrawerClose}
                style={{ float: 'right' }}>
                <i class="fa fa-times"></i>
              </IconButton>
              <Typography className="drawer-menu">Menu</Typography>
            </div>
            <Divider />
            <List className="sideNavListing"  >
              {mainliast.map(row => (
                <>
                  <ListItem button key={row.name} className="drawer-list" >
                    <img className="submenu-icons" src={row.icon}></img>
                    <ListItemText
                      onClick={() => this.selectItem(row.name)}
                    >
                      <Typography className="list-items"
                        variant=""
                      >{row.name}
                      </Typography>
                    </ListItemText>
                    {this.mainliast ? <ExpandLess className="drawer-arrow" /> : <ExpandMore className="drawer-arrow" />}
                  </ListItem>
                  {selected === row.name &&
                    Object.keys(Jewellery[selected]).map(row => (
                      <ListItem button key={Jewellery[selected][row].name} className="drawer-list">
                        <MailIcon className="submenu-icons" />
                        <ListItemText >
                          <Typography className="Jew-mbl-head-list" variant="">{Jewellery[selected][row].name}
                          </Typography>
                        </ListItemText>
                        {selected ? <ExpandLess className="drawer-arrow" /> : <ExpandMore className="drawer-arrow" />}
                      </ListItem>
                    ))
                  }
                </>
              ))}
            </List>
          </Drawer>

        </Hidden>
        {
          this.state.Menuopen ?
            <JewelleryMenuItem Checked={this.state.Checked} onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false }) }} />
            //onMouseLeave={() => { this.setState({ Menuopen: false,Checked:false }) }}
            :
            ''
        } 
      </div>
    )
  }
}
export default Header;
