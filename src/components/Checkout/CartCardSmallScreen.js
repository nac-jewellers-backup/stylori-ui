import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box, Button, Divider, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Pricing from "../Pricing/index";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import { NavLink } from "react-router-dom";
import "./Cart.css";
import { CDN_URL, API_URL } from "config";
import Quantity from "../quantity/index";
import { Slideshow } from "components";
import WishlistButton from "./Wishlistadd";
import CurrencyConversion from "utils/CurrencyConversion";

function MediaControlCard(props) {
  console.log("propsss",props);
  const { classes } = props;
  const getImage = (image) => {
    const productId = image?.[0]?.imageUrl?.split("/");
    return `${CDN_URL}${productId?.[0]}/${productId?.[1]}/1000X1000/${productId?.[2]}`
  }
  
  const handleDeleteLocalStorage = (e, val) => {
    var local_storage = JSON.parse(localStorage.getItem("cartDetails"));
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
          localStorage.setItem("cartDetails", localstorage);
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
        alert("You removed this product successfully");
        window.location.reload();
      } else {
        localStorage.removeItem("cartDetails", _products);
        alert("You removed this product successfully");
        window.location.reload();
      }
    }
  };

  const filter_image = (imges__val, name, details) => {
    var image_urls;
    const width = window.innerWidth;
    if (imges__val?.imageUrl && imges__val?.imageUrl.length > 0) {
      if (name && name === "Metal") {
        var valu = details.split(" ");
        var valu1 = valu[1];
        var valu2 = valu1[0];

        var cnt = imges__val && imges__val?.imageUrl.split("/");
        var cnt_b = cnt[2].split("-");
        var cnt_c = cnt_b[1];
        if ((cnt_c && cnt_c[1]) === valu2) {
          var browser_type = JSON.parse(localStorage.getItem("browserDetails"));
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
        // })
      }
    }
  };
  const checkMaterial = (material) => {
    let _data = material.map((val) => val.toLowerCase());
    if (_data.indexOf("silver") > -1) return false;
    else return true;
  };
  const dataCarousel = {
    slidesToShow: 1,
    arrows: false,
  };
  const handleRemoveCombo = (prod)=> {
    let cart_id = JSON.parse(localStorage.getItem("cart_id")).cart_id;
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
    const comboProducts = prod?.filter((val) => val?.mainItem !== val?.productId);
    const localRemoveQuantity = prod?.map((val) => val?.generatedSku)
    const localStorageQty = JSON.parse(localStorage.getItem("quantity"));
    localRemoveQuantity.forEach((item) => delete localStorageQty[item]);
    let removeCombo = {
      cart_id: cart_id,
      product_id: [],
      combo_products:{
        main_product: prod?.[0]?.mainItem,
        comboProducts:comboProducts?.map((val) => {
          return {
            product_id: val?.productId
          }
        })
      }
    }
    
    const getCart = JSON.parse(localStorage.getItem("cartDetails"));
    const removeProductsSku = prod?.map((val) => val?.generatedSku);
    let newProdcart = []
    for (let item of getCart.products){ 
      if(removeProductsSku.includes(item["sku_id"])){
      }else{
        newProdcart.push(item)
      }
    }
    getCart["products"] = newProdcart;
        
    fetch(`${API_URL}/removecartitem`, {
      method: "post",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...removeCombo,
      }),
    })
    .then(status)
      .then(json)
      .then((val) => {
        localStorage.setItem("quantity",JSON.stringify(localRemoveQuantity));
        localStorage.setItem("cartDetails",JSON.stringify(getCart))
        window.location.reload();
      })
  }

  const getTotal = (discount,dicountVal,item) => {
    debugger;
    let total = 0;
    let amount = 0;
    item.forEach((val) => {
      total += val?.dataCard1?.[0]?.offerPrice
    });
    if(discount === "PERCENTAGE"){
       amount = ((100 - dicountVal) * total)/100;
      return amount
    }else if(discount === "FLAT"){
       amount = total - dicountVal 
       return amount
    }else{
      return total
    }
  }
  return (
    <div style={{ paddingTop: "10px" }}>
      {/* <Grid container>
        <Grid xs={6} > */}
      {props?.checkout ? null : (
        <div>
          <span className="cartTitle"> Shopping cart </span> <br />
          <Divider className="cardBorderMobile" style={{ width: "none" }} />
        </div>
      )}

      <br />
      <br />
      <br />
{
               (
                <>
                {props?.parentState?.comboProd?.length > 0 &&
                 props?.parentState?.comboProd?.map((prod) => (
                 
                <Grid container 
                  style={{
                    backgroundColor:"#fff",
                    height:"100%",
                    padding:"20px 20px"
                  }}
                  className={classes.comboBox}
                >
                  <Grid item xs={12}>
                    <div  style={{marginBottom:"15px",display:"flex",alignItems:"center"}}>
                      {prod?.map((val,index,arr) => (
                        <div> 
                          <div className={classes.alignItems}>
                              <img src={getImage(val?.fadeImages)} alt="" class= {window.location.pathname === "/checkout" ? "imageComboCheckout" : "imageCombo"} />
                              {val?.fadeImages?.[0]?.imageUrl.length > 2 && index !== arr.length - 1 && ( 
                                <Box className={classes.plusSx}>+</Box>
                              )}
                          </div>
                          <div>
                            <Typography className={classes.comboText}>{val?.productId}</Typography>
                          </div>
                          <div className={classes.alignItems} style={{gap:"6px"}}>
                              <Typography 
                                className={classes.comboText} 
                                style={{color:"#454f7a",fontWeight:600}}
                              >
                               {val?.discountCombo?.discountType === "PERCENTAGE" ? CurrencyConversion(val?.dataCard1?.[0]?.price) : CurrencyConversion(val?.dataCard1?.[0]?.offerPrice)}    
                              </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Typography className={classes.comboText}>
                      {`(Get ${prod?.[0]?.discountCombo?.discountType === "PERCENTAGE" ? "" : "FLAT"} ${prod?.[0]?.discountCombo?.discountType === "PERCENTAGE" ? `${prod?.[0]?.discountCombo?.discountValue} %`: CurrencyConversion(prod?.[0]?.discountCombo?.discountValue)} off on Combo)`}
                    </Typography>
                      <div className={classes.alignItems} style={{gap:"8px"}}>
                        <Typography 
                          style={{color:"#454f7a",fontWeight:600,fontSize:"18px"}}
                        >
                          {CurrencyConversion(getTotal(prod?.[0]?.discountCombo?.discountType,prod?.[0]?.discountCombo?.discountValue,prod))} 

                        </Typography>
                        <Typography 
                          style={{color:"#454f7a",fontWeight:600,fontSize:"14px",textDecoration:"line-through"}}
                        >
                          {CurrencyConversion(getTotal("","",prod))}
                        </Typography>
                      </div>
                  </Grid>
                  {window.location.pathname !== "/checkout" && 
                  <Grid container style={{margin:"20px 0px 0px"}}>
                    <Grid xs={6}>
                      <Button
                        onClick={()=>handleRemoveCombo(prod)}
                        fullWidth
                        variant="contained"
                        className={classes.comboButtons}
                        style={{
                          fontSize:"14px",
                          marginBottom:"8px"
                        }}
                      >           
                        &nbsp;Remove
                      </Button>
                    </Grid>
                    <Grid xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        className={classes.comboButtons}
                      >           
                        &nbsp;Move to Wishlist
                      </Button>     
                    </Grid>
                  </Grid>}
                </Grid>
                 ))
                }
                </>
              )
            }
      {props?.parentState?.nonComboItems?.map((dataval) =>
        dataval.productsDetails.map((val) => {
          return (
            <Box className={classes.card}>
              {dataval.productsDetails[0].namedetail.map((val) =>
                dataval.fadeImages.map((val_imgUrl) => {
                  return filter_image(val_imgUrl, val.name, val.details) &&
                    filter_image(val_imgUrl, val.name, val.details).length >
                      0 ? (
                    window.location.pathname !== "/checkout" ? (
                      <div style={{ width: "195px" }}>
                        <NavLink
                          to={dataval.skuUrl}
                          style={{ textDecoration: "none" }}
                        >
                          <Slideshow
                            className="image"
                            fadeImages={filter_image(
                              val_imgUrl,
                              val.name,
                              val.details
                            )}
                            dataCarousel={dataCarousel}
                          />
                        </NavLink>
                      </div>
                    ) : (
                      <div style={{ width: "195px" }}>
                        <Slideshow
                          className="image"
                          fadeImages={filter_image(
                            val_imgUrl,
                            val.name,
                            val.details
                          )}
                          dataCarousel={dataCarousel}
                        />
                      </div>
                    )
                  ) : null;
                })
              )}
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  {window.location.pathname !== "/checkout" ? (
                    <NavLink
                      to={dataval.skuUrl}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        component="div"
                        variant="h6"
                        className={
                          props.checkout
                            ? `${classes.contents} ${classes.normalfontsCheck}`
                            : `${classes.contents} ${classes.normalfonts}`
                        }
                      >
                        {val.pro_header}
                      </Typography>
                    </NavLink>
                  ) : (
                    <Typography
                      component="div"
                      variant="h6"
                      className={
                        props.checkout
                          ? `${classes.contents} ${classes.normalfontsCheck}`
                          : `${classes.contents} ${classes.normalfonts}`
                      }
                    >
                      {val.pro_header}
                    </Typography>
                  )}

                  <Typography
                    className={
                      props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `title ${classes.normalfonts}`
                    }
                  >
                    {val.namedetail[0].details}
                  </Typography>
                  <Typography
                    className={
                      props.checkout
                        ? `${classes.normalfontsCheck}`
                        : `subhesder ${classes.normalfonts}`
                    }
                  >
                    {window.location.pathname === "/checkout" ||
                    checkMaterial(dataval.materialName) ||
                    !Boolean(dataval?.[0]?.maxOrderQty) ||
                    dataval?.[0]?.maxOrderQty < 2 ? (
                      `Quantity ${
                        JSON.parse(localStorage.getItem("quantity"))[
                          dataval.generatedSku
                        ]
                      }`
                    ) : (
                      <Quantity data={[dataval]} cart={true} />
                    )}
                  </Typography>
                  {val?.skuId === dataval.productSkuId ? (
                    <Typography
                      className={
                        props.checkout
                          ? `${classes.normalfontsCheck}`
                          : `subhesder ${classes.normalfonts}`
                      }
                    >
                      {val.shipby}
                    </Typography>
                  ) : (
                    ""
                  )}
                  {dataval.dataCard1.map((val) => (
                    <Pricing
                      price={val.price}
                      offerPrice={val.offerPrice}
                      offerDiscount={"25% - OFF"}
                      quantity={
                        JSON.parse(localStorage.getItem("quantity"))[
                          dataval.generatedSku
                        ]
                      }
                    ></Pricing>
                  ))}
                </CardContent>
                <div className={classes.controls}>
                  {window.location.pathname !== "/checkout" ? (
                    <div>
                      <Button
                        id={dataval.generatedSku}
                        onClick={(event) => handleDeleteLocalStorage(event)}
                        fullWidth
                        variant="contained"
                        style={{
                          color: "gray",
                          width: "175px",
                          marginTop: "20px",
                          border: "1.46px solid #919396",
                          backgroundColor: "white",
                          borderRadius: "0px",
                          boxShadow: "none",
                          padding: "5px 40px 5px 40px",
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
                    <div style={{ marginTop: "-8px" }}>
                      <WishlistButton
                        sku={dataval.generatedSku}
                        productId={dataval.productId}
                        style={{ marginTop: 0 }}
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
                  {/* {window.location.pathname !== "/checkout" ? (
                    <div
                      variant="contained"
                      style={{ cursor: "pointer", fontSize: "0.9rem" }}
                      className={`${classes.normalfonts} ${classes.controls}`}
                      // className="highliter"
                    >
                      &nbsp;
                      <div
                        id={dataval.generatedSku}
                        className="highliter"
                        productid={dataval}
                        onClick={(e) => handleDeleteLocalStorage(e, val)}
                      >
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
                        <span> &nbsp;&nbsp;</span>
                        <i style={{ fontSize: "16px" }} class="fa">
                          {" "}
                          &#xf014;
                        </i>
                        &nbsp;<span className="highliter">Remove</span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}{" "} */}
                </div>
              </div>
            </Box>
          );
        })
      )}
    </div>
  );
}
export default withStyles(styles)(MediaControlCard);
 