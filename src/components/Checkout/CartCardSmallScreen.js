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

function MediaControlCard(props) {
  const { classes } = props;
  const { dataCard1 } = props.data;

  return (
    <div style={{ background: "whitesmoke", paddingTop: "10px" }}>
      {/* <Grid container>
        <Grid xs={6} > */}
      <span style={{ color: "#666", fontSize: "14px", margin: "0px 0px 10px" }}>   Shopping cart  </span> <br />
      <div> <span style={{ color: "#394578", fontSize: "14px", fontWeight: "bold" }}>Item:</span> ({props.data.length})</div><br />
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
                  <Pricing price={val.price} offerPrice={val.offerPrice}  >
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
                    </label>
                  </Pricing>
                )}
              </CardContent>
              <div className={classes.controls}>
                <NavLink to="/checkout" style={{ textDecoration: 'none' }}>
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
                </NavLink>

                {window.location.pathname !== "/checkout" ?
                  <div
                    variant="contained"
                    style={{ cursor: "pointer", fontSize: "0.9rem" }}
                    className={`${classes.normalfonts} ${classes.controls}`}
                  >
                    &nbsp;
                    <div id={val.namedetail[0].details} onClick={(event) => props.handleDeleteLocalStorage(event)}>
                      <i style={{ fontSize: "16px" }} class="fa">
                        &#xf014;
            </i>&nbsp;<span
                        style={{ borderBottom: "1px solid #394578" }}>Remove</span>
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