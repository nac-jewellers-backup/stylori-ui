import {
  Grid,
  Hidden,
  Container,
  Button
} from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import Slideshow from '../Carousel/carosul'
import React from 'react';
import PropTypes from 'prop-types';
import './product-images.css'
import { withStyles } from '@material-ui/core/styles';
import styles from '../Header/styles'
import ReactImageZoom from 'react-image-zoom';
import StaticView from 'components/CarouselLazyer/StaticView';
import Gagetstylori from './Gagetstylori/Gagetstylori';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
// window.onload = function () {
//   var flashlight = document.querySelector('#flashlight');
//   document.getElementById('divs').addEventListener('mouseover', function (event) {
//     flashlight.style.left = (event.pageX - 40) + 'px';
//     flashlight.style.top = (event.pageY - 40) + 'px'; 
//   });
// };

class ProductImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
  }
  state = {
    // backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
    showimage: this.props && this.props.data && this.props.data.length > 0 && this.props.data[0] && this.props.data[0].fadeImages && this.props.data[0].fadeImages.arrOfurls && this.props.data[0].fadeImages.arrOfurls.length > 0 && this.props.data[0].fadeImages.arrOfurls[0] ? this.props.data[0].fadeImages.arrOfurls[0] : [],
    largeImage: this.props && this.props.data && this.props.data.length > 0 && this.props.data[0] && this.props.data[0].fadeImages && this.props.data[0].fadeImages.arrOfurls_2X && this.props.data[0].fadeImages.arrOfurls_2X.length > 0 && this.props.data[0].fadeImages.arrOfurls_2X[0] ? this.props.data[0].fadeImages.arrOfurls_2X[0] : []

  }

  componentDidUpdate(prevProps) {

    // Typical usage (don't forget to compare props):
    if (this.props.data[0].fadeImages.arrOfurls[0] !== prevProps.data[0].fadeImages.arrOfurls[0]) {
      this.setState({ showimage: this.props.data[0].fadeImages.arrOfurls[0], largeImage: this.props.data[0].fadeImages.arrOfurls_2X[0] })
    }
  }
  handleVideoCheck = (url) => {
    var extensionVideoLists = ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'mp2', 'mpeg', 'mpe', 'mpv', 'ogg', 'm4p', 'wmv', 'mov', 'qt', 'flv', 'swf', 'avchd'];
    if (url) {
      if (url.length > 0) {
        var array_split = url.split(/\.(?=[^\.]+$)/);
        const found = extensionVideoLists.find(element => element.toLowerCase() === array_split[1]);
        if (found) {
          return true
        }
        else return false
      }
    }
    else {
      return false
    }
  }
  productImageZoom = () => {

    // console.log(this.props.data)
    const { classes, data } = this.props
    const limit = 4;
    const { showimage, largeImage } = this.state;
    const dataCarousel = {
      infinite: false,
      slidesToShow: data && data.length > 0 ? data[0] && data[0].fadeImages.arrOfurls.length > 3 ? limit : data[0].fadeImages.arrOfurls.length : 0,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
    }
    // alert(JSON.stringify(data.image_resolution))
    const props = { "width": data[0].image_resolution, "height": data[0].image_resolution, "zoomWidth": data[0].image_resolution, "img": `${showimage}`, "zoomStyle": "z-index:2" }
    var a = showimage && showimage
    var b = a && a.split("/")
    // var c = a.replace(b[5], data[0].image_resolution_two + 'X' + data[0].image_resolution_two)
    var c = a && a.replace(b[5], "1000X1000")

    return (
      <div>
        <Grid container spacing={12} style={{ paddingRight: "20px" }}>
          <Grid item xs={2}>
            <div style={{ textAlign: 'center', }} className="imgzom-sidecraousel-media">
              {
                data && data.length > 0 && data[0] && data[0].fadeImages.arrOfurls.length > 3 ?
                  <span className={data && data.length > 0 && data[0] && data[0].fadeImages.arrOfurls.length === 4 ? classes.cursor_notallowed : null}>
                    <Button onClick={this.previous}


                      disabled={data && data.length > 0 && data[0] && data[0].fadeImages.arrOfurls.length === 4
                        ?
                        true
                        :
                        false
                      }>
                      <i class="fa fa-angle-up" style={{ fontSize: "35px", color: "#F699A3" }}></i>
                    </Button>
                  </span>
                  :
                  null
              }
              <Slideshow sliderRef={this.slider}
                getmsg={this.getimage} class="vertical-carousel" imgClass='vertical-carousel-img'
                fadeImages={data[0].fadeImages.arrOfurls_2X} dataCarousel={dataCarousel} />

              {
                data && data.length > 0 && data[0] && data[0].fadeImages.arrOfurls.length > 3 ?
                  <span className={data && data.length > 0 && data[0] && data[0].fadeImages.arrOfurls.length === 4 ? classes.cursor_notallowed : null}>
                    <Button onClick={this.next}

                      disabled={data && data.length > 0 && data[0] && data[0].fadeImages.arrOfurls.length === 4
                        ?
                        true
                        :
                        false
                      }>
                      <i class="fa fa-angle-down" style={{ fontSize: "35px", color: "#F699A3" }}
                      // className={`${classes.colorMain}`}
                      ></i>
                    </Button>
                  </span>
                  :
                  null
              }
            </div>
          </Grid>

          <Grid item xs={10} >

            {/* <div className='imagecard' id="divs" onMouseOut={event => this.zoomOut(event)} onMouseMove={event => this.zoomIn(event)}>
                {data[0].ProductContactNum[0].isReadyToShip == true ? <div class="one-day-ship" ></div> : ""} */}
            {/* <div id='flashlight'></div> */}
            {/* <img className='img-zooming-' id="imgZoom" width="100%" height="100%" className={`${showimage ? '' : 'shine'}`} src={showimage} alt="" />
              </div>
              <div className='overly-img' id="overlay"
                style={{ backgroundImage: `url(${showimage})` }} onMouseOut={event => this.zoomOut(event)}>
                </div> */}


            {/* <div class="zoomreact" style={{  boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)" , width: "100%" }}><ReactImageZoom {...props} /></div> */}


            <div>
              <div className='imagecard' id="divs"
                style={{ height: window.innerWidth > 2250 ? "800px" : this.props.data[0].size, display: "flex", alignItem: "center" }}
              >
                {/* {alert(JSON.stringify(this.props.data[0].fadeImages.arrOfurls_2X[0]))} */}
                {/* <Grid container >
                <Grid item lg={1}>
                {data.map(val => {
                
                var split = val.offerDiscount.split(" ")
                  return < span style={{ color: "#fff" }}>
                < div class="ribbon_dic" > {split[0]} < br /> {split[1]}</div>
                  </span>
                })}
                </Grid>
                <Grid item lg={3}>
                {data[0].ProductContactNum[0].isReadyToShip == true ? <div class="one-day-ship" ></div> : ""}
                
              </Grid>
            </Grid> */}
                {data.map(val => {

                  return (
                    val.offerDiscount ?
                      <span style={{ color: "#fff" }} className="overlayCss11">
                        {val.offerDiscount}
                      </span>
                      :
                      null
                  )
                }

                )}
                {data[0].ProductContactNum[0].isReadyToShip == true ? <div class={data && data[0] && data[0].offerDiscount ? "one-day-ship_" : "one-day-ship_only"}></div> : ""}
                {
                  this.handleVideoCheck(showimage) ?
                    <video preload="auto" autoplay width="100%" controls style={{ verticalAlign: "bottom" }}>
                      <source src={showimage} type="video/mp4" />
                    </video>
                    :
                    <GlassMagnifier
                      imageSrc={showimage}
                      // imageSrc={largeImage}
                      onError={(e) => { e.target.src = "https://assets.stylori.com/product/1000X1000/productnotfound.webp" }}
                      imageAlt="Example"
                      magnifierSize="50%"
                      largeImageSrc={largeImage}
                      magnifierBoxShadow="0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
                      magnifierBorderColor="#f5003240"
                    // magnifierBackgroundColor="#f5003240"
                    />
                }

              </div>

              {/*              
              <div className='imagecard' id="divs" style={{height: window.innerWidth>2250?"800px":data[0].image_resolution }} onMouseOut={event => this.zoomOut(event)} onMouseMove={event => this.zoomIn(event)}>
               
                {data.map(val=>
                  <span style={{ color: "#fff" }} className="overlayCss">
                  {val.offerDiscount}
                   </span>)}
                   {data[0].ProductContactNum[0].isReadyToShip == true ? <div class="one-day-ship" ></div> : ""}
                <img id="imgZoom" width="100%" height="100%" className={`${showimage ? '' : 'shine'}`} src={showimage} alt="" />
              </div>

              <div className='overly-img' id="overlay"
                style={{ backgroundImage: `url(${c})`, height: data[0].image_resolution }} onMouseOut={event => this.zoomOut(event)}></div> */}

              <div>

              </div>
            </div>
            <Grid container >
              <Grid item style={{ width: "100%", padding: "0px 15px", marginTop: "10px" }}>
                <Gagetstylori />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </div>
    )
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
    element.style.backgroundPosition = (-posX + 50) + "px " + (-posY + 50) + "px";
  }

  zoomOut = () => {
    var element = document.getElementById("overlay");
    element.style.display = 'none';
  }

  getimage = e => {
    this.setState({
      showimage: e.target.src,
      largeImage: e.target.src
    })
  }
  render() {
    return (
      <div>
        <Hidden smDown>
          {this.productImageZoom()}
        </Hidden>
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
  productImageZoom: PropTypes.func,
};

export default withStyles(styles)(ProductImageZoom);