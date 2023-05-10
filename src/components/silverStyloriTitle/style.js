import { makeStyles } from "@material-ui/core";

const SilverStyloriTitleStyles = makeStyles((theme) => ({
  titleBox: {
    margin: "40px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "20px 0px",
    },
  },

  titleComp: {
    marginTop: "30px",
    marginBottom: "30px",
  },

  leftLine: {
    paddingLeft: "80px",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "22px",
    // },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30px",
    },
  },

  titleText: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: 600,
    color: "#6D6E71",
    letterSpacing: "11px",
    padding: "0px 40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "23px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
      letterSpacing: "5px",
      padding: "0px 18px",
    },
  },

  rightLine: {
    paddingRight: "80px",
    // [theme.breakpoints.down("md")]: {
    //   fontSize: "22px",
    // },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "30px",
    },
  },

  subText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#6D6E71",
    fontWeight: 500,
    marginTop: "-12px",
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-20px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      margin:"auto",
      width:"75%",
      fontSize:"12px"
    },
  },
}));

export default SilverStyloriTitleStyles;
