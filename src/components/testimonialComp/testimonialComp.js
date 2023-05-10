import { Grid, Hidden, Typography } from "@material-ui/core";
import { Slideshow } from "components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "assets/leftArrow";
import RightArrow from "assets/rightArrow";
import React from "react";
import TestimonialCompStyles from "./style";

export default function TestimonialComp(props) {
  const classes = TestimonialCompStyles();

  const slider = React.createRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    // centerMode: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
          dots: true,
        },
      },
    ],
  };
  console.log("props.dataCarousel", props.data);
  return (
    <div className={classes.testimonial}>
      <Hidden xsDown>
      <Grid item className={classes.containerRoot}>
        <Grid container className={classes.container}>
          <Grid item style={{ width: "3%" }} className={classes.imgleftGrid}>
            <img
              onClick={() => previous()}
              className={classes.imgleft}
              loading="lazy"
            />
          </Grid>
          <Grid item className={classes.centerText} style={{ width: "94%" }}>
            <Slideshow dataCarousel={props.dataCarousel} sliderRef={slider}>
              {props?.data?.map((val, index) => (
                <>
                  {/* <Grid container>
                    <Grid item xs={12} alignItems="center">
                      <Grid container> */}
                        <div  className={classes.testimonialInner}>
                          <div >
                            <Typography className={classes.textInner}>
                              {val.text}
                            </Typography>
                            <Typography className={classes.writer}>
                              {val?.writer}
                            </Typography>
                          </div>
                        </div>
                      {/* </Grid>
                    </Grid>
                  </Grid> */}
                </>
              ))}
            </Slideshow>
          </Grid>
          <Grid item style={{ width: "3%" }} className={classes.imgRightGrid}>
            <img
              onClick={() => next()}
              className={classes.imgRight}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <Hidden smUp>
        <Slider {...sliderSettings}>
          {props?.data?.map((val, index) => {
            return (
              <div>
                {/* <div className={classes.sliderImage} key={index}>
                  <img alt={card.text} src={card.image} />
                </div> */}
                <Typography className={classes.textInner}>
                  {val.text}
                </Typography>
                <Typography className={classes.writer}>
                  {val?.writer}
                </Typography>
              </div>
            );
          })}
        </Slider>
      </Hidden>
    </div>
  );
}
