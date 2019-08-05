import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import '../product-image-slider/product-images.css'
class Slideshow extends React.Component {
  constructor(props) {
    super(props)
  }

  renderFadeImages = () => {
    let { video } = this.props;
    return this.props.fadeImages ? this.props.fadeImages.map(imgs => (
      <div className={` ${this.props.class ? this.props.class : ''}`} onClick={e => this.props.getmsg ? this.props.getmsg(e) : ''}>
        {video ?
          <video className={`${imgs?'shine imgDiv2':''} ${this.props.imgClass ? this.props.imgClass : ''}`} src={imgs} />
          : <img className={`${imgs?'shine imgDiv2':''} ${this.props.imgClass ? this.props.imgClass : ''}`} src={imgs} alt=""/>}
      </div>
    )) : ''
  }

  imagehoverchildrens = (hoverlist) => {
    let { hover } = this.props;
    return hoverlist.map(val => (
      <div class={"subslider-carousel" + hover ? " hovereffect" : ""}>
        <img src={val.img} className='subslider-carousel-img img-responsive' />
        <div class="overlay1">
          <h2 className='next-price'>{val.title}</h2><br />
          <a class='info'><span className='sub-list-price'> <i class="fa fa-rupee"></i> &nbsp;{val.price}</span></a>
        </div>
      </div>
    ))
  };
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
    let { ref } = this.props;

    return (
      <div>
        <Slider {...ref}  {...settings}>
          {this.props.children ? this.props.children : this.renderFadeImages()}
          {this.props.hover ? this.imagehoverchildrens(this.props.hoverlist) : ''}
        </Slider>
      </div>
    );
  }
}

export default Slideshow;