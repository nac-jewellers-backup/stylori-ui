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
import HeaderHoverMenuItem from './HoverNavBarListing/HeaderHoverMenuItem';
import HeaderNotification from './Notification/HeaderNotification'
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from '../../hooks';
import { headerData } from '../../mappers';
import styles from './styles';
import { NavLink } from 'react-router-dom';
import usershape from "../../assets/Icons/user-shape.svg"
import logout from "../../assets/Icons/logout.svg"
import love from "../../assets/Icons/love.svg"
import shopping from "../../assets/Icons/shopping.svg"
import delivery from "../../assets/Icons/delivery.svg"
import telephone from "../../assets/Icons/telephone.svg"
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      open: false,
      open1: false,
      panel: false,
      panel1: false,
      Menuopen: false,
      selected: '',
      selected1: '',
      Checked: false,
      load: false,
      listHoverItem: 'Jewellery',
      headerHeightprops: 0

    }
    this.topZero = React.createRef();
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
  selectItem1 = (name) => {
    let { selected1 } = this.state;
    let value = selected1 === name ? "" : name;
    this.setState({ selected1: value })
  }
  headerTransitions = () => {
    document.getElementById('topNav').style.paddingTop = "0";
    document.getElementById('topNav').style.transition = "0.5s";
    // var heightHeader = document.getElementById('headerDiv').clientHeight;
    if (document.getElementById("SliderFilter")) {
      document.getElementById("SliderFilter").style.top = "185px";
      document.getElementById('SliderFilter').style.transition = "0.5s";
      document.getElementById("filterBy").style.top = "120px";
      document.getElementById('filterBy').style.transition = "0.5s";
    }

  }
  handleClickp = event => {
    this.setState({
      anchorEl: 'simple-popper',
    });
  };

  handleClosep = () => {
    this.setState({

      anchorEl: null,
    });
  };
  render() {

    const { mainlist, Jewellery, subheader, menuListHeader, menuLists, earings, rings, pendants, nosepins, banglesbracelets, valayal, kammal, koluse, Price,
      Collection, Material } = this.props.data;
    let { selected, selected1 } = this.state;
    const { classes } = this.props;
    let path = window.location.pathname.split('/').pop();
    const { anchorEl } = this.state;
    const open1 = Boolean(anchorEl);
    return (
      <div>
        <Hidden smDown >
          <HeaderNotification headerTransition={() => { this.headerTransitions() }} />
          <div className="header-appbar-sticky" id='headerDiv'>
            <AppBar className="header-appbar" id="topNav">
              <Grid container spacing={12}  >
                <Grid item xs={3}>
                  <div className={`head-icons ${classes.colorMain}`} >
                    <span><img className="icons-header-sizes" src={delivery} /></span>
                    <span><img className="icons-header-sizes" src={telephone} /></span>
                  </div>
                </Grid>
                <Grid item xs={4} className="logoImgHeader">
                  <div >
                    <img className={`img`} src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <div className={`head-icons ${classes.colorMain}`} style={{ fontFamily: "fontawesome" }}>
                    <InputBase
                      className={`search ${classes.colorMain}`}
                      placeholder='&#xf002; Search here'
                    />
                    {/* <NavLink to="/login"> */}
                    {/* <Button
                     
                      variant="contained"
                      onClick={() => { this.handleClickp() }}
                    >
                     <img className="icons-header-sizes" src={usershape} />
        </Button> */}

                    {localStorage.getItem("true") ?
                      <span
                        aria-owns={open1}
                        aria-haspopup="true"
                        onClick={() => { this.handleClickp() }}
                      >
                        <img className="icons-header-sizes" src={usershape} /></span>
                      // <img className="icons-header-sizes" src={usershape}/>
                      : <span onClick={() => window.location.pathname = "/login"}>
                        <img className="icons-header-sizes" src={usershape} /></span>
                    }
                    {/* </NavLink> */}
                    <Popover
                      id="simple-popper"
                      open={open1}
                      onClose={this.handleClosep}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <div
                        style={{ width: "120px", height: "45px", lineHeight: "45px", cursor: "pointer" }}
                        onClick={() => {
                          localStorage.removeItem("user_id")
                          localStorage.removeItem("email")
                          localStorage.removeItem("vals")
                          localStorage.removeItem("valuessetdata")
                          localStorage.removeItem("panel")
                          localStorage.removeItem("cartDetails")
                          window.location.reload()
                          window.location.pathname = "/login"
                        }}><img className="icons-header-sizes" src={logout} />&nbsp;Logout</div>
                    </Popover>
                    {/* <i class="fa fa-user"></i> */}
                    <Badge badgeContent={4} color="secondary">
                      <img className="icons-header-sizes" src={love} />
                    </Badge>
                    <Badge badgeContent={"2"} color="secondary">
                      <img className="icons-header-sizes" src={shopping} />
                    </Badge>
                  </div>
                </Grid>
              </Grid>
              {path == "cart" || path == 'checkout' ? "" :
                <Grid container spacing={12}>
                  <Grid item xs={12} className={`header-navbar-list ${classes.colorLight}`}
                    onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false }) }}
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
                          return (
                            <a href={listName.url} className={` ${classes.menuListCursor} ${classes.colorLight} `} onMouseOverCapture={() => { this.setState({ Menuopen: true, Checked: true, listHoverItem: listName.title.replace(/ +/g, "") }) }}><i class="fa fa-plus-circle"></i>&nbsp;{listName.title}</a>
                          )
                        }))
                      }
                    </nav>
                    {

                      this.state.Menuopen && menuLists[this.state.listHoverItem] ?
                        <HeaderHoverMenuItem Checked={this.state.Checked} tabdata={this.props.data} listHoverItem={menuLists[this.state.listHoverItem]}
                          onMouseOver={() => { this.setState({ Menuopen: true, }) }}
                          onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false }) }}
                        />
                        :
                        ''
                    }
                  </Grid>
                </Grid>}
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
                    <img className="mobile-img" src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" alt="" />
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
                    <img className="submenu-icons" src={row.icon} alt={row.icon}></img>
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
                          <img className="submenu-icons" src={row2.icon} alt=""></img>
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

export default withStyles(styles)(props => {
  const { mapped } = useDummyRequest(headerData);
  if (Object.keys(mapped).length === 0) return ''

  return <Header {...props} data={mapped} />
});


