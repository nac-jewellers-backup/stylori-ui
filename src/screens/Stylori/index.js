import React, { Component } from 'react';
import Header from '../../components/Header/header'
import ProductDescription from '../../components/productDescription';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/filter'
import HomeCarousel from '../../components/Home/homeCarousel'
import Subheader from '../../components/Home/subheader'
import SubCarousel from '../../components/Home/subcarousel'
import Socialmediacard from '../../components/Home/socialmediaCard'
import Footer from '../../components/Home/footer'
import ProductImageZoom from '../../components/product-image-slider/productImageZoom'
import ImagesCarousel from '../../components/product-image-slider/imagesCarousel'
import ProductPrice from '../../components/product-image-slider/productPrice'
import PriceTabs from '../../components/product-image-slider/priceTabs'
import PriceBuynoe from '../../components/product-image-slider/buyNow'
import { Container } from '@material-ui/core';
export default class Stylori extends Component {
  render() {
    return (
      <div>
        <Container>
         <Grid container spacing={12}>
         <Grid item xs={6}>
            <ProductImageZoom/>
           </Grid>
           <Grid item xs={6}>
             <ProductPrice/>
             <PriceTabs/>
             <PriceBuynoe/>
           </Grid>
         </Grid>
         </Container>
      </div>
    )
  }
}
