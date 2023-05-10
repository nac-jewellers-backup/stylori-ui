import { makeStyles } from "@material-ui/core/styles";
const faqStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px 50px 20px 50px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 15px",
    },
  },
  contact_us: {
    width: "100%",
    fontSize: "21px",
    color: "#ED1165",
    fontWeight: 600,
    marginBottom: "10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  },
  accor: {
    width: "100%",
    "&::before": {
      height: "0px !important",
      backgroundColor: "transparent",
    },
    borderBottom: "1px solid #e8e8e8",
  },
  contact_uss: {
    fontSize: "21px",
    color: "#ED1165",
    fontWeight: 600,
    marginBottom: "10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  },
  jobText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px !important",
    },
  },
  Subtitle: {
    color: "#394578",
    fontSize: "17px",
    padding: "14px ",
    cursor: "pointer",
    "&:hover": {
      color: "#ED1165",
    },
  },
  Subtitle2: {
    color: "#394578",
    fontSize: "13px",
    fontWeight: 600,
    padding: "14px",
  },
  Subtitle3: {
    color: "#394578",
    fontSize: "17px",
    margin: "30px 0px 10px 0px",
    fontWeight: 600,
  },
  widthFull: {
    width: "100%",
  },
  textFeild: {
    margin: "15px 0px 20px 0px !important",
  },
  smallSizeTypo: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "19px",
  },
  maginBottomOnly: {
    marginBottom: "15px",
  },
  Button: {
    backgroundColor: "#ED1165",
    width: "100%",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ED1165",
    },
  },
  dottedvalue: {
    borderTop: "1px dashed #CCC",
    margin: "40px 0px 10px 0px",
    width: "100%",
  },
  smallSizeTypoblue: {
    fontSize: "13px",
    color: "#394578",
    lineHeight: "20px",
  },
  midconatiner: {
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },
  titleColor: {
    color: "#ed1165",
    fontWeight: 600,
    fontSize: "21px",
  },
  accordSummary: {
    paddingLeft: "0px !important",
  },
  accordExpanded:{
    minHeight:"48px !important"
  },
  accordSummaryTitle: {
    color: "#394578",
    fontSize: "14px",
    borderTop: "0px",
    fontWeight: 600,
  },
}));
export default faqStyles;
