import React from "react";
import { Redirect } from "react-router-dom";
// import Checkoutbreadcrum from '../../components/Checkout/checkoutbreadcrum';
// import BreadCrumb from '../../components/BreadCrumb/index'
import CartCard from "components/Checkout/CartCard";
import Footer from "components/Footer/Footer";
import { Grid, Container, Hidden } from "@material-ui/core";
// import CustomSeparator from '../../components/BreadCrumb/index'
import Header from "components/SilverComponents/Header";
import "screens/Stylori/index.css";
import { CartContext, ProductDetailContext } from "context";
import cart from "mappers/cart";
import "screens/screens.css";
import CustomSeparator from "../components/BreadCrumb/index";
import styles from "../components/Checkout/style";
import { withStyles } from "@material-ui/core/styles";
import "./index.css";
import { NavLink } from "react-router-dom";
import NeedHelp from "../components/needHelp";
import { Helmet } from "react-helmet";
import ReactPixel from "react-facebook-pixel";

// data.map(data=>{
// return(
//     <Grid item xs={12}>
//     <CartCard data={data}/>
//     </Grid>
//         )
//     })
const breadcrumsdata = [
  { title: "Shopping Bag" },
  { title: "Login/ Register" },
  { title: "Address Detail" },
  { title: "Payment Options" },
  { title: "Order Confirmation" },
];
const cartsubdata = [
  {
    name: "100% Certified Jewellery",
    icon: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/icon-star.png",
  },
  {
    name: "Secure Payments",
    icon: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/icon-lock.png",
  },
  {
    name: "Free Insured Shipping",
    icon: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/icon-van.png",
  },
  {
    name: "25-Day Returns",
    icon: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/icon-return.png",
  },
];
class Cart extends React.Component {
  componentDidMount() {
    // ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    // ReactPixel.track("AddToCart");

    // ReactPixel.fbq("track", "PageView");
    // ReactPixel.fbq("track", "AddToCart");
  }
  render() {
    const { data, classes, isStateFilterContextQty } = this.props;

    let path = window.location.pathname.split("/").pop();
    return (
      <Grid container>
        <Helmet>
          {/* <script>
            {`!function(f,b,e,v,n,t,s) 
{if(f.fbq)return;n=f.fbq=function(){n.callMethod? 
n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
n.queue=[];t=b.createElement(e);t.async=!0; 
t.src=v;s=b.getElementsByTagName(e)[0]; 
s.parentNode.insertBefore(t,s)}(window, document,'script', 
'https://connect.facebook.net/en_US/fbevents.js'); 
fbq('init', '1464338023867789'); 
fbq('track', 'PageView'); 
fbq('track', 'AddToCart'); `}

          </script>
          <noscript>
            {`<img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=1464338023867789&ev=PageView&noscript=1"
            />`}
          </noscript> */}
        </Helmet>

        <Hidden smDown>
          <Header wishlist={this.props.wishlistdata} />
          {path === "checkout" ? (
            ""
          ) : (
            <CustomSeparator
              arrowicon="cart-head-arrows"
              className={`breadcrums-header ${classes.normalcolorback}`}
              classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
              list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
              data={this.props.data.length > 0 ? this.props.data[0].breadcrumsdata : breadcrumsdata}
              subdata={this.props.data.length > 0 ? this.props.data[0].cartsubdata : cartsubdata}
            />
          )}
          <div className="cart-ovralldiv-media " style={{ marginTop: "3%" }}>
            <Grid Container spacing={12}>
              {this.props.data.length > 0 ? (
                <Grid item xs={12}>
                  <CartCard data={data} isStateFilterContextQty={isStateFilterContextQty} />
                </Grid>
              ) : (
                <>
                  <div className="noproductsfound">There are no items in this cart. </div>
                  <a href="/jewellery" className="highlighter">
                    <div className="continueshopping"> Continue shopping</div>
                  </a>
                </>
              )}
            </Grid>
          </div>

          <Grid Container spacing={12}>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          {path === "checkout" ? (
            ""
          ) : (
            <Grid container spacing={12}>
              {/* <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000", width: "100%" }}> */}
              <Header wishlist={this.props.wishlistdata} />
              {/* </Grid> */}
            </Grid>
          )}
          <Container>
            <Grid Container spacing={12}>
              {this.props.data.length > 0 ? (
                <Grid item xs={12}>
                  <CartCard data={data} isStateFilterContextQty={isStateFilterContextQty} />
                </Grid>
              ) : (
                <>
                  <div className="noproductsfound">There are no items in this cart.</div>
                  <a href="/jewellery">
                    {" "}
                    <div className="continueshopping"> Continue shopping</div>
                  </a>
                </>
              )}
            </Grid>
          </Container>
          <Grid Container spacing={12}>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
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
// export default Checkout;

const Components = (props) => {
  let {
    CartCtx: { cartFilters, data, loading, error, allorderdata, wishlistdata, NewUser },
  } = React.useContext(CartContext);
  const {
    ProductDetailCtx: { filters },
    setFilters,
  } = React.useContext(ProductDetailContext);
  let { quantity } = filters;
  //  React.useEffect(()=>{
  //     let localStorageQuantity = localStorage.getItem('quantity') ? JSON.parse(localStorage.getItem('quantity')) : null

  //     if(localStorageQuantity){

  //       quantity = localStorageQuantity
  //       setFilters({...filters, quantity})
  //     }
  //  }, [])
  // alert(JSON.stringify(filters))
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

  if (Object.keys(_data).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else
    content = (
      <Cart
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        isStateFilterContextQty={filters.quantity}
      />
    );
  // if (mapped !== undefined && mapped !== null) {
  //     localStorage.setItem("a__c_t", mapped && mapped.length)
  // }
  return content;
};

export default withStyles(styles)(Components);
