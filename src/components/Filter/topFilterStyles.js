// import '../../fonts/font.css'
import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  headIcons: {
    color: theme.palette.secondary.dark,
    fontFamily: "fontawesome",
    textAlign: "right",
    // fontSize: '20px !important',
    marginTop: "18px !important",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchcontainer: {
    padding: "3px 2px 2px 2px",
    marginTop: "-1px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  searchcontainerplain: {
    padding: "4px",
    // backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  searchcontainTop: {
    padding: "2px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "3px",
  },
  [theme.breakpoints.only("xs")]: {
    padding: "3px !important",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  iconFafa: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: "pointer",
    alignItems: "center",
    // display: "flex",
    fontSize: "20px",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  iconFafaheart: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    fill: "#d51f63",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  callerNum: {
    fontSize: "13px",
    color: theme.palette.secondary.dark,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: " 0px 20px 0px 0px",
    fontWeight: 600,
    letterSpacing: 2,
  },
  headerNavbarList: {
    color: theme.palette.secondary.dark,
    // textAlign: 'right'
  },
  headerNavbarList1: {
    whiteSpace: "nowrap",
    width: "100%",
    letterSpacing: 2,

    textTransform: "uppercase",
    fontSize: "12px !important",
    textDecoration: "none !important",
    // margin-left: 5%;
  },
  menuListCursor: {
    cursor: "pointer",
    fontFamily: "Roboto",
    fontWeight: 600,
    padding: "5px 4px 5px 10px",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    color: "#6D6E71",
    minWidth: "50px",

    background: "white",
    "&:hover": {
     
      "& svg": {
        fill: `#6D6E71 !important`,
      },
    },
    "& svg": {
      fill: `#6D6E71 !important`,
    },
    "&.mouseOverPopover": {
      top: 0,
    },
  },
  topfiltersSticky: {
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    "-webkit-box-shadow": "0 3px 5px rgba(57, 63, 72, 0.3)",
    "-moz-box-shadow": "0 3px 5px rgba(57, 63, 72, 0.3)",
    "box-shadow": "0 3px 5px rgba(57, 63, 72, 0.3)",
  },
  filtersLabel: {
    [theme.breakpoints.only("md")]: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  menuListCursorfiltersLabel: {
    fontWeight: "unset !important",
  },
  spacingfilterdiv: {
    display: "flex",
    alignItems: "center",
  },
  menuListCursorSort: {
    cursor: "pointer",
    fontFamily: "Roboto",
    padding: "5px 4px 5px 15px",
    marginRight: 15,
    color: "#6D6E71",
    background: "white",
    "&:hover": {
     
     
      "& svg": {
        fill: `#6D6E71 !important`,
      },
    },
    "& svg": {
      fill: `#6D6E71 !important`,
    },
    "&.mouseOverPopover": {
      top: 0,
    },
  },
  filtersLabel: {
    [theme.breakpoints.only("md")]: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  menuListCursorfiltersLabel: {
    fontWeight: "unset !important",
  },
  menuListCursorMoreFilters: {
    cursor: "pointer",
    fontFamily: "Roboto",
    fontWeight: 600,
    padding: "5px 4px 5px 15px",
    display: "flex",
    margin: "auto",
    alignItems: "center",
    color: "#6D6E71",
  
    background: "white",
    "&:hover": {
   
     
      "& svg": {
        fill: `#6D6E71 !important`,
      },
    },
    "& svg": {
      fill: `#6D6E71 !important`,
    },
    "&.mouseOverPopover": {
      top: 0,
    },
  },
  seletectedMenu: {
    color: theme.palette.secondary.dark,
    cursor: "pointer",
    fontFamily: "Roboto",
    fontWeight: 600,
   
  },
  filtersHeaderTop: {
    position: "sticky",
    top: "52px",
    zIndex: 15,
    background: "white",
    padding: "2px",
    opacity:0.95
  },
  mobileNavIcon: {
    color: theme.palette.secondary.dark,
    fill: theme.palette.secondary.dark + "!important",
  },
  menuheader: {
    width: "230px !important",
    position: "sticky",
    top: "0px",
    zIndex: 10000,
  },
  drawerPaper: {
    maxHeight: "100% !important",
    height: "max-content",
    backgroundColor: theme.palette.background.fade,
  },
  iconbuttons: {
    position: "fixed",
    left: "228px",
    top: "-9px",
  },
  subtitles: {
    color: theme.palette.background.darkFade,
    textAlign: "left",
    width: "100%",
    fontSize: "11px",
    letterSpacing: "1px",
    fontFamily: "Roboto",
  },
  subtitleContainer: {
    backgroundColor: "#fff !important",
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
  subtitle2Container: {
    backgroundColor: theme.palette.background.darkFade,
  },
  badgeColor: {
    "& .MuiBadge-badge": {
      background: theme.palette.badgeColor.background,
      color: "white",
    },
  },
}));

export const useStyles = makeStyles((theme) => ({
  imgcont: {
    marginBottom: "15px",
    "&:hover": {
      boxShadow:
        " 0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
    },
  },
  paperdiv: {
    position: "absolute",
    width: "fit-content",
  },
  root: {
    width: "100%",
  },
  mouseOverPopover: {
    zIndex: 1000,
    top: "4px !important",
    backgroundColor: theme.palette.background.fade,
    color: "white",
    "& span": {
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    "& nav": {
      padding: "0px !important",
    },
    "& li:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  paperdivsub: {
    position: "absolute",
    width: "fit-content",
  },
  rootsub: {
    width: "100%",
  },
  mouseOverPopoversub: {
    zIndex: 1000,
    top: "0px !important",
    backgroundColor: "#fff",
    color: theme.palette.background.fade,
    cursor: "pointer",
    "& span": {
      fontFamily: "Roboto",
      letterSpacing: "1px",
      cursor: "pointer",
    },
    "& nav": {
      padding: "0px !important",
      cursor: "pointer",
    },
    "& li:hover": {
      backgroundColor: "#fff",
    },
  },
  listedItems: {
    padding: "0px",
    fontSize: "0.7rem !important",
    cursor: "pointer",
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "0.7rem !important",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  listedItemsvalue: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2,
    cursor: "pointer",
  },
  listedItemsvalue2: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background.darkFade,
      color: "#fff",
    },
  },
  subtopic1: {
    padding: "10px 0px 10px 0px",
  },
  subtopic2: {
    padding: "10px 0px 10px 0px",
    borderTop: "1px solid",
    backgroundColor: theme.palette.background.darkFade,
  },
  drawer: {
    backgroundColor: "#394578",
  },
}));
