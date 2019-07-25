import React from 'react';
import './product-images.css'
import Slideshow from '../Carousel/carosul'
import { Container, Grid } from '@material-ui/core';
import fade from './producthoverData'

class Sublistcarousel extends React.Component {
  render() {
    // const fadeImages1 = [
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    // ];

    

    const dataCarousel = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    }
    return (
      <div>
        <div className='like-and-recently'>
          <Grid container spacing={12}>
            <Grid item xs={6} className="like-page"><span>You may also like</span></Grid>
            <Grid item xs={6} className="recenetly-like-page"><span >You recently viewed</span></Grid>
          </Grid>
        </div> <div className='sub-carousel-head'>
          <Container maxWidth='md'>
            <Slideshow class="subslider-carousel"  dataCarousel={dataCarousel} >
              {fade.fadeImages1.map(val => (
                  <div class="subslider-carousel">
                  <img src={val.img} className='subslider-carousel-img' />
                  <span className='next-price'>{val.title}</span><br/>
                  <span className='sub-list-price'> <i class="fa fa-rupee"></i> &nbsp;{val.price}</span>
               </div>
              ))}
            </Slideshow>
          </Container>
        </div>
      </div>
    );
  }
};


export default Sublistcarousel;