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
<<<<<<< HEAD
import ProductImageZoom from '../../components/product-image-slider/productImageZoom'
import ImagesCarousel from '../../components/product-image-slider/imagesCarousel'
import ProductPrice from '../../components/product-image-slider/productPrice'
import PriceTabs from '../../components/product-image-slider/priceTabs'
import PriceBuynoe from '../../components/product-image-slider/buyNow'
import { Container } from '@material-ui/core';
=======
import Card from '@material-ui/core/Card';
>>>>>>> 4093ab1f19e357f2450b8a66acc7170eb801caed
export default class Stylori extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
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
=======
        <Grid container >
          <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Header />
          </Grid>

          <Grid item xs={12}>
            <ProductDescription />
            <Filter />


          </Grid>

          {/* <Grid item xs={12} >
           <Subheader />
           </Grid>
           <Grid item xs={12} >
           <SubCarousel />
           </Grid>
           <Grid item xs={12} >
         <Socialmediacard/>
           </Grid>

           <Grid item xs={12} >
         <Footer/>
           </Grid>  */}

        </Grid>

>>>>>>> 4093ab1f19e357f2450b8a66acc7170eb801caed
      </div>
    )
  }
}
