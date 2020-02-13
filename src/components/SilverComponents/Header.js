import React, { Component } from 'react';
import classNames from 'classnames';
import './header.css';
import Tooltip from '@material-ui/core/Tooltip';
import {
    AppBar,
    Grid,
    InputBase,
    Badge,
    Drawer,
    Toolbar,
    List,
    Typography,
    IconButton,
    ListItem,
    ListItemText,
    Container,
    InputAdornment,
    Modal,
    Fab,
    ClickAwayListener
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden } from '@material-ui/core';
import HeaderHoverMenuItem from './HoverNavBarListing/HeaderHoverMenuItem';
import HeaderHoversubMenu from './HoverNavBarListing/HeaderHoversubMenu';
// import HeaderNotification from './Notification/HeaderNotification'
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from '../../hooks';
import { headerDataSilver } from '../../mappers';
import { styles } from './styles';
import LogoSmallScreen from '../../assets/Stylori Silver logo.svg';
import Seach from '../../assets/search'
import stylorisilverlogo from '../../assets/Stylori Silver logo.svg'
import Popover from '@material-ui/core/Popover';
import { NavLink } from 'react-router-dom';
import logout from "../../assets/Icons/logout.svg"
import styloriLogo from "../../assets/Stylorilogo.svg"
import ElasticSearch from "components/ElasticSearch/ElasticSearch"
import { CartContext } from 'context'

