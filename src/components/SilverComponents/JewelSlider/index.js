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
          {/* <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
          </div> */}
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
