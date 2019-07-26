import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

class Slideshow extends React.Component {
  constructor(props){
    super(props)
  }

  renderFadeImages = () => {
    return this.props.fadeImages.map(imgs => (
      <div className={this.props.class?this.props.class:''}  onClick={e => this.props.getmsg ? this.props.getmsg(e) : ''}>
        <img className={this.props.imgClass?this.props.imgClass:''} src={imgs} />
      </div>
    ))
  }
//className={this.props.styles?this.props.styles:''}
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
        <Slider {...settings} >
          {/* <div onClick={e => this.props.getmsg ? this.props.getmsg(e) : ''}> */}
          {this.props.children ? this.props.children : this.renderFadeImages()}
          {/* </div> */}
        </Slider>
      </div>
    );
  }
}

export default Slideshow;