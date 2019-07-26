import React, { Component } from 'react';
import './product-images.css'
import { Grid, Hidden, Container, Button } from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import TB from './producthoverData'
const src = 'https://images8.alphacoders.com/387/387613.jpg'

const fadeImages = [
  'https://www.csjewellers.com/assets/web/product/images/zoom/PND8122825.jpg',
  'https://stmed.net/sites/default/files/styles/225x120/public/jewelry-wallpapers-25240-746715.jpg?itok=UH8vm-JU',
  'https://kinclimg4.bluestone.com/f_jpg,c_scale,w_515,b_rgb:f0f0f0/giproduct/BIVT0012P05_YAA18NAV1DIG6XXXX_ABCD00-PICS-00004-1024-18002.png',
  'https://www.setaswall.com/wp-content/uploads/2018/12/Jewelry-Wallpaper-20-2880x1800-768x480.jpg',
  'https://iba-ibacraftspvtltd.netdna-ssl.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/s/bsg2747_3__2_1.jpg',
  'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
];
class ProductImageZoom extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
    showimage: fadeImages[0],
    slider: ""
  }

  next = (e) => {
    this.slider.slickNext();
  }
  previous = (e) => {
    this.slider.slickPrev();
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
    element.style.backgroundPosition = (-posX * 1) + "px " + (-posY * 1) + "px";


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
      arrows: false,
    }
    return (
      <div>
        <Container>
          <Hidden smDown>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <div style={{ textAlign: 'center' }}>
                  <Button onClick={e => this.previous(e)}>
                    <i class="fa fa-angle-up" style={{ fontSize: "35px", color: "#F699A3" }}></i>
                  </Button>
                  <Slideshow getmsg={this.getimage} class="vertical-carousel" imgClass='vertical-carousel-img' fadeImages={fadeImages} dataCarousel={dataCarousel} />
                  <Button onClick={e => this.next(e)}>
                    <i class="fa fa-angle-down" style={{ fontSize: "35px", color: "#F699A3" }}></i>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={10}>
                <div  >
                  <div className="imagecard" onMouseOut={event => this.zoomOut(event)} onMouseMove={event => this.zoomIn(event)}>
                    <img id="imgZoom" width="100%" height="100%"
                      src={showimage} />

                  </div>
                  <div className='overly-img' id="overlay" style={{ backgroundImage: `url(${showimage})` }} onMouseOut={event => this.zoomOut(event)}></div>
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