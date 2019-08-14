import React, { Component } from 'react';
import Header from '../../components/Header/header'
import Grid from '@material-ui/core/Grid';
import CustomSeparator from '../../components/BreadCrumb/index'
import ProductImageZoom from '../../components/product-image-slider/productImageZoom'
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
import Footer from "../../components/Footer/Footer"
import Buynowfixed from '../../components/product-image-slider/buynowfixed'
export default class Stylori extends Component {
  render() {

    return (
      <div>

        <Hidden smDown>
          <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Grid item xs={12} >
              <Header />
            </Grid>
          </Grid>
          <Container maxWidth='xl'>
            <Container maxWidth='xl'>
              <Grid Container spacing={12}>
                <Grid item xs={12}>
                  <CustomSeparator />
                </Grid>
              </Grid>
              <Grid container spacing={12}>
                <Grid item xs={6}>
                  <ProductImageZoom />
                </Grid>
                <Grid item xs={6}>
                  <div style={{ width: "100%", borderRadius: "0 4px 4px 0", border: '1px solid #ccc', padding: "15px", marginBottom: "10px", boxShadow: '0 1px 8px 0 rgba(0,0,0,.06)' }}>
                    <ProductPrice />
                  </div>
                  <div style={{ width: "100%", borderRadius: "0 4px 4px 0", border: '1px solid #ccc', padding: "15px", marginBottom: "10px", boxShadow: "0 1px 8px 0 rgba(0,0,0,.06)" }}>
                    <PriceTabs />
                  </div>
                  <div style={{ width: "100%", borderRadius: "0 4px 4px 0", border: '1px solid #ccc', padding: "15px", marginBottom: "10px", boxShadow: "0 1px 8px 0 rgba(0,0,0,.06)" }}>
                    <PriceBuynow />
                  </div>
                </Grid>

              </Grid>
              <Grid container spacing={12} style={{ marginTop: "35px" }}>
                <Grid item xs={6}>
                  <ProductDetails />
                </Grid>
                <Grid item xs={6}>
                  <PriceCertification />
                  <Request />
                </Grid>
              </Grid>
              <Sublistcarousel />
              <RatingForm />
              <CustomerReviews />
            </Container>
          </Container>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Hidden>




        <Hidden mdUp>
          <div style={{ paddingBottom: "50px" }}>
            <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
              <Grid item xs={12} >
                <Header />
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <PriceBuynow />
            </Grid>
            <Grid item xs={12} >
              <ProductDetails />
            </Grid>

            <Grid item xs={12} >
              <PriceCertification />
            </Grid>
            <Grid item xs={12} >
              <Request />
            </Grid>

            <Grid item xs={12} >
              <Sublistcarousel />
            </Grid>
            <Grid item xs={12} >
              <CustomerReviews />
            </Grid>
            <Grid item xs={12} >
              <RatingForm />
            </Grid>
            <Grid item>
              <Footer />
            </Grid>
          </div>

          <Buynowfixed />
        </Hidden>


      </div>
    )
  }
}
