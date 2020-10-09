import { Autorenew } from "@material-ui/icons";

const styles = (theme) => ({
  searchCheck: {
    paddingRight: "12px",
    paddingLeft: "12px",
    marginTop: "12px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12px",
      paddingRight: "16px",
      paddingLeft: "16px",
    },
  },
  title: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      // fontWeight: 'bold'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px !important",
    },
  },
  titlesmScreen: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px !important",
      lineHeight: "20px !important",
      // marginBottom: "0px",
    },
  },
  productIcons2: {
    // backgroundColor: theme.palette.primary.main,
    // boxShadow: "6px 7px 6px rgba(208, 210, 211, 1)",
    
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.dark2,
      boxShadow: "3px 4px 5px rgba(109,110,112,1)",
    },
  },
  sizeSelected: {
    borderRadius: "100%",
    padding: "1px",
    border: `2px solid ${theme.palette.primary.main} !important`,
  },
  icon2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleSilver: {
    marginTop: "0 !important",
    marginBottom: "0 !important",
    fontSize: "0.9rem !important",
    color: `${theme.palette.ternary.dark} !important`,
  },
  dis: {
    color: theme.palette.text.secondary,
  },
  Pricediv: {
    color: `${theme.palette.text.secondary} !important`,
  },
  normalFontsColor: {
    color: `rgba(0, 0, 0, 0.54) !important`,
  },
  normalFontsColor2: {
    color: `${theme.palette.secondary.dark2} !important`,
  },
  normalfontsSilvercontact: {
    color: `${theme.palette.secondary.dark2} !important`,
  },
  carouselCustomArrow: {
    "& svg": {
      fill: `${theme.palette.secondary.dark2} !important`,
      fontSize: "1.7rem",
    },
  },

  icon: {
    color: `${theme.palette.primary.main} !important`,
  },

  pricedetails: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 10px",
    },
  },
  width: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 10px",
    },
  },
  // pricetabs
  modals: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      height: "100%",
      overflowY: "scroll",
      width: "60%",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "20%",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      height: "100%",
      overflowY: "scroll",
      width: "60%",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "20%",
      outline: "none !important",
    },
  },
  modals_document: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      height: "95%",
      overflow: "none",
      width: "95%",
      margin: "auto",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      height: "90%",
      overflow: "none",
      width: "90%",
      margin: "auto",
      outline: "none !important",
    },
  },
  modals_video: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      // height: '90%',
      marginTop: "2%",
      overflowY: "scroll",
      width: "90%",
      margin: "auto",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      // height: '70%',
      marginTop: "2%",
      overflowY: "scroll",
      width: "70%",
      margin: "auto",
      outline: "none !important",
    },
  },
  pagination: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      // textAlign: "center"
    },
  },

  normalfonts_tabs: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginLeft: "4px",
      // marginRight: "8px"
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
  tabs_values_font: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px !important",
      marginTop: "5px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "10px !important",
      marginTop: "5px",
    },
  },
  tabsheadcolor: {
    color: theme.palette.secondary.main,
  },
  tabsRingBckg: {
    background: theme.palette.primary.main,
  },

  TypoListed: {
    fontSize: "0.8rem",
    paddingTop: "2px",
  },
  normalfonts: {
    color: theme.palette.text.primary,
  },
  normalfontsSilver: {
    fontSize: "1rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: `${theme.palette.primary.main} !important`,
    [theme.breakpoints.up("sm")]: {
      marginBottom: "15px",
    },
  },
  silverMarginBottom: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "8px",
    },
  },
  fontsSmallScreen: {
    fontWeight: "bold !important",
    fontSize: "16px !important",
    padding: "0px !important",
    letterSpacing: "2px",
    textTransform: "uppercase !important",
    color: `${theme.palette.secondary.dark2} !important`,
  },
  normalcolorback: {
    background: theme.palette.text.primary,
  },
  fontwhite: {
    color: theme.palette.overallButoon.contrastText,
  },
  backgwhite: {
    background: theme.palette.overallButoon.contrastText,
  },
  fontgray: {
    color: theme.palette.text.disabled,
  },
  // buynow
  buttons: {
    background: theme.palette.overallButoon.primary,
    color: theme.palette.overallButoon.contrastText,
  },
  buttonsilver: {
    background: theme.palette.secondary.main,
    color: theme.palette.overallButoon.contrastText,
  },
  buttonsilverAddToCart: {
    background: theme.palette.primary.main,
    color: theme.palette.overallButoon.contrastText,
  },
  backgsecondary: {
    background: theme.palette.secondary.main,
  },
  shadow: {
    boxShadow:
      "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  },
  [theme.breakpoints.up("md")]: {
    shadow: {
      boxShadow: "none",
    },
  },
  shadowSilver: {
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none !important",
    },
  },
  silverbuttonSave: {
    width: "100% !important",
    borderRadius: "unset !important",
    boxShadow: "6px 7px 6px rgba(208, 210, 211, 1)",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "unset",
      padding: "6px 16px",
      width: "100% !important",
    },
  },
  saveButtonsilverGrid: {
    // marginTop: "10px",
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: "0 !important",
    // },
    textAlign:"center"
  },
  sharesilver: {
    margin: "auto",
    display: "flex",
    justifyContent: "flex-start",
  },
  silverSmallScreenButton: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
      boxShadow: `0 12px 10px -7px ${theme.palette.secondary.main}`,
    },
  },
  buttonHeightAddToCart:{
    width: "100% !important",
    height: "40px !important",
    fontSize: "0.9rem",
    borderRadius: "unset !important",
    boxShadow: "8px 8px 5px rgba(208, 210, 211, 1)",
    textTransform: "uppercase",
    letterSpacing: "1px !important",
    fontWeight: "500 !important",
    border: "none",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
    "&:hover": {
      background: theme.palette.primary.dark,
      opacity: "0.9",
      color: "#fff !important",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "unset",
      height: "36px !important",
      width: "99% !important",
    },
  },
  buynowButtonSilver: {
    width: "90% !important",
    height: "50px !important",
    fontSize: "1.9rem",
    borderRadius: "unset !important",
    boxShadow: "8px 8px 5px rgba(208, 210, 211, 1)",
    textTransform: "uppercase",
    letterSpacing: "2.5px !important",
    fontWeight: "900 !important",
    border: "none",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
    "&:hover": {
      background: theme.palette.secondary.dark,
      opacity: "0.9",
      color: "#fff !important",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "unset",
      height: "36px !important",
      width: "99% !important",
    },
  },
  searchButtonSilver: {
    border: 0,
    fontSize: "12px !important",
    borderRadius: "0 !important",
    height: "36px !important",
    width: "100% !important",
    color: "#fff",
    boxShadow:"8px 8px 5px rgba(208, 210, 211, 1)",
    backgroundColor: `${theme.palette.primary.main} !important`,
    fontWeight: "700 !important",
    lineHeight: "1.42857143",
    padding: "0px !important",
    textTransform: "uppercase !important",
  },
  rings_tabs_silver: {
    color: `${theme.palette.primary.main} !important`,
  },
  iconSilver:{
"& i":{
  fontSize:"28px !important"
}
  },
  searchButtonSilver2: {
    border: 0,
    fontSize: "12px !important",
    borderRadius: "0 !important",
    height: "36px !important",
    width: "100% !important",
    color: "#fff",
    boxShadow:"8px 8px 5px rgba(208, 210, 211, 1)",
    backgroundColor: `${theme.palette.secondary.dark2} !important`,
    fontWeight: "700 !important",
    lineHeight: "1.42857143",
    padding: "0px !important",
    textTransform: "uppercase !important",
  },
  colorNoreviews: {
    color: theme.palette.secondary.main,
  },
  chatNowSilver: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    textTransform: "uppercase",
    padding: "2px 17px !important",
  },
  chatNowSilverGrid: {
    padding: "5px !important",
  },
  chatNowSilverDark: {
    backgroundColor: theme.palette.secondary.dark2,
    boxShadow: "3px 4px 5px rgba(109,110,112,1)",
  },
  overallBoxz: {
    borderRadius: "5px",
    width: "100% !important",
    background: "#fff",
    paddingBottom: "4px !important",
    marginBottom: "10px !important",
    boxShadow: "unset",
    border: "unset",
    paddingTop: "12px !important",
  },
  normalcolorbackSilver: {
    backgroundColor: theme.palette.primary.main,
    border: "unset !important",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      opacity: "0.9",
    },
  },
  normalcolorbackSilverCancel: {
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      opacity: "0.9",
    },
  },
  quantity: {
    margin: "0px 0px 18px 0px",
  },
  labelSilverProductDetail: {
    // marginLeft:107,
    "& div": {
      textTransform: "uppercase",
      color: theme.palette.primary.main,
      letterSpacing: "6px",
      fontSize:'24px !important',
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        marginBottom: 10,
      },
    },
  },
  silverSubCarouselHead: {
    padding: "15px 30px 30px 30px",
  },
  searchCheckSilver: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  similarproductssmallScreen: {
    textAlign: "center",
    color: theme.palette.secondary.dark2,
    letterSpacing: "4px",
    fontSize: "20px !important",
    fontWeight: "bold !important",
  },
  reviewandratingsmallScreen: {
    color: theme.palette.secondary.main,
    letterSpacing: "4px",
    fontSize: "16px !important",
    fontWeight: "bold !important",
    marginBottom: "10px !important",
  },
  rating__: {
    "&::placeholder": {
      color: `${theme.palette.ternary.main}`,
      textTransform: "Uppercase",
      fontSize: "12px",
      letterSpacing: "1px",
      fontWeight: 500,
      opacity: 1 /* Firefox */,
    },
    "&:-ms-input-placeholder": {
      /* Internet Explorer 10-11 */ color: `${theme.palette.ternary.main}`,
      textTransform: "Uppercase",
      letterSpacing: "1px",
      fontWeight: 500,
      fontSize: "12px",
    },
    "&::-ms-input-placeholder": {
      /* Microsoft Edge */ color: `${theme.palette.ternary.main}`,
      textTransform: "Uppercase",
      letterSpacing: "1px",
      fontWeight: 500,
      fontSize: "12px",
    },
  },
});
export default styles;
