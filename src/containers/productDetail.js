import {
    Hidden,
    Grid
} from '@material-ui/core';
import React, { Component } from 'react';
import Header from 'components/Header/header'
import CustomSeparator from 'components/BreadCrumb/index'
import ProductImageZoom from 'components/product-image-slider/productImageZoom'
import ProductPrice from 'components/product-image-slider/productPrice'
import PriceTabs from 'components/product-image-slider/priceTabs'
import PriceBuynow from 'components/product-image-slider/buyNow'
import ProductDetails from 'components/product-image-slider/productDetails'
import PriceCertification from 'components/product-image-slider/priceCertification'
import Request from 'components/product-image-slider/request'
import RatingForm from 'components/product-image-slider/ratingform'
import Sublistcarousel from 'components/product-image-slider/subListcarousel'
import CustomerReviews from 'components/product-image-slider/customer-reviews'
import Footer from "components/Footer/Footer"
import Buynowfixed from 'components/product-image-slider/buynowfixed'
import 'components/product-image-slider/product-images.css'
import { withRouter } from 'react-router-dom';
import productDetails from 'mappers/productDetails';
import { PRODUCTDETAILS, conditions } from 'queries/productdetail';
import { useGraphql } from 'hooks/GraphqlHook';
import { ProductDetailContext  } from 'context/ProductDetailContext';
import { CDN_URL } from 'config';


class ProductDetail extends Component {
  render() {
    return (
      <div>

        <Hidden smDown>

          <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Grid item xs={12} >
              <Header />
            </Grid>
          </Grid>

          <Grid Container spacing={12}>
            <Grid item xs={12}>
              <div className="pricing-breadcrums-media">
                <CustomSeparator
                  list='pricing-loctn'
                  classsubhed='pricing-loctn-head'
                  data={[window.location.hostname, window.location.pathname.split('/').pop()]} />
              </div>
            </Grid>
          </Grid>

          <div className="pricing-imgzom-media">
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <ProductImageZoom data={this.props.data} />
              </Grid>
              <Grid item xs={6}>
                <div className='overall-box'>
                  <ProductPrice data={this.props.data} />  {/*res...........*/}
                </div>
                <div className='overall-box'>
                  <PriceTabs data={this.props.data} />  {/*res...........*/}
                </div>
                <div className='overall-box'>
                  <PriceBuynow data={this.props.data} /> {/*res...........*/}
                </div>
              </Grid>
            </Grid>
          </div><br />

          <div style={{ background: "whitesmoke" }} className="pricing-product-media">
            <Grid container spacing={12}>
              <Grid item xs={6} style={{ marginBottom: "20px", marginTop: "20px" }}>
                <ProductDetails data={this.props.data} /> {/*res...........*/}
              </Grid>
              <Grid item xs={6} style={{ marginBottom: "20px", marginTop: "20px" }}>
                <PriceCertification />
                <Request />
              </Grid>
              <br />
            </Grid>
          </div>

          <Sublistcarousel data={this.props.data} />
          <RatingForm />
          <CustomerReviews />

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

            <Grid item xs={12}>
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
const Components = props => {
  const productId = props.location.state.data

    const { ProductDetailCtx: { data, loading, error } } = React.useContext(ProductDetailContext);
    
    console.info('datares', data);
    const datas = data;
    console.log(datas)

  
    let mapped = datas;
    if (!loading && !error) {
        mapped = productDetails(datas);

        console.info('__MAPPED2', mapped);
    }
    if (Object.keys(mapped).length === 0) return <div></div>
    else {
        return  <ProductDetail {...props} data={mapped} />

    }
}


export default withRouter((Components));