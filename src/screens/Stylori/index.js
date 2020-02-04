import React, { Component } from 'react';
import {FilterOptionsProvider} from 'context'
import ProductListing from 'containers/ProductListing'
import { CartProvider } from 'context'

export default class Stylori extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    // const fadeImages = [
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    //   'https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg'
    // ];

    // const dataCarousel = {
    //   dots: false,
    //   infinite: true,
    //   autoplay: true,
    //   speed: 1000,
    //   fade: true,
    //   arrows: false
    // }
    return (
      <FilterOptionsProvider >
          <CartProvider>
     <ProductListing /> 
     </CartProvider>
     </FilterOptionsProvider>


    )
  }
}
