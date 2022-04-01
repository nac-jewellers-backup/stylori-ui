import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Cart.css";
import {
  Grid,
  CardHeader,
  Card,
  IconButton,
  Hidden,
  Container,
  Button,
  Box,
  Divider,
  Icon,
} from "@material-ui/core";
import percentage from "../../assets/percentage.svg";
import Slideshow from "../Carousel/carosul";
import { withStyles } from "@material-ui/core/styles";
import Buynowbutton from "../Buynow/buynowbutton";

import CardSmallScreen from "./CartCardSmallScreen.js";
import Pricing from "../Pricing/index";
import styles from "./style";
import { NavLink } from "react-router-dom";
import { CartContext, ProductDetailContext } from "context";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { API_URL, CDN_URL } from "config";
import Quantity from "../quantity/index";
import axios from "axios";

class Checkoutcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: true,
      shipby_arr: [],
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
          alert(val.message);
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
        if (val.sku_id !== currentValue) return val;
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
    const { classes, data } = this.props;

    // Quantity {JSON.parse(localStorage.getItem('quantity'))[val.namedetail[0].details]}
    const { productsDetails, fadeImages} = this.props.data;
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
            var url_construct = url_split.join().replace(/\,/g, "/");
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
      <div style={{ marginTop: "10px" }}>
        <Grid container>
          <Grid xs={12} />
          {/* <Grid xs={12}>{this.checkoutbutton()}</Grid> */}
        </Grid>
        <Grid
          container
          style={{ display: "flex", flexDirection: "row" }}
          spacing={1}
        >

          <Grid item container xs={7} spacing={1}>
          <Grid item>
                <Typography className="total">{`Total ( ${this.props.data.length} items) :   ${
                    new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(     props.cartFilters.discounted_amount
                      ? Math.round(props.cartFilters.discounted_amount)
                      : Math.round(dataCard1 - discounted_price))) 
                      }`}</Typography>
           </Grid>
           {this.props.data.map((dataval) =>
            dataval.productsDetails.map((val) => {
              return(    
                 <Grid
                item
                container
                xs={12}
                style={{
                  outline: "none",
                  marginBottom: "25px",
                  // boxShadow: "1px 2px 13px 7px #DEDADA",
                  padding: "10px",
                  height:"180px",
                  backgroundColor:"whitesmoke"
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
                    <Card className="product-image-thumb">
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
                        <h3 className={`title ${classes.normalfonts}`}>
                          {val.pro_header}
                        </h3>
                      </NavLink>
                    ) : (
                      <h3 className={`title ${classes.normalfonts}`}>
                        {val.pro_header}
                      </h3>
                    )}
                    <Grid container spacing={12}>
                      <Grid item xs={8}>
                           <Typography
                              className={`subhesder ${classes.normalfonts}`}
                            >
                             {val.namedetail[0].details}
                            </Typography>
                            <Typography
                          style={{ marginTop: "8px" }}
                          className={`subhesder ${classes.normalfonts}`}
                        >
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
                            ))}
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

                      <Grid item xs={4}>
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
                              variant="outlined"
                              fullWidth
                              style={{padding:'7px',fontSize:'13px',border:'1px solid grey',color:"#6D6E71"}}
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
                            <Button
                              // className="highlighter"
                              // className={`subhesder hov ${classes.normalfonts}`}
                              id={dataval.generatedSku}
                              onClick={(event) =>
                                this.handleDeleteLocalStorage(event)
                              }
                              variant="outlined"
                              fullWidth
                              style={{padding:'7px',fontSize:'13px',border:'1px solid grey',color:"#6D6E71"}}
                            >
                              &nbsp;Move To Wishlist
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
               
                 </Grid>    
              )   
            })
           )}
            <Grid item container spacing={1}>
                <Grid item style={{display:"flex",alignItems:"center"}}>
                   <ArrowLeftIcon fontSize="small"/>
                
                  <div>Go Back to <span style={{borderBottom:"2px solid #f14880",cursor:"pointer"}} onClick={()=>window.location.replace('/stylori')}>
                   Stylori
                    </span>
                    </div>
              
                </Grid>
                <Grid item style={{display:"flex",alignItems:"center"}}>
                <ArrowLeftIcon fontSize="small"/>
                  <div>Go Back to <span style={{borderBottom:"2px solid #06ab9f",cursor:"pointer"}} onClick={()=>window.location.replace('/styloriSilver')}>
                      Stylori Silver
                    </span>
                    </div>
                </Grid>      
            </Grid>
          </Grid>
          
          
          
          <Grid item xs={1} style={{display:"flex",justifyContent:"center"}}>
             <Divider variant="vertical"/>
          </Grid>     
          <Grid item xs={4}>
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
      if (val?.isActive == false) {
        productIsActive = val?.isActive;
        productURL = val?.skuUrl;
      }
    });
    let path = window.location.pathname.split("/").pop();

    return (
      <div>
        {path == "checkout" ? (
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
                isCart={true}
                productURL={productURL}
                productIsActive={productIsActive ?? ""}
                class={`chckout-page-buynow ${classes.buttons}`}
              />
            </div>

        )}
      </div>
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
    let path = window.location.pathname.split("/").pop();
    const { classes } = this.props;
     console.log(props,"sad")
    return (
      <div>
        <Grid container xs={12} lg={10} spacing={2}>
        <Grid item container className="coupon" xs={12}>
           <Grid item style={{display:'flex',alignItems:"center"}} xs={11}>
             <img src={percentage}></img>
             <Typography style={{color:'#6D6E71',marginLeft:5}}>Apply Coupon</Typography>
           </Grid>
           <Grid item xs={1}>      
             <ArrowRightIcon className="arrow" fontSize="medium" />   
           </Grid>
        </Grid>

        <Grid item container className="summary" xs={12}>
          <Typography className="summaryText">Order Summary</Typography>
        </Grid>

        <Grid item container style={{ display: "flex"}} xs={12}>
          <Grid item xs={6} />
          <Grid item container xs={12} spacing={12}>
            {/* {dataCard1.map(val => */}
            <Grid item xs={7}>
              <Typography className={`subhesder ${classes.normalfonts}`}>
                Subtotal
              </Typography>
              {yousave !== 0 || props.cartFilters.tax_price ? (
                <Typography className={`subhesder ${classes.normalfonts}`}>
                  You Saved
                </Typography>
              ) : null}

              {props.cartFilters.tax_price ? (
                <Typography className={`subhesder ${classes.normalfonts}`}>
                  {props.cartFilters.coupon_type}
                </Typography>
              ) : (
                ""
              )}
              <Typography className={`subhesder ${classes.normalfonts}`}>
                Shipping
              </Typography>
              <Typography
                className={`subhesder-totsl-size ${classes.normalfonts}`}
              >
                Grand Total
              </Typography>
            </Grid>
            <Grid item xs={5} style={{textAlign:"end"}}>
              <Typography className={`subhesder ${classes.normalfonts}`}>
                {props.cartFilters.gross_amount
                  ? Math.round(props.cartFilters.gross_amount)
                  : Math.round(dataCard1)}
              </Typography>
              {yousave !== 0 || props.cartFilters.tax_price ? (
                <Typography className={`subhesder ${classes.normalfonts}`}>
                  {props.cartFilters.tax_price
                    ? Math.round(yousave) + props.cartFilters.tax_price
                    : Math.round(yousave)}
                </Typography>
              ) : null}
              {
                // yousave !== 0  ? <Typography className={`subhesder ${classes.normalfonts}`}>{Math.round(yousave) + props.cartFilters.tax_price}</Typography> : null
              }

              {props.cartFilters.tax_price ? (
                <Typography className={`subhesder ${classes.normalfonts}`}>
                  {props.cartFilters.tax_price}
                </Typography>
              ) : null}
              <Typography className={`subhesder ${classes.normalfonts}`}>
                {props.shipping_charge}{" "}
              </Typography>
              <Typography
                className={`subhesder-totsl-size ${classes.normalfonts}`}
              >
                {props.cartFilters.discounted_amount
                  ? Math.round(props.cartFilters.discounted_amount)
                  : Math.round(dataCard1 - discounted_price)}
              </Typography>
            </Grid>
            {/* // )}  */}
          </Grid>
        </Grid>

        <Grid item container xs={12} className="checkout">
          {this.checkoutbutton()}
        </Grid>
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
    const dataCarousel = {
      slidesToShow: 1,
      arrows: false,
    };
    var data = this.props.data;

    const { classes } = this.props;
    // alert(discounted_price)
    let path = window.location.pathname.split("/").pop();

    return (
      <Grid>
        <Hidden smDown>
          {window.location.pathname === "/cart" ||
          window.location.pathname === "/checkout" ? (
            <Container>{this.row(this.props)}</Container>
          ) : (
            <>{this.row(this.props)}</>
          )}
        </Hidden>
        <Hidden mdUp>
          <CardSmallScreen
            data={this.props.data}
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
