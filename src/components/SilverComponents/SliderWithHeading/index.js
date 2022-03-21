import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import {
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  headingContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 16px 20px",
    position: "relative",
    "& hr": {
      position: "absolute",
      width: "100%",
      zIndex: "-1",
    },
    "& p": {
      fontFamily: `'Playfair Display', serif !important`,
      textAlign: "center",
      margin: "auto",
      width: "fit-content",
      backgroundColor: "white",
      padding: theme.spacing(0, 4),
      fontSize: "18px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "3px",
      color: theme.palette.text.secondary,
      borderTopColor: theme.palette.ternary.main,
    },

    [theme.breakpoints.up("sm")]: {
      margin: "0 10% 48px",
      "& p": {
        fontSize: "30px",
        letterSpacing: "14px",
        padding: theme.spacing(0, 2),
      },
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",  
    "& img": {
      height:200,
      width:"auto",
    },
    "& p": {
      textAlign: "center",
      color: theme.palette.text.secondary,
      "&:nth-child(2)": {
        fontSize: 12,
        fontWeight: 500,
        [theme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
      },
      "&:nth-child(3)": {
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },
  },
  sliderContainer: {
    position: "relative",
  },
  arrowContainer: {
    width: "100%",
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
   
    display: "flex",
    justifyContent: "space-between",

    "& .MuiSvgIcon-root": {
      // fill: "white !important",
      fontSize: "2.5rem",
    },
  },
  sliderArrow: {
    pointerEvents: "all",
    color:"#fff",
  },
}));

const SliderWithHeading = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const aboveSm = useMediaQuery(theme.breakpoints.up("sm"));

  const [sliderInstance, setSliderInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "60px",
    // lazyLoad: "progressive",
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    className: "sliderWithHeading",
    afterChange: (index) => setCurrentIndex(index),
  };

  const { heading, products = [] } = props;

  const tempProducts = [
    ...products,
    products[1],
    products[1],
    products[1],
    products[1],
    products[1],
    products[1],
    products[1],
    products[1],
  ];

  const handlePrevClick = () => {
    sliderInstance.slickPrev();
  };
  const handleNextClick = () => {
    sliderInstance.slickNext();
  };

  return (
    <div>
      <div className={classes.headingContainer}>
        <hr />
        <Typography>{props.heading}</Typography>
      </div>
      <div className={classes.sliderContainer}>
        <Slider ref={(s) => setSliderInstance(s)} {...settings}>
          {tempProducts.map((product) => (
            <div
              className={classes.imageContainer}
              // style={{
              //   width: aboveSm ? 320 : 'auto',
              // }}
            >
              <img
                src={product}
                alt={"Product Image"} //   style={{ width: "120px" }}
              />
              <Typography>Blissfull Silver Earrings</Typography>
              <Typography>₹ 5939</Typography>
            </div>
          ))}
        </Slider>

        {aboveSm && (
          <div className={classes.arrowContainer}>
            <IconButton
              className={classes.sliderArrow}
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon style={{color:"#fff"}}/>
            </IconButton>
            <IconButton
              className={classes.sliderArrow}
              onClick={handleNextClick}
              disabled={currentIndex === tempProducts.length - 1}
            >
              <ChevronRightIcon style={{color:"#fff"}}/>
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderWithHeading;
