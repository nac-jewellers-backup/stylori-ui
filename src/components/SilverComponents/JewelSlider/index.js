import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class JewelSlider extends Component {
  render() {
    const { arrOfurls } = this.props?.slides;
    const settings = {
      //   className: "center",
      infinite: false,
      //   centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      dots: true,
      arrows: false,
    };

    console.log(this.props);
    return (
      <div>
        <Slider {...settings}>
          {arrOfurls.map((slide) => (
            <img
              src={slide}
              alt={"Product Image"}
              onError={() => {}}
              style={{ width: "100vw" }}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
