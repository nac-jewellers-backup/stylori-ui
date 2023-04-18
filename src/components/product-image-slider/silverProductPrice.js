import {
  Grid,
  Hidden,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import Slideshow from "../Carousel/carosul";
import React from "react";
import PropTypes from "prop-types";
import "./product-images.css";
import { withStyles } from "@material-ui/core/styles";
import Pricing from "../Pricing/index";
import styles from "./style";
import Wishlist from "components/wishlist/wishlist";
import Buynowbutton from "../Buynow/buynowbutton";
// import { Button } from '';
import { GlobalContext, CartContext } from "context";
import PriceTabs from "components/product-image-slider/priceTabs";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ProductDetailContext } from "context/ProductDetailContext";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PriceBuynow from "components/product-image-slider/buyNow"
import NewBuyNow from "components/NewBuyNow/newBuyNow";

const dataCarousel = {
  dots: true,
  infinite: false,
  speed: 1000,
  fade: true,
  arrows: false,
  dotsClass: "slickdev",
  className: "button__bar",
};

const mobilecarousel = (props, val, wishlist, isSilver) => {
  const { data, classes } = props;

  const dataCarouselSilver = {
    dots: false,
    infinite: false,
    speed: 1000,
    fade: true,
    arrows: true,
    dotsClass: "slickdev",
    className: "button__bar",
    prevArrow: <ArrowLeftIcon className={classes.carouselCustomArrow} />,
    nextArrow: <ArrowRightIcon className={classes.carouselCustomArrow} />,
  };
  return (
    <div>
      {!isSilver
        ? data.map((data_map) => (
            <Grid container spacing={12} xs={12}>
              <Grid container item xs={6}>
                <div
                  className={
                    val && val?.offerDiscount ? "css-ts7n45 e5toz5w4" : ""
                  }
                >
                  <span
                    style={{ color: "#fff" }}
                    className={
                      val && val?.offerDiscount
                        ? "e195g4sk5 css-5pjie5 ekntgft2"
                        : ""
                    }
                  >
                    {val ? val?.offerDiscount : null}
                  </span>
                  <br />
                  {data[0].ProductContactNum[0].isReadyToShip === true ? (
                    <div className="css-ts7n45-redy_toship one-day-ship-mb"></div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
              <Grid container item xs={4} />
              <Grid container item xs={2} className="css-ts7n45_wishlist">
                <Wishlist
                  sku={data_map?.skuId}
                  productId={data_map?.productId}
                  wishlist={wishlist}
                />
              </Grid>
            </Grid>
          ))
        : null}

      <>
        <Slideshow
          zindex="1000"
          class="middle"
          className="responseve-carousel testingcur"
          imgClass="responseve-carousel-img"
          fadeImages={data[0]?.fadeImages?.arrOfurls}
          dataCarousel={isSilver ? dataCarouselSilver : dataCarousel}
          videoControls={true}
        />
      </>
    </div>
  );
};

const Productprice = (
  props,
  state,
  anchorEl,
  handleClick,
  handleClose,
  globalContext,
  handleLocalStorage,
  canceldeletechecklist,
  deletechecklists
) => {
  const {
    data,
  } = props;

  const { classes } = props;
  var wishlist = props.wishlist;
  const isSilver = globalContext?.Globalctx?.pathName ? true : false;
  const isactive = props?.data[0]?.isactive ?? "";
  const enquireLink = () =>{
    if (props?.productURL) {
      window.open(
        `https://wa.me/919952625252?text=Hi - ${
          window.location.hostname + "/" + props.productURL ?? ""
        }`
      );
    } else {
      window.open(
        `https://wa.me/919952625252?text=Hi - ${window.location.href}`
      );
    }
  }

  return (
    <div>
      {data.map((val) => (
        <>
      
          <Grid
            container
            spacing={12}
            sm={12}
            className={
              isSilver ? classes.silverpricedetails : classes.pricedetails
            }
          >
            {!isSilver && 
             <Hidden mdUp>
             <Container>
               <div
                 className={`resp ${
                   isSilver
                     ? `${`respSilver ${classes.carouselCustomArrow}`}`
                     : ""
                 }`}
               >
                 {mobilecarousel(props, val, wishlist, isSilver)}
               </div>
             </Container>
              </Hidden>
            }
           

            <Grid container className="containbev_silver">
              <Grid item xs={12} lg={9} md={9}>
                <div className={`price-div ${classes.Pricediv}`}>
                  <Hidden mdUp>
                    <Grid container spacing={12} xs={12}>
                      {isSilver ? 
                       <Grid container item xs={12} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                         <div className={`pdp-title  ${classes.titleSilverMobile}`}>
                         {val?.title ?? ""}
                         </div>
                         <div className={`pdp-title  ${classes.skuIdSilverMobile}`}>
                          {val?.skuId.slice(0,-9) ?? ""}
                          </div> 
                         </Grid>
                       : <Grid container item xs={12}>
                          <Grid item xs={10}>
                           <h1
                           className={`pdp-title ${classes.title} ${classes.titlesmScreen}`}
                           style={{ width: "90%" }}
                           >
                             {val?.title ?? ""}
                           </h1>
                          </Grid>
                          <Grid container item xs={2} justify="flex-end">
                             <Wishlist
                             sku={val?.skuId}
                              productId={val?.productId}
                             wishlist={wishlist}
                             globalContext={globalContext?.Globalctx}
                              />
                            </Grid>
                      </Grid>
                      }
                      <Grid
                        container
                        item
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Hidden mdUp>
                          <div className={`${isSilver ? "" : classes.width}`} style={{width:"100%"}}>
                            <Pricing
                              offerPrice={data[0]?.offerPrice}
                              price={data[0]?.price}
                              offerDiscount={val?.offerDiscount}
                              globalContext={globalContext?.Globalctx}
                            ></Pricing> 

                             <PriceBuynow data={props?.data} isSilver={isSilver} isRequired={true}/>

                              {/* <div onClick={isactive ? deletechecklists : ""} style={{marginTop:10}}>
                               {isactive ? (
                                   <>
                                    {" "}
                                 <Buynowbutton
                                   sku={data[0].skuId}
                                   style={{   
                                   borderColor:"#06A296",
                                   color:"#06A296",
                                   padding:10
                                   }}
                                   button="buynow-btn-cont"
                                   id="silverButton"
                                   withoutBag={true}
                                   addtoCartToBuyNow={true}
                                   productIsActive={isactive ?? ""}
                                   onClick={
                                     isactive
                                       ? handleLocalStorage.bind(this)
                                       : ""
                                   }
                                 />
                                 
                                 {" "}
                               </>
                             ) : (
                               ""
                             )}
                              </div>
                           <div onClick={isactive ? deletechecklists : ""} style={{marginTop:10}}>
                             <Buynowbutton
                               sku={data[0].skuId}
                               style={{    
                                 backgroundColor:"#06A296",
                                 color:"#fff",
                                 padding:10
                               }}
                               // button="buynow-btn-cont"
                               id="silverButton"
                               withoutBag={true}
                               productIsActive={isactive ?? ""}
                               onClick={
                                 isactive ? handleLocalStorage.bind(this) : ""
                               }
                             />
                             </div>         */}
                             {props.buttonName !== "Enquire Now" && 
                            <Grid item style={{marginTop:"10px"}}>
                              <div onClick={isactive ? deletechecklists : ""}>
                                <NewBuyNow
                                  sku={data[0].skuId}
                                  style={{
                                    borderColor: "#06A296",
                                    color: "#06A296",
                                    padding: 10,
                                  }}
                                  addtoCart={true}
                                  onClick={
                                    isactive
                                      ? handleLocalStorage.bind(this)
                                      : ""
                                  }
                                />
                              </div>
                            </Grid>                         
                          }
                          <Grid
                            item
                          >
                            <div onClick={(isactive && (props.buttonName !== "Enquire Now")) ? deletechecklists : ""} style={{marginTop:"10px"}}>
                            <NewBuyNow
                              sku={data[0].skuId}
                              style={{
                                backgroundColor: "#06A296",
                                color: "#fff",
                                padding: 10,
                              }}
                              buttonName={props.buttonName}
                            />
                            </div>
                          </Grid>       
                          </div>
                            
                        </Hidden>
                      </Grid> 
                    </Grid>
                  </Hidden>
                  <Hidden smDown>
                    <div>
                      {isSilver ? (
                        <div className={`pdp-title  ${classes.titleSilver}`}>
                          {val?.title ?? ""}
                        </div>
                      ) : (
                        <h5 className={`pdp-title`}>{val?.title ?? ""}</h5>
                      )}
                    </div>
                    <div style={{ marginTop: 8 }}>
                      {isSilver ? (
                        <div className={`pdp-title  ${classes.skuIdSilver}`}>
                          {val?.skuId.slice(0,-9) ?? ""}
                        </div>
                      ) : (
                         ""
                      )}
                    </div>
                  </Hidden>
                </div>
              </Grid>
              <Hidden smDown>
                <Grid
                  item
                  xs={12}
                  lg={9}
                  md={9}
                  className={classes.width}
                  style={{
                    padding: globalContext?.Globalctx?.pathName
                      ? 0
                      : "0px 10px  0px 10px ",
                    paddingTop: 12,
                    paddingBottom: -4,
                  }}
                >
                  <Pricing
                    offerPrice={data[0]?.offerPrice}
                    price={data[0]?.price}
                    offerDiscount={data[0]?.offerDiscount}
                    withOffer={true}
                    globalContext={globalContext?.Globalctx}
                  />
                  <PriceBuynow data={props?.data} isSilver={isSilver}/>
                </Grid>
              </Hidden>

              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                style={{
                  display: "flex",
                  lineHeight: "20px",
                  justifyContent: "flex-start",
                }}
              >
                <Hidden smDown>
                  <Grid container>
                    <Grid container item xs={12}>
                      {Boolean(
                        isSilver && data[0]?.productTabs[0]?.tab1?.Children
                      ) || !isSilver ? (
                        <Grid item xs={12}>
                          <div className="overall-box ">
                            <PriceTabs data={props?.data} isSilver={isSilver} /> 
                          </div>      
                        </Grid>
                      ) : null}

                      {isSilver && (
                        <Grid
                          item
                          xs={12}
                          style={{ padding: "20px 0px 20px 0px",display:"flex"}}
                        >
                          {props.buttonName !== "Enquire Now" && 
                            <Grid item xs={3} sm={4} md={4} lg={6}>
                              <div onClick={isactive ? deletechecklists : ""}>
                                <NewBuyNow
                                  sku={data[0].skuId}
                                  style={{
                                    borderColor: "#06A296",
                                    color: "#06A296",
                                    padding: 10,
                                  }}
                                  addtoCart={true}
                                  onClick={
                                    isactive
                                      ? handleLocalStorage.bind(this)
                                      : ""
                                  }
                                />
                              </div>
                            </Grid>                         
                          }
                          <Grid
                            item
                            style={{ marginLeft: "10px" }}
                            xs={3} sm={4} md={4} lg={6}
                          >
                            <div onClick={(isactive && (props.buttonName !== "Enquire Now")) ? deletechecklists : ""}>
                            <NewBuyNow
                              sku={data[0].skuId}
                              style={{
                                backgroundColor: "#06A296",
                                color: "#fff",
                                padding: 10,
                              }}
                              buttonName={props.buttonName}
                            />
                            </div>
                          </Grid>                          
                          {/* {isactive ?
                           <Grid item xs={3} sm={4} md={4} lg={6}>   
                           <div onClick={isactive ? deletechecklists : ""}>
                             {isactive ? (
                               <>
                                 {" "}
                                 <Buynowbutton
                                   sku={data[0].skuId}
                                   style={{   
                                   borderColor:"#06A296",
                                   color:"#06A296",
                                   padding:10
                                   }}
                                   button="buynow-btn-cont"
                                   id="silverButton"
                                   withoutBag={true}
                                   addtoCartToBuyNow={true}
                                   productIsActive={isactive ?? ""}
                                   onClick={
                                     isactive
                                       ? handleLocalStorage.bind(this)
                                       : ""
                                   }
                                 />
                                 
                                 {" "}
                               </>
                             ) : (
                               ""
                             )}
                           </div>
                            </Grid>
                           :  <Grid item xs={3} sm={4} md={4} lg={12}>    
                            <div onClick={isactive ? deletechecklists : ""}>
                           {isactive ? (
                             <>
                               {" "}
                               <Buynowbutton
                                 sku={data[0].skuId}
                                 style={{   
                                 borderColor:"#06A296",
                                 color:"#06A296",
                                 padding:10
                                 }}
                                 button="buynow-btn-cont"
                                 id="silverButton"
                                 withoutBag={true}
                                 addtoCartToBuyNow={true}
                                 productIsActive={isactive ?? ""}
                                 onClick={
                                   isactive
                                     ? handleLocalStorage.bind(this)
                                     : ""
                                 }
                               />
                               
                               {" "}
                             </>
                           ) : (
                             ""
                           )}
                            </div>
                          </Grid>
                           }
                          {isactive ? 
                           <Grid item xs={3} sm={4} md={5} lg={6} style={{marginLeft:10}}>
                           <div onClick={isactive ? deletechecklists : ""}>
                             <Buynowbutton
                               sku={data[0].skuId}
                               style={{    
                                 backgroundColor:"#06A296",
                                 color:"#fff",
                                 padding:10
                               }}
                               // button="buynow-btn-cont"
                               id="silverButton"
                               withoutBag={true}
                               productIsActive={isactive ?? ""}
                               onClick={
                                 isactive ? handleLocalStorage.bind(this) : ""
                               }
                             />
                           </div>
                            </Grid>
                            : null
                          } */}
                         
                        </Grid>
                      )}


                      <Grid container item xs={12}>
                        <Typography
                        style={{
                          color:"#06A296"
                        }}
                        >Shipping Calculated at Checkout</Typography>
                        {/* <Grid
                          container
                          item
                          xs={4}
                          className={classes.saveButtonsilverGrid}
                        >
                          <Grid
                            container
                            item
                            alignItems="center"
                            justify="center"
                            xs={4}
                          >
                            <Wishlist
                              sku={val.skuId}
                              productId={val.productId}
                              wishlist={wishlist}
                              globalContext={globalContext.Globalctx}
                              isSilver={isSilver}
                              isSilverbool={true}
                            />
                          </Grid>

                          <Grid item xs={6} className={classes.sharesilver}>
                            <div
                              className={`starts product-icons2 ${
                                isSilver ? classes.iconSilver : ""
                              }`}
                              style={{ fontFamily: "fontawesome" }}
                            >
                              <div
                                className={`row  ${classes.icon2} ${classes.productIcons2}`}
                              >
                                <i
                                  class={`fa fa-share-alt overall-icons `}
                                  aria-owns={open ? "simple-popper" : ""}
                                  onClick={handleClick}
                                ></i>{" "}
                                &nbsp;
                                <Popover
                                  id="simple-popper"
                                  open={open}
                                  anchorEl={anchorEl}
                                  onClose={handleClose}
                                  anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center",
                                  }}
                                  transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                  }}
                                >
                                  <div className="product-share">
                                    <h5>Share the Jewellery</h5>
                                    <a
                                      class="facebook"
                                      target="_blank"
                                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                    >
                                      <img
                                        alt=""
                                        class="lazyload"
                                        src="https://assets.stylori.com/images/static/newsprite/iconmonstr-facebook-5-share.svg"
                                      />
                                    </a>
                                    &nbsp;
                                    <a
                                      className="twitter"
                                      target="_blank"
                                      href={`http://www.twitter.com/share?url=${window.location.href}`}
                                    >
                                      <img
                                        alt=""
                                        class="lazyload"
                                        src="https://assets.stylori.com/images/static/newsprite/iconmonstr-twitter-5-share.svg"
                                      />
                                    </a>
                                    &nbsp;
                                  </div>
                                </Popover>
                              </div>
                            </div>
                          </Grid>
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </>
      ))}
    </div>
  );
};

const ProductPrice = (props) => {
  const { setCartFilters } = React.useContext(CartContext);
  const {
    ProductDetailCtx: { filters },
    setFilters,
  } = React.useContext(ProductDetailContext);

  return (
    <Component
      setCartFilters={setCartFilters}
      {...props}
      quantity={filters.quantity}
      filters={filters}
      setFilters={setFilters}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      share: false,
      heart: false,
      anchorEl: false,
      modelOpen: false,
    };
  }

  static contextType = GlobalContext;
  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: false,
    });
  };

  valus = (valueId) => {
    var valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";

    var vals;

    if (valus_locl) {
      let productIds = valus_locl.map((val) => {
        return val.sku_id;
      });
      productIds.indexOf(valueId) > -1 ? (vals = 1) : (vals = 0);
    }
    return vals;
  };

  handleLocalStorage = () => {
    if (this.valus(this.props.data[0].skuId) === 1) {
      window.location.pathname = "/cart";
    } else {
      this.setState({
        modelOpen: !this.state.modelOpen,
      });
    }
  };

  canceldeletechecklistCancel = () => {
    this.setState({
      modelOpen: false,
    });
  };

  deletechecklists = () => {
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty: this.props.quantity[this.props.data[0].skuId]
        ? this.props.quantity[this.props.data[0].skuId]
        : 1,
      price: this.props.data[0].offerPrice,
    });

    const _qty =
      this.props.quantity &&
      this.props.data &&
      this.props.quantity[this.props.data[0].skuId]
        ? this.props.quantity[this.props.data[0].skuId]
        : 1;
    this.props.setFilters({
      ...this.props.filters,
      quantity: _qty,
    });
    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;

    if (!localStorageQuantity) {
      if (
        localStorageQuantity &&
        !localStorageQuantity[this.props.data[0].skuId]
      ) {
        let _obj = {};
        localStorageQuantity[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
        this.props.filters.quantity[this.props.data[0].skuId] = _qty;
      } else {
        let _obj = {};
        _obj[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(_obj));
        this.props.filters.quantity[this.props.data[0].skuId] = _qty;
      }
    } else {
      localStorageQuantity[this.props.data[0].skuId] = _qty;
      localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
      this.props.filters.quantity[this.props.data[0].skuId] =
        localStorageQuantity[this.props.data[0].skuId];
    }
    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        sku_id: this.props.data[0].skuId,
        qty: this.props.quantity[this.props.data[0].skuId]
          ? this.props.quantity[this.props.data[0].skuId]
          : 1,
        price: this.props.data[0].offerPrice,
      })
    );
    window.location.pathname = "/cart";

    this.setState({
      modelOpen: false,
    });
  };
  render() {
    const { anchorEl } = this.state;
    const context = this.context;

    return (
      <div>
        <Hidden smDown>
          {Productprice(
            this.props,
            this.state,
            anchorEl,
            this.handleClick,
            this.handleClose,
            context,
            this.handleLocalStorage,
            this.canceldeletechecklistCancel,
            this.deletechecklists,
            // this.handletest
          )}
        </Hidden>

        <Hidden mdUp>
     
            {Productprice(
              this.props,
              this.state,
              anchorEl,
              this.handleClick,
              this.handleClose,
              context,
              this.handleLocalStorage,
              this.canceldeletechecklistCancel,
              this.deletechecklists,
              // this.handletest
            )}
    
        </Hidden>
      </div>
    );
  }
}
ProductPrice.propTypes = {
  mobilecarousel: PropTypes.func,
  Productprice: PropTypes.func,
};
export default withStyles(styles)(ProductPrice);

export function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
