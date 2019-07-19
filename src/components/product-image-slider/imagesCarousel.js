import React from "react";
import Slider from "react-slick";
 
class ImagesCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} style={{height:"44px"}} >
        <div>
          <h3><img style={{height:"44px",width:"55px"}} src="https://images8.alphacoders.com/387/387613.jpg"/> </h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
export default  ImagesCarousel;