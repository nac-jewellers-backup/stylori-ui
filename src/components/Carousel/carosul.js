import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "../product-image-slider/product-images.css";
import PropTypes from "prop-types";
import Wishlist from "components/wishlist/wishlist";
import { GlobalContext, CartContext } from "context";
import Buynowbutton from "../Buynow/buynowbutton";
import CommenDialog from "../Common/Dialogmodel";
import {injectUrl_url_construct} from 'common/index'
import {CDN_URL} from '../../config'
const Slideshow = (props) => {
  let {
    CartCtx: { allorderdata, wishlistdata, setratingcountsclear },
  } = React.useContext(CartContext);
  const { Globalctx, setGlobalCtx } = React.useContext(GlobalContext); 
  return <Component Globalctx={Globalctx} wishlist={wishlistdata} {...props} />;
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen:false
    }
    this.slider = React.createRef();
  }

  handleVideoCheck = (url) => {
    var extensionVideoLists = [
      "m4v",
      "avi",
      "mpg",
      "mp4",
      "webm",
      "mp2",
      "mpeg",
      "mpe",
      "mpv",
      "ogg",
      "m4p",
      "wmv",
      "mov",
      "qt",
      "flv",
      "swf",
      "avchd",
    ];

    if (url.length > 0) {
      var array_split = url.split(/\.(?=[^\.]+$)/);
      const found = extensionVideoLists.find(
        (element) => element.toLowerCase() === array_split[1]
      );
      if (found) {
        return true;
      } else return false;
    } else {
      return false;
    }
  };
  checkImage = (imageSrc, good, bad) =>{
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
  }
  check_image_exists_in_server =  (url) =>{ 
      
  
    // var _url = url.replace(res.img_res, '1000X1000');

    return new Promise(async(resolve, reject) => {
        // create an XHR object
        await this.checkImage(url, ()=>{resolve(true)}, ()=>{resolve(false)}  )
     });
   

} 
  handleFunc = async(imgs) =>{
    debugger
    // imgs.replace((`${this.props.size*2}X${this.props.size*2}`), "2400X2400")
    return await this.check_image_exists_in_server(imgs) ? imgs : imgs.replace('1000X1000', '2400X2400')
  }
   checkImage = (imageSrc, good, bad) => {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
  }
   imageOnError = async(event,url) => {
    debugger
    const _event  = event && event.target ? event.target : event.currentTarget  
    
  const check_image_exists_in_server =  (url) =>{
      
  
      // var _url = url.replace(res.img_res, '1000X1000');
  
      return new Promise(async(resolve, reject) => {
          // create an XHR object
          await this.checkImage(url, ()=>{resolve(true)}, ()=>{resolve(false)}  )
       }); 
     
  
  }
  let _url = ""
  const urlCheck = (size) =>{
    var current_url = url.split('/')
  current_url.splice(current_url.length-2, 1 , size)
   _url = current_url.join().replace(/\,/g, '/');
   return _url
  } 
  // let _url_2400X2400 = res.url_1000x1000; 
  let _notFound = `${CDN_URL}product/1000X1000/productnotfound.webp`;
  _event.src = `${CDN_URL}product/1000X1000/productnotfound.webp`;
  
  let _image = await check_image_exists_in_server(urlCheck('1000X1000')) ? _url : await check_image_exists_in_server(urlCheck('2400X2400'))  ? _url :_notFound
  _event.src =  _image
  // loadAndSaveErrorImage(_image)
  // setLoading(false)
  // setLoading(false)
  //  `${CDN_URL}${res.url_1000x1000}`
  // check_image_exists_in_server()
  // check_image_exists_in_server()
    // event.target.src = `${CDN_URL}product/${res.img_res}X${res.img_res}/productnotfound.webp`
  }
  renderFadeImages =  () => {

    let { video, currentImage } = this.props;
    debugger
    return  this.props.fadeImages
      ? this.props.fadeImages.map((imgs) => (
          <div
            className={` ${this.props.class ? this.props.class : ""} ${currentImage && currentImage  === imgs ? 'currentImageClassSilver' : ''}`}
            onClick={(e) => (this.props.getmsg ? this.props.getmsg(e) : "")}
            
          >
            {video || this.handleVideoCheck(imgs) ? (
              <video
                style={{ verticalAlign: "bottom", zIndex: this.props.zindex }}
                preload="auto"
                className={`${imgs ? "" : "shine imgDiv2"} ${
                  this.props.imgClass ? this.props.imgClass : ""
                }`}
                src={imgs}
                poster="https://assets.stylori.com/images/static/video_preview.png"
                type="video/mp4"
                controls={this.props.videoControls}
              ></video>
            ) : (
              <img
                className={`${imgs ? "imgDiv2" : "shine imgDiv2"} ${
                  this.props.imgClass ? this.props.imgClass : ""
                } ${
                  this.props.silver
                    ? this.props.className
                      ? this.props.className
                      : ""
                    : ""
                }`}
                src={imgs}
                loading="auto"
                alt="..."

                onError={(e)=>{
                  debugger
                  this.imageOnError(e,imgs)
                  // let _size = this.props.size ? this.props.size*2 : this.props.cartcard
                  // if(_size) this.target.src=imgs.replace(`${_size}X${_size}`, '2400X2400')
                  // else this.target.src=imgs.replace('1000X1000', '2400X2400')
                }
                  
                }
              />
            )}
          </div>
        ))
      : "";
  };

  imagehoverchildrens = (hoverlist, globalContext, isInjectUrl) => {
    let { hover, hovereffect, TopPic, imagecra, isSilver, collectionDataSilverSEO  } = this.props;
    const collectiondatacheck = (val) => collectionDataSilverSEO ?collectionDataSilverSEO[val.title] && collectionDataSilverSEO[val.title].seoText && collectionDataSilverSEO[val.title].seoText.replace(/ /g,'').length > 0 ? collectionDataSilverSEO[val.title].seoText : false : val.description
    
    if (TopPic) {
      return hoverlist.map((val) => (
        <div
          className={"subslider-carousel" + TopPic ? "hovereffectSilver" : ""}
        >
          <img
            src={val.img}
            className="subslider-carousel-img img-responsive"
            style={{ width: "100%", height: "auto" }}
            alt=""
            onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
          />
          <div className="overlay1">
            <div>
              <h2 className="next-price">{val.title}</h2>
              <br />
            </div>
          </div>
        </div>
      ));
    } else if (hovereffect) {
      return (
        hoverlist &&
        hoverlist.map((val) => (
          <div
            className={
              "subslider-carousel" + hovereffect ? "hovereffectSilver" : ""
            }
          >
            <img
              src={isInjectUrl ?injectUrl_url_construct(val.img) : val.img}
              className="subslider-carousel-img img-responsive"
              style={{ width: "100%", height: "auto" }}
              alt=""
              onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
            />
            <div className="overlay1" >
           { collectionDataSilverSEO ?
              <div className={`collectionDataSilverSEOflex ${'fontSizebig'}`} >
               <div style={{margin:'auto'}}>
               <h2 className={`next-price ${'fontSizebig'}`}>{val.title.toUpperCase()}</h2>
                <br />
                {collectiondatacheck(val) ?
                  <h5 className="contenttext">{collectionDataSilverSEO ?collectionDataSilverSEO[val.title] && collectionDataSilverSEO[val.title].seoText ? collectionDataSilverSEO[val.title].seoText : '' : val.description}</h5>
                :
                null
                }
                <a className="info" style={{textDecoration:"none"}} href={`${collectionDataSilverSEO ?collectionDataSilverSEO[val.title] && collectionDataSilverSEO[val.title].seoUrl ? `/jewellery-${collectionDataSilverSEO[val.title].seoUrl}` : '#' : `/${val.url}`}`}>
                  <span className="shop">SHOP</span>
                </a>
                 </div>
              </div>
              :
              <div style={{ paddingTop: "40%" }}>
                <h2 className="next-price">{val.title.toUpperCase()}</h2>
                <br />
                {collectiondatacheck(val) ?
                  <h5 className="contenttext">{collectionDataSilverSEO ?collectionDataSilverSEO[val.title] && collectionDataSilverSEO[val.title].seoText ? collectionDataSilverSEO[val.title].seoText : '' : val.description}</h5>
                :
                null
                }
                <a className="info" style={{textDecoration:"none"}} href={`${collectionDataSilverSEO ?collectionDataSilverSEO[val.title] && collectionDataSilverSEO[val.title].seoUrl ? `/jewellery-${collectionDataSilverSEO[val.title].seoUrl}` : '#' : `/${val.url}`}`}>
                  <span className="shop">SHOP</span>
                </a>
              </div>}
            </div>
          </div>
        )) 
      );
    } else {
      return (
        hoverlist &&
        hoverlist.map((val) => {
          return isSilver ? (
            <div className={"subslider-carousel" + hover ? `hovereffect hovereffect-silver ` : ""} >
              <img
                src={val.img}
                className="subslider-carousel-img img-responsive" 
                alt=""
                onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
              />
              <div className="overlay1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection:'column'
                  }}
                >
                   {/* <div onClick={this.handleLocalStorage.bind(this)}>
                            <Buynowbutton
                              sku={this.props.data[0].skuId}
                              // class={`${classes.buynowButtonSilver} ${classes.buttonsilver}`}
                              button="buynow-btn-cont"
                              type="hidden"
                            />
                            <CommenDialog
                              isOpen={this.state.dialogOpen}
                              content={`Verify selected product details before proceeding`}
                              handleClose={this.canceldeletechecklist}
                              handleSuccess={this.deletechecklists}
                              negativeBtn="No"
                              positiveBtn="Yes"
                              title="Confirmation"
                            />
                          </div> */}
                           <a style={{textDecoration:'none'}} href={`/${val.url}`}>
                  <div
                    style={{
                      background: "white",
                      color: "rgba(166, 168, 171, 1)",
                      padding:'5px 10px',
                      marginBottom:'10px',
                      boxShadow:'rgb(166, 168, 171) 3px 3px 3px',
                      minWidth:'100px',
                      fontSize:'12px',
                      letterSpacing:1
                    }}
                  >
                   <b>ADD TO CART</b>
                  </div>
                  </a>
                  <div
                    style={{
                      background: "white",
                      color: "rgba(166, 168, 171, 1)",
                      padding:'5px 10px',
                      boxShadow:'rgb(166, 168, 171) 3px 3px 3px',
                      minWidth:'100px',
                      fontSize:'12px',
                      letterSpacing:1
                    }}
                  >
                    {" "}
                    <Wishlist
                      sku={val.skuId}
                      productId={val.productId}
                      wishlist={this.props.wishlist}
                      globalContext={globalContext}
                      isSilver={isSilver}
                      label = {<b>SAVE</b>}
                      labelAdded = "SAVED"
                      class="similarProducts"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <a className="info" href={`/${val.url}`}>
              <div
                className={"subslider-carousel" + hover ? "hovereffect" : ""}
              >
                <img
                  src={val.img}
                  className="subslider-carousel-img img-responsive"
                  alt=""
                  onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
                />
                <div className="overlay1">
                  <h2 className="next-price">{val.title}</h2>
                  <br />
                  <a className="info" href={`/${val.url}`}>
                    <span className="sub-list-price">
                      {" "}
                      <i className="fa fa-rupee"></i> &nbsp;{val.price}
                    </span>
                  </a>
                </div>
              </div>
            </a>
          );
        })
      );
    }
  };
  imagewithouthoverchildrens = (hoverlist, gtx,isInjectUrl) => {
    
    return (
      <div
        className={"subslider-carousel-silver "}
        style={{ display: "block !important " }}
      >
        {Array.isArray(hoverlist.img)
        ?
        hoverlist.img.map((val)=>{
          
          return(
            <img
            src={injectUrl_url_construct(val)}
            className="subslider-carousel-img-Silver img-responsive"
            style={{
              width: "auto !important",
              height: "auto",
              display: "block !important  ",
            }}
            alt=""
            onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
          />
          )
        })
        :
        <img
          src={isInjectUrl?injectUrl_url_construct(hoverlist.img): hoverlist.img}
          className="subslider-carousel-img-Silver img-responsive"
          style={{
            width: "auto !important",
            height: "auto",
            display: "block !important  ",
          }}
          alt=""
          onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
        />}
        {/* <div class="overlay1">
          <div style={{paddingTop:'40%'}}>
        <h2 className='next-price'>{hoverlist.title}</h2><br />
        <a class='info' href={hoverlist.price}><span className='sub-list-price'> <i class="fa fa-rupee"></i> &nbsp;{hoverlist.price}</span></a>
          </div>
      </div> */}
      </div>
    );
  };

  valus = (valueId) => {
    var valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";

    var vals;
    valus_locl &&
      valus_locl.map((val) => {
        const vlx = valueId && valueId;
        if (vlx === val.sku_id) {
          vals = 1;
          return false;
        } else {
          vals = 0;
        }
      });
    return vals;
  };
  handleLocalStorage = () => {
    if (this.valus(this.props.data[0].skuId) === 1) {
      // this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })
      // sessionStorage.setItem('updatedProduct', JSON.stringify({ sku_id: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice }));
      window.location.pathname = "/cart";
    } else {
      this.setState({
        dialogOpen: !this.state.dialogOpen,
      }); 
    }
  };

  canceldeletechecklistCancel = () => {
   
    this.setState({
      dialogOpen:false
    });
  };

  deletechecklists = () => {
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty: 1,
      price: this.props.data[0].offerPrice,
    });

    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        sku_id: this.props.data[0].skuId,
        qty: 1,
        price: this.props.data[0].offerPrice,
      })
    );
    window.location.pathname = "/cart";

    this.setState({
      dialogOpen: false,
    });
  };
  //className={this.props.styles?this.props.styles:''}
  render() {
    // document.getElementsByClassName('fade').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear'
    // });
    // const fadeImages = [
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg', 
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg'
    // ];

    // const { dataCarousel: { settings }, sliderRef } = this.props;
    const { sliderRef, Globalctx } = this.props;
    var settings = this.props.dataCarousel;
    console.log(this.props)
    
    return (
      <div>
        <Slider ref={sliderRef} {...settings}>
          {this.props.children ? this.props.children : this.renderFadeImages()}
          {this.props.hover
            ? this.imagehoverchildrens(this.props.hoverlist, Globalctx)
            : ""}

          {this.props.hover
            ? this.imagehoverchildrens(this.props.hoverlist, Globalctx)
            : ""}
          {this.props.hovereffect
            ? this.imagehoverchildrens(this.props.hoverlist, Globalctx, this.props.isInjectUrl)
            : ""}
          {this.props.WithoutHoverhover
            ? this.imagewithouthoverchildrens(this.props.hoverlist, Globalctx, this.props.isInjectUrl)
            : ""}
          {this.props.TopPic
            ? this.imagehoverchildrens(this.props.hoverlist, Globalctx)
            : ""}
        </Slider>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Slideshow sliderRef={ref} {...props} />
));
Slideshow.propTypes = {
  settings: PropTypes.object.isRequired,
  fadeImages: PropTypes.array.isRequired,
};
 