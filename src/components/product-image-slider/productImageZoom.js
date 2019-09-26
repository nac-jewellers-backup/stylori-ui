import {
  Grid,
  Hidden,
  Container,
  Button
} from '@material-ui/core';
import {withRouter} from 'react-router-dom'
import Slideshow from '../Carousel/carosul'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-images.css'
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Header/styles'
import productDetails from 'mappers/productDetails';
import { PRODUCTDETAILS } from 'queries';
import { useGraphql } from 'hooks/GraphqlHook';
import { CDN_URL } from 'config';
// window.onload = function () {
//   var flashlight = document.querySelector('#flashlight');
//   document.getElementById('divs').addEventListener('mouseover', function (event) {
//     flashlight.style.left = (event.pageX - 40) + 'px';
//     flashlight.style.top = (event.pageY - 40) + 'px';
//   });
// };

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
    showimage: this.props.data[0].fadeImages
  }

  productImageZoom = () => {
    const { classes, data } = this.props
    const { showimage } = this.state;
    const dataCarousel = {
      infinite: true,
      slidesToShow: data[0].fadeImages.length,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false
    }
    const { productsubHead } = this.props.data;
    // const { fadeImages, productsubHead } = this.props.data;
    return (
      <div>
        <Grid container spacing={12} style={{ paddingRight: "20px" }}>
          <Grid item xs={2}>
            <div style={{ textAlign: 'center' }} className="imgzom-sidecraousel-media">
              <Button onClick={this.previous}>
                <i class="fa fa-angle-up" style={{ fontSize: "35px", color: "#F699A3" }}></i>
              </Button>

              <Slideshow sliderRef={this.slider}
                getmsg={this.getimage} class="vertical-carousel" imgClass='vertical-carousel-img'
                fadeImages={data[0].fadeImages} dataCarousel={dataCarousel} />

              <Button onClick={this.next}>
                <i class="fa fa-angle-down" style={{ fontSize: "35px", color: "#F699A3" }}
                // className={`${classes.colorMain}`}
                ></i>
              </Button>
            </div>
          </Grid>

          <Grid item xs={10}>
            <div>


              <div className='imagecard' id="divs" onMouseOut={event => this.zoomOut(event)} onMouseMove={event => this.zoomIn(event)}>
                {/* <span class="one-day-ship" ></span> */}
                {/* <div id='flashlight'></div> */}

                <img id="imgZoom" width="100%" height="100%" className={`${showimage ? '' : 'shine'}`} src={showimage} alt="" />
              </div>

              <div className='overly-img' id="overlay"
                style={{ backgroundImage: `url(${showimage})` }} onMouseOut={event => this.zoomOut(event)}></div>
              <div>
                {/* <Grid container spacing={12}
                  className='features-tags'>
                  {productsubHead.map(val => (
                    <Grid item xs={2} >
                      <div key={val.name}>
                        <img className='features-tags-images' src={val.icon} alt="" />
                        <span style={{ fontSize: "12px" }} className={`${classes.colorLight}`}>{val.name} </span>
                      </div>
                    </Grid>
                  ))}
                </Grid> */}
              </div>
            </div>
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
    element.style.backgroundPosition = (-posX - 80) + "px " + (-posY - 80) + "px";

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
const Components = props => {
  const { loading, error, data } = useGraphql(PRODUCTDETAILS, productDetails);
  let mapped = data;
  if (!loading && !error) {
    console.info('__MAPPED', data);
    mapped = productDetails(data);
    // setMappedData(mapped);
    console.info('__MAPPED2', mapped);
  }
  if (Object.keys(mapped).length === 0) return <div></div>
  else {
    return <ProductImageZoom {...props} data={mapped} />
  }

}

export default withRouter(withStyles(styles)(Components))