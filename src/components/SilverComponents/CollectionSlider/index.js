import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionCard from "../CollectionCard";

const CollectionSlider = ({ collections = [] }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: false,
    // variableWidth: true,
    centerPadding: "50px",
  };
  return (
    <div>
      <Slider {...settings}>
        {[
          collections[1],
          collections[1],
          collections[1],
          collections[1],
          collections[1],
          collections[1],
        ].map((collection) => (
          <div>
            <CollectionCard image={collection} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollectionSlider;
