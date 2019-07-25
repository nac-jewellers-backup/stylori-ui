import React, { Component } from 'react';
import './product-images.css'
import { Grid, Hidden } from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import TB from './producthoverData'
const src = 'https://images8.alphacoders.com/387/387613.jpg'


class ProductImageZoom extends Component {
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%'
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
  render() {
    const fadeImages = [
      'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
      'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
      'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
      'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    ];
    
    const dataCarousel={
      dots: false,
          infinite: true,
          autoplay: true,
          speed: 1000,
          fade: true,
          arrows: true,
          rows:4
        }
    return (
      <div>
        {/* <Grid container spacing={12}>
        <Grid xs={2}>
          <VerticalCarousel/>
        </Grid>
        <Grid xs={10}>
        <div className="imagecard">
          <div className='figure' onMouseMove={this.handleMouseMove} style={this.state}>
            <img className='image' src={src} />
          </div>
        </div>
        <div>
        <Grid container spacing={12}
         className='features-tags'>
          {TB.productsubHead.map(val => (
            <Grid item xs={2} >
              <div key={val.name}>
                <img className='features-tags-images' src={val.icon} />
               <span style={{fontSize:"14px"}}>{val.name} </span> 
              </div>
            </Grid>
          ))}
        </Grid>
        </div>
        </Grid>
        </Grid> */}
        <Hidden smDown>
        <Grid container spacing={12}>
          <Grid xs={2}>
            <Slideshow class="vertical-carousel" class2='vertical-carousel-img' fadeImages={fadeImages} dataCarousel={dataCarousel}/>
          </Grid>
          <Grid xs={10}>
            <div  >
            <div className="imagecard" onMouseOut={event => this.zoomOut(event)}  onMouseMove={event => this.zoomIn(event)}> 
              <img id="imgZoom" width="100%" height="100%" 
                src="https://wallpaperplay.com/walls/full/2/5/3/48901.jpg" />

            </div>
            <div className='overly-img' id="overlay"   onMouseOut={event => this.zoomOut(event)}></div>
            </div>
          </Grid>
        </Grid>
        </Hidden>

      </div>

    )
  }
}

export default ProductImageZoom;