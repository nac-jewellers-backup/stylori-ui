import React, { Component } from 'react';
import Header from '../../components/Header/header'
import ProductDescription from '../../components/productDescription';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/filter'
import HomeCarousel from '../../components/Home/homeCarousel'
import Subheader from '../../components/Home/subheader'
import SubCarousel from '../../components/Home/subcarousel'
import Socialmediacard from '../../components/Home/socialmediaCard'
import Footer from '../../components/Home/footer';
import CustomSeparator from '../../components/BreadCrumb/index'
import ProductImageZoom from '../../components/product-image-slider/productImageZoom'
import ImagesCarousel from '../../components/product-image-slider/imagesCarousel'
import ProductPrice from '../../components/product-image-slider/productPrice'
import PriceTabs from '../../components/product-image-slider/priceTabs'
import PriceBuynow from '../../components/product-image-slider/buyNow'
import ProductDetails from '../../components/product-image-slider/productDetails'
import PriceCertification from '../../components/product-image-slider/priceCertification'
import Request from '../../components/product-image-slider/request'
import RatingForm from '../../components/product-image-slider/ratingform'
import Sublistcarousel from '../../components/product-image-slider/subListcarousel'
import CustomerReviews from '../../components/product-image-slider/customer-reviews'
import { Container, Hidden } from '@material-ui/core';
import Slideshow from '../../components/Carousel/carosul'
import VerticalCarousel from '../../components/product-image-slider/verticalcarousel'

export default class Stylori extends Component {
  render() {
    return (
      <div>
        <Hidden smDown>
          <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Grid item xs={12} >
              <Header />
            </Grid>
            <CustomSeparator />
            <Container>

              <Grid container spacing={12}>
                <Grid item xs={6}>
                  <ProductImageZoom />
                </Grid>
                <Grid item xs={6}>
                  <ProductPrice />
                  <PriceTabs />
                  <PriceBuynow />
                </Grid>

              </Grid>
              <Grid container spacing={12}>
                <Grid item xs={6}>
                  <ProductDetails />
                </Grid>
                <Grid item xs={6}>
                  <PriceCertification />
                  <Request />

                </Grid>



              </Grid>
              <RatingForm />
            </Container>
          </Grid>
          {/* <Sublistcarousel/> */}
          <CustomerReviews />
        </Hidden>

        <Hidden mdUp>
          <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Grid item xs={12} >
              <Header />
            </Grid>
           

            <Grid item xs={12} >
              <ProductPrice />
            </Grid>
           
            {/* <Grid item xs={12} >
               <VerticalCarousel/>
               </Grid> */}

          </Grid>
        </Hidden>


      </div>
    )
  }
}
