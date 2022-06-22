import React from "react";
import CartCard from "components/Checkout/CartCard";
import {
  Grid,
  Container,
  Hidden,
  Typography,
  Divider,
} from "@material-ui/core";
import Header from "components/SilverComponents/Header";
import "screens/Stylori/index.css";
import { CartContext, ProductDetailContext } from "context";
import cart from "mappers/cart";
import "screens/screens.css";
import styles from "../components/Checkout/style";
import { withStyles } from "@material-ui/core/styles";
import "./index.css";
import NeedHelp from "../components/needHelp";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";

class Cart extends React.Component {
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.fbq("track", "PageView");
    ReactPixel.fbq("track", "AddToCart");


    let gData = [];
    let TData = this?.props?.data;

    TData.map((l) => {
      let data = {
        name: l?.prdheader,
        id: l?.skuId,
        price: l?.dataCard1[0].offerPrice,
        category: l?.productType,
        quantity: l?.qty ?? 1,
      };
      gData.push(data);
      return 0;
    });
    const tagManagerArgs = {
      gtmId: "GTM-54JTMML",
      event: "addToCart",
      dataLayer: {
        ecommerce: {
          currencyCode: "INR",
          add: {
            products: gData,
          },
        },
      },
    };

    TagManager.initialize(tagManagerArgs);
  }
  render() {
    const { data, isStateFilterContextQty } = this.props;

    let path = window.location.pathname.split("/").pop();
    return (
      <Grid container  className="noproductsfound_container">
        <Hidden smDown>
          <Grid container spacing={12}>
            <Header wishlist={this.props.wishlistdata} />
          </Grid>

          <div
            className="cart-ovralldiv-media"  
          >
            <Grid Container spacing={12} style={{height: this.props.data.length > 2 ? "70vw" :"50vw"}}>
              {path === "checkout" ? (
                ""
              ) : (
                <Grid item container className="cardTitle">
                  <Grid item>
                    <Typography className="cart">SHOPPING CART</Typography>
                  </Grid>
                  <Grid item>
                    <Divider className="cardBorder" />
                  </Grid>
                </Grid>
              )}
              {this.props.data.length > 0 ? (
                <Grid item xs={12}>
                  <CartCard
                    data={data}
                    isStateFilterContextQty={isStateFilterContextQty}
                  />
                </Grid>
              ) : (
                <>
                  <div className="noproductsfound">
                    There are no items in this cart.{" "}
                  </div>
                  <a href="/jewellery" className="highlighter">
                    <div className="continueshopping"> Continue shopping</div>
                  </a>
                </>
              )}
            </Grid>
          </div>
        </Hidden>
        <Hidden mdUp>
          {path === "checkout" ? (
            ""
          ) : (
            <Grid container spacing={12}>
              <Header wishlist={this.props.wishlistdata} />
            </Grid>
          )}
          <Container>
            <Grid Container spacing={12}>
              {this.props.data.length > 0 ? (
                <Grid item xs={12}>
                  <CartCard
                    data={data}
                    isStateFilterContextQty={isStateFilterContextQty}
                  />
                </Grid>
              ) : (
                <>
                  <div className="noproductsfound">
                    There are no items in this cart.
                  </div>
                  <a href="/jewellery">
                    {" "}
                    <div className="continueshopping"> Continue shopping</div>
                  </a>
                </>
              )}
            </Grid>
          </Container>
        </Hidden>
        <>
          <Hidden smDown>
            <div
              style={{
                position: "fixed",
                bottom: "10%",
                right: 0,
                zIndex: 20,
              }}
            >
              <NeedHelp position="top" />
            </div>
          </Hidden>
          <Hidden mdUp>
            <div
              style={{
                position: "fixed",
                top: "50%",
                right: 0,
                zIndex: 20,
              }}
            >
              <NeedHelp position="top" />
            </div>
          </Hidden>
        </>
      </Grid>
    );
  }
}

const Components = (props) => {
  let {
    CartCtx: {
      data,
      loading,
      error,
      allorderdata,
      wishlistdata,
      NewUser,
    },
  } = React.useContext(CartContext);
  const {
    ProductDetailCtx: { filters },
  } = React.useContext(ProductDetailContext);
  // let { quantity } = filters;

  let content, mapped;
  let _data = {};

  if (Object.keys(NewUser).length === 0) {
    _data = data;
  } else {
    _data = NewUser;
    mapped = cart(_data);
  }
  if (!loading && !error) {
    if (Object.keys(_data).length !== 0) {
      mapped = cart(_data);
    }
  }

  if (Object.keys(_data).length === 0) {
    content = window.location.href.toLowerCase().includes("silver") ? (
      <div className="overall-loader">
        <div id="loadingsilver"></div>
      </div>
    ) : (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  } else
    content = (
      <Cart
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        isStateFilterContextQty={filters.quantity}
      />
    );

  return content;
};

export default withStyles(styles)(Components);
