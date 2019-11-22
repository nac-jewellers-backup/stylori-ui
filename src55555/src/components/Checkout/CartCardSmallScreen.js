import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import { productsDetails } from '../product-image-slider/producthoverData';
// import { dataCard1 } from '../ProductCard/ProductData';
import { useDummyRequest } from '../../hooks';
import Pricing from '../Pricing/index'
import { productcarddatas } from '../../mappers';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
function MediaControlCard(props) {
  const { classes } = props;
  const { dataCard1 } = props.data;

  return (
    <div style={{ background: "whitesmoke", paddingTop: "10px" }}>
      {dataCard1.map(val => (
        <Card className={classes.card}>
          <div style={{ width: "195px" }}>
            <img
              src='http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg'
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                component="div"
                variant="subtitle1"
                className={`${classes.contents} ${classes.normalfonts}`}
              >
                {val.title}
              </Typography>


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
            </CardContent>
            <div className={classes.controls}>
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
              <label
                variant="contained"
                style={{ cursor: "pointer", fontSize: "0.9rem" }}
                className={`${classes.normalfonts}`}
              >
                <i style={{ fontSize: "16px" }} class="fa">
                  &#xf014;
            </i>
                &nbsp;
            <span style={{ borderBottom: "1px solid #394578" }}>Remove</span>
              </label>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
export default withStyles(styles)(props => {
  const { mapped } = useDummyRequest(productcarddatas);
  if (Object.keys(mapped).length === 0) return ''

  return <MediaControlCard {...props} data={mapped} />
});