let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : {}
// var path = window.location.pathname.split('/').pop();
class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            panel: false,
            panel1: false,
            Menuopen: false,
            submenuOpen: false,
            selected: '',
            selected1: '',
            Checked: false,
            load: false,
            listHoverItem: 'Jewellery',
            headerHeightprops: 0,
            anchorOne: null,
            targetopen: null,
            targetopenSubmenu: null,
            subTitleData: null,
            subMenuTarget: null,
            anchorEl: false,
            opened: false,

        }
        this.topZero = React.createRef();
    }
    componentDidMount() {
        var _pathname = window.location.pathname.split("/")
        if (window.location.pathname === "/cart" || window.location.pathname === '/checkout' || _pathname[1] === "paymentsuccess" || _pathname[1] === "paymentfail") {
            return true
        }
        else {
            window.addEventListener("scroll", this.scrolling);
            if (!this.state.Menuopen && !this.state.submenuOpen) {
                return this.setState({ subTitleData: "", subMenuTarget: "" })
            }
            else {
                return true
            }
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
    selectItem1 = (name) => {
        let { selected1 } = this.state;
        let value = selected1 === name ? "" : name;
        this.setState({ selected1: value })
    }
    headerTransitions = () => {
        document.getElementById('topNav').style.paddingTop = "0";
        document.getElementById('topNav').style.transition = "height 0.5s";
        if (document.getElementById("SliderFilter")) {
            document.getElementById("SliderFilter").style.top = "120px";
            document.getElementById('SliderFilter').style.transition = "height 0.5s";
            document.getElementById("filterBy").style.top = "80px";
            document.getElementById('filterBy').style.transition = "height 0.5s";
        }

    }

    handleClose = () => {
        this.setState({ opened: !this.state.opened });
    };

    handleClickPopover = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClosePopover = () => {
        this.setState({
            anchorEl: false,
        });
    };
    scrolling = () => {
        if ((document.getElementsByTagName("body")[0].scrollHeight > window.innerHeight) && (window.scrollY > 0)) {
            if (document.getElementById("topNav")) {
                document.getElementById("topNav").style.marginTop = "-69px";
            }
            if (document.getElementById("logoImage")) {
                document.getElementById("logoImage").style.width = "80%";
            }
        } else {
            if (document.getElementById("topNav")) {
                document.getElementById("topNav").style.marginTop = "0px";
            }
            if (document.getElementById("logoImage")) {
                document.getElementById("logoImage").style.width = "100%";
            }
        }

    }
    submenuDetails = (data, target) => {
        this.setState({ subMenuTarget: target, subTitleData: data, submenuOpen: true })
    }
    handleExpandClickClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { mainlist, Jewellery, subheader, menuListHeader, menuLists } = this.props.data;
        let { selected, selected1 } = this.state;
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const openPopover = anchorEl;
        const opened = this.state;
        var a = window.location.pathname
        var b = a.split("/")
        // const id = open ? true : undefined;
        return (
            <div style={{ top: "0", zIndex: "1000", width: "100%" }} className={window.location.pathname === "/cart" || b[1] === "paymentsuccess" || b[1] === "paymentfail" || window.location.pathname === '/checkout' ? "headerTopcard" : "headerTop"}>
                <Hidden smDown >
                    {/* <HeaderNotification headerTransition={() => { this.headerTransitions() }} /> */}
                    <div className="header-appbar-sticky1" id='headerDiv' style={{ position: "fixed", zIndex: "1000" }}>
                        <AppBar className="header-appbarsilver1 " id="topNav" style={{ transition: "height 0.2s" }}>
                            <Container maxWidth="lg" id="searchcontainer" >
                                <Grid container spacing={12} className={window.location.pathname === "/cart" || b[1] === "paymentsuccess" || b[1] === "paymentfail" || window.location.pathname === '/checkout' ? "cartheader" : "cartcardrelese"}>
                                    <Grid container item xs={12} justify="flex-end" alignItems="center">
                                        {this.props.paymentSucces || window.location.pathname === "/cart" || window.location.pathname === '/checkout' ? <Grid item xs={3} className="logoImgHeader1">
                                            <div id="logoDiv1" className="logoDiv1" onClick={() => { window.location.href = "/" }} style={{ cursor: "pointer" }}>
                                                <img id="logoImage" style={{ transition: "height 0.2s", marginTop: "9px" }} className={`imges`} src={styloriLogo} onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
                                            </div>
                                        </Grid>
                                            : ""}
                                        <Grid container item xs={9} justify="flex-end" alignItems="center">
                                            <div className={`head-icons1 ${classes.headIcons}`} >
                                                <i class={`fa fa-phone  ${classes.iconFafa}`}></i>
                                                <Typography className={classes.callerNum}>1800 102 0330</Typography>
                                                <Grid onClick={this.handleClose} style={{ cursor: "pointer" }} className={`search`}>
                                                    <Grid container>
                                                        <Typography style={{ flexGrow: 1, fontSize: "0.96rem" }}>Search</Typography>
                                                        <div className={classes.searchcontainer} style={{ width: "25px" }}><Seach className={"searchsvg"} />
                                                        </div>

                                                    </Grid>
                                                </Grid>

                                                {localStorage.getItem("true") ?
                                                    <div className="tooltip ">
                                                        <span
                                                            class="MuiBadge-root"
                                                            aria-owns={openPopover ? 'simple-popper' : ""}
                                                            // onClick={this.handleClickPopover}
                                                            onClick={() => { window.location.href = "/account-profile" }}
                                                        >
                                                            <i style={{ fontSize: "20px", marginTop: "9px" }} class={`fa fa-user  ${classes.iconFafa}`}></i>
                                                            <span className="tooltip-slog">{Boolean(localStorage.getItem("user_id")) ?"Account" : "Login" }</span>
                                                        </span></div>
                                                    // <img className="icons-header-sizes" src={usershape}/>

                                                    :
                                                    <div className="tooltip ">

                                                        <span class="MuiBadge-root" onClick={() => window.location.pathname = "/login"}>
                                                            <i style={{ fontSize: "20px", marginTop: "9px" }} class={`fa fa-user  ${classes.iconFafa}`}></i>
                                                            <span className="tooltip-slog">{Boolean(localStorage.getItem("user_id")) ?"Account" :"Login" }</span>
                                                        </span>

                                                    </div>
                                                }
                                                {/* <Popover
                                                    id="simple-popper"
                                                    open={openPopover}
                                                    anchorEl={anchorEl}
                                                    onClose={this.handleClosePopover}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                >
                                                    <div
                                                    >
                                                        <Grid
                                                            style={{ padding: "10px", width: "194px", cursor: "pointer" }}
                                                            container spacing={12} lg={12}>
                                                            <Grid item > <div style={{ padding: "0px 6px 0px 0px" }}
                                                                onClick={() => {
                                                                    localStorage.clear();
                                                                    sessionStorage.clear()
                                                                    window.location.reload()
                                                                    window.location.pathname = "/login"
                                                                }}><img className="icons-header-sizes" src={logout} />&nbsp;Logout
                                             </div></Grid>
                                                            <Grid item > <div style={{ float: "right" }} onClick={() => { window.location.href = "/account-profile" }}>
                                                                / My Account
                                                 </div></Grid>
                                                        </Grid>

                                                    </div>
                                                </Popover> */}
                                                <div className="tooltip">
                                                    <Badge style={{ marginTop: "9px" }} color="secondary"
                                                        badgeContent={this.props.wishlist && this.props.wishlist.wishlistdata && this.props.wishlist.wishlistdata.nodes && this.props.wishlist.wishlistdata.nodes.length > 0 ? this.props.wishlist && this.props.wishlist.wishlistdata && this.props.wishlist.wishlistdata.nodes && this.props.wishlist.wishlistdata.nodes.length : "0"} color="secondary"
                                                    // wishlist_count
                                                    // badgeContent={this.props.wishlist_count && this.props.wishlist_count.length > 0 ? this.props.wishlist_count : "0"}
                                                    >

                                                        <i style={{ fontSize: "18px" }} class={`fa fa-heart  ${classes.iconFafaheart}`} onClick={() => {
                                                            if (user_id.length > 0) {
                                                                window.location.href = `/account${'-wishlist'}`
                                                            } else {
                                                                window.location.href = "/login"
                                                            }
                                                        }}  ></i>
                                                        <span className="tooltip-s">Wishlist</span>


                                                    </Badge>
                                                </div>

                                                <div className="tooltip">
                                                    <Badge style={{ marginTop: "9px" }} badgeContent={
                                                        (  this.props.cart_count && this.props.cart_count.data && this.props.cart_count.data.allTransSkuLists && this.props.cart_count.data.allTransSkuLists.nodes.length > 0) 
                                                        ? this.props.cart_count && this.props.cart_count.data && this.props.cart_count.data.allTransSkuLists && this.props.cart_count.data.allTransSkuLists.nodes.length 
                                                       :
                                                       "0"
                                                        // this.props && this.props.cart_count && this.props.cart_count.length
                                                    } color="secondary">
                                                        <a href="/cart" className="highlighter">
                                                            <i style={{ fontSize: "20px" }} class={`fa fa-shopping-cart  ${classes.iconFafa}`}></i>
                                                            <span className="tooltip-s" style={{ color: "#d51f63" }}>Cart</span>
                                                        </a> </Badge>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                            {window.location.pathname === "/cart" || window.location.pathname === '/checkout' || b[1] === "paymentsuccess" || b[1] === "paymentfail" ? "" :
                                <Grid container id="headerContainer" >
                                    <Container maxWidth="lg" >
                                        <Grid container spacing={12} id="fullcontainer" className="setHeight">
                                            <Grid item xs={3} className="logoImgHeader1">
                                                <div id="logoDiv1" className="logoDiv1" onClick={() => { window.location.href = "/" }} style={{ cursor: "pointer" }}>
                                                    <img id="logoImage" style={{ transition: "height 0.2s" }} className={`imges`} src={styloriLogo} onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
                                                </div>
                                            </Grid>
                                            <Grid container item xs={9} id={"containerTitle"} justify="flex-end" alignItems="center" className={`header-navbar-list1 ${classes.headerNavbarList}`}
                                                onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false, targetopen: null }) }}
                                            >
                                                <Grid item xs={12} className="titleTop" id={"titleTop"} >
                                                    <nav
                                                    >
                                                        {
                                                            (menuListHeader.map(listName => {
                                                                let urlsmall = listName.title.toLowerCase()
                                                                return (
                                                                    <a href={listName.url} className={window.location.pathname === listName.url ? classes.seletectedMenu : classes.menuListCursor} onMouseOver={(event) => { this.setState({ Menuopen: true, submenuOpen: false, subTitleData: null, targetopen: event.currentTarget, listHoverItem: listName.title.replace(/ +/g, "") }) }}>{listName.title}</a>


                                                                )

                                                            }))
                                                        }
                                                    </nav>
                                                    {

                                                        this.state.Menuopen && menuLists[this.state.listHoverItem] ?
                                                            <HeaderHoverMenuItem tabdata={this.props.data} listHoverItem={menuLists[this.state.listHoverItem]}
                                                                onMouseOver={(event) => { this.setState({ Menuopen: true, targetopenSubmenu: event.currentTarget }) }}
                                                                opened={this.state.Menuopen}
                                                                targetopened={this.state.targetopen}
                                                                submenuDetails={this.submenuDetails}
                                                                onMouseLeave={() => { this.setState({ targetopen: null }) }}
                                                            />
                                                            :
                                                            ''
                                                    }
                                                    {this.state.Menuopen && this.state.submenuOpen ?
                                                        <HeaderHoversubMenu
                                                            opened={this.state.submenuOpen}
                                                            onMouseOver={(event) => { this.setState({ submenuOpen: true }) }}
                                                            listHoverItem={menuLists[this.state.listHoverItem]}
                                                            data={this.state.subTitleData}
                                                            subMenuTarget={this.subMenuTarget}
                                                            targetopened={this.state.subMenuTarget}
                                                            onMouseLeave={() => { this.setState({ submenuOpen: false, subTitleData: "", subMenuTarget: "" }) }}
                                                        />
                                                        :
                                                        ""}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </Grid>}
                            <Grid container id="headerContainerTop" >

                            </Grid>
                        </AppBar>
                    </div>
                </Hidden>

                <Modal
                    open={this.state.opened}
                    onClose={this.handleClose}
                    className='docc-modal'
                >
                    <ElasticSearch handleClose={this.handleClose} />
                </Modal>
                <Hidden mdUp>
                    <Grid>
                        <Grid style={{ position: "fixed", zIndex: "1300" }}>
                            <div className="header-appbar-sticky1">
                                <AppBar
                                    className="header-appbar-moblie1"
                                    id="smallScreen"
                                >
                                    <Toolbar className={"toolbarsetting"} >
                                        <Grid container item xs={1} sm={1} md={1} lg={1} xl={1} justify="center" alignItems="center">
                                            <IconButton
                                                onClick={this.handleDrawerOpen}
                                            >
                                                <MenuIcon className={classes.mobileNavIcon} />
                                            </IconButton>
                                        </Grid>

                                        <Grid item xs={5} className="logoImgHeader1">
                                            <div className="logoDiv1" onClick={() => { window.location.href = "/" }} style={{ cursor: "pointer" }}>
                                                <img className={`imgsilver`} src={styloriLogo} style={{ width: "100%", height: "auto" }} onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div onClick={this.handleSearch} className="mobli-icon1">
                                                <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", alignContent: "center", paddingRight: "10px", paddingBottom: "15px" }}>
                                                    <div className={`head-icons1 ${classes.headIcons}`}  >

                                                        <div id="search" onClick={this.handleClose} className={classes.searchcontainTop}><Seach className={"searchsvgmobile"}

                                                        />
                                                        </div>
                                                        {/* {localStorage.getItem("true") ?
                                                    <span
                                                        class="MuiBadge-root"
                                                        aria-owns={openPopover ? 'simple-popper' : ""}
                                                        // onClick={this.handleClickPopover}
                                                        onClick={() => { window.location.href = "/account-profile" }}
                                                    >
                                                        <i style={{ fontSize: "20px", marginTop: "9px" }} class={`fa fa-user  ${classes.iconFafa}`}></i>
                                                    </span>
                                                    // <img className="icons-header-sizes" src={usershape}/>
                                                    : <span class="MuiBadge-root" onClick={() => window.location.pathname = "/login"}>
                                                        <i style={{ fontSize: "20px", marginTop: "9px" }} class={`fa fa-user  ${classes.iconFafa}`}></i>
                                                    </span>
                                                } */}

                                                        {localStorage.getItem("true") ?
                                                            <span
                                                                aria-owns={openPopover ? 'simple-popper' : ""}
                                                                onClick={() => { window.location.href = "/account-profile" }}
                                                            >
                                                                <i class={`fa fa-user  ${classes.iconFafa}`} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}></i>
                                                            </span>
                                                            : <span onClick={() => window.location.pathname = "/login"}>
                                                                <i class={`fa fa-user  ${classes.iconFafa}`} style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}></i>
                                                            </span>
                                                        }
                                                        {/* <Popover
                                                            id="simple-popper"
                                                            open={openPopover}
                                                            anchorEl={anchorEl}
                                                            onClose={this.handleClosePopover}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'center',
                                                            }}
                                                            transformOrigin={{
                                                                vertical: 'top',
                                                                horizontal: 'center',
                                                            }}
                                                        >
                                                            <div
                                                            >
                                                                <Grid
                                                                    style={{ padding: "10px", width: "194px", cursor: "pointer" }}
                                                                    container spacing={12} lg={12}>
                                                                    <Grid item > <div style={{ textAlign: "center", padding: "0px 6px 0px 0px" }}
                                                                        onClick={() => {
                                                                            localStorage.clear();
                                                                            sessionStorage.clear()
                                                                            window.location.reload()
                                                                            window.location.pathname = "/login"
                                                                        }}><img style={{ height: " 18px!important", cursor: "pointer ", width: "18px !important" }} className="icons-header-sizes" src={logout} />&nbsp;Logout
                                             </div></Grid>
                                                                    <Grid item> <div style={{ float: "right" }} onClick={() => { window.location.href = "/account-profile" }}>
                                                                        / My Account
                                                 </div></Grid>
                                                                </Grid>

                                                                {/* <NavLink to="/account-profile"> */}

                                                        {/* </NavLink> */}
                                                        {/* </div>
                                                        </Popover> */}
                                                        <Badge badgeContent={this.props.wishlist && this.props.wishlist.wishlistdata && this.props.wishlist.wishlistdata.nodes && this.props.wishlist.wishlistdata.nodes.length > 0 ? this.props.wishlist && this.props.wishlist.wishlistdata && this.props.wishlist.wishlistdata.nodes && this.props.wishlist.wishlistdata.nodes.length : "0"} color="secondary">
                                                            <i class={`fa fa-heart ${classes.iconFafaheart}`} onClick={() => {
                                                                if (user_id.length > 0) {
                                                                    window.location.href = `/account${'-wishlist'}`
                                                                } else {
                                                                    window.location.href = "/login"
                                                                }
                                                            }}  ></i>
                                                        </Badge>
                                                        <Badge style={{ fontSize: "9px" }} badgeContent={
                                                            (
                                                                this.props.cart_count && this.props.cart_count.data && this.props.cart_count.data.allTransSkuLists && this.props.cart_count.data.allTransSkuLists.nodes.length > 0) 
                                                                ? this.props.cart_count && this.props.cart_count.data && this.props.cart_count.data.allTransSkuLists && this.props.cart_count.data.allTransSkuLists.nodes.length 
                                                               :
                                                               "0"
                                                                 
                                                            // localStorage.getItem("a__c_t") ? localStorage.getItem("a__c_t") : "0"
                                                            // this.props.cart_count? this.props.cart_count.length:"0"

                                                        } color="secondary">
                                                            <a href="/cart" >
                                                                <i style={{ fontSize: "15px !important" }} class={`fa fa-shopping-cart  ${classes.iconFafa}`}></i>

                                                            </a>
                                                        </Badge>
                                                    </div>
                                                </Grid>
                                            </div>
                                        </Grid>
                                    </Toolbar>
                                </AppBar>


                            </div>

                        </Grid>
                    </Grid>
                    <Drawer
                        anchor="left"
                        open={this.state.open}
                        classes={{
                            paper: classNames(
                                classes.drawerPaper,
                            )
                        }}
                    >
                        <ClickAwayListener onClickAway={(e) => this.handleExpandClickClose(e)}>
                            <div>
                                <div className={classes.menuheader} >
                                    <IconButton onClick={this.handleDrawerClose}
                                        style={{ float: 'right' }} className={classes.iconbuttons}>
                                        <i class="fa fa-times closebus" ></i>
                                    </IconButton>
                                </div>
                                <List className="sideNavListing"  >
                                    {mainlist.map(row => (
                                        <>
                                            <ListItem button key={row.name} className="drawer-list1" >
                                                <ListItemText
                                                    onClick={() => { window.location.href = row.url }}
                                                >
                                                    <Typography className="list-items1"
                                                        variant=""
                                                    >{row.name.toUpperCase()}
                                                    </Typography>
                                                </ListItemText>
                                                <div onClick={() => Jewellery[row.name] !== undefined ? this.selectItem(row.name) : ''}>{Jewellery[row.name] !== undefined ? row.name === selected ? <i class="fa fa-caret-up drawer-arrow"></i> : <i class="fa fa-caret-down drawer-arrow"></i> : ""}
                                                </div>
                                            </ListItem>
                                            {selected === row.name &&
                                                Object.keys(Jewellery[selected]).map(row2 => (
                                                    <>
                                                        <ListItem button key={Jewellery[selected][row2].name} className={classes.subtitleContainer}>
                                                            <ListItemText onClick={() => { window.location.href = Jewellery[selected][row2].url }}>
                                                                <Typography className={classes.subtitles} variant="">{Jewellery[selected][row2].name.toUpperCase()}
                                                                </Typography>
                                                            </ListItemText>
                                                            <div onClick={() => this.selectItem1(Jewellery[selected][row2].name)}>{selected1 === Jewellery[selected][row2].name ? <i class="fa fa-caret-up drawer-arrow"></i> : <i class="fa fa-caret-down drawer-arrow"></i>}
                                                            </div>
                                                        </ListItem>
                                                        {selected1 === Jewellery[selected][row2].name &&
                                                            <>
                                                                {/* <ListItem className="drawer-list1">
                                                            <ListItemText
                                                            >
                                                                <Typography className="list-items1" variant="">{subheader[selected1]&&subheader[selected1].header&&subheader[selected1].header.toUpperCase()}
                                                                </Typography>
                                                                <span style={{ paddingTop: "5px" }} className="header-viewal1">View All</span>
                                                            </ListItemText>
                                                        </ListItem> */}
                                                                {subheader[selected1] && subheader[selected1].name && subheader[selected1].name.map(row => (
                                                                    <>
                                                                        <ListItem onClick={() => { window.location.href = row.url }} className={classes.subtitle2Container}>
                                                                            <ListItemText>
                                                                                <Typography className="list-items1" variant="">{row.name.toUpperCase()}</Typography>
                                                                            </ListItemText>
                                                                        </ListItem>
                                                                    </>
                                                                ))}

                                                            </>
                                                        }
                                                    </>
                                                ))
                                            }
                                        </>
                                    ))}
                                    {!localStorage.getItem("true") ? <>
                                        <ListItem button className="drawer-list12" >
                                            <ListItemText onClick={() => window.location.pathname = "/login"}>
                                                <Typography className="list-items1">
                                                    LOGIN
                                            </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem button className="drawer-list12" >
                                            <ListItemText onClick={() => window.location.pathname = "/registers"}>
                                                <Typography className="list-items1">
                                                    REGISTER
                                            </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </> :
                                        <>
                                            <ListItem button className="drawer-list12" >
                                                <ListItemText onClick={() => window.location.href = `/account${'-profile'}`}>
                                                    <Typography className="list-items1" >
                                                        VIEW PROFILE
                                            </Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem button className="drawer-list12" >
                                                <ListItemText onClick={() => window.location.href = `/account${'-wishlist'}`}>
                                                    <Typography className="list-items1">
                                                        MY WHISLIST
                                            </Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem button className="drawer-list12" >
                                                <ListItemText onClick={() => window.location.href = `/account${'-allorders'}`}>
                                                    <Typography className="list-items1">
                                                        ALL ORDERS
                                            </Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem button className="drawer-list12" >
                                                <ListItemText >
                                                    <Typography className="list-items1">
                                                        CONTACT US
                                            </Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem button className="drawer-list12" >
                                                <ListItemText onClick={() => {
                                                    localStorage.clear();
                                                    sessionStorage.clear();
                                                    window.location.reload()
                                                    window.location.pathname = "/login"
                                                }}>
                                                    <Typography className="list-items1">
                                                        LOGOUT
                                            </Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </>}
                                </List>
                            </div>
                        </ClickAwayListener>
                    </Drawer>
                </Hidden >
            </div >

        )
    }
}

export default withStyles(styles)(props => {
    let { CartCtx: { cartFilters, data: cart_count, loading, error, allorderdata, wishlistdata, NewUser } } = React.useContext(CartContext);
    const { mapped } = useDummyRequest(headerDataSilver);
    if (Object.keys(mapped).length === 0) return ''

    return <Header {...props} data={mapped} cart_count={cart_count} />
});


