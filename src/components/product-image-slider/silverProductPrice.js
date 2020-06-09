import {
  Grid,
  Hidden,
  ExpansionPanel,
  Container,
  Popover,
  paper,
  Paper,
  Button,
} from "@material-ui/core";
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

const dataCarousel = {
  dots: true,
  infinite: false,
  speed: 1000,
  fade: true,
  arrows: false,
  dotsClass: "slickdev",
  className: "button__bar",
};

const mobilecarousel = (props, val, wishlist) => {
  const { data, classes } = props;
  return (
    <div>
      {data.map((data_map) => (
        <Grid container spacing={12} xs={12}>
          <Grid container item xs={6}>
            <div
              className={val && val.offerDiscount ? "css-ts7n45 e5toz5w4" : ""}
            >
              <span
                style={{ color: "#fff" }}
                className={
                  val && val.offerDiscount
                    ? "e195g4sk5 css-5pjie5 ekntgft2"
                    : ""
                }
              >
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
            <Wishlist
              sku={data_map.skuId}
              productId={data_map.productId}
              wishlist={wishlist}
            />
          </Grid>
        </Grid>
      ))}

      {/* <div style={{background:"red"}}>Earrings in 18K Yellow Gold and Peridot for Kids</div> */}
      <Slideshow
        zindex="1000"
        class="middle"
        className="responseve-carousel testingcur"
        imgClass="responseve-carousel-img"
        fadeImages={data[0].fadeImages.arrOfurls}
        dataCarousel={dataCarousel}
        videoControls={true}
      />
    </div>
  );
};

const Productprice = (
  props,
  anchorEl,
  handleClick,
  handleClose,
  globalContext,
  handleLocalStorage,
  canceldeletechecklist,
  deletechecklists,
  state
) => {
  debugger;
  const { data } = props;
  const { classes } = props;
  const open = anchorEl;
  var wishlist = props.wishlist;
  const isSilver = globalContext.Globalctx.pathName ? true : false;

  // alert(JSON.stringify(props.wishlist.wishlistdata.nodes.skuId))
  // var wishlist = this.props && this.props.wishlist &&
  return (
    <div>
      {data.map((val) => (
        <>
          <Grid container spacing={12} sm={12} className={classes.pricedetails}>
            <Hidden mdUp>
              <div className="resp">
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
                {mobilecarousel(props, val, wishlist)}

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
            </Hidden>
            {/* <Paper elevation={0} style={{ width: "100%", padding: "0px", margin: "0px " }}> */}
            <Grid container className="containbev_silver">
              <Grid item xs={12} lg={9} md={9}>
                <div className={`price-div ${classes.Pricediv}`}>
                  <Hidden mdUp>
                    <Grid container spacing={12} xs={12}>
                      <Grid container item xs={8}>
                        <h1
                          className={`pdp-title ${classes.title} `}
                          style={{ width: "90%" }}
                        >
                          {val.title}
                          {/* <i style={{ padding: "2px", fontSize: "12px" }} class="fa fa-info-circle" aria-hidden="true"></i> */}
                        </h1>

                        <div>
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
                        </div>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={4}
                        alignContent="center"
                        alignItems="center"
                      >
                        <Hidden mdUp>
                          <div
                            className={classes.width}
                            style={{ padding: "0px 10px  0px 10px " }}
                          >
                            <Pricing
                              price={data[0].price}
                              offerPrice={data[0].offerPrice}
                              offerDiscount={val.offerDiscount}
                            ></Pricing>
                          </div>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </Hidden>
                  <Hidden smDown>
                    <h5 className={`pdp-title  ${classes.titleSilver}`}>
                      {val.title}
                    </h5>
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
                    padding: globalContext.Globalctx.pathName
                      ? 0
                      : "0px 10px  0px 10px ",
                  }}
                >
                  <Pricing
                    globalContext={globalContext.Globalctx}
                    offerPrice={data[0].offerPrice}
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
                      <Grid item xs={12}>
                        <Grid item xs={4}>
                          <div onClick={handleLocalStorage.bind(this)}>
                            <Buynowbutton
                              sku={data[0].skuId}
                              class={`${classes.buynowButtonSilver} ${classes.buttonsilver}`}
                              button="buynow-btn-cont"
                            />
                            <CommenDialog
                              isOpen={state.modelOpen}
                              content={`Verify selected product details before proceeding`}
                              handleClose={canceldeletechecklist}
                              handleSuccess={deletechecklists}
                              negativeBtn="No"
                              positiveBtn="Yes"
                              title="Confirmation"
                            />
                          </div>
                        </Grid>
                      </Grid>
                   <Grid container item xs={12}>
                   <Grid
                        item
                        xs={4}
                        className={classes.saveButtonsilverGrid}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.silverbuttonSave}
                        >
                       Save    <span style={{paddingLeft:'5px'}}><Wishlist
                                  sku={val.skuId}
                                  productId={val.productId}
                                  wishlist={wishlist}
                                  globalContext={globalContext.Globalctx}
                                  isSilver={isSilver}
                                /></span>
                        </Button>
                      </Grid>
                      <Grid item xs={6} style={{margin:'auto'}}>
                        <div
                          className="starts product-icons"
                          style={{ fontFamily: "fontawesome" }}
                        >
                          <div
                            className="row social-shares"
                            className={classes.icon}
                          >
                            <i
                              class="fa fa-share-alt overall-icons"
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
  return <Component setCartFilters={setCartFilters} {...props} />;
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
        modelOpen: true,
      });
    }
  };

  canceldeletechecklist = () => {
    debugger;
    const state = this.state;
    state["modelOpen"] = false;
    this.setState(state);
    this.forceUpdate();
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
      modelOpen: false,
    });
  };
  render() {
    const { anchorEl } = this.state;
    const context = this.context;
    // alert(JSON.stringify(this.props.wishlist))
    return (
      <div>
        <Hidden smDown>
          {Productprice(
            this.props,
            anchorEl,
            this.handleClick,
            this.handleClose,
            context,
            this.handleLocalStorage,
            this.canceldeletechecklist,
            this.deletechecklists,
            this.state
          )}
        </Hidden>

        <Hidden mdUp>
          <Container style={{ paddingBottom: "6px" }}>
            {Productprice(
              this.props,
              anchorEl,
              this.handleClick,
              this.handleClose,
              context,
              this.handleLocalStorage,
              this.canceldeletechecklist,
              this.deletechecklists,
              this.state
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
