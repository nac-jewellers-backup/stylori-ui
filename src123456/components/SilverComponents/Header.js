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
    Container
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Hidden } from '@material-ui/core';
import HeaderHoverMenuItem from './HoverNavBarListing/HeaderHoverMenuItem';
// import HeaderNotification from './Notification/HeaderNotification'
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from '../../hooks';
import { headerDataSilver } from '../../mappers';
import { styles } from './styles';
import Logo from '../../assets/stylori-silver-logo.png'
import LogoSmallScreen from '../../assets/stylori-silver-logo-small-screen.png';


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
            load: false,
            listHoverItem: 'Jewellery',
            headerHeightprops: 0,
            anchorOne: null,
            targetopen: null

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

    render() {

        const { mainlist, Jewellery, subheader, menuListHeader, menuLists, earings, rings, pendants, nosepins, banglesbracelets, valayal, kammal, koluse, Price,
            Collection, Material } = this.props.data;
        let { selected, selected1 } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Hidden smDown >
                    {/* <HeaderNotification headerTransition={() => { this.headerTransitions() }} /> */}

                    <div className="header-appbar-sticky1" id='headerDiv'>
                        <AppBar className="header-appbarsilver1" id="topNav">
                            <Container maxWidth="lg">
                                <Grid container spacing={12}  >

                                    <Grid item xs={3} className="logoImgHeader1">
                                        <div className="logoDiv1">
                                            <img className={`imgsilver1`} src={Logo} onLoad={() => this.setState({ load: true })} onLoadedData={() => this.setState({ load: false })} alt="" />
                                        </div>
                                    </Grid>

                                    <Grid container item xs={9} >
                                        <Grid container item xs={12} justify="flex-end" alignItems="center">
                                            <Grid item xs={12} >
                                                <div className={`head-icons1 ${classes.headIcons}`} >

                                                    <i class="fa fa-user"></i>
                                                    <i class="fa fa-sign-in"></i>
                                                    <i class="fa fa-heart"></i>
                                                    <i class="fa fa-shopping-cart"></i>
                                                </div>
                                            </Grid>

                                        </Grid>
                                        <Grid container item xs={12} justify="flex-end" alignItems="center" className={`header-navbar-list1 ${classes.headerNavbarList}`}
                                            onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false, targetopen: null }) }}

                                        >
                                            <Grid item xs={12}>
                                                <nav
                                                >
                                                    {
                                                        (menuListHeader.map(listName => {
                                                            return (
                                                                <a href={listName} className={` ${classes.menuListCursor}`} onMouseOver={(event) => { this.setState({ Menuopen: true, targetopen: event.currentTarget, Checked: true, listHoverItem: listName.replace(/ +/g, "") }) }}>{listName}</a>
                                                            )

                                                        }))
                                                    }
                                                </nav>
                                                {

                                                    this.state.Menuopen && menuLists[this.state.listHoverItem] ?
                                                        <HeaderHoverMenuItem Checked={this.state.Checked} tabdata={this.props.data} listHoverItem={menuLists[this.state.listHoverItem]}
                                                            onMouseOver={(event) => { this.setState({ Menuopen: true }) }}
                                                            onMouseLeave={() => { this.setState({ Menuopen: false, Checked: false, targetopen: null }) }}
                                                            opened={this.state.Menuopen} targetopened={this.state.targetopen}

                                                        />
                                                        :
                                                        ''
                                                }
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Container>

                            {/* <div className="header-bottom"></div> */}

                        </AppBar>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div className="header-appbar-sticky1">
                        <AppBar
                            className="header-appbar-moblie1"
                            id="smallScreen"
                        >

                            <Toolbar>
                                <Grid container item xs={2} sm={1} md={1} lg={1} xl={1}>
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
                                        <Grid item xs={12} >
                                            <div className={`head-icons1 ${classes.headIcons}`} >

                                                <i class="fa fa-user"></i>
                                                <i class="fa fa-sign-in"></i>
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
                        className="nav-drawer"
                    >
                        <div className="header-drawer1">
                            <IconButton onClick={this.handleDrawerClose}
                                style={{ float: 'right' }}>
                                <i class="fa fa-times"></i>
                            </IconButton>
                            <Typography className="drawer-menu1">Menu</Typography>
                        </div>
                        <Divider />
                        <List className="sideNavListing"  >
                            {mainlist.map(row => (
                                <>
                                    <ListItem button key={row.name} className="drawer-list1" >
                                        <img className="submenu-icons1" src={row.icon} alt={row.icon}></img>
                                        <ListItemText
                                            onClick={() => Jewellery[row.name] !== undefined ? this.selectItem(row.name) : ''}
                                        >
                                            <Typography className="list-items1"
                                                variant=""
                                            >{row.name}
                                            </Typography>
                                        </ListItemText>
                                        {Jewellery[row.name] !== undefined ? row.name === selected ? <ExpandMore className="drawer-arrow" /> : <ExpandLess className="drawer-arrow" /> : ""}
                                    </ListItem>
                                    {selected === row.name &&
                                        Object.keys(Jewellery[selected]).map(row2 => (
                                            <>
                                                <ListItem button key={Jewellery[selected][row2].name} className="drawer-list1">
                                                    <img className="submenu-icons1" src={row2.icon} alt=""></img>
                                                    <ListItemText onClick={() => this.selectItem1(Jewellery[selected][row2].name)}>
                                                        <Typography className="Jew-mbl-head-list1" variant="">{Jewellery[selected][row2].name}
                                                        </Typography>
                                                    </ListItemText>
                                                    {selected1 === Jewellery[selected][row2].name ? <ExpandMore className="drawer-arrow" /> : <ExpandLess className="drawer-arrow" />}
                                                </ListItem>
                                                {selected1 === Jewellery[selected][row2].name &&
                                                    <List className="sideNavListing" >
                                                        <ListItem className="drawer-list1">
                                                            <ListItemText
                                                            >
                                                                <Typography className="Jew-mbl-head-list1" variant="">{subheader[selected1].header}
                                                                    <span className="header-viewal1">View All</span>
                                                                </Typography>
                                                            </ListItemText>
                                                        </ListItem>
                                                        {subheader[selected1].name.map(row => (
                                                            <>
                                                                <ListItem>
                                                                    <ListItemText>
                                                                        <Typography className="Jew-mbl-head-list1" variant="">{row}</Typography>
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


