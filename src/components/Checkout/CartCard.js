import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Cart.css";
import {
  Grid,
  Card,
  Hidden,
  Container,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import percentage from "../../assets/percentage.svg";
import Slideshow from "../Carousel/carosul";
import { withStyles } from "@material-ui/core/styles";
import Buynowbutton from "../Buynow/buynowbutton";
import CardSmallScreen from "./CartCardSmallScreen.js";
import WishlistButton from "./Wishlistadd";
import Pricing from "../Pricing/index";
import styles from "./style";
import { NavLink } from "react-router-dom";
import { CartContext } from "context";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Promo from "screens/Checkout/orderSummary/promocode";
import { API_URL, CDN_URL } from "config";
import Quantity from "../quantity/index";
import axios from "axios";
import CurrencyConversion from "utils/CurrencyConversion";

class Checkoutcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: true,
      shipby_arr: [],
      expanded: false,
    };
  }

  async componentDidMount() {
    let skuId_arr = this.props?.data;
    let shipby_arr_object = [];
    for (var i = 0; i < skuId_arr.length; i++) {
      let params = {
        sku_id: skuId_arr[i]?.productSkuId,
        current_datetime: new Date(),
      };
      await axios.post(`${API_URL}/getshippingdate`, params).then((res) => {
        let productShipBy = res?.data?.shipping_date;
        let dateObj = "";
        let shipByDate = "";
        if (productShipBy) {
          dateObj = new Date(productShipBy);
          shipByDate = `Ships by ${dateObj.getUTCDate()} ${dateObj.toLocaleString(
            "default",
            {
              month: "long",
            }
          )} ${dateObj.getUTCFullYear()}`;
        }

        shipby_arr_object.push({
          shipby: shipByDate,
          // shipby: "",
          skuId: skuId_arr[i]?.productSkuId,
        });
      });
      this.setState({
        ...this.state.shipby_arr,
        shipby_arr: shipby_arr_object,
      });
    }
  }
  handleCartQuantity = (skuId) => {
    const filters =
      this.props.filters &&
      this.props.filters.quantity &&
      Object.keys(this.props.filters.quantity).length > 0
        ? true
        : false;
    if (filters) return this.props.filters.quantity[skuId];
    else return JSON.parse(localStorage.getItem("quantity"))[skuId];
  };

  handleDeleteLocalStorage = (e) => {
    var local_storage = JSON.parse(localStorage.getItem("cartDetails"));

    var _localStorageQuantity = JSON.parse(localStorage.getItem("quantity"));

    // var currentValue = e.target.id
    var currentValue =
      e.target.id && e.target.id.length > 0 ? e.target.id : e.currentTarget.id;

    var a = local_storage?.products?.filter((val) => {
      if (currentValue !== val.sku_id) {
        return val;
      }
      return 0;
    });

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }

    function json(response) {
      return response.json();
    }
    if (JSON.parse(localStorage.getItem("cart_id"))) {
      let cart_id = JSON.parse(localStorage.getItem("cart_id")).cart_id;
      let bodyVariableRemoveCartItem = {
        cart_id: cart_id,
        product_id: currentValue,
      };
      fetch(`${API_URL}/removecartitem`, {
        method: "post",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bodyVariableRemoveCartItem,
        }),
      })
        .then(status)
        .then(json)
        .then((val) => {
          sessionStorage.removeItem("updatedProduct");
          var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
          var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
          var localstorage = JSON.stringify({
            cart_id: `${cartId}`,
            user_id: `${userId}`,
            products: a,
          });
          delete _localStorageQuantity[currentValue];
          localStorage.setItem(
            "quantity",
            JSON.stringify(_localStorageQuantity)
          );
          localStorage.setItem("cartDetails", localstorage);
          // history.go(0)
          window.location.reload();
        });
    } else {
      var _products = JSON.parse(
        localStorage.getItem("cartDetails")
      )?.products?.filter((val) => {
        if (val.sku_id !== currentValue){
          return val;
        }  
        return 0;
      });
      var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
      var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
      var _obj = { cart_id: cartId, user_id: userId, products: _products };
      if (_products.length > 0) {
        localStorage.setItem("cartDetails", JSON.stringify(_obj));
        delete _localStorageQuantity[currentValue];
        localStorage.setItem("quantity", JSON.stringify(_localStorageQuantity));
        alert("You removed this product successfully");
        window.location.reload();
      } else {
        localStorage.removeItem("cartDetails", _products);
        localStorage.removeItem("quantity");
        alert("You removed this product successfully");
        window.location.reload();
      }
    }
  };
  handlereloadcart = (val) => {
    const data = this.props.data;
    var redirect_url;
    redirect_url = data.map(
      (val) =>
        "/jewellery" +
        "/" +
        val.productType +
        "/" +
        val.materialName +
        "/" +
        val.prdheader +
        "/" +
        val.generatedSku
    );
    return alert(JSON.stringify(redirect_url));
  };
  row = (props) => {
    const dataCarousel = {
      slidesToShow: 1,
      arrows: false,
    };
    const { classes } = this.props;

    // Quantity {JSON.parse(localStorage.getItem('quantity'))[val.namedetail[0].details]}
    // const { productsDetails, fadeImages } = this.props.data;
    // const { FilterOptionsCtx: { setcartcount } } = React.useContext(FilterOptionsContext);
    // React.useEffect(()=>{
    //     setcartcount({
    //         cartcount: this.props.data.length
    //     })
    // },[data])
    const filter_image = (imges__val, name, details) => {
      var image_urls;
      const width = window.innerWidth;
      if (imges__val?.imageUrl && imges__val?.imageUrl.length > 0) {
        // this.props.data.map(dataval => {
        //     if (dataval !== undefined && dataval !== null) {
        //         dataval.productsDetails.map(val => {
        // if (val !== undefined && val !== null) {
        // val.namedetail !== undefined && val.namedetail.map(val___ => {
        if (name && name === "Metal") {
          var valu = details.split(" ");
          var valu1 = valu[1];
          var valu2 = valu1[0];
          //  imges__val && imges__val.map(img => {
          var cnt = imges__val && imges__val?.imageUrl.split("/");
          var cnt_b = cnt[2].split("-");
          var cnt_c = cnt_b[1];
          if ((cnt_c && cnt_c[1]) === valu2) {
            var browser_type = JSON.parse(
              localStorage.getItem("browserDetails")
            );
            var resolution = 500;
            var _resolutions =
              width < 960
                ? `${resolution * 2}X${resolution * 2}`
                : `${resolution}X${resolution}`;
            var url_split = imges__val && imges__val?.imageUrl.split("/");
            var extension_split = url_split && url_split[url_split.length - 1];
            var browser_type_append =
              extension_split &&
              extension_split
                .split(".")[0]
                .concat(`${browser_type && browser_type.browser_type}`);
            url_split[url_split && url_split.length - 1] = browser_type_append;
            url_split.splice(2, 0, _resolutions);
            var url_construct = url_split.join().replace(/\,/g, "/"); //eslint-disable-line
            image_urls = `${CDN_URL}${url_construct}`;
            return [image_urls];
          }
        }
      }
    };
    const checkMaterial = (material) => {
      let _data = material.map((val) => val.toLowerCase());
      if (_data.indexOf("silver") > -1) return false;
      else return true;
    };
    var discounted_price = this.props.cartFilters.discounted_price
      ? this.props.cartFilters.discounted_price
      : "";
    const dataCard1 = this.props.data
      .map((val) => {
        return (
          val.dataCard1[0].offerPrice *
          JSON.parse(localStorage.getItem("quantity"))[val.generatedSku]
        );
      })
      .reduce(myFunc);

    function myFunc(total, num) {
      var cart_price;
      if (discounted_price.length > 0) {
        var a = Math.round(total + num);
        cart_price = a - discounted_price;
      } else {
        cart_price = Math.round(total + num);
      }
      return cart_price;
    }

    return (
      <div style={{ marginTop: this.props?.checkout ? "" : "50px" }}>
          <Grid
          container
          style={{
            display: "flex",
            flexDirection: this.props?.checkout ? "column" : "row",
          }}
        >
          <Grid item container xs={this.props?.checkout ? 12 : 7}>
            {!this.props.checkout ? (
              <Grid item>
                <Typography className="total">{`Total ( ${
                  this.props.data.length
                } items) :   ${ CurrencyConversion(
                    props.cartFilters.discounted_amount
                      ? Math.round(props.cartFilters.discounted_amount)
                      : Math.round(dataCard1 - discounted_price)
                  )
                }`}</Typography>
              </Grid>
            ) :null}
            {this.props.data.map((dataval) =>
              dataval.productsDetails.map((val) => {
                return (
                  <Grid
                    item
                    container
                    xs={12}
                    style={{
                      outline: "none",
                      marginBottom: "25px",
                      // boxShadow: "1px 2px 13px 7px #DEDADA",
                      padding: "10px",
                      height:"200px",
                      // height: "180px",
                      backgroundColor: this.props.checkout ? "" : "#fff",
                    }}
                    // className={classes.cart}
                  >
                    <Grid
                      item
                      xs={3}
                      sm={3}
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        padding: "1px",
                      }}
                    >
                      <Card className= {this.props.checkout ? "product-image-thumb-check" :"product-image-thumb"}>
                        {val.namedetail !== undefined &&
                          val.namedetail.map((val) =>
                            dataval.fadeImages.map((im_) => {
                              return (
                                <>
                                  {filter_image(im_, val.name, val.details) &&
                                  filter_image(im_, val.name, val.details)
                                    .length > 0 ? (
                                    <>
                                      {window.location.pathname !==
                                      "/checkout" ? (
                                        <NavLink
                                          to={dataval.skuUrl}
                                          style={{ textDecoration: "none" }}
                                        >
                                          <Slideshow
                                            className="image"
                                            fadeImages={filter_image(
                                              im_,
                                              val.name,
                                              val.details
                                            )}
                                            dataCarousel={dataCarousel}
                                          />
                                        </NavLink>
                                      ) : (
                                        <Slideshow
                                          className="image"
                                          fadeImages={filter_image(
                                            im_,
                                            val.name,
                                            val.details
                                          )}
                                          dataCarousel={dataCarousel}
                                        />
                                      )}
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </>
                              );
                            })
                          )}
                      </Card>
                    </Grid>

                    <Grid item xs={5} sm={7} lg={9} style={{ padding: "13px" }}>
                      {window.location.pathname !== "/checkout" ? (
                        <NavLink
                          to={dataval.skuUrl}
                          style={{ textDecoration: "none" }}
                        >
                          <h4
                            className={
                              this.props.checkout
                                ? `${classes.normalfontsCheck}`
                                : `title-cart ${classes.normalfonts}`
                            }
                          >
                            {val.pro_header}
                          </h4>
                        </NavLink>
                      ) : (
                        <h3
                          className={
                            this.props.checkout
                              ? `${classes.normalfontsCheck}`
                              : `title-cart ${classes.normalfonts}`
                          }
                        >
                          {val.pro_header}
                        </h3>
                      )}
                      <Grid container>
                        <Grid item xs={8} lg={6}>
                          <Typography
                            className={
                              this.props.checkout
                                ? `${classes.normalfontsCheck}`
                                : `title-cart ${classes.normalfonts}`
                            }
                            style={{lineHeight:1}}
                          >
                            {val.namedetail[0].details}
                          </Typography>
                        
                          <Typography
                            style={{ marginTop: "8px",lineHeight:3.5}}
                            className={
                              this.props.checkout
                                ? `${classes.normalfontsCheck}`
                                : `subhesder ${classes.normalfonts}`
                            }
                          >
                          {!this.props.checkout ?
                            <div>
                           {window.location.pathname === "/checkout" ||
                            checkMaterial(dataval.materialName) ||
                            !Boolean(dataval?.[0]?.maxOrderQty) ||
                            dataval?.[0]?.maxOrderQty < 2 ? (
                              `Quantity : ${
                                this.props.isdatafromstate[dataval.generatedSku]
                              }`
                            ) : (
                              <Quantity data={[dataval]} cart={true} />
                            )}
                            </div>
                            :""
                            }
                          
                          </Typography>
                          {this.state.shipby_arr.map((val) => (
                            <>
                              {val?.skuId === dataval.productSkuId ? (
                                <Typography
                                  className={
                                    this.props.checkout
                                      ? `${classes.normalfontsCheck}`
                                      : `subhesder ${classes.normalfonts}`
                                  }
                                  style={{
                                    lineHeight:this.props.checkout ? 1.5 : 1.2,
                                     marginTop:this.props.checkout ? '0px' : '13px'
                                  }}
                                >
                                  {val.shipby}
                                </Typography>
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                          {dataval.dataCard1.map((val) => {
                            return (
                              <Pricing
                                detail={dataval}
                                check={this.props.checkout}
                                offerDiscount={
                                  val.discount ? `${val.discount}% - OFF` : null
                                }
                                price={val.price}
                                offerPrice={val.offerPrice}
                                quantity={
                                  this.props.isdatafromstate[
                                    dataval.generatedSku
                                  ]
                                }
                              ></Pricing>
                            );
                          })}
                          {/* {val.namedetail !== undefined &&
                          val.namedetail.map((val) => {
                            return (
                              <>
                                {val.name || val.detail ? (
                                  <Grid container>
                                    <Grid item xs={6}>
                                      <Typography
                                        className={`subhesder ${classes.normalfonts}`}
                                      >
                                        {val.name}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Typography
                                        className={`subhesder ${classes.normalfonts}`}
                                      >
                                        {val.details}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                ) : null}
                              </>
                            );
                          })} */}
                        </Grid>

                        <Grid item xs={4} lg={6} style={{marginTop:"27px"}}>
                          {/* <Typography
                          style={{ marginTop: "8px" }}
                          className={`subhesder ${classes.normalfonts}`}
                        >
                          {window.location.pathname === "/checkout" ||
                          checkMaterial(dataval.materialName) ||
                          !Boolean(dataval?.[0]?.maxOrderQty) ||
                          dataval?.[0]?.maxOrderQty < 2 ? (
                            `Quantity ${
                              this.props.isdatafromstate[dataval.generatedSku]
                            }`
                          ) : (
                            <Quantity data={[dataval]} cart={true} />
                          )}
                        </Typography>

                        {this.state.shipby_arr.map((val) => (
                          <>
                            {val?.skuId === dataval.productSkuId ? (
                              <Typography
                                className={`subhesder ${classes.normalfonts}`}
                              >
                                {val.shipby}
                              </Typography>
                            ) : (
                              ""
                            )}
                          </>
                        ))} */}

                          {window.location.pathname !== "/checkout" ? (
                            <div>
                              <Button
                                // className="highlighter"
                                // className={`subhesder hov ${classes.normalfonts}`}
                                id={dataval.generatedSku}
                                onClick={(event) =>
                                  this.handleDeleteLocalStorage(event)
                                }
                                fullWidth
                                variant="contained"
                                style={{
                                  color: "gray",
                                  width: "96%",
                                  border: "1.46px solid #919396",
                                  backgroundColor: "white",
                                  borderRadius: "0px",
                                  boxShadow: "none",
                                  paddingRight: "40px",
                                  paddingLeft: "40px",
                                }}
                              >
                                &nbsp;Remove
                              </Button>
                              <span>&nbsp;</span>
                              {!dataval?.isActive ? (
                                <span
                                  style={{
                                    backgroundColor: "red",
                                    fontSize: "10px",
                                    color: "white",
                                    padding: "2px 4px",
                                    borderRadius: "2px",
                                  }}
                                >
                                  Sold Out
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                          {window.location.pathname !== "/checkout" ? (
                            <div>
                              <WishlistButton
                                sku={dataval.generatedSku}
                                productId={dataval.productId}
                              />

                              {!dataval.isActive ? (
                                <span
                                  style={{
                                    backgroundColor: "red",
                                    fontSize: "10px",
                                    color: "white",
                                    padding: "2px 4px",
                                    borderRadius: "2px",
                                  }}
                                >
                                  Sold Out
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                        </Grid>
                      </Grid>
                    </Grid>

                    {/* <Grid item xs={4} sm={2} lg={3}>
                    <div style={{ marginTop: "15%" }}>
                      {dataval.dataCard1.map((val) => {
                        return (
                          <Pricing
                            detail={dataval}
                            offerDiscount={
                              val.discount ? `${val.discount}% - OFF` : null
                            }
                            price={val.price}
                            offerPrice={val.offerPrice}
                            quantity={
                              this.props.isdatafromstate[dataval.generatedSku]
                            }
                          ></Pricing>
                        );
                      })}
                    </div>
                  </Grid> */}
                    {this.props.checkout ? (
                      <Divider style={{ width: "100%",border:"1px solid #DEDFE0"}} />
                    ) :null}
                  </Grid>
                );
              })
            )}
            {!this.props.checkout ? (
              <Grid item container spacing={1}>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <ArrowLeftIcon fontSize="small" />
                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #f14880",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/stylori")}
                    >
                      Stylori
                    </span>
                  </div>
                </Grid>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <ArrowLeftIcon fontSize="small" />
                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #06ab9f",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/styloriSilver")}
                    >
                      Stylori Silver
                    </span>
                  </div>
                </Grid>
              </Grid>
            ) :null}
          </Grid>
          {!this.props.checkout ? (
            <Grid
              item
              xs={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Divider variant="vertical" />
            </Grid>
          )
        : null}

          <Grid item xs={this.props?.checkout ? 12 : 4}>
            {this.subtotals(props)}
          </Grid>
          </Grid>
      </div>
    );
  };
  checkoutbutton = () => {
    const { classes } = this.props;

    let productIsActive = true;
    let productURL;
    this.props.data.map((val) => {
      if (val?.isActive === false) {
        productIsActive = val?.isActive;
        productURL = val?.skuUrl;
      }
      return 0;
    });
    let path = window.location.pathname.split("/").pop();

    return (
      <div style={{ width: "100%",marginTop:"20px" }}>
        {path === "checkout" ? (
          ""
        ) : (
          <div
            onClick={() => {
              if (productIsActive) {
                localStorage.removeItem("bil_isactive");
                localStorage.removeItem("ship_isactive");
                localStorage.setItem("panel", 1);
                localStorage.removeItem("select_addres");
                window.location.href = "/checkout";
              }
            }}
          >
            <Buynowbutton
              style={{
                background: "#d51f63",
                padding: 10,
                borderRadius:'0px',
              }}
              isCart={true}
              productURL={productURL}
              productIsActive={productIsActive ?? ""}
              class={`${classes.buttons}`}
            />
          </div>
        )}
      </div>
    );
  };
  checkoutbuttonMobile = () => {
    const { classes } = this.props;

    let productIsActive = true;
    let productURL;
    this.props.data.map((val) => {
      if (val?.isActive === false) {
        productIsActive = val?.isActive;
        productURL = val?.skuUrl;
      }
      return 0;
    });
    let path = window.location.pathname.split("/").pop();

    return (
      <div style={{ width: "100%"}}>
        {path === "checkout" ? (
          ""
        ) : (
          <div
            onClick={() => {
              if (productIsActive) {
                localStorage.removeItem("bil_isactive");
                localStorage.removeItem("ship_isactive");
                localStorage.setItem("panel", 1);
                localStorage.removeItem("select_addres");
                window.location.href = "/checkout";
              }
            }}
          >
            <Buynowbutton
              style={{
                background: "#d51f63",
                padding: 10,
                borderRadius:'0px',
              }}
              isCart={true}
              productURL={productURL}
              productIsActive={productIsActive ?? ""}
              class={`${classes.buttons}`}
            />
          </div>
        )}
      </div>
    );
  };
  applycoupon = (props) => {
    const { expanded } = this.state;
    // const { classes } = this.props;
    return (
      <Accordion
        elevation={3}
        style={{
          border: "0px",
          outline: "0px",
          borderRadius: "0px",
          padding: "0px",
          minHeight: "40px",
          backgroundColor:"#D3D4D5",
          boxShadow:"none",
          color:"#7E7F82"
        }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <ArrowLeftIcon fontSize="14px" />
            ) : (
              <ArrowRightIcon fontSize="14px" />
            )
          }
        >
          <Hidden smDown>
            <Typography
              // className={classes.cartheader}
              noWrap
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
               <img src={percentage} loading="lazy" alt="...."></img>
              &nbsp;&nbsp;&nbsp;<b>Apply Coupon</b>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography
              // className={classes.cartheader}
              noWrap
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
               <img  loading="lazy" alt="...." src={percentage}></img>
              &nbsp;&nbsp;&nbsp;<b>Apply Coupon</b>
            </Typography>
          </Hidden>
        </AccordionSummary>
        <AccordionDetails>
          <Promo />
        </AccordionDetails>
      </Accordion>
    );
  };
  subtotals = (props) => {
    var discounted_price = this.props.cartFilters.discounted_price
      ? this.props.cartFilters.discounted_price
      : "";
    const dataCard1 = this.props.data
      .map((val) => {
        return (
          val.dataCard1[0].offerPrice *
          JSON.parse(localStorage.getItem("quantity"))[val.generatedSku]
        );
      })
      .reduce(myFunc);

      const mainCard = this.props.data
      .map((val) => {
        return (
          val.dataCard1[0].price *
          JSON.parse(localStorage.getItem("quantity"))[val.generatedSku]
        );
      })
      .reduce(myFunc);

    function myFunc(total, num) {
      var cart_price;
      if (discounted_price.length > 0) {
        var a = Math.round(total + num);
        cart_price = a - discounted_price;
      } else {
        cart_price = Math.round(total + num);
      }
      return cart_price;
    }
    var yousave = this.props.data
      .map((_data) => {
        return (
          _data.dataCard1[0].price *
            JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku] -
          _data.dataCard1[0].offerPrice *
            JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku]
        );
      })
      .reduce(myFunc);
    // let path = window.location.pathname.split("/").pop();
    const { classes } = this.props;

    
    const totalCostCal = (
      discountAmount,
      dataCard,
      discountPrice,
      shippingCharge
    ) => {
      if (discountAmount) { 
        if (shippingCharge) {
          return CurrencyConversion(discountAmount + shippingCharge);
        } else {
          return CurrencyConversion(discountAmount);
        }
      }
      else {
        if (shippingCharge) {
          return CurrencyConversion(dataCard - discountPrice + shippingCharge);
        } else {
          return CurrencyConversion(dataCard - discountPrice);
        }
      }
    };



    return (
      <div className={classes.main}>
        <Grid container xs={12} lg={12}>
          {!props.checkout ? (        
              <div style={{width:"100%"}}>
                 {this.applycoupon()}
              </div>
          ) :null}

          <Hidden mdUp>
          <Grid
            item
            container
            style={{ display: "flex", backgroundColor: "#fff",padding:10}}
            xs={12}
          >
            <Grid item xs={6} />
            <Grid item container xs={12} spacing={12}>

             {!props.checkout ? (
               <Grid item container className="summary" xs={12}>
                <Typography className="summaryText">Order Summary</Typography>
              </Grid>
              ) :null}
              {/* {dataCard1.map(val => */}
              <Grid item xs={9} lg={8}>
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{ paddingBottom: this.props.checkout ? "20px" : "",lineHeight:2}}
                >
                  {this.props.checkout ? "SUBTOTAL" : "Subtotal"}
                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{lineHeight:2}}
                  >
                    {this.props.checkout ? "CART DISCOUNT" : "You Saved"}
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{lineHeight:2}}
                  >
                    {props.cartFilters.coupon_type}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{lineHeight:2,
                    marginBottom: this.props.checkout ? '20px' : ''
                  }}
                >
                  {this.props.checkout
                    ? "SHIPPING CHARGES(Standard)"
                    : "Delivery Chargers(Standard)"}
                </Typography>

                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 20 : "",
                    fontWeight: 700,
                    lineHeight:2,
                    borderTop: this.props.checkout ? '2px solid #DEDFE0' : '',
                  }}
                >
                  {"TOTAL COST"}
                </Typography>
              </Grid>
              <Grid item xs={3} lg={4} style={{ textAlign: "end" }}>
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{lineHeight:2}}
                >
                 {props.cartFilters.gross_amount ?
                CurrencyConversion(props.cartFilters.gross_amount)
                   :  <div style={{display: 'flex',
                    justifyContent: 'flex-end'}}><del>{CurrencyConversion(mainCard)}</del><div style={{marginLeft:"5px"}}>{CurrencyConversion(dataCard1)}</div></div>
                  }

                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{ paddingTop: this.props.checkout ? "20px" : "",lineHeight:2}}
                  >

                
                    {props.cartFilters.tax_price
                      ? `- ${CurrencyConversion(yousave + props.cartFilters.tax_price)}`
                      :  `- ${CurrencyConversion(yousave)}`}

                  </Typography>
                ) : null}
                {
                  // yousave !== 0  ? <Typography className={`subhesder ${classes.normalfonts}`}>{Math.round(yousave) + props.cartFilters.tax_price}</Typography> : null
                }

                {props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{lineHeight:2}}
                  >
                    {props.cartFilters.tax_price}
                  </Typography>
                ) : null}

                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{lineHeight:2,
                    marginBottom: this.props.checkout ? '20px' : ''
                  }}
                >
                 {props?.shipping_charge
                      && props?.shipping_charge === 0
                        ? CurrencyConversion(0)
                        :
                          CurrencyConversion(props?.shipping_charge)
                  }
                </Typography>

                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 14 : "",
                    fontWeight: this.props.checkout ? 900 : 700,
                    fontSize: this.props.checkout ? '20px' : '14px',
                    borderTop: this.props.checkout ? '2px solid #DEDFE0' : '',
                    lineHeight:2 
                  }}
                >
                  {totalCostCal(
                    props?.cartFilters?.discounted_amount,
                    dataCard1,
                    discounted_price === "" ? 0 : discounted_price,
                    props?.shipping_charge === "Free" ? 0 : props?.shipping_charge
                  )}    
          
                </Typography>
              </Grid>
              <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 20 : "",
                    lineHeight:2,
                  }}
                >
                  {this.props.checkout ? "" : "International shipping charges will be calculated at the checkout page"}
                </Typography>
             {!props.checkout ? <Grid item container xs={12} style={{backgroundColor:"#E5E6E7",padding:"10px",display:"flex",alignItems:"center"}}>
                <Grid item xs={5}>
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 14 : "",
                    fontWeight: this.props.checkout ? 900 : 700,
                    fontSize: this.props.checkout ? '20px' : '14px',
                    borderTop: this.props.checkout ? '2px solid #DEDFE0' : '',
                    lineHeight:2 
                  }}
                >
                    
            
                  {props.cartFilters.discounted_amount
                    ?  CurrencyConversion(props.cartFilters.discounted_amount)
                    : CurrencyConversion(dataCard1 - discounted_price)}
                </Typography>
                </Grid>
                <Grid item xs={7}>
                {this.checkoutbuttonMobile()}
                </Grid>    
              </Grid> :null}
              
              {/* // )}  */}
            </Grid>
          </Grid>
          </Hidden>

          <Hidden smDown>
          {!props.checkout ? (
               <Grid item container className="summary" xs={12}>
                <Typography className="summaryText">Order Summary</Typography>
              </Grid>
              ) :null}
          <Grid
            item
            container
            style={{ display: "flex", backgroundColor: "#fff",padding:10}}
            xs={12}
          >
            <Grid item xs={6} />

            <Grid item container xs={12} spacing={12}>
              {/* {dataCard1.map(val => */}
              <Grid item xs={9} lg={8}>
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{ paddingBottom: this.props.checkout ? "20px" : "",lineHeight:2}}
                >
                  {this.props.checkout ? "SUBTOTAL" : "Subtotal"}
                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{lineHeight:2}}
                  >
                    {this.props.checkout ? "YOU SAVE" : "You save"}
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{lineHeight:2}}
                  >
                    {props.cartFilters.coupon_type}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{lineHeight:2,
                    marginBottom: this.props.checkout ? '20px' : ''
                  }}
                >
                  {this.props.checkout
                    ? "SHIPPING CHARGES(Standard)"
                    : "Delivery Chargers(Standard)"}
                </Typography>

                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 20 : "",
                    fontWeight: 700,
                    lineHeight:2,
                    borderTop: this.props.checkout ? '2px solid #DEDFE0' : '',
                  }}
                >
                  {"TOTAL COST"}
                </Typography>
              </Grid>
              <Grid item xs={3} lg={4} style={{ textAlign: "end" }}>
                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{lineHeight:2}}
                >
                  {props.cartFilters.gross_amount ?
                CurrencyConversion(props.cartFilters.gross_amount)
                   :  <div style={{display: 'flex',
                    justifyContent: 'flex-end'}}><del>{CurrencyConversion(mainCard)}</del><div style={{marginLeft:"5px"}}>{CurrencyConversion(dataCard1)}</div></div>
                  }

                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{ paddingTop: this.props.checkout ? "20px" : "",lineHeight:2}}
                  >

                
                    {props.cartFilters.tax_price
                      ? `- ${CurrencyConversion(yousave + props.cartFilters.tax_price)}`
                      :  `- ${CurrencyConversion(yousave)}`}

                  </Typography>
                ) : null}
                {
                  // yousave !== 0  ? <Typography className={`subhesder ${classes.normalfonts}`}>{Math.round(yousave) + props.cartFilters.tax_price}</Typography> : null
                }

                {props.cartFilters.tax_price ? (
                  <Typography
                    className={
                      this.props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                    style={{lineHeight:2}}
                  >
                    {props.cartFilters.tax_price}
                  </Typography>
                ) : null}

                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{lineHeight:2,
                    marginBottom: this.props.checkout ? '20px' : ''
                  }}
                >
                                  {props?.shipping_charge
                      && props?.shipping_charge === 0
                        ? CurrencyConversion(0)
                        :
                          CurrencyConversion(props?.shipping_charge)
                     }
                </Typography>

                <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 14 : "",
                    fontWeight: this.props.checkout ? 900 : 700,
                    fontSize: this.props.checkout ? '20px' : '14px',
                    borderTop: this.props.checkout ? '2px solid #DEDFE0' : '',
                    lineHeight:2 
                  }}
                >

                  {totalCostCal(
                    props?.cartFilters?.discounted_amount,
                    dataCard1,
                    discounted_price === "" ? 0 : discounted_price,
                    props?.shipping_charge === "Free" ? 0 : props?.shipping_charge
                  )}    
                  {/* {props.cartFilters.discounted_amount
                    ?  CurrencyConversion(props.cartFilters.discounted_amount)
                    : CurrencyConversion(dataCard1 - discounted_price)} */}
                </Typography>
              </Grid>     
              {/* // )}  */}
            </Grid>
             <Typography
                  className={
                    this.props.checkout
                      ? `${classes.normalfontsCheck}`
                      : `subhesder ${classes.normalfonts}`
                  }
                  style={{
                    paddingTop: this.props.checkout ? 20 : "",
                    lineHeight:2,
                  }}
                >
                  {this.props.checkout ? "" : "International shipping charges will be calculated at the checkout page"}
             </Typography>
          </Grid>
          <Grid item container xs={12}>
                {this.checkoutbutton()}
              </Grid>
          </Hidden>
          
          <Hidden mdUp>
          {!this.props.checkout ? (
              <Grid item container  style={{margin:10,paddingTop:"20px"}}>
                <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                  <ArrowLeftIcon fontSize="small" />
                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #f14880",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/stylori")}
                    >
                      Stylori
                    </span>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                  <ArrowLeftIcon fontSize="small" />
                  <div>
                    Go Back to{" "}
                    <span
                      style={{
                        borderBottom: "2px solid #06ab9f",
                        cursor: "pointer",
                      }}
                      onClick={() => window.location.replace("/styloriSilver")}
                    >
                      Stylori Silver
                    </span>
                  </div>
                </Grid>
              </Grid>
            ) :null}
          </Hidden>
         
        </Grid>

        {/* <Grid container style={{display:"flex",justifyContent:"center"}}>
          {/* {path == "checkout" ? (
            ""
          ) : (
            <>
              <Grid item xs={12}>
                <NavLink to="/jewellery">
                  <div className="btn-plain"> Continue shopping</div>
                </NavLink>
              </Grid>
            </>
          )} */}
        {/* <Grid item xs={12}>{this.checkoutbutton()}</Grid>
        </Grid> */}
      </div>
    );
  };

  render() {
    // alert(discounted_price)

    return (
      <Grid style={{marginLeft:"-16px",marginRight:"-16px"}}>
         <Hidden smDown>
         {window.location.pathname === "/cart" ||
          window.location.pathname === "/checkout" ? (
            <Container style={{maxWidth:"100%"}}>{this.row(this.props)}</Container>
          ) : (
            <>{this.row(this.props)}</>
          )}
         </Hidden>
         
   
        <Hidden mdUp>
          <CardSmallScreen
            data={this.props.data}
            checkout={this.props.checkout}
            handleDeleteLocalStorage={(event) =>
              this.handleDeleteLocalStorage(event)
            }
            //  subtotals={Math.round(dataCard1)}
            checkoutbutton={this.checkoutbutton()}
          />
          {this.subtotals(this.props)}
        </Hidden>
      </Grid>
    );
  }
}
const Components = (props) => {
  const [ShippingCharge, setShippingCharge] = React.useState(0);
  React.useEffect(() => {
    fetch(`${API_URL}/getshippingcharge`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: localStorage.getItem("cart_id"),
      method: "POST",
    })
      .then(async (response) => response.json())
      .then((val) => {
        if (val) setShippingCharge(val.shipping_charge);
      })
      .catch((err) => {});
  }, []);

  let {
    CartCtx: { cartFilters },
  } = React.useContext(CartContext);
  let content;

  content = (
    <Checkoutcard
      {...props}
      cartFilters={cartFilters}
      shipping_charge={ShippingCharge}
      isdatafromstate={props.isStateFilterContextQty}
    />
  );
  return content;
};
export default withStyles(styles)(Components);
