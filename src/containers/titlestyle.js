import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  title: {
    color: "rgb(6, 171, 159)",
    textAlign: "center",

    fontSize: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "34px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
    },
    fontWeight: "540",
    whiteSpace: "noWrap",
    fontFamily: "normal",
  },
  img: {
    height: 40,
    width: 40,
    [theme.breakpoints.down("xs")]: {
      height: 22,
      width: 22,
    },
  },
  arrowDiv: {
    "& svg": {
      fill: "#fff",
    },
  },
  titleParent: {
    marginTop: "52px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "26px",
    },
    overflow: "hidden",
  },
}));
export default styles;
