import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wishlist from "components/wishlist/wishlist";

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

    return (
      <div>
        <Slider {...settings}>
          {arrOfurls.map((slide) => (
            <div>
              {this.props.data[0].ProductContactNum[0].isReadyToShip ? (
                <div class={"one-day-ship_only_silver_mobile"}>
                   <i
            class="fa fa-truck"
            style={{ 
            fontSize: "18px",
            fontFamily: 'FontAwesome !important',
            position: 'absolute',
            zIndex: 500,
            left: '10px',
            margin: '10px',
            color:"#111",
            paddingTop: '12px'
            }}
          ></i>
                </div>
              ) : (
                ""
              )}
              <div class="wishListStyle" style={{top:"12px",left:"300px"}}>
                <Wishlist
                  sku={this.props.data[0].skuId}
                  productId={this.props.data[0].productId}
                  wishlist={this.props.wishlist}
                  isSilver
                />
              </div>

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
