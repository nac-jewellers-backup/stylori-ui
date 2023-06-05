import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "assets/leftArrow";
import RightArrow from "assets/rightArrow";
import StylesCardStyles from "./style";
import { Hidden, Typography } from "@material-ui/core";

export default function StylesCard(props) {
  const classes = StylesCardStyles();
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
        },
      },
    ],
  };
  const handleClick = (url) => {
    if(url){
      window.open(url,'_blank')
    }
  } 
  return (
    <div className={classes.content}>
      {props?.type === "styles" ? (
        <>
        <Hidden xsDown>
        <Slider {...sliderSettings}>
          {props?.data?.map((card, index) => {
            return (
              <div onClick={() =>handleClick(card?.url)}>
                <div className={classes.sliderImage} key={index}>
                  <img alt={card.text} src={card.image} style={{cursor:"pointer"}} />
                </div>
                <div className={classes.imageText}>
                  <Typography>{card?.text}</Typography>
                </div>
              </div>
            );
          })}
        </Slider>
        </Hidden>
        <Hidden smUp>
        {props?.data?.map((card, index) => {
            return (
              <div style={{position:"relative",textAlign:"center"}}>
                <div className={classes.sliderImage} style={{width:"90%",margin:"auto"}} onClick={() =>handleClick(card?.url)} key={index}>
                  <img alt={card.text} src={card.image} />
                </div>
                <div className={classes.imageText} style={{position:"absolute"}}>
                  <Typography style={{fontSize:"25px"}}>{card?.text}</Typography>
                </div>
              </div>
            );
          })}
        </Hidden>
        </>
      ) : (
        <Slider {...sliderSettings}>
          {props?.data?.map((card, index) => {
            return (
              <div>
                <div className={classes.sliderImage} key={index}>
                  <img alt={card.text} src={card.image} />
                </div>
                <div className={classes.imageText}>
                  <Typography>{card?.text}</Typography>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}
