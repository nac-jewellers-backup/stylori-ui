import React, { Component } from 'react';
import './product-images.css'
import { Grid } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import { Fade } from 'react-slideshow-image';
import Slider from "react-slick";

const fadeImages = [
  'https://assets-cdn.stylori.com/120x120/images/product/SE0218/SE0218-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg'
];
const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: false,
  indicators: false,
  arrows: true,
  autoplay: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}


class VerticalCarousel extends Component {
  state = {

  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Hidden smDown>


        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
        </Slider>


            </Hidden>

        <Hidden mdUp>
          <div style={{ textAlign: "center" }}>
            <Fade {...fadeProperties}>
              <div className="price-carousel">
                <div className="image-priceCarousel">
                  <img className="price-carosuel" src={fadeImages[0]} />
                </div>

              </div>
              <div className="price-carousel">
                <div className="image-priceCarousel">
                  <img className="price-carosuel" src={fadeImages[1]} />
                </div>

              </div>
              <div className="price-carousel">
                <div className="image-priceCarousel">
                  <img className="price-carosuel" src={fadeImages[2]} />
                </div>

              </div>
            </Fade>
          </div>
        </Hidden>
      </div>

    )
  }
}

export default VerticalCarousel;