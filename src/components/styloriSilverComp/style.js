import { makeStyles } from "@material-ui/core";

const StyloriSilverStyles = makeStyles((theme) => ({
  styloriSilver: {
    textAlign: "center",
    margin: "40px 0px",
  },

  title: {
    "& p": {
      fontSize: "28px",
      fontWeight: 600,
      color: "#606161",
      [theme.breakpoints.down("md")]: {
        fontSize: "22px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
  },

  text: {
    "& p": {
      fontSize: "14px",
      padding: "0px 219px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        padding: "0px 60px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
        padding: "0px 15px",
      },
    },
  },
}));

export default StyloriSilverStyles;
