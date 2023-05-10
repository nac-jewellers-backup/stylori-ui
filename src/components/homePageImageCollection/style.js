import { makeStyles } from "@material-ui/core/styles";
const HomePageImageCollectionStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "0px 0px 40px 0px ",
  },
  [theme.breakpoints.down("md")]: {
    imagefull: {
      width: "100%",
    },
    imagefulllong: {
      width: "100%",
    },
    // firstcolumn: {
    //   padding: "0px 8px 0px 0px !important",
    // },
    silver_first_column: {
      padding: "0px 8px 0px 0px !important",
    },
  },
  [theme.breakpoints.only("sm")]: {
    daisyday: {
      marginTop: "7.5px !important",
      width: "100%",
    },
    img2container: {
      marginTop: "7.5px !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    firstcolumn: {
      width: "53.12% !important",
      float: "left",
      marginLeft: "2.66% !important",
      padding: "0px !important",
    },
    firstcolumns: {
      width: "53.12% !important",
      float: "left",
      // marginLeft: "1.25% !important",
      // marginRight: "2.66% !important",
      padding: "0px !important",
    },
    silver_first_column: {
      width: "50% !important",
      float: "left",
      // marginRight: "2.66% !important",
      padding: "0px !important",
    },
    marginAuto: {
      padding: "0px 0px 0px 0px !important",
      width: "40.31% !important",
      marginLeft: "1.25% !important",
      marginRight: "2.66% !important",
    },

    marginAutos: {
      padding: "0px 0px 0px 0px !important",
      width: "40.31% !important",
      marginLeft: "2.66% !important",
      marginRight: "1.25% !important",
    },

    silver_margin_auto: {
      padding: "0px 6px 0px 0px !important",
      width: "50% !important",
      // marginRight: "1.25% !important",
      // marginLeft: "2.66% !important",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      margin: "0px 0px 20px 0px ",
    },
  },

  gridList: {
    width: "100%",
    height: "auto",
  },
  // marginAuto: {
  //   padding: "0px 8px 0px 8px",
  // },
  silver_margin_auto: {
    padding: "0px 6px 0px 0px",
  },
  // firstcolumn: {
  //   padding: "0px 8px 0px 0px",
  // },
  silver_first_column: {
    padding: "0px 0px 0px 8px",
  },
  [theme.breakpoints.up("lg")]: {
    gridList: {
      width: " 1170px",
      height: "auto",
    },
    firstcolumnsilver: {
      padding: "0px 8px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    gridList: {
      width: " 500px",
      height: "auto",
    },
  },
  imgsmall: {
    width: " calc(50% - 5px) !important",
  },
  imagefull: {
    width: "100%",
    height: "100%",
    verticalAlign: "center",
  },
  daisyday: {
    marginTop: 0,
    width: "100%",
  },
  img2container: {
    marginTop: 0,
  },
  silver_image_2_container: {
    marginTop: 0,
  },
  isHoverGrid: {
    height: "100%",
    // padding: "0px 6px 0px 6px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px 0px 6px",
    },
  },
  navlist: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
  },
  side: {
    marginRight: "-7px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "unset",
    },
  },
  sideml: {
    marginRight: "-7px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "unset",
    },
  },

  bangleImg: {
    padding: "0px 8px 8px 8px",
    height: "100%",
  },
}));
export default HomePageImageCollectionStyles;
