import { Grid, Hidden, ExpansionPanel, Container, Popover, paper, Paper, Button, Typography } from "@material-ui/core";
import Slideshow from "../Carousel/carosul";
import React from "react";
import PropTypes from "prop-types";
import "./product-images.css";
import Ratings from "../rating/rating";
import { withStyles } from "@material-ui/core/styles";
import Pricing from "../Pricing/index";
import styles from "./style";
import Wishlist from "components/wishlist/wishlist";
import Buynowbutton from "../Buynow/buynowbutton";
import CommenDialog from "../Common/Dialogmodel";
// import { Button } from '';
import { GlobalContext, CartContext } from "context";
import PriceTabs from "components/product-image-slider/priceTabs";
import Quantity from "../quantity";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ProductDetailContext } from "context/ProductDetailContext";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
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
                <div className={val && val.offerDiscount ? "css-ts7n45 e5toz5w4" : ""}>
                  <span style={{ color: "#fff" }} className={val && val.offerDiscount ? "e195g4sk5 css-5pjie5 ekntgft2" : ""}>
                    {val ? val.offerDiscount : null}
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
                <Wishlist sku={data_map.skuId} productId={data_map.productId} wishlist={wishlist} />
              </Grid>
            </Grid>
          ))
        : null}

      {/* <div style={{background:"red"}}>Earrings in 18K Yellow Gold and Peridot for Kids</div> */}
      <>
        {/* <ArrowLeftIcon onClick={next}/> */}
        <Slideshow
          zindex="1000"
          class="middle"
          className="responseve-carousel testingcur"
          imgClass="responseve-carousel-img"
          fadeImages={data[0].fadeImages.arrOfurls}
          dataCarousel={isSilver ? dataCarouselSilver : dataCarousel}
          videoControls={true}
        />
        {/* <ArrowRightIcon/> */}
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
  // snacksBar,
  // handleSnackBarClick,
  // handleSnackBarClose
) => {
  const {
    data,
    allProps,
    allState,
    handleChanges,
    handleCodChange,

    pincode,
  } = props;

  const { classes } = props;

  const open = anchorEl;
  // const snackBarOpen = snacksBar;
  var wishlist = props.wishlist;
  const isSilver = globalContext.Globalctx.pathName ? true : false;

  // alert(JSON.stringify(props.wishlist.wishlistdata.nodes.skuId))
  // var wishlist = this.props && this.props.wishlist &&
  // const [openSnackBar, setOpenSnackBar] = React.useState(false);

  // const handleClickSnackBar = () => {
  //   setOpenSnackBar(true);
  // };

  // const handleCloseSnackBar = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpenSnackBar(false);
  // };
  console.clear();

  console.log(props);
  const isactive = props.data[0].isactive ?? "";
  return (
    <div>
      {data.map((val) => (
        <>
          <Grid container spacing={12} sm={12} className={isSilver ? classes.silverpricedetails : classes.pricedetails}>
            <Hidden mdUp>
              <Container>
                <div className={`resp ${isSilver ? `${`respSilver ${classes.carouselCustomArrow}`}` : ""}`}>
                  {/* <div className="respc"> */}
                  {/* <h1 className={`pdp-title ${classes.title}`}>
                                        {val.title}
                                    </h1> */}
                  {/* <Grid container spacing={12} xs={12}> */}
                  {/* <Grid container item xs={6} justify={'flex-start'}>
                                            <Pricing
                                                offerDiscount={}
                                            />
                                        </Grid> */}
                  {/* <Grid container item xs={6} md={6} justify={'flex-end'}>
                                            <Grid container item xs={8} xs={8} justify={'flex-end'}>
                                                {data[0].ProductContactNum[0].isReadyToShip == true ? <div className="one-day-ship-mb"></div> : ""}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div> */}
                  {mobilecarousel(props, val, wishlist, isSilver)}

                  {/* <div style={{ background: "rgb(238, 238, 238)", width: "100%" }}>
                                    <div className="respc">
                                        <Grid container spacing={12} xs={12}>
                                            <Grid container item xs={6} justify={'flex-start'}>
                                                <Pricing
                                                    price={data[0].price}
                                                    offerPrice={data[0].offerPrice}
                                                />
                                            </Grid> */}
                  {/* <Grid container item xs={6} justify={'flex-end'}>
                                                <div>
                                                    {data[0].ProductContactNum.map(val =>
                                                        <div style={{ marginTop: "10px" }}>
                                                            <b className={`ships-by ${classes.normalfonts}`}> */}
                  {/* <span class="ship-img"></span> */}
                  {/* <span > {val.shipby}</span>
                                                            </b>
                                                        </div>
                                                    )}
                                                </div>
                                            </Grid> */}
                  {/* </Grid>
                                    </div>
                                </div> */}
                  {/* <hr class="bottom-line product-inform-ation"></hr> */}
                  {/* <br /><br /> */}
                </div>
              </Container>
            </Hidden>
            {/* {isSilver && (
              <Hidden mdUp>
                <Grid
                  container
                  item
                  xs={12}
                  className={classes.silverSmallScreenButton}
                >
                
                  <Grid item xs={12} className={classes.saveButtonsilverGrid}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.silverbuttonSave}
                    >
                      <Wishlist
                        sku={val.skuId}
                        productId={val.productId}
                        wishlist={wishlist}
                        globalContext={globalContext.Globalctx}
                        isSilver={isSilver}
                        label="SAVE"
                        labelAdded="SAVED"
                        classMobile="savemobile"
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Hidden>
            )} */}

            {/* <Paper elevation={0} style={{ width: "100%", padding: "0px", margin: "0px " }}> */}
            <Grid container className="containbev_silver">
              <Grid item xs={12} lg={9} md={9}>
                <div className={`price-div ${classes.Pricediv}`}>
                  <Hidden mdUp>
                    <Grid container spacing={12} xs={12}>
                      <Grid container item xs={12} alignItems="center">
                        <Grid item xs={10}>
                          <h1 className={`pdp-title ${classes.title} ${classes.titlesmScreen}`} style={{ width: "90%" }}>
                            {val.title}
                            {/* <i style={{ padding: "2px", fontSize: "12px" }} class="fa fa-info-circle" aria-hidden="true"></i> */}
                          </h1>

                          {/* <div>
                          {data[0].ProductContactNum.map((val) => (
                            <div>
                              <b
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                                className={`ships-by ${classes.normalfonts}`}
                              >
                                <span
                                  style={{
                                    textAlign: "center",
                                    alignItems: "center",
                                    display: "flex",
                                  }}
                                >
                                  {" "}
                                  {val.shipby}
                                </span>
                              </b>
                            </div>
                          ))}
                        </div> */}
                        </Grid>
                        <Grid container item xs={2} justify="flex-end">
                          <Wishlist
                            sku={val.skuId}
                            productId={val.productId}
                            wishlist={wishlist}
                            globalContext={globalContext.Globalctx}
                          />
                        </Grid>
                      </Grid>
                      <Grid container item xs={12} alignContent="center" alignItems="center">
                        <Hidden mdUp>
                          <div className={`${isSilver ? "" : classes.width}`}>
                            <Pricing
                              offerPrice={data[0].offerPrice}
                              price={data[0].price}
                              offerDiscount={val.offerDiscount}
                              globalContext={globalContext.Globalctx}
                            ></Pricing>
                          </div>
                        </Hidden>
                      </Grid>
                      <Grid container item xs={12} alignContent="center" alignItems="center">
                        {/* commented because silver product doesn't have COD */}
                        {/* <Grid item xs={10}>
                          {pincode &&
                            pincode(
                              allProps,
                              allState,
                              handleChanges,
                              handleCodChange,
                              'isSilverSmallScreen'
                            )}
                        </Grid> */}

                        {/* <Grid item xs={2} style={{ margin: "auto" }}>
                          <div
                            className={`starts product-icons2 ${classes.productIcons2}`}
                            style={{ fontFamily: "fontawesome" }}
                          >
                            <div
                              className={`row social-shares ${classes.icon} ${classes.icon2}`}
                            >
                              <i
                                class="fa fa-share-alt overall-icons"
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
                      */}
                        {/* {data[0].ProductContactNum.map((val) => (
                          <Grid
                            item
                            container
                            alignContent="center"
                            alignItems="center"
                            xs={12}
                            lg={12}
                            style={{ padding: "20px 0px 0px 0px" }}
                          >
                            <Grid>
                              <Grid
                                item
                                lg={12}
                                xs={12}
                                className={`buy-subheaders nd-hlp ${
                                  classes.normalfonts
                                } ${isSilver ? classes.normalFontsColor2 : ""}`}
                                style={{ paddingBottom: "5px" }}
                              >
                                <b>NEED HELP ?</b>
                              </Grid>
                            </Grid>
                           
                            <Grid container>
                              <Grid
                                item
                                lg={6}
                                xs={6}
                                className={`buy-subheaders ${
                                  classes.normalfonts
                                } ${isSilver ? classes.normalFontsColor2 : ""}`}
                              >
                                {!isSilver && (
                                  <Typography>
                                    <i
                                      class="fa fa-phone overall-icons"
                                      aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                  </Typography>
                                )}
                                <Typography className={classes.TypoListed}>
                                  {val.telephone}
                                </Typography>
                              </Grid>

                              <Grid
                                item
                                lg={6}
                                xs={6}
                                className={`buy-subheaders ${
                                  classes.normalfonts
                                } ${isSilver ? classes.normalFontsColor2 : ""}`}
                              >
                                {!isSilver && (
                                  <Typography>
                                    <i
                                      class="fa fa-whatsapp overall-icons"
                                      aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                  </Typography>
                                )}
                                <Typography className={classes.TypoListed}>
                                  {val.phonenum}
                                </Typography>
                              </Grid>

                              <Grid
                                item
                                lg={12}
                                xs={12}
                                style={{ cursor: "pointer !important" }}
                                className={`buy-subheaders ${
                                  classes.normalfonts
                                } ${
                                  isSilver ? classes.chatNowSilverGrid : ""
                                } ${isSilver ? classes.normalFontsColor2 : ""}`}
                              >
                                {!isSilver && (
                                  <Typography>
                                    <i
                                      class="fa fa-comments-o overall-icons"
                                      aria-hidden="true"
                                    ></i>
                                    &nbsp;
                                  </Typography>
                                )}
                                <Typography
                               onClick={()=>{
                                 
                                 window.LC_API.open_chat_window()
                               }}
                               variant="subtitle1" component="div"
                                  className={`${classes.TypoListed} ${
                                    isSilver
                                      ? `${`${classes.chatNowSilver} ${classes.chatNowSilverDark}`}`
                                      : ""
                                  }`}
                                  style={{cursor:'pointer'}}
                                >
                                  {isSilver ? `${val.chat} NOW` : val.chat}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      */}
                      </Grid>
                    </Grid>
                  </Hidden>
                  <Hidden smDown>
                    <div style={{ marginTop: 8 }}>
                      {isSilver ? (
                        <div className={`pdp-title  ${classes.titleSilver}`}>{val.title}</div>
                      ) : (
                        <h5 className={`pdp-title`}>{val.title}</h5>
                      )}
                    </div>
                  </Hidden>
                  {/* <Hidden smDown>
                                            <p className={`pdp-desc ${classes.dis}`}>
                                                {val.dis}
                                            </p>
                                        </Hidden> */}
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
                    padding: globalContext.Globalctx.pathName ? 0 : "0px 10px  0px 10px ",
                    paddingTop: 12,
                    paddingBottom: -4,
                  }}
                >
                  <Pricing
                    // globalContext={globalContext.Globalctx}
                    // offerPrice={data[0].offerPrice}
                    offerPrice={data[0].offerPrice}
                    price={data[0].price}
                    offerDiscount={data[0].offerDiscount}
                    withOffer={true}
                    globalContext={globalContext.Globalctx}
                  />
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
                      {Boolean(isSilver && data[0].productTabs[0].tab1.Children) || !isSilver ? (
                        <Grid item xs={12}>
                          <div className="overall-box ">
                            <PriceTabs data={props.data} isSilver={isSilver} />
                          </div>
                        </Grid>
                      ) : null}
                      {/* <Grid item xs={12}>
                        <div className={`${classes.quantity}`}>
                          <Quantity data={props.data} /> 
                        </div>
                      </Grid> */}
                      {isSilver && (
                        <Grid item xs={12} style={{ padding: "10px 0px 20px 0px" }}>
                          <Grid item xs={3} sm={4} md={4} lg={3}>
                            {/* <Button
                             
                              variant="contained"
                              color="primary"
                              class={`${classes.buttonsilverAddToCart} ${classes.buttonHeightAddToCart}`}
                            >
                             
                              <span
                                className={`${classes.robotoBoldFont} ${classes.add_to_cart_text}`}
                               
                              >
                                <i class="fa fa-shopping-bag buynow-icon"></i>
                                Add to Cart
                              </span>
                            </Button> */}

                            <div onClick={isactive ? deletechecklists : ""}>
                              {isactive ? (
                                <>
                                  {" "}
                                  <Buynowbutton
                                    sku={data[0].skuId}
                                    class={`${classes.buttonsilverAddToCart} ${classes.buttonHeightAddToCart} ${classes.robotoBoldFont} ${classes.add_to_cart_text}`}
                                    button="buynow-btn-cont"
                                    id="silverButton"
                                    withoutBag={true}
                                    addtoCartToBuyNow={true}
                                    productIsActive={isactive ?? ""}
                                    // onClick={}
                                    // handleSuccess={deletechecklists}
                                    onClick={isactive ? handleLocalStorage.bind(this) : ""}
                                  />{" "}
                                </>
                              ) : (
                                ""
                              )}

                              {/* <CommenDialog
                              isOpen={state.modelOpen}
                              content={`Verify selected product details before proceeding`}
                              handleClose={canceldeletechecklist}
                              handleSuccess={deletechecklists}
                              negativeBtn="No"
                              positiveBtn="Yes"
                              title="Confirmation"
                            /> */}
                            </div>
                          </Grid>
                        </Grid>
                      )}
                      <Grid container item xs={12}>
                        <Grid item xs={3} sm={4} md={5} lg={4}>
                          <div onClick={isactive ? deletechecklists : ""}>
                            {isactive ? (
                              <>
                                <Buynowbutton
                                  sku={data[0].skuId}
                                  class={`${classes.buynowButtonSilver} ${classes.buttonsilver} ${classes.robotoBoldFont}`}
                                  button="buynow-btn-cont"
                                  id="silverButton"
                                  withoutBag={true}
                                  productIsActive={isactive ?? ""}
                                  // onClick={}
                                  // handleSuccess={deletechecklists}
                                  onClick={isactive ? handleLocalStorage.bind(this) : ""}
                                />
                              </>
                            ) : (
                              ""
                            )}

                            {/* <CommenDialog
                              isOpen={state.modelOpen}
                              content={`Verify selected product details before proceeding`}
                              handleClose={canceldeletechecklist}
                              handleSuccess={deletechecklists}
                              negativeBtn="No"
                              positiveBtn="Yes"
                              title="Confirmation"
                            /> */}
                          </div>
                          {/* <Button variant="contained" color="primary" class={`${classes.buynowButtonSilver} ${classes.buttonsilver}`} onClick={()=>{document.getElementById('silverButton').click()}} >BUY NOW</Button> */}
                        </Grid>
                        <Grid container item xs={4} className={classes.saveButtonsilverGrid}>
                          <Grid container item alignItems="center" justify="center" xs={4}>
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
                              className={`starts product-icons2 ${isSilver ? classes.iconSilver : ""}`}
                              style={{ fontFamily: "fontawesome" }}
                            >
                              <div className={`row  ${classes.icon2} ${classes.productIcons2}`}>
                                <i
                                  class={`fa fa-share-alt overall-icons `}
                                  aria-owns={open ? "simple-popper" : ""}
                                  onClick={handleClick}
                                ></i>{" "}
                                &nbsp;
                                {/* {JSON.stringify(val.productId)} */}
                                {/* <Wishlist sku={val.skuId} productId={val.productId} /> */}
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
                                        class="lazyload"
                                        src="https://assets.stylori.com/images/static/newsprite/iconmonstr-twitter-5-share.svg"
                                      />
                                    </a>
                                    &nbsp;
                                    {/* <a class="google" target="_blank">
                                                            <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-google-plus-5-share.svg" />
                                                        </a> */}
                                  </div>
                                </Popover>
                                {/* <div onClick={() => window.scrollTo(0, 1800)}><Ratings ratings="starts-review" disable={"disable"} /></div> */}
                                {/* <div><Ratings ratings="starts-review" /></div> */}
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
            {/* </Paper> */}
            {/* <Hidden smDown>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </Hidden> */}
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
    <Component setCartFilters={setCartFilters} {...props} quantity={filters.quantity} filters={filters} setFilters={setFilters} />
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
      // snacksBar: false,
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
  // handleSnackBarClick = () => {
  //   debugger;
  //   console.log("hello");
  //   alert("hello");
  //   this.setState({
  //     snacksBar: true,
  //   });
  // };
  // handleSnackBarClose = () => {
  //   debugger;

  //   this.setState({
  //     snacksBar: false,
  //   });
  // };
  valus = (valueId) => {
    var valus_locl = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : "";

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
      // this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })
      // sessionStorage.setItem('updatedProduct', JSON.stringify({ sku_id: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice }));
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
      qty: this.props.quantity[this.props.data[0].skuId] ? this.props.quantity[this.props.data[0].skuId] : 1,
      price: this.props.data[0].offerPrice,
    });

    const _qty =
      this.props.quantity && this.props.data && this.props.quantity[this.props.data[0].skuId]
        ? this.props.quantity[this.props.data[0].skuId]
        : 1;
    this.props.setFilters({
      ...this.props.filters,
      quantity: _qty,
    });
    let localStorageQuantity = localStorage.getItem("quantity") ? JSON.parse(localStorage.getItem("quantity")) : null;

    if (!localStorageQuantity) {
      if (localStorageQuantity && !localStorageQuantity[this.props.data[0].skuId]) {
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
      this.props.filters.quantity[this.props.data[0].skuId] = localStorageQuantity[this.props.data[0].skuId];
    }
    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        sku_id: this.props.data[0].skuId,
        qty: this.props.quantity[this.props.data[0].skuId] ? this.props.quantity[this.props.data[0].skuId] : 1,
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
    const { snacksBar } = this.state;
    // alert(JSON.stringify(this.props.wishlist))
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
            this.handletest
            // snacksBar,
            // this.handleSnackBarClick,
            // this.handleSnackBarClose
          )}
        </Hidden>

        <Hidden mdUp>
          <Container style={{ paddingBottom: "6px" }}>
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
              this.handletest
              // snacksBar,
              // this.handleSnackBarClick,
              // this.handleSnackBarClose
            )}
          </Container>
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
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
