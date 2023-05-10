import { makeStyles } from "@material-ui/core";

const TestimonialCompStyles = makeStyles((theme) => ({
  testimonial: {
    margin: "80px 0px",
    [theme.breakpoints.down("xs")]: {
      margin: "20px",
    },
  },
  containerRoot: {
    width: "100%",
  },
  centerText: {
    padding: "0px 15px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 15px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 55px",
    },
    "& .slick-prev:before": {
      content: "'' !important",
    },
  },
  imgleft: {
    backgroundImage:
      "url(https://assets.stylori.com/images/static/home/slider_icon.png) !important",
    backgroundPosition: "-27px -42px !important",
    width: "40px !important",
    height: "50px !important",
    backgroundRepeat: "no-repeat !important",
    float: "left",
    backgroundColor: "#fff",
    border: " 0px",
  },
  imgRight: {
    backgroundImage:
      "url(https://assets.stylori.com/images/static/home/slider_icon.png) !important",
    backgroundPosition: "-155px -42px !important",
    width: "40px !important",
    height: " 50px !important",
    backgroundRepeat: "no-repeat !important",
    float: "right",
    backgroundColor: "#fff",
    border: "0px",
  },
  smleftGrid: {
    width: "5%",
  },
  leftIc: {
    backgroundPosition: "-16px -21px !important",
    width: "15px!important",
    height: "20px!important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important",
    borderLeft: "1px solid #ccc",
    marginLeft: "-8px!important",
    verticalAlign: "text-top",
    backgroundColor: "#fff",
    position: "relative",
    top: "50%",
    zIndex: 5,
  },
  rightIc: {
    backgroundPosition: "-65px -21px !important",
    width: "15px !important",
    height: "20px !important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important",
    borderRight: "1px solid #ccc",
    marginRight: "-8px !important",
    float: "right",
    backgroundColor: "#fff",
    position: "relative",
    top: "50%",
    zIndex: 5,
  },
  container: {
    display: "flex !important",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgRightGrid: {},
  testimonialRight: {
    width: "25%",
    padding: "6px 15px 20px 6px",
  },
  testimonyTitle: {
    display: "flex",
    justifyContent: " center",
    alignContent: "center",
    minHeight: "40px",
    color: "#394578",
    fontWeight: "500",
    fontSize: "13px",
    marginBottom: "0px",
    lineHeight: "20px !important",
    marginTop: "10px",
  },
  imgcoin: {
    width: "100%",
    // cursor: "pointer"
  },
  imgcoinsm: {
    width: "100%",
  },
  Button: {
    fontSize: "12px",
    backgroundColor: "#394578",
    /* margin-top: 18px !important; */
    marginTop: "8px !important",
    color: "#fff",
    borderFadius: "0px",
    padding: "7px 15px",
    borderColor: "#ccc",
  },
  exclIcon: {
    backgroundImage:
      "url(https://assets.stylori.com/images/static/home/Testimonial_icons.png)",
    backgroundPosition: "-24px -45px",
    width: "38px",
    height: "37px",
    backgroundRepeat: "no-repeat",
    float: "left",
    marginTop: "60px",
    marginLeft: "60px",
  },
  testimonialInner: {
    color: "#666666",
    fontSize: "13px",
    lineHeight: "30px",
    padding: "0px 178px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 55px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 5px",
    },
  },
  textInner: {
    color: "#666666",
    fontSize: "13px",
    lineHeight: "30px",
    textAlign:"center",
    [theme.breakpoints.down("xs")]: {
      lineHeight: "20px",
    },
  },
  name: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#394578",
  },
  namecountry: {
    fontSize: "13px",
    color: "#394578",
  },
  excliconright: {
    backgroundImage:
      "url(https://assets.stylori.com/images/static/home/Testimonial_icons.png)",
    backgroundPosition: "-82px -45px",
    width: "38px",
    height: "37px",
    backgroundRepeat: "no-repeat",
    float: "right",
    marginRight: "50px",
  },
  titleTypo: {
    fontWeight: 600,
    color: "rgb(57, 69, 120)",
    fontSize: "22px",
    lineHeight: 1.1,
  },
  Titlehead: {
    margin: "20px 0px 10px 0px",
    justifyContent: "center",
    display: "flex",
  },
  writer: {
    fontWeight: 600,
    color: "#606161",
    fontSize: "13px",
    textAlign: "right",
  },
}));

export default TestimonialCompStyles;
