import React, { Component } from "react";
import classNames from "classnames";
import "./header.css";
import {
  AppBar,
  Grid,
  Badge,
  Drawer,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemText,
  Container,
  Modal,
  ClickAwayListener,
  Divider,
  ListItemAvatar,
  Avatar,
  TextField,Select
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden } from "@material-ui/core";
import HeaderHoverMenuItem from "./HoverNavBarListing/HeaderHoverMenuItem";
import HeaderHoversubMenu from "./HoverNavBarListing/HeaderHoversubMenu";
import { withStyles } from "@material-ui/core/styles";
import { useDummyRequest } from "../../hooks";
import { headerDataSilver } from "../../mappers";
import { headerDataStyloriSilver } from "../../mappers";
import { styles } from "./styles";
import stylorisilverlogo from "../../assets/stylori_silver_logo.svg";
import heart from "../../assets/Icons/loveGrey.svg";
import cart from "../../assets/Icons/cartGrey.svg";
import searchIcon from "../../assets/Icons/searchGrey.svg";
import styloriLogo from "../../assets/Stylorilogo.svg";
import ElasticSearch from "components/ElasticSearch/ElasticSearch";
import { CartContext, GlobalContext } from "context";
import silverOpenLinkImage from "../../assets/silverOpenLink.png";
import { GOLD_PRICE_AND_CURRENCY_CONVO } from "../../queries/home";
import { API_URL } from "../../config";

let user_id = localStorage.getItem("user_id")
  ? localStorage.getItem("user_id")
  : {};
