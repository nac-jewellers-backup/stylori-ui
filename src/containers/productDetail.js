import {
  Hidden,
  Grid
} from '@material-ui/core';
import React, { Component } from 'react';
import Header from 'components/SilverComponents/Header'
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
import { ProductDetailContext } from 'context/ProductDetailContext';
import { CDN_URL } from 'config';
import 'screens/screens.css';
import MetaTags from 'react-meta-tags';
import { CartContext } from 'context'
import { GlobalContext } from 'context'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clear: ""
    }
  }
  renderUrl = () => {
    var loc = this.props.location.pathname;
    var path = loc.split('/');
    if (path[2] === 'Bracelets') return "/bracelets-jewellery"
    if (path[2] === 'Pendants') return "/pendants-jewellery"
    if (path[2] === 'Nosepins') return "/nose+pin+online-jewellery"
    if (path[2] === 'Earrings') return "/earrings-jewellery"
    if (path[2] === 'Bangles') return "/bangles-jewellery"
    if (path[2] === 'Rings') return "/rings-jewellery"

  }
  render() {
    // alert(JSON.stringify(this.props.data))
    // alert(JSON.stringify(this.props.data))
    var loc = this.props.location.pathname;
    var path = loc.split('/');
    var data_json = [{ title: 'home', url: '/' }, { title: path[2], url: this.renderUrl() }, { title: this.props.data&&this.props.data[0]&&this.props.data[0].title }]
    // alert(JSON.stringify(this.props.wishlistdata))
    const clear_rating = (bool) => {
      if (bool === false) {
        this.setState({
          clear: ""
        })
      } if(bool===true) {
        this.setState({
          clear: "clear_"
        })
      }
    }
 
    // alert(JSON.stringify(this.props.setratingcountsclear))
    return (
      <div>
        <div>

          <MetaTags>
            {
              this.props.data && this.props.data[0] && this.props.data[0].length > 0 ?
                <>
                  <title>{this.props.data[0].title}</title>
                  <meta name="description" content={this.props.data[0].dis} />
                  <meta name="keywords" content={this.props.data[0].productsPendants[0].name} />
                  <meta property="og:title" id="fb-title" content={this.props.data[0].title} />
                  <meta property="og:description" content={this.props.data[0].dis} />
                  <meta property="og:type" content="product" />
                  <meta property="og:url" id="fb-product-url" content={window.location.href} />
                  <meta property="og:image" id="fb_imageUrl" content={this.props.data[0].fadeImages} />
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:site" content="@StyloriLove" />
                  <meta name="twitter:title" id="twitter-title" content={this.props.data[0].title} />
                  <meta name="twitter:description" content={this.props.data[0].dis} />
                  <meta name="twitter:image" id="twitter_imageUrl" content={this.props.data[0].fadeImages} />
                </>
                :
                ''
            }

          </MetaTags>
        </div>

        <Hidden smDown>
          <Header wishlist={this.props.wishlistdata} />

          <Grid Container spacing={12} style={{ maxWidth: "1600px", margin: "auto" }}>
            <Grid item xs={12}>
              <div className="pricing-breadcrums-media" >
                <CustomSeparator
                  list='pricing-loctn'
                  classsubhed='pricing-loctn-head'
                  data={data_json} />
              </div>
            </Grid>
          </Grid>

          <div className="pricing-imgzom-media" style={{ maxWidth: "1600px", margin: "auto" }}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <ProductImageZoom data={this.props.data} />
              </Grid>
              <Grid item xs={6}>
                <div className='overall-box priceecontainer'>
                  <ProductPrice data={this.props.data} wishlist={this.props.wishlistdata} />
                </div>
                <div className='overall-box priceecontainer'>
                  <PriceTabs data={this.props.data} />
                </div>
                <div className='overall-box priceecontainer'>
                  <PriceBuynow data={this.props.data} />
                </div>
              </Grid>
            </Grid>
          </div>

          <div style={{ background: "whitesmoke" }} className="pricing-product-media" style={{ maxWidth: "1600px", margin: "auto" }}>
            <Grid container spacing={12}>
              <Grid item xs={6} style={{ marginBottom: "20px", marginTop: "20px" }}>
                <ProductDetails data={this.props.data} />
              </Grid>
              <Grid item xs={6} style={{ marginBottom: "20px", marginTop: "20px" }}>
                <PriceCertification data={this.props.data}/>
                <Request data={this.props.data} />
              </Grid>
              <br />
            </Grid>
          </div>
          <Sublistcarousel data={this.props.data} />
          <RatingForm data={this.props.data} clear_rating={this.state.clear} clear_rating_onchange={clear_rating} />
          <CustomerReviews rating={this.props.rating} />

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Hidden>


        <Hidden mdUp>
          {/* <div style={{ paddingBottom: "50px" }}> */}
          {/* <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}> */}
          <Header wishlist={this.props.wishlistdata} pdpage={true} />
          {/* </Grid> */}

          <Grid item xs={12}>
        
            <PriceBuynow data={this.props.data} wishlist={this.props.wishlistdata} />
          </Grid>
          <Grid item xs={12} >
            <ProductDetails data={this.props.data} wishlist={this.props.wishlistdata} />
          </Grid>

          <Grid item xs={12} >
            <PriceCertification data={this.props.data} />
          </Grid>
          <Grid item xs={12} >
            <Request data={this.props.data} />
          </Grid>

          <Grid item xs={12} >
            <Sublistcarousel data={this.props.data} />
          </Grid>

          <Grid item xs={12} >
            <CustomerReviews data={this.props.data} />
          </Grid>

          <Grid item xs={12} >
            <RatingForm data={this.props.data} clear_rating={this.state.clear} clear_rating_onchange={clear_rating}/>
          </Grid> 

          <Grid item style={{paddingBottom:"50px"}}>
            <Footer />
          </Grid>
        </Hidden>

      </div>
    )
  }
}
const Components = props => {

  let { CartCtx: { allorderdata, wishlistdata,setratingcountsclear } } = React.useContext(CartContext);

  const { Globalctx } = React.useContext(GlobalContext)
  const { ProductDetailCtx: { data, loading, error, likedatas, viewedddatas, rating } } = React.useContext(ProductDetailContext);
  const datas = data;
  let mapped = datas;

  if (!loading && !error) {
    mapped = productDetails(datas, likedatas, viewedddatas, rating, Globalctx.tabsChange);
  }
  if (Object.keys(mapped).length === 0) return <div className="overall-loader"><div id="loading"></div></div>
  else {
    return <ProductDetail {...props} setratingcountsclear={setratingcountsclear} data={mapped} rating={rating} allorderdata={allorderdata} wishlistdata={wishlistdata} />

  }
}


export default withRouter((Components));