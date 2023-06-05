import { makeStyles } from "@material-ui/core";

const StyloriSilverYarnsStyles = makeStyles((theme) => ({
  storeImage: {
    height: "100%",
    backgroundColor:"#e7e6e9",
    "& img": {
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("xs")]: {
        height:"450px"
      },
    },
  },
  columnAlign:{
    flexDirection:"row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column-reverse"
    },
  },
  location: {
    padding: "0px 94px",
    [theme.breakpoints.down("md")]: {
      padding: "70px 78px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "70px 255px",
      textAlign:"center"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "60px 60px",
      textAlign:"center"
    },
  },
  locationStore:{
    padding: "0px 94px",
    [theme.breakpoints.down("md")]: {
      padding: "70px 78px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "70px 255px",
      textAlign:"center"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "30px 55px",
      textAlign:"center",
      position:"absolute",
      bottom:"0px",
      width:"85%",
      backgroundColor:"#fff"
    },
  },

  title: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#606161",
    marginBottom: "17px",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },

  subText: {
    fontSize: "14px",
    color: "#606161",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },

  getButton: {
    color: "#FFFFFF",
    backgroundColor: "#30BBAD",
    borderRadius: "0px !important",
    marginTop: "20px",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#30BBAD",
    },
  },
  columnAlignStore:{
    position:"unset",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
    },
  }
}));

export default StyloriSilverYarnsStyles;
