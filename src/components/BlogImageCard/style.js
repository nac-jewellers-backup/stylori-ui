import { makeStyles } from "@material-ui/core/styles";
const BlogImageCardStyles = makeStyles((theme) => ({
  imageCard: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {},
    "& img": {
      width: "100%",
      height: "100%",
    },
  },

  mainTitle: {
    // marginTop: "100px",
    marginBottom: "60px",
    padding: "0 130px",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
      marginBottom: "30px",
      padding: "0 0px",
    },
  },

  main: {
    marginBottom: "30px",
  },

  backgroundClr: {
    backgroundColor: "#f4f4f4",
    padding: "27px 40px !important",
  },

  backgroundPadding: {
    padding: "0px !important",
  },

  // contentText: {
  //   padding: "40px 20px",
  //   [theme.breakpoints.down("md")]: {
  //     padding: "10px 15px",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     padding: "5px 12px",
  //   },
  // },

  headingText: {
    "& p": {
      fontSize: "21px",
      fontWeight: 600,
      color: "rgb(6, 171, 159)",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  },

  dateText: {
    "& p": {
      fontSize: "16px",
      fontWeight: 600,
      color: "gray",
      marginBottom: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
  },

  middleText: {
    "& p": {
      fontSize: "16px",
      fontWeight: 500,
      color: "gray",
      marginBottom: "20px",
      display: "-webkit-box",
      lineClamp: 6,
      boxOrient: "vertical",
      overflow: "hidden",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        marginBottom: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        marginBottom: "12px",
      },
    },
  },

  buttonText: {
    "& p": {
      fontSize: "16px",
      fontWeight: 600,
      color: "rgb(6, 171, 159)",
      textAlign: "right",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
        marginBottom: "23px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
        marginBottom: "23px",
      },
    },
  },

  viewMore: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "25px",
    "& button": {
      backgroundColor: "rgb(6, 171, 159)",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "rgb(6, 171, 159)",
        color: "#ffffff",
      },
    },
  },

  // Route Style
  backBtn: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "100px",
    "& button": {
      backgroundColor: "rgb(6, 171, 159)",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "rgb(6, 171, 159)",
        color: "#ffffff",
      },
    },
  },

  jewellImg: {
    width: "100%",
    height: "70vh",
  },

  heading: {
    textAlign: "center",
  },

  title: {
    "& p": {
      fontSize: "22px",
      color: "rgb(6, 171, 159)",
      fontWeight: 600,
      marginTop: "15px",
      marginBottom: "5px",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
  },

  dot: {
    width: "10px !important",
    height: "10px !important",
    marginLeft: "10px",
    marginRight: "6px",
  },

  subText: {
    "& p": {
      "& span": {
        // color: "#333edb",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  content: {
    marginTop: "20px",
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        padding: "0px 20px",
        textAlign: "justify",
      },
    },
  },

  jewellImg2: {
    width: "100%",
    marginTop: "60px",
  },

  content2: {
    marginTop: "15px",
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        padding: "0px 20px",
        textAlign: "justify",
      },
    },
  },

  rightContent: {
    "& p": {
      fontSize: "17px",
      marginTop: "0px !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        padding: "0px 20px",
        textAlign: "justify",
      },
    },
  },

  textContent1: {
    "& p": {
      marginBottom: "30px",
    },
  },

  bottomText: {
    "& p": {
      fontSize: "17px",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
        padding: "0px 20px",
        textAlign: "justify",
      },
    },
  },

  leftImage: {
    "& img": {
      width: "100%",
      height: "400px",
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("xs")]: {
        height: "300px",
      },
    },
  },
}));
export default BlogImageCardStyles;
