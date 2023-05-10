import { makeStyles } from "@material-ui/core/styles";
const HomePageStaticIconsStyles = makeStyles((theme) => ({
  containItems: {
    padding: "0px 15px",
    margin: "0px 12px",
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    containItems: {
      padding: "0px 15px",
      margin: "auto",
      width: " 1170px",
    },
  },

  styloritags: {
    padding: "0px 15px",
    width: "20%",
    borderRight: "1px solid #eeeeee",
  },
  styloritags_PD_page: {
    padding: "0px !important",
    width: "20%",
    borderRight: "1px solid #eeeeee",
  },
  fullWidth: {
    width: "100% !important",
    display: "flex",
    justifyContent: "center",
  },
  fullWidth_PD_page: {
    display: "flex",
    justifyContent: "center",
  },
}));
export default HomePageStaticIconsStyles;