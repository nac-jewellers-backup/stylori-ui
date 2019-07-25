import React, { Component } from 'react';
import './product-images.css'
import { Grid, Hidden, Container } from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import TB from './producthoverData'
const src = 'https://images8.alphacoders.com/387/387613.jpg'

const fadeImages = [
  'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
];
class ProductImageZoom extends Component {
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
    showimage : fadeImages[0]
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
    element.style.backgroundPosition = (-posX * 2) + "px " + (-posY * 4) + "px";


  }

  zoomOut = () => {
    var element = document.getElementById("overlay");
    element.style.display = 'none';
  }
  getimage = e =>{
    this.setState({
      showimage : e.target.src
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
      arrows: true,
    }
    return (
      <div>
        <Container>
          <Hidden smDown>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <div style={{ textAlign: 'center' }}>
                  <Slideshow getmsg={this.getimage}  class="vertical-carousel" imgClass='vertical-carousel-img' fadeImages={fadeImages} dataCarousel={dataCarousel} />
                </div>
              </Grid>
              <Grid item xs={10}>
                <div  >
                  <div className="imagecard" onMouseOut={event => this.zoomOut(event)} onMouseMove={event => this.zoomIn(event)}>
                    <img id="imgZoom" width="100%" height="100%"
                      src={showimage} />

                  </div>
                    <div className='overly-img' id="overlay" style={{backgroundImage: `url(${showimage})`}} onMouseOut={event => this.zoomOut(event)}></div>
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
                  </div> </div>
              </Grid>
            </Grid>
          </Hidden>

        </Container>
      </div>

    )
  }
}

export default ProductImageZoom;