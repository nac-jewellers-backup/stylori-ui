import {
  Grid,
  Hidden,
  Container,
  Button
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import TB from './producthoverData'
import T from './producthoverData';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-images.css'

class ProductImageZoom extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
  }
  state = {
    // backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
    showimage: T.fadeImages[0],
    slider: ""
  }

  next = () => {
    this.slider.current.slickNext();
  }
  previous = () => {
    this.slider.current.slickPrev();
  }
  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }



  zoomIn = (event) => {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";


  }

  zoomOut = () => {
    var element = document.getElementById("overlay");
    element.style.display = 'none';
  }

  getimage = e => {
    this.setState({
      showimage: e.target.src
    })
  }
  render() {

    let { showimage } = this.state;
    const dataCarousel = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false
    }
    return (
      <div>
        <Container>
          <Hidden smDown>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <div style={{ textAlign: 'center' }}>
                  <Button onClick={this.previous}>
                    <i class="fa fa-angle-up" style={{ fontSize: "35px", color: "#F699A3" }}></i>
                  </Button>
                  <Slideshow sliderRef={this.slider}
                    getmsg={this.getimage} class="vertical-carousel" imgClass='vertical-carousel-img'
                    fadeImages={T.fadeImages} dataCarousel={dataCarousel} />
                  <Button onClick={this.next}>
                    <i class="fa fa-angle-down" style={{ fontSize: "35px", color: "#F699A3" }}></i>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={10}>
                <div>
                  <div className="imagecard" onMouseOut={event => this.zoomOut(event)}
                    onMouseMove={event => this.zoomIn(event)}>
                    <img id="imgZoom" width="100%" height="100%"
                      src={showimage} />

                  </div>
                  <div className='overly-img' id="overlay"
                    style={{ backgroundImage: `url(${showimage})` }} onMouseOut={event => this.zoomOut(event)}></div>
                  <div>
                    <Grid container spacing={12}
                      className='features-tags'>
                      {TB.productsubHead.map(val => (
                        <Grid item xs={2} >
                          <div key={val.name}>
                            <img className='features-tags-images' src={val.icon} />
                            <span style={{ fontSize: "14px" }}>{val.name} </span>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Hidden>

        </Container>
      </div>

    )
  }
}
ProductImageZoom.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
  handleMouseMove: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  getimage: PropTypes.func,
};
export default ProductImageZoom;