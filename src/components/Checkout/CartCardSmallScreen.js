import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Grid, } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import { productsDetails } from '../product-image-slider/producthoverData';
// import { dataCard1 } from '../ProductCard/ProductData';
import { useDummyRequest } from '../../hooks';
import Pricing from '../Pricing/index'
import { productcarddatas } from '../../mappers';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import { NavLink } from 'react-router-dom';
import { API_URL } from "config"
function MediaControlCard(props) {
  const { classes } = props;
  const { dataCard1 } = props.data;
  const handleDeleteLocalStorage = (e) => {
    var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
    var currentValue = e.target.id
    // console.clear()
    // console.log("e-clear",e.target.id)

    var a = local_storage.products.filter(val => {
      if (currentValue !== val.sku_id) {
        return val
      }
    })
    function status(response) {

      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function json(response) {
      return response.json()
    }


    let cart_id = JSON.parse(localStorage.getItem('cart_id')).cart_id
    let bodyVariableRemoveCartItem = { cart_id: cart_id, product_id: currentValue }
    fetch(`${API_URL}/removecartitem`, {

      method: 'post',
      // body: {query:seoUrlResult,variables:splitHiphen()}
      // body: JSON.stringify({query:seoUrlResult}),

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...bodyVariableRemoveCartItem
      })
    })
      .then(status)
      .then(json).then(val => {
        sessionStorage.removeItem('updatedProduct');
        alert(JSON.stringify(val.message))
        var cartId = JSON.parse(localStorage.getItem('cartDetails')).cart_id
        var userId = JSON.parse(localStorage.getItem('cartDetails')).user_id
        var localstorage = JSON.stringify({ "cart_id": `${cartId}`, "user_id": `${userId}`, "products": a })
        localStorage.setItem('cartDetails', localstorage)
        window.location.reload();
      })

  }
  return (
    <div style={{ paddingTop: "10px" }}>
      {/* <Grid container>
        <Grid xs={6} > */}
      <span style={{ color: "#666", fontSize: "14px", margin: "0px 0px 10px" }}>   Shopping cart  </span> <br />
      {/* <div> <span style={{ color: "#394578", fontSize: "14px", fontWeight: "bold" }}>Item:</span> ({props.data.length})</div><br /> */}
      {/* </Grid>
        <Grid xs={6}  >
          jh</Grid>
      </Grid><br /> */}

      {props.checkoutbutton}<br /><br /><br />
      {props.data.map(dataval => (
        dataval.productsDetails.map(val => (
          <Card className={classes.card}>
            {window.location.pathname !== "/checkout" ?
              <div style={{ width: "195px" }}>
                <NavLink to={`jewellery/${dataval.productType}/${dataval.materialName[0]}/${val.pro_header}?skuId=${dataval.generatedSku}`} style={{ textDecoration: 'none' }}>
                  <img
                    src={dataval.fadeImages[0]}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </NavLink>   </div>
              :
              <div style={{ width: "195px" }}>
                <img
                  src={dataval.fadeImages[0]}
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            }

            <div className={classes.details}>
              <CardContent className={classes.content}>
                {window.location.pathname !== "/checkout" ?
                  <NavLink to={`jewellery/${dataval.productType}/${dataval.materialName[0]}/${val.pro_header}?skuId=${dataval.generatedSku}`} style={{ textDecoration: 'none' }}>
                    <Typography
                      component="div"
                      variant="subtitle1"
                      className={`${classes.contents} ${classes.normalfonts}`}
                    >
                      {val.pro_header}
                    </Typography>
                  </NavLink> :
                  <Typography
                    component="div"
                    variant="subtitle1"
                    className={`${classes.contents} ${classes.normalfonts}`}
                  >
                    {val.pro_header}
                  </Typography>
                }



                {dataval.dataCard1.map(val =>
                  <Pricing price={val.price} offerPrice={val.offerPrice} offerDiscount={"25% - OFF"}   >
                    <label className={classes.labelPrice}>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className={classes.labelPriceDel}
                      >
                        <del>{val.offerPrice}</del>
                      </Typography>
                      &nbsp;
            <Typography
                        variant="subtitle1"
                        style={{ color: "#ed1165" }}
                        className={classes.labelPriceOff}
                      >
                        {val.price}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        className={classes.labelPriceDel}
                      >
                        <del>{val.offerPrice}</del>
                      </Typography>
                    </label>
                  </Pricing>
                )}
              </CardContent>
              <div className={classes.controls}>
                {/* <NavLink to="/checkout" style={{ textDecoration: 'none' }}>
                  <Button
                    className={`btn-cart-resp ${classes.buttons}`}
                    variant="contained"
                    style={{
                      color: "white",
                      fontSize: "0.7rem"
                    }}
                  >
                    Buy Now
          </Button>
                </NavLink> */}

                {window.location.pathname !== "/checkout" ?
                  <div
                    variant="contained"
                    style={{ cursor: "pointer", fontSize: "0.9rem" }}
                    className={`${classes.normalfonts} ${classes.controls}`}
                  >
                    &nbsp;
                    <div id={val.namedetail[4].details} productid={dataval} onClick={(e) => handleDeleteLocalStorage(e, val)}>
                      <i style={{ fontSize: "16px" }} class="fa"> &#xf014;</i>&nbsp;<span>Remove</span>
                    </div>

                  </div>
                  : ""}  </div>
            </div>
          </Card>
        ))
      ))}
    </div>
  );
}
export default withStyles(styles)(MediaControlCard)