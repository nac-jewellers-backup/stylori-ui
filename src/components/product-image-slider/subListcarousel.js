import React from 'react';
import './product-images.css'
import Slideshow from '../Carousel/carosul'
import { Container } from '@material-ui/core';

class Sublistcarousel extends React.Component {
    render (){
      const fadeImages1 = [
        'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
        'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
        'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
        'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
        'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
      ];
      
      const dataCarousel={
        infinite: false,
  slidesToShow: 5,
          }
  return (
      <div style={{height:"150px"}}>
        <Container maxWidth='md'>
            <Slideshow class="subslider-carousel" class2='subslider-carousel-img' fadeImages={fadeImages1} dataCarousel={dataCarousel}/>
            </Container>
             </div>
   
  );
}
};


export default Sublistcarousel;