import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "assets/leftArrow";
import RightArrow from "assets/rightArrow";
import { Typography } from "@material-ui/core";
import CurrencyConversion from "utils/CurrencyConversion";
import StylesCardPriceStyles from "./style";

export default function StylesCardPrice(props) {
  const classes = StylesCardPriceStyles();
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 2,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
        },
      },
    ],
  };

  return (
    <div className={classes.content}>
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
              <div className={classes.imageBottom}>
                <div className={classes.bottomText}>
                  <Typography>{card.bottomText}</Typography>
                </div>
                <div className={classes.price}>
                  <Typography className={classes.offerMainPrice}>
                    {CurrencyConversion(card?.price)}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
