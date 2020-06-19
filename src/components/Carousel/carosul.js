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
  renderFadeImages = () => {
    let { video } = this.props;

    return this.props.fadeImages
      ? this.props.fadeImages.map((imgs) => (
          <div
            className={` ${this.props.class ? this.props.class : ""}`}
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
                alt=""
                onError={(e)=>{e.target.src=`${CDN_URL}product/575X575/productnotfound.jpg`}}
              />
            )}
          </div>
        ))
      : "";
  };

  imagehoverchildrens = (hoverlist, globalContext, isInjectUrl) => {
    let { hover, hovereffect, TopPic, imagecra, isSilver } = this.props;
    ;
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
            <div className="overlay1">
              <div style={{ paddingTop: "40%" }}>
                <h2 className="next-price">{val.title}</h2>
                <br />
                <h5 className="contenttext">{val.description}</h5>
                <a className="info" href={`/${val.url}`}>
                  <span className="shop">SHOP</span>
                </a>
              </div>
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
                      boxShadow:'rgba(208, 210, 211, 0.66) 3px 3px 3px',
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
                      boxShadow:'rgba(208, 210, 211, 0.66) 3px 3px 3px',
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
    debugger
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
 