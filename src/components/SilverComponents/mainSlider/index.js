import React, { useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    flexDirection: "row",  
    "& img": {
      height:250,
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
}));

const MainCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const aboveSm = useMediaQuery(theme.breakpoints.up("sm"));
  const location = useLocation();
  const history = useHistory();

  const [sliderInstance, setSliderInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
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

  const { heading, products = [] } = props;

  

  const handlePrevClick = () => {
    sliderInstance.slickPrev();
  };
  const handleNextClick = () => {
    sliderInstance.slickNext();
  };

  return (
    <div>  
     <div className={classes.sliderContainer}> 
       <Slider ref={(s) => setSliderInstance(s)} {...settings}>
         {products.map((product) => (
           <div
             className={classes.imageContainer}
           >
             <img
               src={product.image}
               alt={"Product Image"}
               onClick={() => { window.open(`/${product.url}`)}}
               style={{ cursor:"pointer" }}
             />
             <div style={{display:"flex",justifyContent:"center"}}>
             <Typography>{product.title}</Typography>
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
             <ChevronLeftIcon />
           </IconButton>
           <IconButton
             className={classes.sliderArrow}
             onClick={handleNextClick}
           >
             <ChevronRightIcon/>
           </IconButton>
         </div>
       )}
       
     </div> 
    </div>
  );
};

export default MainCard;
