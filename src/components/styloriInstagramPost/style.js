import { makeStyles } from "@material-ui/core";

const StyloriInstaStyles = makeStyles((theme) => ({
  sliderImage: {
    position: "relative",
    "& img": {
      width: "100%",
      padding: "155px 15px", 
      // height: "296px",
      [theme.breakpoints.down('md')]:{
        padding:"155px 30px"
      },
      [theme.breakpoints.down('xs')]:{
        padding:"0px",
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
      color: "#FFFFFF",
      letterSpacing: "5px",
    },
  },

  content: {
    margin: "40px 0px",
    [theme.breakpoints.down('xs')]:{
      margin: "40px 20px"
    },
    "& .slick-next": {
      width: "26px",
      height: "46px",
      right: "20px !important",
    },
    "& .slick-prev": {
      width: "26px",
      height: "46px",
      left: "20px !important",
      zIndex: 1,
    },
  },

  imageBottom: {
    padding: "0px 80px 10px 80px",
    textAlign: "center",
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

  instaPost: {
    backgroundImage:
      "url('https://assets.stylori.com/banners/web/phone_14_01-[Converted]-copy.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('xs')]:{
      backgroundImage: "none"
    },
  },

}));

export default StyloriInstaStyles;
