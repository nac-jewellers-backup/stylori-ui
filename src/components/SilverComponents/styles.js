// import '../../fonts/font.css'
import { makeStyles } from "@material-ui/core/styles";

export const styles = (theme) => ({
  headIcons: {
    color: theme.palette.secondary.dark,
    fontFamily: "fontawesome",
    textAlign: "right",
    // fontSize: '20px !important',
    marginTop: "21px !important",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  flag:{
    color: "#000 !important",
    backgroundColor: "#FFFFFF",
    '-webkit-tap-highlight-color': 'transparent',
    border: '1px solid #e8e8e8',
    border: "0px",
    borderColor: "#fff",
    cursor:"pointer"
  },
  searchcontainer: {
    padding: "3px 2px 2px 2px",
    marginTop: "-1px",
    // backgroundColor: theme.palette.secondary.dark,
    // backgroundColor:"#6D6E71",
    display: "flex",
    // justifyContent: "center",
    // alignContent: "center",
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
    // backgroundColor: theme.palette.secondary.dark,
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
  // "&.MuiBadge-colorSecondary":{
  //   backgroundColor: `red !important`
  // },
  mobile_icon_i: {
    // "&.MuiBadge-colorSecondary":{backgroundColor: `red !important`},
    "& i": {
      // color: `${theme.palette.secondary.dark} !important`,
      color:"#6D6E71 !important"
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
    // color: theme.palette.secondary.dark,
    color:"#6D6E71",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: " 0px 20px 0px 0px",
    fontWeight: 600,
    letterSpacing: 2,
  },
  headerNavbarList: {
    color: theme.palette.secondary.dark,
    textAlign: "left",
  },
  menuListCursor: {
    cursor: "pointer",
    fontFamily: "Roboto",
    fontWeight: 600,
    color: "#6e6d72",
    borderBottom: "1px solid #fff",
    "&:hover": {
      color: theme.palette.secondary.dark,
      // paddingBottom: "2px",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
  },
  silver:{
    cursor: "pointer",
    fontFamily: "Roboto",
    fontWeight: 600,
    color:"rgb(6, 171, 159)",
    display:"contents",
    borderBottom: "1px solid #fff",
    "&:hover": {
      // paddingBottom: "2px",
      borderBottom: "1px solid #d51f63",
    },
  },
  seletectedMenu: {
    color: theme.palette.secondary.dark,
    // paddingBottom: "2px",
    cursor: "pointer",
    fontFamily: "Roboto",
    fontWeight: 600,
    borderBottom: "1px solid #fff",
    // borderBottom: "1px solid " + theme.palette.secondary.dark,
    "&:hover": {
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
  },

  mouseOverPopoverfilterslist: {
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
  },
  mobileNavIcon: {
    // color: theme.palette.secondary.dark,
    // fill: theme.palette.secondary.dark + "!important",
    color: "#6D6E71"
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
  drawerPaperSilver: {
    height: "100% !important",
    width: "100%",
    color: theme.palette.secondary.main,
    backgroundColor: "white",
    "& .MuiList-padding": {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  listItems1: {
    textAlign: "left",
    whiteSpace: "nowrap",
    width: "100%",
    fontSize: "11px !important",
    letterSpacing: "1px",
    textTransform: "capitalize",
    fontFamily: "Roboto",
  },
  menulistitemcolor: {
    color: "#6D6E71",
    textAlign: "left",
    whiteSpace: "nowrap",
    width: "100%",
    fontSize: "14px !important",
    fontWeight:700,
    letterSpacing: "1px",
    textTransform: "capitalize",
    fontFamily: "Roboto",
  },
  menulistItem: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px !important",
  },
  iconbuttons: {
    position: "fixed",
    left: "228px",
    top: "-9px",
  },
  iconbuttonsSilver: {},
  menuTitle: {
    textAlign: "center",
    display: "flex",
    margin: "auto",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "& .MuiListItemText-root": {
      display: "flex",
    },
    "& .MuiListItemText-primary": {
      display: "inline-flex",
      alignItems: "center",
    },
  },
  drawerArrowSilver: {
    color: `${theme.palette.secondary.main} !important`,
  },
  drawerList1: {
    "&:hover": {
      "& .MuiTypography-root": {
        backgroundColor: "transparent",
        borderBottom: "1px solid",
      },
    },
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
  subtitleContainerSilver: {
    backgroundColor: theme.palette.ternary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      "& .MuiTypography-root": {
        color: "white !important",
      },
      "& i": {
        color: "white !important",
      },
    },
  },
  subtitlesSilver: {
    color: "#6D6E71",
    textAlign: "left",
    width: "100%",
    fontSize: "11px",
    letterSpacing: "1px",
    fontFamily: "Roboto",
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
  badgeColorsilver: {
    "& .MuiBadge-badge": {
      color: "#000",
      top: -3,
      right: 12,
    },
    [theme.breakpoints.only("xs")]: {
      "& .MuiBadge-badge": {
        background: "#fff",
        top: "-10px !important",
        right: 12,
      },
    },
  },
});

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
    backgroundColor: (props) =>
      props.isSilver ? "white" : theme.palette.background.fade,
    color: (props) => (props.isSilver ? theme.palette.secondary.main : "white"),
    "& span": {
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    "& nav": {
      padding: "0px !important",
    },
    "& li:hover": {
      backgroundColor: (props) =>
        props.isSilver
          ? theme.palette.secondary.main
          : theme.palette.secondary.dark,
      color: (props) => (props.isSilver ? "white" : "white"),
    },
  },
  mouseOverPopoverfilters: {
    "& .MuiRadio-root": {
      padding: "2px 6px !important",
    },
    radioBtnsort: {
      color: "red",
    },
    zIndex: 1000,
    top: "4px !important",
    backgroundColor: "white",
    color: "#6D6E71 !important",
    "& span": {
      fontFamily: "Roboto",
      letterSpacing: "1px",
    },
    "& nav": {
      padding: "0px !important",
      minWidth: 150,
      [theme.breakpoints.only("md")]: {
        minWidth: 100,
      },
    },
    "& li:hover": {
      cursor:"pointer"
    },
  },
  mouseOverPopoverfiltersselected: {
    backgroundColor: `white !important`,
    color: `#6D6E71 !important`,
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
  sortSilver: {
    // "&.MuiRadio-root":{
    //   padding:"0px 5px"
    // },
    // "&.MuiIconButton-colorSecondary":{
    //   padding:"4px !important"
    // },
    "& svg": {
      fontSize: "1rem",
    },
  },
  filtersList: {
    "& span": {
      letterSpacing: 3,
    },
  },
  ListTick:{
    color:theme.palette.secondary.dark,  
  },
  filtersListTick:{
     display:"flex",
     justifyContent:"space-between",
     "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  filtersListtopfilters: {  
    "& span": {
      letterSpacing: 2,
    },
  },
  mouseOverPopoverfilterslist: {
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
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
    backgroundColor: (props) =>
      props.isSilver
        ? theme.palette.ternary.light
        : theme.palette.background.darkFade,
  },
  drawer: {
    backgroundColor: "#394578",
  },
}));
