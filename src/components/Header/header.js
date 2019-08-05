import React, { Component } from 'react';
import './header.css';
import {
  AppBar,
  Grid,
  InputBase,
  Badge,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Hidden } from '@material-ui/core';
import JewelleryMenuItem from './HoverNavBarListing/JewlleryMenuItem';
import HeaderNotification from './Notification/HeaderNotification'
import { mainlist, Jewellery, subheader, menuList, menuListHeader } from './headerData'
import { withStyles } from '@material-ui/core/styles';





const styles = theme => ({
  colorDark: {
    backgroundColor: theme.palette.secondary.dark,

  },
  colorMain: {
    color: theme.palette.primary.main,

  },
  colorLight: {
    color: theme.palette.primary.main
  },

});
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      panel: false,
      panel1: false,
      Menuopen: false,
      selected: '',
      selected1: '',
      Checked: false,
      load:false,
      listHoverItem: 'Jewellery'
    }
  }
  // componentDidMount(){
  //   let headerHeight =Number( document.getElementById('headers').style.offsetWidth);
  //   debugger;
  //   alert(headerHeight);
  //   debugger;
  //   this.setState({headHeight:headerHeight});
  // }




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
  selectItem1 = (name) => {
    let { selected1 } = this.state;
    let value = selected1 === name ? "" : name;
    this.setState({ selected1: value })
  }
  render() {
    let { selected, selected1 } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Hidden smDown >
          <div className="header-appbar-sticky" >
            <AppBar className="header-appbar">
              <HeaderNotification />
              <Grid container spacing={12}  >
                <Grid item xs={3}>
                  <div className={`head-icons ${classes.colorMain}`} >
                    <i class="fa fa-truck "></i>
                    <i class="fa fa-phone"></i>
                  </div>
                </Grid>
                <Grid item xs={4} className="logoImgHeader">
                  <div >
                    <img className={`img`} src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" onLoad={()=>this.setState({load:true})} onLoadedData={()=>this.setState({load:false})} alt=""/>
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <div className={`head-icons ${classes.colorMain}`} style={{ fontFamily: "fontawesome" }}>
                    <InputBase
                      className={`search ${classes.colorMain}`}
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
                <Grid item xs={12} className={`header-navbar-list ${classes.colorLight}`}

                >

                  <nav
                  >

                    {/* <a href="" className={`${classes.colorLight}`} alt=""><i class="fa fa-plus-circle"></i>&nbsp;Whats New</a>


                    <a href=""
                      onMouseEnter={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: 'Jewellery' }) }}
                      className={` ${classes.colorLight}`} active><i class="fa fa-plus-circle" ></i>&nbsp;Jewellery</a>


                    <a href="" className={` ${classes.colorLight}`} onMouseOver={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: 'Solitaires' }) }}><i class="fa fa-plus-circle"></i>&nbsp;Solitaires</a>
                    <a href="" className={` ${classes.colorLight}`}
                      onMouseOver={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: 'GoldCoins' }) }}
                    ><i class="fa fa-plus-circle"></i>&nbsp;Gold Coins</a>
                    <a href="" className={` ${classes.colorLight}`}
                      onMouseOver={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: 'Gifts' }) }}
                    ><i class="fa fa-plus-circle"></i>&nbsp;Gifts</a>
                    <a href="" className={` ${classes.colorLight}`}
                      onMouseOver={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: 'Collection' }) }}
                    ><i class="fa fa-plus-circle"></i>&nbsp;Collections</a>
                    <a href="" className={` ${classes.colorLight}`}><i class="fa fa-plus-circle"></i>&nbsp;One Day Sipping</a>
                    <a href="" className={` ${classes.colorLight}`}><i class="fa fa-plus-circle"></i>&nbsp;Stories</a> */}
                    {
                      (menuListHeader.map(listName => {
                        return(
                          <a href={listName} className={` ${classes.colorLight}`} onMouseOver={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: listName.trim() }) }}><i class="fa fa-plus-circle"></i>&nbsp;{listName}</a>
                        )
                        
                      }))
                    }
                    {
                      this.state.Menuopen  ?
                        <JewelleryMenuItem Checked={this.state.Checked} listHoverItem={this.state.listHoverItem}
                          onMouseOver={() => { this.setState({ Menuopen: true, }) }}
                          onMouseLeave={() => { this.setState({ Menuopen: false,Checked:false }) }}
                        />
                        :
                        ''
                    }
                  </nav>
                </Grid>
              </Grid>
              <div className="header-bottom"></div>

            </AppBar>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="header-appbar-sticky">
            <AppBar
              className="header-appbar-moblie"
              id="smallScreen"
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
                    <img className="mobile-img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" alt=""/>
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
          </div>
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
              {mainlist.map(row => (
                <>
                  <ListItem button key={row.name} className="drawer-list" >
                    <img className="submenu-icons" src={row.icon}></img>
                    <ListItemText
                      onClick={() => Jewellery[row.name] !== undefined ? this.selectItem(row.name) : ''}
                    >
                      <Typography className="list-items"
                        variant=""
                      >{row.name}
                      </Typography>
                    </ListItemText>
                    {Jewellery[row.name] !== undefined ? row.name === selected ? <ExpandMore className="drawer-arrow" /> : <ExpandLess className="drawer-arrow" /> : ""}
                  </ListItem>
                  {selected === row.name &&
                    Object.keys(Jewellery[selected]).map(row2 => (
                      <>
                        <ListItem button key={Jewellery[selected][row2].name} className="drawer-list">
                          <img className="submenu-icons" src={row2.icon}></img>
                          <ListItemText onClick={() => this.selectItem1(Jewellery[selected][row2].name)}>
                            <Typography className="Jew-mbl-head-list" variant="">{Jewellery[selected][row2].name}
                            </Typography>
                          </ListItemText>
                          {selected1 === Jewellery[selected][row2].name ? <ExpandMore className="drawer-arrow" /> : <ExpandLess className="drawer-arrow" />}
                        </ListItem>
                        {selected1 === Jewellery[selected][row2].name &&
                          <List className="sideNavListing" >
                            <ListItem className="drawer-list">
                              <ListItemText
                              >
                                <Typography className="Jew-mbl-head-list" variant="">{subheader[selected1].header}
                                  <span className="header-viewal">View All</span>
                                </Typography>
                              </ListItemText>
                            </ListItem>
                            {subheader[selected1].name.map(row => (
                              <>
                                <ListItem>
                                  <ListItemText>
                                    <Typography className="Jew-mbl-head-list" variant="">{row}</Typography>
                                  </ListItemText>
                                </ListItem>
                              </>
                            ))}

                          </List>
                        }
                      </>
                    ))
                  }
                </>
              ))}
            </List>
          </Drawer>

        </Hidden>

      </div>
    )
  }
}
export default withStyles(styles)(Header);
