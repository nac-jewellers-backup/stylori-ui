import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionCard from "../CollectionCard";
import "./style.css";

const CollectionSlider = ({ collections = [] }) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    className: "collectionSlider",
  };
  return (
    <div>
      <Slider {...settings}>
        {collections.map((collection) => (
          <div style={{ width: 350 }}>
            <CollectionCard image={collection} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollectionSlider;