let selected_price = localStorage.getItem("selected_price")
  ? JSON.parse(localStorage.getItem("selected_price"))
  : null;

  function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      panel: false,
      panel1: false,
      Menuopen: false,
      submenuOpen: false,
      selected: "",
      selected1: "",
      Checked: false,
      load: false,
      listHoverItem: "Jewellery",
      headerHeightprops: 0,
      anchorOne: null,
      targetopen: null,
      targetopenSubmenu: null,
      subTitleData: null,
      subTitleAllData: null,
      subMenuTarget: null,
      goldPrice: null,
      currencyConvo: null,
      selected_currency: null,
      livePrice: null,
      anchorEl: false,
      opened: false,
    };
    this.topZero = React.createRef();
    this.handleCurrencyConvo = this.handleCurrencyConvo.bind(this);
  }
  componentDidMount() {
    var _pathname = window.location.pathname.split("/");
    this.getGoldPrice();
    if (
      window.location.pathname === "/cart" ||
      window.location.pathname === "/checkout" ||
      _pathname[1] === "paymentsuccess" ||
      _pathname[1] === "paymentfail"
    ) {
      return true;
    } else {
      window.addEventListener("scroll", this.scrolling);
      if (!this.state.Menuopen && !this.state.submenuOpen) {
        return this.setState({
          subTitleData: "",
          subMenuTarget: "",
          subTitleAllData: "",
        });
      } else {
        return true;
      }
    }
  }

  getGoldPrice = () => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GOLD_PRICE_AND_CURRENCY_CONVO,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          goldPrice: data?.data?.allDailyMetalPrices?.nodes ?? null,
          currencyConvo: data?.data?.allMasterCountries?.nodes ?? null,
          selected_currency: selected_price
            ? selected_price
            : data?.data?.allMasterCountries?.nodes[0] ?? null,
          livePrice: `${data?.data?.allDailyMetalPrices?.nodes[0]?.displayName} - ₹${data?.data?.allDailyMetalPrices?.nodes[0]?.displayPrice}`,
        });
      });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleClick = (e, name, value) => {
    this.setState({ [name]: !value });
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value });
  };
  selectItem1 = (name) => {
    let { selected1 } = this.state;
    let value = selected1 === name ? "" : name;
    this.setState({ selected1: value });
  };
  headerTransitions = () => {
    document.getElementById("topNav").style.paddingTop = "0";
    document.getElementById("topNav").style.transition = "height 0.5s";
    if (document.getElementById("SliderFilter")) {
      document.getElementById("SliderFilter").style.top = "120px";
      document.getElementById("SliderFilter").style.transition = "height 0.5s";
      document.getElementById("filterBy").style.top = "80px";
      document.getElementById("filterBy").style.transition = "height 0.5s";
    }
  };

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
    if (
      document.getElementsByTagName("body")[0].scrollHeight >
        window.innerHeight &&
      window.scrollY > 0
    ) {
      if (document.getElementById("topNav")) {
        document.getElementById("topNav").style.marginTop = "0px";
      }
      if (document.getElementById("logoImage")) {
        if (this.props?.globalContext?.Globalctx?.pathName) {
          document.getElementById("logoImage").style.width = "100%";
          document.getElementById("logoImage").style.height = "70px";
        } else {
          document.getElementById("logoImage").style.width = "80%";
        }
      }
    } else {
      if (document.getElementById("topNav")) {
        document.getElementById("topNav").style.marginTop = "0px";
      }
      if (document.getElementById("logoImage")) {
        document.getElementById("logoImage").style.width = "100%";
        if (this.props?.globalContext?.Globalctx?.pathName) {
          document.getElementById("logoImage").style.height = "90px";
        }
      }
    }
  };

  

  submenuDetails = (data, target, alldata) => {
    this.setState({
      subMenuTarget: target,
      subTitleData: data,
      submenuOpen: true,
      subTitleAllData: alldata,
    });
  };
  handleExpandClickClose = () => {
    this.setState({ open: false });
  };
  handleCurrencyConvo = (e, value) => {
    localStorage.setItem("selected_price", JSON.stringify(value));
    this.setState({ selected_currency: value });
    window.location.reload();
  };

  render() {
    const { mainlist, Jewellery, subheader, menuListHeader, menuLists } =
      this.props.data;
    // debugger;
    let { selected, selected1 } = this.state;
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const openPopover = anchorEl;
    var a = window.location.pathname;
    var b = a.split("/");

    const isSilver =
      this.props.globalContext &&
      this.props.globalContext.Globalctx &&
      this.props.globalContext.Globalctx.pathName &&
      this.props.globalContext.Globalctx.pathName
        ? this.props.globalContext.Globalctx.pathName
        : false;
    // const id = open ? true : undefined;

    return (
      <div
        style={{ top: "0", zIndex: "1000", width: "100%" }}
        className={
          window.location.pathname === "/cart" ||
          b[1] === "paymentsuccess" ||
          b[1] === "paymentfail" ||
          window.location.pathname === "/checkout"
            ? "headerTopcard"
            : "headerTop"
        }
      >
                 
        <Hidden smDown>
          {/* <HeaderNotification headerTransition={() => { this.headerTransitions() }} /> */}

          <div
            className="header-appbar-sticky1"
            id="headerDiv"
            style={{ position: "fixed", zIndex: "1000" }}
          >
            <AppBar
              className="header-appbarsilver1 "
              id="topNav"
              style={{ transition: "height 0.2s" }}
            >
              <Container
                maxWidth="lg"
                id="searchcontainer"
                style={{
                  backgroundColor: isSilver ? "#606161" : "",
                  maxWidth: "100%",
                }}
              >
                <Grid
                  container
                  spacing={12}
                  style={{ display: "contents" }}
                  className={
                    window.location.pathname === "/cart" ||
                    b[1] === "paymentsuccess" ||
                    b[1] === "paymentfail" ||
                    window.location.pathname === "/checkout"
                      ? "cartheader"
                      : "cartcardrelese"
                  }
                >
                  {isSilver ? (
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Sitewide SALE | Shop from over 5000 designs and get upto 10 % OFF
                    </Typography>
                  ) : null}
                  {/* <Grid
                    container
                    item
                    xs={12}
                    justify="flex-end"
                    alignItems="center"
                  >
                    {this.props.paymentSucces ||
                    window.location.pathname === "/cart" ||
                    window.location.pathname === "/checkout" ? (
                      <Grid item xs={3} className="logoImgHeader1">
                        <div
                          id="logoDiv1"
                          className="logoDiv1"
                          onClick={() => {
                            window.location.href = isSilver
                              ? "/styloriSilver"
                              : "/";
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            id="logoImage"
                            className={`${isSilver && "silverlogo"} ${"imges"}`}
                            src={isSilver ? stylorisilverlogo : styloriLogo}
                            onLoad={() => this.setState({ load: true })}
                            onLoadedData={() => this.setState({ load: false })}
                            alt=""
                            style={{
                              // transition: "height 0.2s",
                              height: isSilver ? 60 : 60,
                              marginTop: "9px",
                            }}
                          />
                        </div>
                      </Grid>
                    ) : (
                      ""
                    )}
                  </Grid> */}
                </Grid>
              </Container>
              {window.location.pathname === "/cart" ||
              window.location.pathname === "/checkout" ||
              b[1] === "paymentsuccess" ||
              b[1] === "paymentfail" ? (
                <Grid container id="headerContainer">
                  <Container maxWidth="lg">
                    <Grid
                      container
                      spacing={12}
                      id="fullcontainer"
                      className="setHeight"
                    >
                      <Grid item xs={2} className="logoImgHeader1">
                        <div
                          id="logoDiv1"
                          className="logoDiv1"
                          onClick={() => {
                            window.location.href = isSilver
                              ? "/styloriSilver"
                              : "/";
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            id="logoImage"
                            className={`${isSilver && "silverlogo"} ${"imges"}`}
                            src={isSilver ? stylorisilverlogo : styloriLogo}
                            onLoad={() => this.setState({ load: true })}
                            onLoadedData={() => this.setState({ load: false })}
                            loading="lazy"
                            alt="...."
                            style={{
                              transition: "height 0.2s",
                              height: isSilver ? 60 : 60,
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={8}
                        id={"containerTitle"}
                        justify="flex-end"
                        alignItems="center"
                        className={`header-navbar-list1 ${classes.headerNavbarList}`}
                        onMouseLeave={() => {
                          this.setState({
                            Menuopen: false,
                            Checked: false,
                            targetopen: null,
                          });
                        }}
                      >
                        <Grid item xs={12} className="titleTop" id={"titleTop"}>
                          <nav>
                            {menuListHeader.map((listName) => {
                              return (
                                <a
                                  href={listName.url}
                                  className={
                                    window.location.pathname === listName.url
                                      ? classes.seletectedMenu
                                      : classes.menuListCursor
                                  }
                                  onMouseOver={(event) => {
                                    this.setState({
                                      Menuopen: true,
                                      submenuOpen: false,
                                      subTitleData: null,
                                      subTitleAllData: null,
                                      targetopen: event.currentTarget,
                                      listHoverItem: listName.title.replace(
                                        / +/g,
                                        ""
                                      ),
                                    });
                                  }}
                                  target={
                                    listName.title === "STYLORISILVER" ||
                                    listName.title === "VISIT STYLORI.COM"
                                      ? "_blank"
                                      : ""
                                  }
                                >
                                 {listName.title === "VISIT STYLORI.COM" ? (
                                    <a style={{color:"rgba(241, 72, 128, 1)",display:"contents"}}>{'STYLORI'}</a>
                                  ) : listName.title === "STYLORISILVER" ? (
                                    <a className={classes.silver}>{'STYLORI SILVER'}</a>
                                  ) : (
                                    listName.title
                                  )}
                                </a>
                              );
                            })}
                          </nav>
                          {this.state.Menuopen &&
                          menuLists[this.state.listHoverItem] ? (
                            <HeaderHoverMenuItem
                              tabdata={this.props.data}
                              listHoverItem={
                                menuLists[this.state.listHoverItem]
                              }
                              isSilver={isSilver}
                              onMouseOver={(event) => {
                                this.setState({
                                  Menuopen: true,
                                  targetopenSubmenu: event.currentTarget,
                                });
                              }}
                              opened={this.state.Menuopen}
                              targetopened={this.state.targetopen}
                              submenuDetails={this.submenuDetails}
                              onMouseLeave={() => {
                                this.setState({ targetopen: null });
                              }}
                            />
                          ) : (
                            ""
                          )}
                          {this.state.Menuopen && this.state.submenuOpen ? (
                            <HeaderHoversubMenu
                              opened={this.state.submenuOpen}
                              isSilver={isSilver}
                              onMouseOver={(event) => {
                                this.setState({ submenuOpen: true });
                              }}
                              listHoverItem={
                                menuLists[this.state.listHoverItem]
                              }
                              data={this.state.subTitleData}
                              allData={this.state.subTitleAllData}
                              subMenuTarget={this.subMenuTarget}
                              targetopened={this.state.subMenuTarget}
                              onMouseLeave={() => {
                                this.setState({
                                  submenuOpen: false,
                                  subTitleData: "",
                                  subTitleAllData: "",
                                  subMenuTarget: "",
                                });
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                      <Grid item xs={2}>
                        <div className={`head-icons1 ${classes.headIcons}`}>
                          {/* <i class={`fa fa-phone  ${classes.iconFafa}`}></i>
                      <Typography className={classes.callerNum}>
                        1800 102 0330
                      </Typography> */}
                          <Grid
                            onClick={this.handleClose}
                            style={{ cursor: "pointer" }}
                            className={`search`}
                          >
                            <Grid container>
                              {/* <Typography
                            style={{ flexGrow: 1, fontSize: "0.96rem" }}
                          >
                            Search
                          </Typography> */}
                              <div
                                className={classes.searchcontainer}
                                style={{ width: "25px" }}
                              >
                                {" "}
                                <img
                                  src={searchIcon}
                                  alt="icon"
                                  loading="lazy"
                                />
                                {/* <Seach className={"searchsvg"} /> */}
                              </div>
                            </Grid>
                          </Grid>

                          {localStorage.getItem("true") ? (
                            <div className="tooltip ">
                              <span
                                className="MuiBadge-root"
                                aria-owns={openPopover ? "simple-popper" : ""}
                                // onClick={this.handleClickPopover}
                                onClick={() => {
                                  window.location.href = "/account-profile";
                                }}
                                style={{display:"flex",flexDirection:"column"}}
                              >
                                <i
                                  style={{ fontSize: "20px", color: "#6D6E71" }}
                                  className={`fa fa-user  ${classes.iconFafa}`}
                                ></i>
                                <span className={isSilver ? "tooltip-slog-silver" : "tootip-account"}>
                                  {Boolean(localStorage.getItem("user_id")) &&
                                  !Boolean(localStorage.getItem("gut_lg"))
                                    ? "Account"
                                    : "Login"}
                                </span>
                              </span>
                            </div>
                          ) : (
                            <div className="tooltip ">
                              <span
                                className={`MuiBadge-root ${classes.badgecolor}`}
                                onClick={() =>
                                  (window.location.pathname = "/login")
                                }
                                style={{display:"flex",flexDirection:"column"}}
                              >
                                <i
                                  style={{ fontSize: "20px", color: "#6D6E71" }}
                                  className={`fa fa-user  ${classes.iconFafa}`}
                                ></i>
                                <span className= {isSilver ? "tooltip-slog-silver" : "tootip-account"}>
                                  {Boolean(localStorage.getItem("user_id")) &&
                                  !Boolean(localStorage.getItem("gut_lg"))
                                    ? "Account"
                                    : "Login"}
                                </span>
                              </span>
                            </div>
                          )}

                          <div className="tooltip">
                            {
                      
                               ( this.props.wishlist &&
                               this.props.wishlist.wishlistdata &&
                               this.props.wishlist.wishlistdata.nodes &&
                               this.props.wishlist.wishlistdata.nodes.length >
                                 0
                                 ? 
                                     <Badge
                                 className={`${
                                   isSilver && classes.badgeColorsilver
                                 } ${!isSilver && classes.badgeColor}`}
                                 badgeContent={
                                    this.props.wishlist &&
                                       this.props.wishlist.wishlistdata &&
                                       this.props.wishlist.wishlistdata.nodes &&
                                       this.props.wishlist.wishlistdata.nodes
                                         .length
                                 }
                                 style={{display:"flex",flexDirection:"column"}}
                               >
                                  <i
                                style={{ fontSize: "18px" }}
                                className={classes.iconFafaheart}
                                onClick={() => {
                                  if (user_id.length > 0) {
                                    window.location.href = `/account${"-wishlist"}`;
                                  } else {
                                    window.location.href = "/login";
                                  }
                                }}
                              >
                                <img src={heart} alt="icon" loading="lazy" />
                              </i>
                              <span className="tooltip-w">Wishlist</span>
                               </Badge>
                              
                                 : <div>
                                   <i
                                style={{ fontSize: "18px" }}
                                className={classes.iconFafaheart}
                                onClick={() => {
                                  if (user_id.length > 0) {
                                    window.location.href = `/account${"-wishlist"}`;
                                  } else {
                                    window.location.href = "/login";
                                  }
                                }}
                              >
                                <img src={heart} alt="icon" loading="lazy" />
                              </i>
                              <span className="tooltip-w">Wishlist</span>
                                 </div>)
                            }
                          </div>

                          <div className="tooltip">
                          {
                             
                               ( this.props.cart_count &&
                                this.props.cart_count.data &&
                                this.props.cart_count.data.allTransSkuLists &&
                                this.props.cart_count.data.allTransSkuLists
                                  .nodes.length > 0
                                 ? 
                                 
                                     <Badge
                                  className={`${
                                    isSilver && classes.badgeColorsilver
                                  } ${!isSilver && classes.badgeColor}`}
                                 badgeContent={
                                  this.props.cart_count &&
                                  this.props.cart_count.data &&
                                  this.props.cart_count.data
                                    .allTransSkuLists &&
                                  this.props.cart_count.data.allTransSkuLists
                                    .nodes.length
                                 }
                                 style={{display:"flex",flexDirection:"column"}}
                               >
                                 <a href="/cart" className="highlighter" style={{textDecoration:"none"}}>
                                <i
                                  style={{ fontSize: "20px" }}
                                  className={classes.iconFafa}
                                >
                                  <img src={cart} alt="icon"/>
                                </i>

                                <span
                                  className="tooltip-s"
                                  style={{
                                    color: isSilver
                                      ? "rgb(6, 171, 159)"
                                      : "#d51f63",
                                  }}
                                >
                                  Cart
                                </span>
                              </a>{" "}
                                    </Badge>
                                
                                 : <div>
                                    <a href="/cart" className="highlighter" style={{textDecoration:"none"}}>
                                <i
                                  style={{ fontSize: "20px" }}
                                  className={classes.iconFafa}
                                >
                                  <img src={cart} alt="icon"/>
                                </i>

                                <span
                                  className="tooltip-s"
                                  style={{
                                    color: isSilver
                                      ? "rgb(6, 171, 159)"
                                      : "#d51f63",
                                  }}
                                >
                                  Cart
                                </span>
                              </a>{" "}
                                 </div>)
                            }
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              ) : (
                <Grid container id="headerContainer">
                  <Container maxWidth="lg">
                    <Grid
                      container
                      spacing={12}
                      id="fullcontainer"
                      className="setHeight"
                    >
                      <Grid item xs={2} className="logoImgHeader1">
                        <div
                          id="logoDiv1"
                          className="logoDiv1"
                          onClick={() => {
                            window.location.href = isSilver
                              ? "/styloriSilver"
                              : "/";
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            id="logoImage"
                            className={`${isSilver && "silverlogo"} ${"imges"}`}
                            src={isSilver ? stylorisilverlogo : styloriLogo}
                            onLoad={() => this.setState({ load: true })}
                            onLoadedData={() => this.setState({ load: false })}
                            loading="lazy"
                            alt="...."
                            style={{
                              transition: "height 0.2s",
                              height: isSilver ? 60 : 60,
                            }}
                          />
                        </div>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={8}
                        id={"containerTitle"}
                        justify="flex-end"
                        alignItems="center"
                        className={`header-navbar-list1 ${classes.headerNavbarList}`}
                        onMouseLeave={() => {
                          this.setState({
                            Menuopen: false,
                            Checked: false,
                            targetopen: null,
                          });
                        }}
                      >
                        <Grid item xs={12} className="titleTop" id={"titleTop"}>
                          <nav>
                            {menuListHeader.map((listName, index) => {
                              return (
                                <a
                                  href={listName.url}
                                  key={index}
                                  className={
                                    window.location.pathname === listName.url
                                      ? classes.seletectedMenu
                                      : classes.menuListCursor
                                  }
                                  onMouseOver={(event) => {
                                    this.setState({
                                      Menuopen: true,
                                      submenuOpen: false,
                                      subTitleData: null,
                                      subTitleAllData: null,
                                      targetopen: event.currentTarget,
                                      listHoverItem: listName.title.replace(
                                        / +/g,
                                        ""
                                      ),
                                    });
                                  }}
                                  target={
                                    listName.title === "STYLORISILVER" ||
                                    listName.title === "VISIT STYLORI.COM"
                                      ? "_blank"
                                      : ""
                                  }
                                >
                                  {listName.title === "VISIT STYLORI.COM" ? (
                                    <a style={{color:"rgba(241, 72, 128, 1)",display:"contents"}}>{'STYLORI'}</a>
                                  ) : listName.title === "STYLORISILVER" ? (
                                    <a className={classes.silver}>{'STYLORI SILVER'}</a>
                                  ) : (
                                    listName.title
                                  )}
                                </a>
                              );
                            })}
                          </nav>
                          {this.state.Menuopen &&
                          menuLists[this.state.listHoverItem] ? (
                            <HeaderHoverMenuItem
                              tabdata={this.props.data}
                              listHoverItem={
                                menuLists[this.state.listHoverItem]
                              }
                              isSilver={isSilver}
                              onMouseOver={(event) => {
                                this.setState({
                                  Menuopen: true,
                                  targetopenSubmenu: event.currentTarget,
                                });
                              }}
                              opened={this.state.Menuopen}
                              targetopened={this.state.targetopen}
                              submenuDetails={this.submenuDetails}
                              onMouseLeave={() => {
                                this.setState({ targetopen: null });
                              }}
                            />
                          ) : (
                            ""
                          )}
                          {this.state.Menuopen && this.state.submenuOpen ? (
                            <HeaderHoversubMenu
                              opened={this.state.submenuOpen}
                              isSilver={isSilver}
                              onMouseOver={(event) => {
                                this.setState({ submenuOpen: true });
                              }}
                              listHoverItem={
                                menuLists[this.state.listHoverItem]
                              }
                              data={this.state.subTitleData}
                              allData={this.state.subTitleAllData}
                              subMenuTarget={this.subMenuTarget}
                              targetopened={this.state.subMenuTarget}
                              onMouseLeave={() => {
                                this.setState({
                                  submenuOpen: false,
                                  subTitleData: "",
                                  subTitleAllData: "",
                                  subMenuTarget: "",
                                });
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                      <Grid item xs={2}>
                        <div className={`head-icons1 ${classes.headIcons}`}>
                          {/* <i class={`fa fa-phone  ${classes.iconFafa}`}></i>
                        <Typography className={classes.callerNum}>
                          1800 102 0330
                        </Typography> */}
                          <Grid
                            onClick={this.handleClose}
                            style={{ cursor: "pointer" }}
                            className={`search`}
                          >
                            <Grid container>
                              {/* <Typography
                              style={{ flexGrow: 1, fontSize: "0.96rem" }}
                            >
                              Search
                            </Typography> */}
                              <div
                                className={classes.searchcontainer}
                                style={{ width: "25px" }}
                              >
                                {" "}
                                <img
                                  src={searchIcon}
                                  alt="icon"
                                  loading="lazy"
                                />
                                {/* <Seach className={"searchsvg"} /> */}
                              </div>
                            </Grid>
                          </Grid>

                          {localStorage.getItem("true") ? (
                            <div className="tooltip">
                              <span
                                className="MuiBadge-root"
                                aria-owns={openPopover ? "simple-popper" : ""}
                                onClick={() => {
                                  window.location.href = "/account-profile";
                                }}
                                style={{display:"flex",flexDirection:"column"}}
                              >
                                <i
                                  style={{ fontSize: "20px", color: "#6D6E71" }}
                                  className={`fa fa-user  ${classes.iconFafa}`}
                                ></i>
                                <span className={isSilver ? "tooltip-slog-silver" : "tooltip-slog"}>
                                  {Boolean(localStorage.getItem("user_id")) &&
                                  !Boolean(localStorage.getItem("gut_lg"))
                                    ? "Account"
                                    : "Login"}
                                </span>
                              </span>
                            </div>
                          ) : (
                            <div className="tooltip">
                              <span
                                className={`MuiBadge-root ${classes.badgecolor}`}
                                onClick={() =>
                                  (window.location.pathname = "/login")
                                }
                              >
                                <i
                                  style={{ fontSize: "20px", color: "#6D6E71" }}
                                  className={`fa fa-user  ${classes.iconFafa}`}
                                ></i>
                                <span className={isSilver ? "tooltip-slog-silver" : "tooltip-slog"}>
                                  {Boolean(localStorage.getItem("user_id")) &&
                                  !Boolean(localStorage.getItem("gut_lg"))
                                    ? "Account"
                                    : "Login"}
                                </span>
                              </span>
                            </div>
                          )}
                           
                           {/* Whishlist */}
                          <div className="tooltip">
                          {
            
                               ( this.props.wishlist &&
                               this.props.wishlist.wishlistdata &&
                               this.props.wishlist.wishlistdata.nodes &&
                               this.props.wishlist.wishlistdata.nodes.length >
                                 0
                                 ?  
                                     <Badge
                                 className={`${
                                   isSilver && classes.badgeColorsilver
                                 } ${!isSilver && classes.badgeColor}`}
                                 badgeContent={
                                    this.props.wishlist &&
                                       this.props.wishlist.wishlistdata &&
                                       this.props.wishlist.wishlistdata.nodes &&
                                       this.props.wishlist.wishlistdata.nodes
                                         .length
                                 }
                                   style={{display:"flex",flexDirection:"column"}}
                                   >
                                  <i
                                style={{ fontSize: "18px" }}
                                className={classes.iconFafaheart}
                                onClick={() => {
                                  if (user_id.length > 0) {
                                    window.location.href = `/account${"-wishlist"}`;
                                  } else {
                                    window.location.href = "/login";
                                  }
                                }}
                              >
                                <img src={heart} alt="icon" loading="lazy" />
                              </i>
                              <span className="tooltip-w">Wishlist</span>
                                     </Badge>
                                 : <div>
                                   <i
                                style={{ fontSize: "18px" }}
                                className={classes.iconFafaheart}
                                onClick={() => {
                                  if (user_id.length > 0) {
                                    window.location.href = `/account${"-wishlist"}`;
                                  } else {
                                    window.location.href = "/login";
                                  }
                                }}
                              >
                                <img src={heart} alt="icon" loading="lazy" />
                              </i>
                              <span className="tooltip-w">Wishlist</span>
                                 </div>)
                            }
                          </div>

                            {/* Cart */}
                          <div className="tooltip">
                          {
                             
                               ( this.props.cart_count &&
                                this.props.cart_count.data &&
                                this.props.cart_count.data.allTransSkuLists &&
                                this.props.cart_count.data.allTransSkuLists
                                  .nodes.length > 0
                                 ?         
                               <Badge
                                  className={`${
                                    isSilver && classes.badgeColorsilver
                                  } ${!isSilver && classes.badgeColor}`}
                                 badgeContent={
                                  this.props.cart_count &&
                                  this.props.cart_count.data &&
                                  this.props.cart_count.data
                                    .allTransSkuLists &&
                                  this.props.cart_count.data.allTransSkuLists
                                    .nodes.length
                                 }
                               >
                                 <a href="/cart" className="highlighter" style={{textDecoration:"none"}}>
                                <i
                                  style={{ fontSize: "20px" }}
                                  className={classes.iconFafa}
                                >
                                  <img src={cart} alt="icon"/>
                                </i>

                                <span
                                  className="tooltip-s"
                                  style={{
                                    color: isSilver
                                      ? "rgb(6, 171, 159)"
                                      : "#d51f63",
                              
                                  }}
                                >
                                  Cart
                                </span>
                              </a>{" "}
                               </Badge>
                                 : <div>
                                   <a href="/cart" className="highlighter" style={{textDecoration:"none"}}>
                                <i
                                  style={{ fontSize: "20px" }}
                                  className={classes.iconFafa}
                                >
                                  <img src={cart} alt="icon"/>
                                </i>

                                <span
                                  className="tooltip-s"
                                  style={{
                                    color: isSilver
                                      ? "rgb(6, 171, 159)"
                                      : "#d51f63",
                                  }}
                                >
                                  Cart
                                </span>
                              </a>{" "}
                                 </div>)
                            }
                            
                          </div>

                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              )}
              <Grid container id="headerContainerTop"></Grid>
            </AppBar>
          </div>
        </Hidden>

        <Modal
          open={this.state.opened}
          onClose={this.handleClose}
          className="docc-modal"
        >
          <ElasticSearch handleClose={this.handleClose} />
        </Modal>

        <Hidden mdUp>
                 
          <Grid>
            <Grid
              style={{
                position: "fixed",
                zIndex: "1300",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="header-appbar-sticky1">
                <AppBar className="header-appbar-moblie1" id="smallScreen">
                  <Toolbar className={"toolbarsetting"}>
                    {/* <Grid
                      container
                      item
                      xs={1}
                      sm={1}
                      md={1}
                      lg={1}
                      xl={1}
                      justify="center"
                      alignItems="center"
                    >
                      <IconButton onClick={this.handleDrawerOpen}>
                        <MenuIcon className={classes.mobileNavIcon} />
                      </IconButton>
                    </Grid> */}

                    <Grid item xs={5} className="logoImgHeader1">
                      <div
                        className="logoDiv1"
                        onClick={() => {
                          window.location.href = isSilver
                            ? "/styloriSilver"
                            : "/";
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          className={`imgsilver`}
                          src={isSilver ? stylorisilverlogo : styloriLogo}
                          style={{ width: "100%", height: "100%" }}
                          onLoad={() => this.setState({ load: true })}
                          onLoadedData={() => this.setState({ load: false })}
                          alt=""
                        />
                      </div>
                    </Grid>

                    <Grid item xs={7}>
                      <div
                        onClick={this.handleSearch}
                        className={`mobli-icon1 ${classes.mobile_icon_i}`}
                      >
                        <Grid
                          item
                          xs={12}
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignContent: "center",
                            paddingRight: "10px",
                            // paddingBottom: "15px",
                          }}
                        >
                          <div className={`head-icons1 ${classes.headIcons}`}>
                            <IconButton onClick={this.handleDrawerOpen}>
                              <MenuIcon className={classes.mobileNavIcon} />
                            </IconButton>
                            <div
                              id="search"
                              onClick={this.handleClose}
                              className={classes.searchcontainTop}
                            >
                              <img src={searchIcon} alt="icon" loading="lazy" />
                              {/* <Seach className={"searchsvgmobile"} /> */}
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

                            {localStorage.getItem("true") ? (
                              <span
                                aria-owns={openPopover ? "simple-popper" : ""}
                                onClick={() => {
                                  window.location.href = "/account-profile";
                                }}
                              >
                                <i
                                  className={`fa fa-user  ${classes.iconFafa}`}
                                  style={{
                                    display: "flex",
                                    color: "#6D6E71",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                  }}
                                ></i>
                              </span>
                            ) : (
                              <span
                                onClick={() =>
                                  (window.location.pathname = "/login")
                                }
                              >
                                <i
                                  className={`fa fa-user  ${classes.iconFafa}`}
                                  style={{
                                    display: "flex",
                                    color: "#6D6E71",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                  }}
                                ></i>
                              </span>
                            )}
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
                            {
                               !isSilver &&
                               (this.props.wishlist &&
                               this.props.wishlist.wishlistdata &&
                               this.props.wishlist.wishlistdata.nodes &&
                               this.props.wishlist.wishlistdata.nodes.length >
                                 0
                                 ?  <Badge
                                 className={`${
                                   isSilver && classes.badgeColorsilver
                                 }`}
                                 badgeContent={
                                    this.props.wishlist &&
                                       this.props.wishlist.wishlistdata &&
                                       this.props.wishlist.wishlistdata.nodes &&
                                       this.props.wishlist.wishlistdata.nodes
                                         .length
                                 }
                                 color="secondary"
                               >
                                 <i
                                   className={classes.iconFafaheart}
                                   onClick={() => {
                                     if (user_id.length > 0) {
                                       window.location.href = `/account${"-wishlist"}`;
                                     } else {
                                       window.location.href = "/login";
                                     }
                                   }}
                                 >
                                   <img src={heart} alt="icon" loading="lazy" />
                                 </i>
                               </Badge>
                                 : <div>
                                   <i
                                   className={classes.iconFafaheart}
                                   onClick={() => {
                                     if (user_id.length > 0) {
                                       window.location.href = `/account${"-wishlist"}`;
                                     } else {
                                       window.location.href = "/login";
                                     }
                                   }}
                                 >
                                   <img src={heart} alt="icon" loading="lazy" />
                                 </i>
                                 </div>)

                            }
                           
                           {
                               !isSilver &&
                               (  this.props.cart_count &&
                                this.props.cart_count.data &&
                                this.props.cart_count.data.allTransSkuLists &&
                                this.props.cart_count.data.allTransSkuLists
                                  .nodes.length > 0
                                 ?  <Badge
                                 className={`${
                                  isSilver && classes.badgeColorsilver
                                }`}
                                style={{ fontSize: "9px", marginTop: "5px" }}
                                 badgeContent={
                                  this.props.cart_count &&
                                  this.props.cart_count.data &&
                                  this.props.cart_count.data
                                    .allTransSkuLists &&
                                  this.props.cart_count.data.allTransSkuLists
                                    .nodes.length
                                 }
                                 color="secondary"
                               >
                                 <a href="/cart">
                                <i
                                  style={{
                                    fontSize: "15px !important",
                                    zIndex: 1000,
                                  }}
                                  className={classes.iconFafa}
                                >
                                  <img src={cart} alt="icon" loading="lazy" />
                                </i>
                              </a>
                               </Badge>
                                 : <div>
                                   <a href="/cart">
                                <i
                                  style={{
                                    fontSize: "15px !important",
                                    zIndex: 1000,
                                  }}
                                  className={classes.iconFafa}
                                >
                                  <img src={cart} alt="icon" loading="lazy" />
                                </i>
                              </a>
                                 </div>)

                            }
                          
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
                isSilver ? classes.drawerPaperSilver : classes.drawerPaper
              ),
            }}
          >
            <ClickAwayListener
              onClickAway={(e) => this.handleExpandClickClose(e)}
            >
              <div>
                {!isSilver && (
                  <div className={classes.menuheader}>
                    <IconButton
                      onClick={this.handleDrawerClose}
                      style={{ float: "right" }}
                      className={classes.iconbuttons}
                    >
                      <i className="fa fa-times closebus"></i>
                    </IconButton>
                  </div>
                )}
                <List className="sideNavListing">
                  {isSilver && (
                    <ListItem
                      button
                      key={"Menu"}
                      className={`${"drawer-list1"} ${classes.menuTitle}`}
                    >
                      <ListItemText>
                        <div
                          className={classes.menuheader}
                          style={{ flexBasis: "10%" }}
                        >
                          <IconButton
                            onClick={this.handleDrawerClose}
                            style={{ float: "left", color: "white" }}
                            className={
                              isSilver
                                ? classes.iconbuttonsSilver
                                : classes.iconbuttons
                            }
                          >
                            <i className="fa fa-times closebus"></i>
                          </IconButton>
                        </div>
                        <Typography
                          className={
                            isSilver
                              ? `${classes.listItems1} ${classes.menulistItem}`
                              : "list-items1"
                          }
                          variant=""
                        >
                          MENU
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  )}
                  {mainlist.map((row) => (
                    <>
                      <ListItem
                        button
                        key={row.name}
                        className={`${
                          isSilver ? classes.drawerList1 : `drawer-list1`
                        }`}
                      >
                        <ListItemText
                          onClick={
                            row.url === "/" || row.url === "/styloriSilver"
                              ? () => window.open(row.url, "_blank")
                              : () => {
                                  window.location.href = row.url;
                                }
                          }
                        >
                          <Typography
                            className={
                              isSilver
                                ? classes.menulistitemcolor
                                : "list-items1"
                            }
                            variant=""
                          >
                            {row.name.toUpperCase()}
                          </Typography>
                        </ListItemText>
                        <div
                          onClick={() =>
                            Jewellery[row.name] !== undefined
                              ? this.selectItem(row.name)
                              : ""
                          }
                        >
                          {Jewellery[row.name] !== undefined ? (
                            row.name === selected ? (
                              <i
                                className={`fa fa-caret-up drawer-arrow ${
                                  isSilver ? classes.drawerArrowSilver : ""
                                }`}
                              ></i>
                            ) : (
                              <i
                                className={`fa fa-caret-down drawer-arrow ${
                                  isSilver ? classes.drawerArrowSilver : ""
                                }`}
                              ></i>
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </ListItem>
                      {selected === row.name &&
                        Object.keys(Jewellery[selected]).map((row2) => (
                          <>
                            <ListItem
                              button
                              key={Jewellery[selected][row2].name}
                              className={
                                isSilver
                                  ? classes.subtitleContainerSilver
                                  : classes.subtitleContainer
                              }
                            >
                              <ListItemText
                                onClick={() => {
                                  window.location.href =
                                    Jewellery[selected][row2].url;
                                }}
                              >
                                <Typography
                                  className={
                                    isSilver
                                      ? classes.subtitlesSilver
                                      : classes.subtitles
                                  }
                                  variant=""
                                >
                                  {Jewellery[selected][row2].name.toUpperCase()}
                                </Typography>
                              </ListItemText>
                              <div
                                onClick={() =>
                                  this.selectItem1(
                                    Jewellery[selected][row2].name
                                  )
                                }
                              >
                                {selected1 ===
                                Jewellery[selected][row2].name ? (
                                  <span>
                                    {Jewellery[selected][row2].name !==
                                      "NEW ARRIVALS" &&
                                      Jewellery[selected][row2].name !==
                                        "RINGS" &&
                                      Jewellery[selected][row2].name !==
                                        "BEST SELLERS" &&
                                      Jewellery[selected][row2].name !==
                                        "BANGLE" &&
                                      Jewellery[selected][row2].name !==
                                        "StarStruck" &&
                                      Jewellery[selected][row2].name !==
                                        "Mural Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Elemental Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Akruti Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Concentric Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "In love Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Baroque Whites Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Gift Voucher" && (
                                        <i
                                          className={`fa fa-caret-up drawer-arrow ${
                                            isSilver
                                              ? classes.drawerArrowSilver
                                              : ""
                                          }`}
                                        ></i>
                                      )}
                                  </span>
                                ) : (
                                  <span>
                                    {Jewellery[selected][row2].name !==
                                      "NEW ARRIVALS" &&
                                      Jewellery[selected][row2].name !==
                                        "RINGS" &&
                                      Jewellery[selected][row2].name !==
                                        "BEST SELLERS" &&
                                      Jewellery[selected][row2].name !==
                                        "BANGLE" &&
                                      Jewellery[selected][row2].name !==
                                        "StarStruck" &&
                                      Jewellery[selected][row2].name !==
                                        "Mural Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Elemental Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Akruti Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Concentric Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "In love Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Baroque Whites Collection" &&
                                      Jewellery[selected][row2].name !==
                                        "Gift Voucher" && (
                                        <i
                                          className={`fa fa-caret-down drawer-arrow ${
                                            isSilver
                                              ? classes.drawerArrowSilver
                                              : ""
                                          }`}
                                        ></i>
                                      )}
                                  </span>
                                )}
                              </div>
                            </ListItem>
                            {selected1 === Jewellery[selected][row2].name && (
                              <>
                                {/* <ListItem className="drawer-list1">
                                                            <ListItemText
                                                            >
                                                                <Typography className="list-items1" variant="">{subheader[selected1]&&subheader[selected1].header&&subheader[selected1].header.toUpperCase()}
                                                                </Typography>
                                                                <span style={{ paddingTop: "5px" }} className="header-viewal1">View All</span>
                                                            </ListItemText>
                                                        </ListItem> */}
                                {Boolean(
                                  subheader &&
                                    selected1 &&
                                    subheader?.[selected1]
                                ) ? (
                                  //   subheader[selected1].name
                                  isSilver ? (
                                    <Grid
                                      container
                                      style={{
                                        // width: "450px",
                                        // maxHeight: "450px",
                                        overflowY: "auto",
                                        background: "#fff",
                                        padding: "10px",
                                        zIndex: "10000",
                                      }}
                                    >
                                      {subheader[selected1]?.name.map(
                                        (row, i) => {
                                          return row.img ? (
                                            <Grid
                                              item
                                              xs={6}
                                              style={{ marginBottom: 30 }}
                                              onClick={() => {
                                                window.location.href = row.url;
                                              }}
                                            >
                                              <Grid
                                                item
                                                style={{
                                                  justifyContent: "center",
                                                  alignContent: "center",
                                                  display: "flex",
                                                }}
                                              >
                                                <img
                                                  alt="images"
                                                  style={{
                                                    width: "55%",
                                                    margin: "auto",
                                                    height: "100%",
                                                  }}
                                                  src={row.img}
                                                  loading="lazy"
                                                />
                                              </Grid>
                                              <Grid
                                                item
                                                style={{ margin: "auto" }}
                                              >
                                                <Typography
                                                  style={{
                                                    margin: "auto",
                                                    textAlign: "center",
                                                    color: "rgb(96, 97, 97)",
                                                    fontWeight: "bold",
                                                    fontSize: "0.6rem",
                                                  }}

                                                  // className={
                                                  //   classes.listedItemsvalue
                                                  // }
                                                >
                                                  {row?.name?.toUpperCase()}
                                                </Typography>
                                              </Grid>
                                            </Grid>
                                          ) : (
                                            <>
                                              {row?.name && (
                                                <Grid
                                                  item
                                                  xs={6}
                                                  onClick={() => {
                                                    window.location.href =
                                                      row.url;
                                                  }}
                                                >
                                                  <ListItem>
                                                    <ListItemText>
                                                      <Typography
                                                        variant="body1"
                                                        style={{
                                                          // boxShadow: "rgb(204, 204, 204) 3px 3px 2px",
                                                          border:
                                                            "1px solid rgb(204, 204, 204)",
                                                          padding: 5,
                                                          color:
                                                            "rgb(96, 97, 97)",
                                                          fontSize: "0.8rem",
                                                          fontWeight: "bold",
                                                          textAlign: "center",
                                                        }}
                                                      >
                                                        {row?.name?.toUpperCase()}
                                                      </Typography>
                                                    </ListItemText>
                                                  </ListItem>
                                                </Grid>
                                              )}
                                              {row?.style && (
                                                <Grid>
                                                  <Divider
                                                    style={{
                                                      width: "100%",
                                                      backgroundColor:
                                                        "rgb(6, 171, 159)",
                                                      margin: "5px 0",
                                                    }}
                                                  />
                                                  <List
                                                    className={classes.root}
                                                  >
                                                    <ListItem>
                                                      <ListItemText>
                                                        <Typography
                                                          variant="body1"
                                                          style={{
                                                            color:
                                                              "rgb(6, 171, 159)",
                                                            fontSize: "0.8rem",
                                                          }}
                                                        >
                                                          SHOP BY STYLE{" "}
                                                        </Typography>
                                                      </ListItemText>
                                                    </ListItem>
                                                    <Grid container>
                                                      {row?.style?.map((v) => {
                                                        return (
                                                          <Grid item xs={6}>
                                                            <ListItem
                                                              onClick={() => {
                                                                window.location.href =
                                                                  v.url;
                                                              }}
                                                            >
                                                              <ListItemAvatar>
                                                                <Avatar
                                                                  alt="a"
                                                                  src={v.img}
                                                                />
                                                              </ListItemAvatar>
                                                              <ListItemText
                                                                primary={v.name}
                                                                style={{
                                                                  color:
                                                                    "rgb(96, 97, 97)",
                                                                }}
                                                              />
                                                            </ListItem>
                                                          </Grid>
                                                        );
                                                      })}
                                                    </Grid>
                                                  </List>
                                                </Grid>
                                              )}
                                              {row?.TextPrice && (
                                                <Grid>
                                                  <Divider
                                                    style={{
                                                      width: "100%",
                                                      backgroundColor:
                                                        "rgb(6, 171, 159)",
                                                      // margin: '5px 0'
                                                    }}
                                                  />
                                                  <List
                                                    className={classes.root}
                                                  >
                                                    <ListItem>
                                                      <ListItemText>
                                                        <Typography
                                                          variant="body1"
                                                          style={{
                                                            color:
                                                              "rgb(6, 171, 159)",
                                                            fontSize: "0.8rem",
                                                          }}
                                                        >
                                                          SHOP BY PRICE{" "}
                                                        </Typography>
                                                      </ListItemText>
                                                    </ListItem>
                                                    <Grid container>
                                                      {row?.TextPrice?.map(
                                                        (v) => {
                                                          return (
                                                            <Grid item xs={6}>
                                                              <ListItem
                                                                onClick={() => {
                                                                  window.location.href =
                                                                    v.url;
                                                                }}
                                                              >
                                                                <ListItemText>
                                                                  <Typography
                                                                    variant="body1"
                                                                    style={{
                                                                      // boxShadow: "rgb(204, 204, 204) 3px 3px 2px",
                                                                      border:
                                                                        "1px solid rgb(204, 204, 204)",
                                                                      padding: 5,
                                                                      color:
                                                                        "rgb(96, 97, 97)",
                                                                      fontSize:
                                                                        "0.8rem",
                                                                      textAlign:
                                                                        "center",
                                                                    }}
                                                                  >
                                                                    {v?.name}
                                                                  </Typography>
                                                                </ListItemText>
                                                              </ListItem>
                                                            </Grid>
                                                          );
                                                        }
                                                      )}
                                                    </Grid>
                                                  </List>
                                                </Grid>
                                              )}
                                            </>
                                          );
                                        }
                                      )}
                                    </Grid>
                                  ) : (
                                    subheader[selected1].name.map((row, i) => {
                                      // debugger;

                                      return (
                                        <>
                                          <ListItem
                                            onClick={() => {
                                              window.location.href = row.url;
                                            }}
                                            className={
                                              classes.subtitle2Container
                                            }
                                          >
                                            <ListItemText>
                                              <Typography
                                                className="list-items1"
                                                variant=""
                                              >
                                                {row.name.toUpperCase()}
                                              </Typography>
                                            </ListItemText>
                                          </ListItem>
                                        </>
                                      );
                                    })
                                  )
                                ) : null}
                              </>
                            )}
                          </>
                        ))}
                    </>
                  ))}
                  {isSilver ? (
                    <Grid
                      container
                      xs={12}
                      className="follow_us_container"
                      style={{ boxShadow: "0 5px 5px -5px #aaa" }}
                    >
                      <Grid item xs={8}>
                        <p
                          style={{
                            fontSize: "13px",
                            margin: "0px",
                            color: "#6e6d72",
                          }}
                        >
                          Follow us
                        </p>
                        <p style={{ fontSize: "20px", margin: "0px" }}>
                          @stylorisilver
                        </p>
                      </Grid>
                      <Grid item className="icon_container" xs={4}>
                        {/* <i class="fab fa-facebook"></i><i class="fab fa-instagram"></i> */}
                        <a
                          href="https://www.facebook.com/StyloriSilver/"
                          className="follow_us_a_tag"
                        >
                          <i
                            className="fa fa-facebook"
                            aria-hidden="true"
                            style={{ fontSize: "18px" }}
                          ></i>
                        </a>
                        &nbsp;&nbsp;
                        <a
                          href="https://www.instagram.com/stylorisilver/"
                          className="follow_us_a_tag"
                        >
                          {" "}
                          <i
                            className="fa fa-instagram"
                            aria-hidden="true"
                            style={{ fontSize: "18px" }}
                          ></i>
                        </a>
                      </Grid>
                    </Grid>
                  ) : (
                    ""
                  )}
                  {!localStorage.getItem("true") ? (
                    <>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() => (window.location.pathname = "/login")}
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              LOGIN
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              LOGIN
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.pathname = "/registers")
                          }
                        >
                          {isSilver ? (
                            <Typography
                              style={{
                                fontSize: "11px",
                              }}
                            >
                              REGISTER
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              REGISTER
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        style={{
                          boxShadow: isSilver ? "0 5px 5px -5px #ccc" : "",
                        }}
                        className="drawer-list12"
                      >
                        <ListItemText
                          onClick={() => {
                            window.open("tel:18001020330");
                          }}
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              CONTACT US
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              CONTACT US
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.href = `/account${"-allorders"}`)
                          }
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              MY ORDERS
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              ALL ORDERS
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>

                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.href = `/account${"-wishlist"}`)
                          }
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              RETURN INFORMATION
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              MY WHISLIST
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.href = `/ account${"-profile"}`)
                          }
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              VIEW PROFILE
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              VIEW PROFILE
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          onClick={() => {
                            window.open("tel:18001020330");
                          }}
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              CONTACT US
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              CONTACT US
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                      <ListItem
                        button
                        className="drawer-list12"
                        style={{
                          boxShadow: isSilver ? "0 5px 5px -5px #ccc" : "",
                        }}
                      >
                        <ListItemText
                          onClick={() => {
                            localStorage.clear();
                            sessionStorage.clear();
                            window.location.reload();
                            window.location.pathname = "/login";
                          }}
                        >
                          {isSilver ? (
                            <Typography style={{ fontSize: "11px" }}>
                              LOGOUT
                            </Typography>
                          ) : (
                            <Typography className="list-items1">
                              LOGOUT
                            </Typography>
                          )}
                        </ListItemText>
                      </ListItem>
                    </>
                  )}
                </List>
                {isSilver ? (
                  <Grid container xs={12} className="follow_us_container">
                    <Grid item xs={12}>
                      <p style={{ fontSize: "13px", margin: "0px" }}>
                        HELP & INFORMATION
                      </p>
                    </Grid>
                  </Grid>
                ) : (
                  ""
                )}
              </div>
            </ClickAwayListener>
          </Drawer>
                  
        </Hidden>

         <Grid
                       xs={4}
                       sm={4}
                       lg={1}
                       md={3}
                       xl={2}
                      style={{
                        position: 'fixed',
                        bottom: 50,
                        left: 10,
                        zIndex: 20,
                      }}
                      id="currency_select"
                    >
                      <Autocomplete
                        id="country-select-demo"
                        size="small"
                        className={classes.flag}
                        options={this.state.currencyConvo}
                        value={this.state?.selected_currency ?? null}
                        onChange={this.handleCurrencyConvo}
                        defaultValue={selected_price ?? null}
                        getOptionLabel={(option) =>
                          `${countryToFlag(option.iso)}  ${
                            option.currencyAlias
                          }`
                        }
                        renderOption={(option) => (
                          <React.Fragment>
                            {`${countryToFlag(option.iso)}  ${
                              option.currencyAlias
                            }`}
                          </React.Fragment>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={""}
                            variant="outlined"
                            style={{color: "#000 !important"}}
                          />
                        )}
                      />
          </Grid>
          
      </div>
    );
  }
}

export default withStyles(styles)((props) => {
  let {
    CartCtx: { data: cart_count },
  } = React.useContext(CartContext);

  let GLobalCtx = React.useContext(GlobalContext);

  const isSilver =
    GLobalCtx?.Globalctx &&
    GLobalCtx?.Globalctx.pathName &&
    GLobalCtx?.Globalctx.pathName
      ? GLobalCtx.Globalctx.pathName
      : false;

  const { mapped } = useDummyRequest(
    isSilver ? headerDataStyloriSilver : headerDataSilver
  );
  if (Object.keys(mapped).length === 0) return "";

  return (
    <Header
      {...props}
      globalContext={GLobalCtx}
      data={mapped}
      cart_count={cart_count}
    />
  );
});
