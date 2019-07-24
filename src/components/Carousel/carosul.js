import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slideshow extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    // document.getElementsByClassName('fade').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear'
    // });
    // const fadeImages = [
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg'
    // ];
    
    var settings = 
      this.props.dataCarousel;
  
    return (
      <div >
        <Slider {...settings}>
          {this.props.fadeImages.map(imgs => (
            <div className={this.props.class?this.props.class:''}>
              <img className={this.props.class2?this.props.class2:''} src={imgs} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Slideshow;