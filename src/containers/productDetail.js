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
import { Helmet } from "react-helmet";
import { CartContext } from 'context'
import { GlobalContext } from 'context'
import SilverProductPrice from 'components/product-image-slider/silverProductPrice';
// import {Helmet} from "react-helmet";
class ProductDetail extends Component {
  constructor(props) {
    super(props)
    // this.handleMeta()
    this.state = {
      clear: "",
      data:null,

    }
    console.log('----------this.props.data--------- CONSTRUCTOR', this.props.data)
    
  }
  UNSAFE_componentWillMount(){
    // this.handleOGTag()
  }
  handleOGTag = () =>{
   if(this.props.data && this.props.data.length>0){
    var arr = [
      {key:"Description",value:this.props.data[0].dis},
      {key:"keywords", value:this.props.data[0].productsPendants[0].name},
       {key:"og_site_name", value:"Stylori.com"},
        {key:"og_title", value:this.props.data[0].title},
         {key:"og_type", value:"website_stylori"}, 
         {key:"og_url", value:window.location.href},
        //  {key:"title", value:this.props.data[0].title}
     ]
     arr.map(val =>{
       
     document.getElementById(val.key).setAttribute("content", val.value);
    })
    document.title = this.props.data[0].title
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
   handleMeta = () => {
  //    console.log("camein..", "handleMeta")

     
     
    return(
      // this.props.data && this.props.data[0] && this.props.data[0].length > 0 ?
      <Helmet> 
         {/* <link rel="canonical" href="http://mysite.com/example" /> */}
         <link
      rel="icon"
      type="image/gif"
      sizes="16x16"
      href="http://static.nfl.com/static/content/public/static/img/logos/react-helmet.jpg"
    /> 
         {/* <link rel="shortcut icon" href="http://static.nfl.com/static/content/public/static/img/logos/react-helmet.jpg"></link> */}
        {/* <title>{this.props.data[0].title}</title> */}
         <meta name="Description" property="og:description" content={this.props.data[0].dis} />
        {/* <meta name="keywords" content={this.props.data[0].productsPendants[0].name} /> */}
        <meta name="og_site_name" property="og:site:name" content="Stylori.com"></meta>
        <meta name="og_title" property="og:title"  content={this.props.data[0].title} />
        {/* <meta property="og:description" content={'this.props.data[0].dis'} /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" id="fb-product-url" content={window.location.href} /> */}
        <meta name="og_url" property="og:url" content={window.location.href}></meta>
        {/* <meta property="og:image" id="fb_imageUrl" content={this.props.data[0].fadeImages.arrOfurls[0]} /> */}
        {/* <meta name="twitter_card" content="summary" />
  //       <meta name="twitter_site" content="@StyloriLove" />
  //       <meta name="twitter_title" id="twitter-title" content={this.props.data[0].title} />
  //       <meta name="twitter_description" content={this.props.data[0].dis} />
  //       <meta name="twitter_image" id="twitter_imageUrl" content={this.props.data[0].fadeImages.arrOfurls[0]} /> */}
          {/* <meta charSet="utf-8" /> */}
                <title>My Title</title>
                <link rel="canonical" href="https://staging.stylori.com" />
       </Helmet>
      // :
      // null
     )
   };
   componentDidUpdate(prevProps, prevState) {
  if(prevProps.data !== prevState.data){
    console.log("camein", prevProps.data)
    console.log("camein..", this.props.data)
    this.setState({data:this.props.data})
    console.log("camein.....", this.state.data)
    // this.handleOGTag()
  }
   }
   
  render() {
    // const meta = {
    //   title: 'Some Meta Title',
    //   og_description: 'I am a description, and I can create multiple tags',
    //   canonical: 'http://example.com/path/to/page',
    //   meta: {
    //     charset: 'utf-8',
    //     name: {
    //       keywords: 'react,meta,document,html,tags'
    //     }
    //   }
    // };

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
    const {Globalctx} = this.props
    const isSilver = Globalctx.pathName
    return (
      <div>
        {/* <div>

          <MetaTags>
            {
              this.state.data && this.state.data.length > 0 ?
       
         this.handleMeta()
         :
         null
            }

          </MetaTags>
        </div> */}
         {/* <DocumentMeta {...meta}> */}


        <Hidden smDown>
          <Header wishlist={this.props.wishlistdata} />

         {!isSilver ?
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

          :
          <Grid container item xs={12} style={{marginTop:'30px'}}>

          </Grid>
          }

          <div className="pricing-imgzom-media" style={{ maxWidth: "1600px", margin: "auto" }}>
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <ProductImageZoom data={this.props.data} isSilver={isSilver}/>
              </Grid>
              <Grid item xs={6}>
              {/* <div className='overall-box priceecontainer'>
                  <PriceTabs data={this.props.data} />
                </div> */}
                {
                isSilver ? 
                <div className='overall-box-without-shadow'>
<SilverProductPrice data={this.props.data} wishlist={this.props.wishlistdata}/>  
                </div>
                :
                <div className='overall-box priceecontainer'>
<ProductPrice data={this.props.data} wishlist={this.props.wishlistdata} />
                </div>
                
                }
           
                <div className='overall-box priceecontainer'>
                  <PriceBuynow data={this.props.data} />
                </div>
              </Grid>
            </Grid>
          </div>

          <div style={{ background: "whitesmoke" }} className="pricing-product-media" style={{ maxWidth: "1600px", margin: "auto" }}>
            <Grid container spacing={12}>
              <Grid item xs={6} style={{ marginBottom: "20px", marginTop: "20px" }}>
                <ProductDetails data={this.props.data} isSilver={isSilver}/>
              </Grid>
              {!isSilver &&
                <Grid item xs={6} style={{ marginBottom: "20px", marginTop: "20px" }}>
                <PriceCertification data={this.props.data}/>
                <Request data={this.props.data} />
              </Grid>
              }
              <br />
            </Grid>
          </div>
          <Sublistcarousel data={this.props.data} isSilver={isSilver}/>
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
            <Sublistcarousel data={this.props.data} isSilver={isSilver}/>
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
        {/* </DocumentMeta> */}
      </div>
    )
  }
}
const Components = props => {

  let { CartCtx: { allorderdata, wishlistdata,setratingcountsclear } } = React.useContext(CartContext);

  const { Globalctx, setGlobalCtx } = React.useContext(GlobalContext)
  const { ProductDetailCtx: { data, loading, error, likedatas, viewedddatas, rating } } = React.useContext(ProductDetailContext);
  const _silverArr = []
  React.useEffect(()=>{
    if(data && !loading){
      if(Object.keys(data).length > 0 ){
        debugger
        if(data.data.allTransSkuLists && data.data.allTransSkuLists.nodes.length > 0 && data.data.allTransSkuLists.nodes[0].productListByProductId && data.data.allTransSkuLists.nodes[0].productListByProductId.productMaterialsByProductSku && data.data.allTransSkuLists.nodes[0].productListByProductId.productMaterialsByProductSku.nodes.length > 0 ){
          data.data.allTransSkuLists.nodes[0].productListByProductId.productMaterialsByProductSku.nodes.map((val)=>{
            _silverArr.push(val.materialName.toLowerCase())
          })
          console.log(_silverArr,'_silverArr')        
          if(_silverArr.indexOf('silver') > -1) setGlobalCtx({...Globalctx, pathName:true})
          
        }
      }
    }
  },[data])
  
  const datas = data;
  let mapped = datas;

  if (!loading && !error) {
    mapped = productDetails(datas, likedatas, viewedddatas, rating, Globalctx.tabsChange);
  }
  if (Object.keys(mapped).length === 0) return <div className="overall-loader"><div id="loading"></div></div>
  else {
    return <ProductDetail {...props} setratingcountsclear={setratingcountsclear} data={mapped} rating={rating} allorderdata={allorderdata} wishlistdata={wishlistdata} Globalctx={Globalctx}/>

  }
}


export default withRouter((Components));