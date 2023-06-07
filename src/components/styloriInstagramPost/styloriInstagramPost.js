import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "assets/leftArrow";
import RightArrow from "assets/rightArrow";
import { Typography } from "@material-ui/core";
import CurrencyConversion from "utils/CurrencyConversion";
import StyloriInstaStyles from "./style";
import SocialLinkFrame from "components/storyTemplate/socialLinkFrame";
import StaticView from "components/Feedes/Index";
import { Helmet } from "react-helmet";
import "./index.css";

export default function StyloriInstagramPost(props) {
  const classes = StyloriInstaStyles();
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  let post = [];
  if(localStorage.getItem("instapost")){
    post = JSON.parse(localStorage.getItem("instapost"))
  }

  const [selected,setSelected] = useState(2);
  useEffect(() => {
    // window.screen.width <= 760 ? setIsMobile(true) : setIsMobile(false);
    if (window.innerWidth <= 870 && window.innerWidth >= 426) {
      setIsTab(true);
      setIsMobile(false);
      setSelected(1)
    } else if (window.innerWidth <= 425) {
      setIsTab(false);
      setIsMobile(true);
    } else {
      setIsTab(false);
      setIsMobile(false);
    }
  }, [window.screen.width]);

  function detectWindowSize() {
    // window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
    if (window.innerWidth <= 870 && window.innerWidth >= 426) {
      setIsTab(true);
      setIsMobile(false);
    } else if (window.innerWidth <= 425) {
      setIsTab(false);
      setIsMobile(true);
    } else {
      setIsTab(false);
      setIsMobile(false);
    }
  }

  window.onresize = detectWindowSize;

   const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    beforeChange: (current, next) => {
      if(next == post.length - 1){
        setSelected(1)
      }else if(next === post.length - 2){
        setSelected(0)
      }else{
        setSelected(next + 2)
      } 
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
          beforeChange: (current, next) => {
            if(next == post.length - 1){
              setSelected(1)
            }else if(next === post.length - 2){
              setSelected(0)
            }else{
              setSelected(next + 2)
            } 
          },
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 1,
          arrows: true,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
          beforeChange: (current, next) => {
            if(next === post.length - 1){
              setSelected(0)
            }else{
              setSelected(next + 1)
            }
          },
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          prevArrow: <LeftArrow />,
          nextArrow: <RightArrow />,
          // beforeChange: (current, next) => setImageIndex(next),
        },
      },
    ],
  };

  return (
    <div className={classes.content}>
      <Helmet>
        <script async src="//www.instagram.com/embed.js"></script>
      </Helmet>
      <Slider {...sliderSettings}>
        {post.map((card, index) => {
          return (
            <div key={index}>
              <div
                className={
                  index === selected
                    ? classes.instaPost
                    : classes.post
                }
              >
                <div className={classes.sliderImage} key={index}>
                  {/* <img alt={card.text} src={card.image} /> */}
                  <blockquote
                    className="instagram-media"
                    title="........"
                    data-instgrm-permalink={card.permalink}
                    data-instgrm-version={13}
                    style={{
                      background: "#FFF",
                      border: "1px solid",
                      borderRadius: "3px",
                      boxShadow:
                        "none",
                      margin: "1px",
                      maxWidth: "540px",
                      minWidth: "205px",
                      padding: 0,
                      width: "calc(100% - 2px)",
                      margin: "auto",
                    }}
                  >
                
                  </blockquote>
                </div>
                {/* <div className={classes.imageText}>
                  <Typography>{card?.text}</Typography>
                </div>
                {props?.price && (
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
                )} */}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
