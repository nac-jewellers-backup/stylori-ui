import React from "react";
import { HomePageStyles } from "./style";
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Drawer,
  ClickAwayListener,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { menuListHeaderNew } from "mappers/dummydata/headerdataStyloriSilver";
import heart from "../../assets/Icons/loveGrey.svg";
import cart from "../../assets/Icons/cartGrey.svg";
import searchIcon from "../../assets/Icons/searchGrey.svg";
import { Jewellery, StyleNav, CollectionNav } from "./components";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const classes = HomePageStyles();
  const [menu, setmenu] = React.useState({
    menu: null,
    index: null,
    childmenu: null,
    childindex: null,
  });
  console.log("menu", menu);
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel, expand) => (event, isExpanded) => {
    if (expand) {
      setExpanded(isExpanded ? panel : false);
    }
  };

  const firstSubNavHover = (e, i) => {
    setmenu({
      menu: e,
      index: i,
    });
  };

  const firstSubNavHoverClose = (e, i) => {
    setmenu({
      menu: null,
      index: null,
      childmenu: null,
      childindex: null,
    });
  };

  const SecondSubNavHover = (e, i) => {
    // debugger
    setmenu({
      ...menu,
      childmenu: e,
      childindex: i,
    });
  };

  const renderComponent = {
    1: <Jewellery menu={menu} SecondSubNavHover={SecondSubNavHover} />,
    2: <Jewellery menu={menu} SecondSubNavHover={SecondSubNavHover} />,
    3: (
      <CollectionNav
        menu={menu}
        SecondSubNavHover={SecondSubNavHover}
        width={"100%"}
      />
    ),
    4: (
      <CollectionNav
        menu={menu}
        SecondSubNavHover={SecondSubNavHover}
        width={"100%"}
      />
    ),
    5: <StyleNav menu={menu} SecondSubNavHover={SecondSubNavHover} />,
    6: <StyleNav menu={menu} SecondSubNavHover={SecondSubNavHover} />,
  };
  return (
    <>
      {/* <Paper className={classes.root}>
                <Hidden smDown>
                    <Grid container className={
                        classes.container}>
                        <Grid item xs={2}>
                            <Box className={classes.logoImage}>
                                <img id="logoImage" width={"100%"}
                                    src="/static/media/stylori_silver_logo.svg"
                                    loading="lazy" alt="...." />
                            </Box>
                        </Grid>
                        <Grid item xs={8}
                            style={{ paddingTop: "20px" }}
                            onMouseLeave={
                                (e) => firstSubNavHoverClose()}>
                            <Grid container style={{ textAlign: "center" }}>
                                <Grid item xs={12}>
                                    <nav>
                                        {menuListHeaderNew?.map((listName, i) => {
                                            return (
                                                <a
                                                    href={listName.url}
                                                    className={classes.menuListCursor}
                                                    onMouseOver={(e) =>
                                                        firstSubNavHover(listName.title, listName.key)}

                                                >{listName.title}
                                                </a>
                                            );
                                        })}
                                    </nav>
                                </Grid>
                            </Grid>
                            {
                                Boolean(menu?.index) && menuListHeaderNew?.[menu?.index - 1]?.[menu?.menu] ? renderComponent[menu?.index] : null
                            }
                        </Grid>
                        <Grid item xs={2} style={{ paddingTop: "20px" }}>
                            <Grid container className={classes.IconGrid}>
                                <div className={classes.inrTxt}>
                                    ₹ INR <KeyboardArrowDownIcon />
                                </div>
                                <div className={classes.heartIcon}>
                                    <img src={searchIcon} alt="icon" loading="lazy" />
                                </div>
                                <div className={classes.heartIcon}>
                                    <img src={heart} alt="icon" loading="lazy" />
                                </div>
                                <div className={classes.heartIcon}>
                                    <img src={cart} alt="icon" />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
            </Paper >
            <Hidden mdUp>

                <div className={classes.drawerContainer}>

                    {
                        open ? <List className={classes.ulList}>
                            <Box
                                button
                                key={"Menu"}
                                className={classes.bgColor}
                            >
                                <IconButton
                                    className={classes.iconBtn}
                                    onClick={() => {
                                        setOpen(false)
                                        setExpanded(false)
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Box className={classes.clickMenu}>
                                    <Typography
                                        className={classes.listItemsMenu}
                                        variant=""
                                    >
                                        MENU
                                    </Typography>
                                </Box>
                            </Box>
                            {menuListHeaderNew?.map((listName, i) => {
                                return (
                                    <Accordion
                                        expanded={expanded === listName.title}
                                        onChange={handleChange(listName.title, listName?.expand)}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography
                                                sx={{ width: "33%", flexShrink: 0 }}
                                                className={classes.categorytitle}
                                                onClick={(e) =>
                                                    firstSubNavHover(listName.title, listName.key)}
                                            >
                                                {listName.title}
                                            </Typography>
                                        </AccordionSummary>

                                        <AccordionDetails className={classes.subAccordion}>
                                            {
                                                menuListHeaderNew?.[menu?.index - 1]?.[menu?.menu]?.map((e, i) => {
                                                    return <>
                                                        <Accordion className={classes.subAccordion}>
                                                            <AccordionSummary className={classes.subAccordionSummary}>
                                                                <Typography
                                                                    onClick={() =>
                                                                        SecondSubNavHover(e?.value, i)}
                                                                    className={classes.subAccordionTxt}>

                                                                    <a>{e?.title}</a>
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails className={classes.subAccordionDetails}>
                                                                <Grid container style={{ textAlign: "center" }}>
                                                                    <Grid item xs={12}>
                                                                        <Grid container>
                                                                            {
                                                                                menuListHeaderNew?.[menu?.index - 1]?.[menu?.menu]?.[menu?.childindex]?.[menu?.childmenu]?.map(val => {
                                                                                    return (
                                                                                        <Grid item xs={6}>
                                                                                            <Link to={val?.url} style={{ textDecoration: "none" }}>
                                                                                                <img width="70px" height="70px" src={val?.img}></img>
                                                                                                <Typography className={classes.subImgItems}>
                                                                                                    {val?.content}</Typography>
                                                                                            </Link>
                                                                                        </Grid>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        {menuListHeaderNew?.[menu?.index - 1]?.[menu?.menu]?.[menu?.childindex]?.bigImage ?
                                                                            <Box>
                                                                                <img className={classes.bigImage}
                                                                                    style={{ margin: "10px 0" }}
                                                                                    src={
                                                                                        menuListHeaderNew?.[menu?.index - 1]?.[menu?.menu]?.[menu?.childindex]?.bigImage}></img>
                                                                            </Box> : null}
                                                                    </Grid>
                                                                </Grid>
                                                            </AccordionDetails>

                                                        </Accordion>
                                                    </>
                                                })

                                            }
                                        </AccordionDetails>

                                    </Accordion>
                                )
                            })}


                        </List> :
                            <>
                                <Grid container className={classes.mobileNav} style={{ width: "97%", margin: "auto" }}>
                                    <Grid item xs={4}>
                                        <Box className={classes.logoImage}>
                                            <img id="logoImage" width={"100%"} height={"100%"}
                                                src="/static/media/stylori_silver_logo.svg"
                                                loading="lazy" alt="...." />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8} className={classes.rightMobileNav}>
                                        <Grid container className={classes.IconGrid}>
                                            <Box>
                                                <IconButton
                                                    onClick={() => {
                                                        setOpen(true)
                                                    }}
                                                    style={{ float: "left", color: "white" }}
                                                // className={classes.iconbuttons}
                                                >
                                                    < MenuIcon />

                                                </IconButton>
                                            </Box>
                                            <div className={classes.inrTxtMob}>
                                                ₹ INR <KeyboardArrowDownIcon />
                                            </div>
                                            <div className={classes.heartIconMob}>
                                                <img src={searchIcon} alt="icon" loading="lazy" />
                                            </div>
                                            <div className={classes.heartIconMob}>
                                                <img src={heart} alt="icon" loading="lazy" />
                                            </div>
                                            <div className={classes.heartIconMob}>
                                                <img src={cart} alt="icon" />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>
                    }
                </div>
            </Hidden> */}
      <Grid
        item
        xs={8}
        style={{ paddingTop: "24px", zIndex: 1000 }}
        onMouseLeave={(e) => firstSubNavHoverClose()}
      >
        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <nav>
              {menuListHeaderNew?.map((listName, i) => {
                return (
                  <a
                    href={listName.url}
                    className={classes.menuListCursor}
                    onMouseOver={(e) =>
                      firstSubNavHover(listName.title, listName.key)
                    }
                  >
                    {listName.title}
                  </a>
                );
              })}
            </nav>
          </Grid>
        </Grid>
        {Boolean(menu?.index) &&
        menuListHeaderNew?.[menu?.index - 1]?.[menu?.menu]
          ? renderComponent[menu?.index]
          : null}
      </Grid>
    </>
  );
};
