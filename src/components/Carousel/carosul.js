import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import '../product-image-slider/product-images.css'
import PropTypes from 'prop-types';
class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  renderFadeImages = () => {

    let { video } = this.props;
    return this.props.fadeImages ? this.props.fadeImages.map(imgs => (
      <div className={` ${this.props.class ? this.props.class : ''}`} onClick={e => this.props.getmsg ? this.props.getmsg(e) : ''}>
        {video ?
          <video className={`${imgs ? 'shine imgDiv2' : ''} ${this.props.imgClass ? this.props.imgClass : ''}`} src={imgs} />
          : <img className={`${imgs ? 'shine imgDiv2' : ''} ${this.props.imgClass ? this.props.imgClass : ''}`} src={imgs} alt="" />}
      </div>
    )) : ''
  }



  imagehoverchildrens = (hoverlist) => {

    let { hover, hovereffect,TopPic } = this.props;
    if (TopPic) {
      return hoverlist.map(val => (
        <div class={"subslider-carousel" + TopPic ? "hovereffectSilver" : ""}>
          <img src={val.img} className='subslider-carousel-img img-responsive' style={{ width: '100%', height: 'auto' }} alt="" />
          <div class="overlay1">
            <div>
              <h2 className='next-price'>{val.title}</h2><br />
            </div>
          </div>
        </div>
      ))
    }
    else if (hovereffect) {
      return hoverlist.map(val => (
        <div class={"subslider-carousel" + hovereffect ? "hovereffectSilver" : ""}>
          <img src={val.img} className='subslider-carousel-img img-responsive' style={{ width: '100%', height: 'auto' }} alt="" />
          <div class="overlay1">
            <div style={{ paddingTop: '40%' }}>
              <h2 className='next-price'>{val.title}</h2><br />
              <h5 className="contenttext">{val.description}</h5>
              <a class='info' href={val.url}><span class='shop'>SHOP</span></a>
            </div>
          </div>
        </div>
      ))
    }
    else {
      return hoverlist.map(val => (
        <a class='info' href={val.url}>
          <div class={"subslider-carousel" + hover ? "hovereffect" : ""}>
            <img src={val.img} className='subslider-carousel-img img-responsive' alt="" />
            <div class="overlay1">
              <h2 className='next-price'>{val.title}</h2><br />
              <a class='info' href={val.url}><span className='sub-list-price'> <i class="fa fa-rupee"></i> &nbsp;{val.price}</span></a>
            </div>
          </div>
        </a>
      ))
    }

  };
  imagewithouthoverchildrens = (hoverlist) => {
    return (
      <div class={"subslider-carousel-silver "} style={{ display: "block !important " }}>
        <img src={hoverlist.img} className='subslider-carousel-img-Silver img-responsive' style={{ width: "auto !important", height: 'auto', display: "block !important  " }} alt="" />
        {/* <div class="overlay1">
          <div style={{paddingTop:'40%'}}>
        <h2 className='next-price'>{hoverlist.title}</h2><br />
        <a class='info' href={hoverlist.price}><span className='sub-list-price'> <i class="fa fa-rupee"></i> &nbsp;{hoverlist.price}</span></a>
          </div>
      </div> */}
      </div>
    )

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

    // const { dataCarousel: { settings }, sliderRef } = this.props;
    const { sliderRef } = this.props;
    var settings = this.props.dataCarousel;

    return (
      <div>
        <Slider ref={sliderRef}  {...settings}>
          {this.props.children ? this.props.children : this.renderFadeImages()}
          {this.props.hover ? this.imagehoverchildrens(this.props.hoverlist) : ""}
          {this.props.hovereffect ? this.imagehoverchildrens(this.props.hoverlist) : ""}
          {this.props.WithoutHoverhover ? this.imagewithouthoverchildrens(this.props.hoverlist) : ""}
          {this.props.TopPic ? this.imagehoverchildrens(this.props.hoverlist) : ""}
        </Slider>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => <Slideshow sliderRef={ref} {...props} />);
Slideshow.propTypes = {
  settings: PropTypes.object.isRequired,
  fadeImages: PropTypes.array.isRequired
}