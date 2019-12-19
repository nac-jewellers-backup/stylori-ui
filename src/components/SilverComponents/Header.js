import React, { Component } from 'react';
import classNames from 'classnames';
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
    IconButton,
    ListItem,
    ListItemText,
    Container,
    InputAdornment
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
import LogoSmallScreen from '../../assets/stylori-silver-logo-small-screen.png';
import Seach from '../../assets/search'


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
            subMenuTarget: null

        }
        this.topZero = React.createRef();
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrolling);
        if(!this.state.Menuopen && !this.state.submenuOpen){
            return this.setState({subTitleData: "", subMenuTarget: ""})
        }
        else{
            return true
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
        document.getElementById('topNav').style.transition = "0.5s";
        // var heightHeader = document.getElementById('headerDiv').clientHeight;
        if (document.getElementById("SliderFilter")) {
            document.getElementById("SliderFilter").style.top = "185px";
            document.getElementById('SliderFilter').style.transition = "0.5s";
            document.getElementById("filterBy").style.top = "120px";
            document.getElementById('filterBy').style.transition = "0.5s";
        }

    }
    scrolling = () => {
        if (window.innerWidth > 959) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("headerContainer").style.position = "fixed";
                document.getElementById("headerContainerTop").style.height = "74px";
                document.getElementById("headerContainer").style.background = "#fff";
                document.getElementById("headerContainer").style.zIndex = "10000";
                document.getElementById("headerContainer").style.boxShadow = "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)";
                document.getElementById("logoImage").style.width = "50%";
                document.getElementById("headerContainer").style.height = "55px";
                document.getElementById("logoDiv1").style.padding = "0px";
                document.getElementById("containerTitle").style.height = "55px";
                document.getElementById("fullcontainer").style.height = "55px";
                document.getElementById("titleTop").style.marginTop = "0px"
            } else {
                document.getElementById("headerContainer").style.position = "inherit";
                document.getElementById("headerContainer").style.background = "#fff";
                document.getElementById("headerContainer").style.zIndex = "10000";
                document.getElementById("headerContainerTop").style.height = "0px";
                document.getElementById("headerContainer").style.boxShadow = "none";
                document.getElementById("logoImage").style.width = "100%";
                document.getElementById("headerContainer").style.height = "auto";
                document.getElementById("containerTitle").style.height = "auto";
                document.getElementById("logoDiv1").style.paddingTop = "2%";
                document.getElementById("fullcontainer").style.height = "auto";
            }
        }
        else {
            return ""
        }

    }

    submenuDetails = (data, target) => {
        this.setState({ subTitleData: data, subMenuTarget: target })
        console.log(this.state.subTitleData,this.state.subMenuTarget)

    }
    submenuDetailsDelete = () => {
        this.setState({ subTitleData: null, subMenuTarget: null })
    }

    render() {

        const { mainlist, Jewellery, subheader, menuListHeader, menuLists } = this.props.data;
        let { selected, selected1 } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Hidden smDown >
                    {/* <HeaderNotification headerTransition={() => { this.headerTransitions() }} /> */}
                    <div className="header-appbar-sticky1" id='headerDiv'>
                        <AppBar className="header-appbarsilver1" id="topNav">
                            <Container maxWidth="lg">
                                <Grid container spacing={12} style={{ marginTop: "40px" }}>
                                    <Grid container item xs={12} justify="flex-end" alignItems="center">
                                        <div className={`head-icons1 ${classes.headIcons}`} >
                                            <i class={`fa fa-phone  ${classes.iconFafa}`}></i>
                                            <Typography className={classes.callerNum}>1800 102 0330</Typography>
                                            <InputBase
                                                className={`search`}
                                                placeholder=" SEARCH"
                                                endAdornment={<InputAdornment position="end"><div className={classes.searchcontainer}><Seach className={"searchsvg"} />
                                                </div></InputAdornment>}
                                            />
                                            <i class={`fa fa-user  ${classes.iconFafa}`}></i>
                                            <i class={`fa fa-heart  ${classes.iconFafaheart}`}></i>
                                            <i class={`fa fa-shopping-cart  ${classes.iconFafa}`}></i>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Grid container id="headerContainer" >
                                <Container maxWidth="lg" >
                                    <Grid container spacing={12} id="fullcontainer" >
                                        <Grid item xs={3} className="logoImgHeader1">
                                            <div id="logoDiv1" className="logoDiv1">
                                                <img id="logoImage" className={`img`} src="https://assets-cdn.stylori.com/images/static/stylori-logo.svg" onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
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
                                                            return (
                                                                <a href={listName} className={` ${classes.menuListCursor}`} onMouseOver={(event) => { this.setState({ Menuopen: true, targetopen: event.currentTarget, listHoverItem: listName.replace(/ +/g, "") }) }}>{listName}</a>
                                                            )

                                                        }))
                                                    }
                                                </nav>
                                                {

                                                    this.state.Menuopen && menuLists[this.state.listHoverItem] ?
                                                        <HeaderHoverMenuItem  tabdata={this.props.data} listHoverItem={menuLists[this.state.listHoverItem]}
                                                            onMouseOver={(event) => { this.setState({ Menuopen: true, submenuOpen: true, targetopenSubmenu: event.currentTarget }) }}
                                                            onMouseLeave={() => { this.setState({ targetopen: null }) }}
                                                            opened={this.state.Menuopen}
                                                            targetopened={this.state.targetopen}
                                                            submenuDetails={this.submenuDetails}
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
                            </Grid>
                            <Grid container id="headerContainerTop" >

                            </Grid>
                        </AppBar>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div className="header-appbar-sticky1">
                        <AppBar
                            className="header-appbar-moblie1"
                            id="smallScreen"
                        >

                            <Toolbar className="toolbarsetting" >
                                <Grid container item xs={2} sm={1} md={1} lg={1} xl={1} justify="center" alignItems="center">
                                    <IconButton
                                        onClick={this.handleDrawerOpen}
                                    >
                                        <MenuIcon className={classes.mobileNavIcon} />
                                    </IconButton>
                                </Grid>

                                <Grid item xs={3} className="logoImgHeader1">
                                    <div className="logoDiv1">
                                        <img className={`imgsilver`} src={LogoSmallScreen} onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={8}>
                                    <div className="mobli-icon1">
                                        <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end", alignContent: "center" }}>
                                            <div className={`head-icons1 ${classes.headIcons}`} >
                                                <InputBase
                                                    className={`searchmobile`}
                                                    placeholder=" SEARCH"
                                                    endAdornment={<InputAdornment position="end"><div className={classes.searchcontainTop}><Seach className={"searchsvgmobile"} />
                                                    </div></InputAdornment>}
                                                />
                                                <i class="fa fa-user"></i>
                                                <i class="fa fa-heart"></i>
                                                <i class="fa fa-shopping-cart"></i>
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </div>
                    <Drawer
                        anchor="left"
                        open={this.state.open}
                        classes={{
                            paper: classNames(
                                classes.drawerPaper,
                            )
                        }}

                    >
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
                                            onClick={() => Jewellery[row.name] !== undefined ? this.selectItem(row.name) : ''}
                                        >
                                            <Typography className="list-items1"
                                                variant=""
                                            >{row.name.toUpperCase()}
                                            </Typography>
                                        </ListItemText>
                                        {Jewellery[row.name] !== undefined ? row.name === selected ? <i class="fa fa-caret-down drawer-arrow"></i> : <i class="fa fa-caret-up drawer-arrow"></i> : ""}
                                    </ListItem>
                                    {selected === row.name &&
                                        Object.keys(Jewellery[selected]).map(row2 => (
                                            <>
                                                <ListItem button key={Jewellery[selected][row2].name} className={classes.subtitleContainer}>
                                                    <ListItemText onClick={() => this.selectItem1(Jewellery[selected][row2].name)}>
                                                        <Typography className={classes.subtitles} variant="">{Jewellery[selected][row2].name.toUpperCase()}
                                                        </Typography>
                                                    </ListItemText>
                                                    {selected1 === Jewellery[selected][row2].name ? <i class="fa fa-caret-down drawer-arrow"></i> : <i class="fa fa-caret-up drawer-arrow"></i>}
                                                </ListItem>
                                                {selected1 === Jewellery[selected][row2].name &&
                                                    <List className="sideNavListing" >
                                                        <ListItem className="drawer-list1">
                                                            <ListItemText
                                                            >
                                                                <Typography className="list-items1" variant="">{subheader[selected1].header.toUpperCase()}
                                                                </Typography>
                                                                <span style={{ paddingTop: "5px" }} className="header-viewal1">View All</span>
                                                            </ListItemText>
                                                        </ListItem>
                                                        {subheader[selected1].name.map(row => (
                                                            <>
                                                                <ListItem className={classes.subtitle2Container}>
                                                                    <ListItemText>
                                                                        <Typography className="list-items1" variant="">{row.toUpperCase()}</Typography>
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
    const { mapped } = useDummyRequest(headerDataSilver);
    if (Object.keys(mapped).length === 0) return ''

    return <Header {...props} data={mapped} />
});


