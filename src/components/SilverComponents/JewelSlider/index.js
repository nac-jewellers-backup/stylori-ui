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

    console.log(this.props.data[0].ProductContactNum[0].isReadyToShip,"jwelll slides");
    return (
      <div>
        <Slider {...settings}>
          {arrOfurls.map((slide) => (
            <div>
              {this.props.data[0].ProductContactNum[0].isReadyToShip ? 
              <div class={"one-day-ship_only_silver_mobile"}>
                <img
                  src={require("assets/StyloriSilver-truckIcon.svg")}
                  loading="lazy" alt="...."
                />
              </div>
               :""
              }
              
             <img
              src={slide}
              alt={"Product Image"}
              loading="lazy" 
              onError={() => {}}
              style={{ width: "100vw" }}
            />
            </div>
           
          ))}
        </Slider>
      </div>
    );
  }
}
