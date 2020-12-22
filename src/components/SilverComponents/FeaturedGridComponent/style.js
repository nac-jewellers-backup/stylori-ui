import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  img: {
    position: "relative",
    bottom: "-5px",
    height: "600px !important",
    [theme.breakpoints.down("sm")]: {
      height: "100% !important",
    },
  },

  containerset: {
    margin: "20px 0px 50px 0px",
    padding: "24px 10px 10px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    containerset: {
      margin: "5px 0px 10px 0px !important",
      padding: "10px 5px 20px 5px !important",
    },
  },
}));
