import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  TypoGraphy: {
    maxWidth: "900px",
    padding: "20px 0px 22px 0px ",
    textAlign: "center",
    fontSize: "1.0rem",
  },
  [theme.breakpoints.down("sm")]: {
    TypoGraphy: {
      maxWidth: "900px",
      padding: "20px 10px 22px 10px ",
      textAlign: "center",
      fontSize: "0.77rem",
      color:"white"
    },
  },
  seoText: {
    backgroundColor: theme.palette.secondary.light,
    justifyContent: "center",
    color:'white',
    display: "flex",
    [theme.breakpoints.down('sm')]:{
      marginBottom:10
    }
  },
  seoTextNobackground:{
    backgroundColor: 'unset !important',
    color:theme.palette.secondary.dark2
  },
  backgroundImageColor:{
    background:"rgb(6, 171, 159)",
    [theme.breakpoints.down('sm')]:{
      // background:'transparent',
      background:"rgb(6, 171, 159)",
    }
  }
}));
