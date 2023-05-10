import { makeStyles } from "@material-ui/core";

const StylesCardStyles = makeStyles((theme) => ({
  sliderImage: {
    position: "relative",
    "& img": {
      width: "100%",
      padding: "10px",
      // height: "296px",
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "22px",
      // },
      [theme.breakpoints.down("xs")]: {
        padding: "10px 25px",
      },
    },
  },

  imageText: {
    position: "absolute",
    top: "45%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& p": {
      fontSize: "22px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
      color: "#FFFFFF",
      letterSpacing: "5px",
    },
  },

  content: {
    "& .slick-next": {
      width: "26px",
      height: "46px",
      right: "10px !important",
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "22px",
      // },
      [theme.breakpoints.down("xs")]: {
        right: "50px !important",
      },
    },
    "& .slick-prev": {
      width: "26px",
      height: "46px",
      left: "10px !important",
      zIndex: 1,
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "22px",
      // },
      [theme.breakpoints.down("xs")]: {
        left: "50px !important",
      },
    },
  },

  imageBottom: {
    padding: "0px 80px 10px 80px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0px 45px 10px 45px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 45px 10px 45px",
    },
  },

  bottomText: {
    "& p": {
      fontSize: "13px",
      color: "#6D6E71",
    },
  },

  offerMainPrice: {
    fontWeight: 600,
    color: "#6D6E71",
  },
}));

export default StylesCardStyles;
