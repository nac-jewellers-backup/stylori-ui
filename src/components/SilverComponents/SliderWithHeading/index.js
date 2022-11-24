import React, { useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { useLocation,useHistory } from "react-router-dom";
import {
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CurrencyConversion from "utils/CurrencyConversion";
import PlaceHolder from 'assets/topPicksThree.jpg'

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
      height:280,
      width:"auto",
      [theme.breakpoints.down("sm")]: {
        width:320
      },
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
    height:"100%",
    width:"100%"
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
  title:{
    width:'270px',
    [theme.breakpoints.down("sm")]: {
      width:"auto"
    },
  }
}));

const SliderWithHeading = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const aboveSm = useMediaQuery(theme.breakpoints.up("sm"));

  const [sliderInstance, setSliderInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: false,
    centerMode: false,
    centerPadding: "60px",
    // lazyLoad: "progressive",
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    className: "sliderWithHeading",
    afterChange: (index) => setCurrentIndex(index),
  };

  const {  products } = props;



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
    {products.length > 0 ? 
     <div className={classes.sliderContainer}> 
       <Slider ref={(s) => setSliderInstance(s)} {...settings}>
         {products.map((product) => (
           <div
             className={classes.imageContainer}
           >       
           <div>
             <img
               src={product?.img}
               alt={"Product Image"}
               loading="lazy" 
               onClick={() => { window.open(`/${product?.url}`)}}
               style={{ cursor:"pointer" }}
             />
             <div className={classes.title}>
             <Typography>{product?.title}</Typography>
             <Typography>{CurrencyConversion(product?.price)}</Typography>
           </div>
           </div>  
           </div>
         ))}
       </Slider>
       
       {aboveSm && (
         <div className={classes.arrowContainer}>
           <IconButton
             className={classes.sliderArrow}
             onClick={handlePrevClick}  
           >
             <ChevronLeftIcon style={{color:"#fff"}}/>
           </IconButton>
           <IconButton
             className={classes.sliderArrow}
             onClick={handleNextClick}
           >
             <ChevronRightIcon style={{color:"#fff"}}/>
           </IconButton>
         </div>
       )}
     </div>
      :<Typography className="no-data">No Data Found</Typography>
      }
     
      
     
    </div>
  );
};

export default SliderWithHeading;
