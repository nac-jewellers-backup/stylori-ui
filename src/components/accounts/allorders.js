import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  Button,
  Box,
  Divider,
  Hidden,
} from "@material-ui/core";
import "./accounts.css";
import "../Checkout/Cart.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import CurrencyConversion from 'utils/CurrencyConversion';
import moment from "moment";
import Pricing from "../Pricing/index";
import { CDN_URL } from "config";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";


const width = window.innerWidth;
function myFunc(total, num) {
  return Math.round(total + num);
}
class Allorders extends React.Component {
  state = {
    expanded: [],
    check_img: null,
  };
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.fbq("track", "PageView");
    window.location.href.includes("paymentsuccess") && ReactPixel.track("Purchase", {
      value:
        this.props?.allorderdata?.data?.allOrders?.nodes[0]
          ?.shoppingCartByCartId?.discountedPrice,
      currency: "INR",
    });

    // GTM
    let gData = [];
    let TData =
      this?.props?.allorderdata?.data?.allOrders?.nodes[0]?.shoppingCartByCartId
        ?.shoppingCartItemsByShoppingCartId.nodes;

      TData?.length && TData.map((l) => {
      let data = {
        id: l?.transSkuListByProductSku?.generatedSku,
        name: l?.transSkuListByProductSku?.productListByProductId?.productName,
        list_name: "Search Results",
        category:
          l?.transSkuListByProductSku?.productListByProductId?.productType,
        list_position: 1,
        quantity: l?.qty,
        price: l?.transSkuListByProductSku?.markupPrice,
      };
      gData.push(data);
      return l;
    });

    TData && TagManager.initialize({ gtmId: "GTM-54JTMML" });
    TData &&
      TagManager.dataLayer({
        dataLayer: {
          event: "ecomm_event",
          transactionId:
            this?.props?.allorderdata?.data?.allOrders?.nodes[0].id,
          transactionAffiliation: "Google online store",
          transactionTotal:
            this?.props?.allorderdata?.data?.allOrders?.nodes[0]
              .shoppingCartByCartId.discountedPrice,
          currency: "INR",
          transactionProducts: gData,
        },
      });

    // const tagManagerArgs = {
    //   gtmId: "GTM-54JTMML",
    //   events: {
    //     purchase: "purchase",
    //     transaction_id: this?.props?.allorderdata?.data?.allOrders?.nodes[0].id,
    //     affiliation: "Google online store",
    //     value:
    //       this?.props?.allorderdata?.data?.allOrders?.nodes[0]
    //         .shoppingCartByCartId.discountedPrice,
    //     currency: "INR",
    //     items: gData,
    //   },
    // };
    // TagManager.initialize(tagManagerArgs);
  }

  handleChange = (panel) => (event) => {
    const { expanded } = this.state;
    var valus = expanded === panel ? "" : panel;
    expanded.push(JSON.stringify(valus));
    this.setState({
      expanded,
    });
  };

  calculatetotal = (arr) => {
    var a;
    var dis_price;
    var _val =
      arr?.shoppingCartByCartId?.shoppingCartItemsByShoppingCartId?.nodes?.filter(
        (val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        }
      );
    if (_val.length > 0) {
      a = _val
        .filter((val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        })
        .map((cart) => {
          if (
            (cart !== null || cart !== undefined) &&
            cart.transSkuListByProductSku
          ) {
            dis_price = cart.transSkuListByProductSku.markupPrice;
          }
          return dis_price;
        })
        .reduce(myFunc);
    }

    return CurrencyConversion(a);
  };
  generateShipsBy = (readytoship, vendorDeliveryTime) => {
    var isReadytoShip = readytoship;
    var numberOfDays = vendorDeliveryTime;
    var date = moment().format(" h a");
    if (isReadytoShip) {
      if (JSON.stringify(date) > " 1 pm") {
        return `Ships by  ${moment().add(1, "days").format("MMM Do YYYY")}`;
      }
    } else {
      return (
        `Ships by
        
        ${moment().add(numberOfDays, "days").format("MMM Do YYYY")}`
      );
    }
  };

  ImageUrl = (imgs, metal, paymentsuccess) => {
 
    var check_img;
    var ppp;
    if (paymentsuccess) {

      var metalColor_ = metal;
      var cnt = imgs?.imageUrl.split("/");
      var cnt_b = cnt[2].split("-");
      var cnt_c = cnt_b[1];


      var browser_type = JSON.parse(localStorage.getItem("browserDetails"));

      // if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
        
        check_img = true;
        var resolution = 500;
        var _resolutions =
          width < 960
            ? `${resolution * 2}X${resolution * 2}`
            : `${resolution}X${resolution}`;
        var url_split = imgs && imgs?.imageUrl.split("/");
        var extension_split = url_split && url_split[url_split.length - 1];
        var browser_type_append =
          extension_split &&
          extension_split
            .split(".")[0]
            .concat(`${browser_type && browser_type.browser_type}`);
        url_split[url_split && url_split.length - 1] = browser_type_append;
        url_split.splice(2, 0, _resolutions);
        var url_construct = url_split.join().replace(/\,/g, "/"); //eslint-disable-line
        
        // var img_url = `${baseUi}${url_construct}`
        ppp = `${CDN_URL}${url_construct}`;
      // }
      return ppp;
    } else if( this.props &&
      this.props.allorderdata &&
      this.props.allorderdata.allorderdata &&
      this.props.allorderdata.allorderdata.nodes.length > 0) {

        var vera = this.props.allorderdata.allorderdata.nodes.map((val) => {
          if (val !== undefined && val !== null) {
            var inside =
              val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                (cart) => {
                  if (cart !== undefined && cart !== null) {
                    if (cart !== undefined && cart !== null) {
                      var metalColor_ = metal;
                      var cnt =
                        imgs[0]?.transSkuListByProductSku?.productListByProductId?.productImagesByProductId?.nodes[0]?.imageUrl.split(
                          "/"
                        );
                      var cnt_b = cnt[2].split("-");
                      var cnt_c = cnt_b[1];

                      var browser_type = JSON.parse(
                        localStorage.getItem("browserDetails")
                      );

                      if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
                        check_img = true;

                        var resolution = 500;
                        var _resolutions =
                          width < 960
                            ? `${resolution * 2}X${resolution * 2}`
                            : `${resolution}X${resolution}`;
                        var url_split =
                          imgs &&
                          imgs[0]?.transSkuListByProductSku?.productListByProductId?.productImagesByProductId?.nodes[0]?.imageUrl.split(
                            "/"
                          );
                        var extension_split =
                          url_split && url_split[url_split.length - 1];
                        var browser_type_append =
                          extension_split &&
                          extension_split
                            .split(".")[0]
                            .concat(
                              `${browser_type && browser_type.browser_type}`
                            );
                        url_split[url_split && url_split.length - 1] =
                          browser_type_append;
                        url_split.splice(2, 0, _resolutions);
                        var url_construct = url_split
                          .join()
                          .replace(/\,/g, "/");
                        ppp = `${CDN_URL}${url_construct}`;
                        
                      }
                    }
                  }
                }
              );
          }
        });

        return ppp;
      
    }
  };

  render() {
    // const { expanded} = this.state;
    const { allorderdata } = this.props;
    let gut_lg = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : {};

    // const expanded_ = expanded.map((val) => {
    //   return val;
    // });
    // var check_img = null
    const allDatas = () => {
      if (
        allorderdata &&
        allorderdata.allorderdata &&
        allorderdata.allorderdata.nodes &&
        allorderdata.allorderdata.nodes.length > 0
      ) {
        return allorderdata.allorderdata.nodes;
      }
    };
    const paymentsuccess = true;

    // const _localStorageQTY = localStorage.getItem("quantity")
    //   ? JSON.parse(localStorage.getItem("quantity"))
    //   : 1;


    return (
      <>
        <Helmet></Helmet>
        {/* allorderdata.nodes */}
        {this.props.location.pathname.split("-")[0] === "/account" ? (
          <div className="pt-sm checkout-ovralldiv-media">
            {allorderdata &&
            allorderdata.allorderdata &&
            allorderdata.allorderdata.nodes &&
            allorderdata.allorderdata.nodes.length > 0 ? (
              <div style={{ marginTop: "20px", boxShadow: "none" }}>
                {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                {allDatas().map((val, index) => {
                  return (
                    <ExpansionPanel
                      square
                      style={{
                        boxShadow: "rgb(242, 242, 242) 4px 10px 20px 5px",
                        marginBottom: "10px"
                      }}
                      key={index}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                        className="ckcut-main-body"
                      >
                        <Typography className="text-chck">
                          Order Number : <span>#{val.id}</span> &nbsp;|&nbsp;
                          Order Date :{" "}
                          {moment(val.createdAt).format("Do MMMM YYYY")}
                          <div style={{ float: "right" }}>
                            <Button className="bton_submit">
                              {val.paymentStatus}
                            </Button>{" "}
                          </div>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className="address_details">
                          {/* {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => ( */}
                          <div style={{ width: "100%", marginBottom: "10px" }}>
                            <Grid container spacing={12} lg={12} xs={12}>
                              <Grid
                                item
                                sm={6}
                                lg={6}
                                xs={12}
                                className="order_addres"
                              >
                                <div>
                                  {" "}
                                  <b>Order Number</b>:#{val.id}
                                </div>
                                <br />
                                <div>
                                  <b>Order Date </b> :{" "}
                                  {moment(val.createdAt).format("Do MMMM YYYY")}
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  <b>Payment Method</b>: {val.paymentMode}
                                </div>
                              </Grid>
                              <Grid
                                item
                                sm={6}
                                lg={6}
                                xs={12}
                                className="order_addres_user"
                              >
                                <div>
                                  <b>Shipping Address :</b>
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].firstname}
                                  &nbsp;
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].lastname}
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0]
                                      .addressline1}
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].city +
                                      "-"}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].pincode}
                                </div>
                                <br />
                                <br />
                                {val.shoppingCartByCartId &&
                                val.shoppingCartByCartId.giftwrapsByCartId &&
                                val.shoppingCartByCartId.giftwrapsByCartId
                                  .nodes &&
                                val.shoppingCartByCartId.giftwrapsByCartId.nodes
                                  .length > 0 ? (
                                  <>
                                    <div>
                                      {" "}
                                      <b>Gift to</b> :
                                      {
                                        val.shoppingCartByCartId
                                          .giftwrapsByCartId.nodes[0].giftTo
                                      }
                                    </div>
                                    <br />
                                    <div>
                                      {" "}
                                      <b>Gift message</b> :
                                      {
                                        val.shoppingCartByCartId
                                          .giftwrapsByCartId.nodes[0].message
                                      }
                                    </div>
                                  </>
                                ) : null}
                                {/* <div></div> */}
                              </Grid>
                            </Grid>
                          </div>
                          {/* ))} */}
                          <div style={{ float: "right", fontSize: "18px" }}>
                            Grand Total&nbsp;
                            <span
                              style={{ color: "#ed1165", fontSize: "18px" }}
                            >
                              { CurrencyConversion(
                                  val?.shoppingCartByCartId?.discountedPrice
                                )
                              }
                            </span>
                          </div>
                          {val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                            (cart) => {
                              return (
                                <>
                                  <br />
                                  <Grid
                                    container
                                    spacing={12}
                                    lg={12}
                                    style={{
                                      outline: "none",
                                      padding: " 10px",
                                      boxShadow: " 1px 2px 13px 7px #DEDADA",
                                      marginBottom: "20px",
                                      marginTop: "12px",
                                    }}
                                  >
                                    <Grid item lg={3} sm={4}>
                                      {cart &&
                                        cart.transSkuListByProductSku &&
                                        cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(
                                          (imgs) =>
                                            this?.ImageUrl(
                                              imgs,
                                              cart &&
                                                cart.transSkuListByProductSku &&
                                                cart.transSkuListByProductSku
                                                  .generatedSku,
                                              cart.transSkuListByProductSku
                                                .metalColor,
                                              paymentsuccess
                                            ) ? (
                                              <div className="wishlist_img">
                                                <img
                                                  className="viewport-img"
                                                  src={this?.ImageUrl(
                                                    imgs,
                                                    cart &&
                                                      cart.transSkuListByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .generatedSku,
                                                    cart
                                                      .transSkuListByProductSku
                                                      .metalColor,
                                                    paymentsuccess
                                                  )}
                                                  alt=""
                                                  loading="lazy"
                                                />
                                              </div>
                                            ) : null
                                        )}
                                    </Grid>
                                    <Grid item lg={4} sm={4}>
                                      <Grid
                                        container
                                        spacing={12}
                                        lg={12}
                                        style={{ lineHeight: "20px" }}
                                      >
                                        <b style={{ width: "100%" }}>
                                          {" "}
                                          {cart &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productName}
                                        </b>
                                        <Grid item lg={6} sm={6}>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .generatedSku !== undefined &&
                                              (cart.transSkuListByProductSku
                                                .generatedSku !== null
                                                ? "Product Code"
                                                : null)}
                                          </Typography>

                                          {/* : ""} */}

                                          {/* : ""} */}
                                          {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                          {/* : ""} */}

                                          {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .purity &&
                                            cart.transSkuListByProductSku
                                              .purity !== undefined &&
                                            (cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .purity &&
                                              cart.transSkuListByProductSku
                                                .purity !== null) > 0
                                              ? "Metal"
                                              : null}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuWeight !== undefined &&
                                            cart.transSkuListByProductSku
                                              .skuWeight !== null
                                              ? cart.transSkuListByProductSku
                                                  .productListByProductId
                                                  .productType === "Kada"
                                                ? "Weight (Gm)"
                                                : "Gold Weight (Gm)"
                                              : null}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0] &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0].stoneWeight !==
                                              undefined &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0] &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0].stoneWeight !== null
                                              ? "Diamond Weight"
                                              : null}{" "}
                                          </Typography>
                                          {/* : ""} */}
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuSize !== undefined &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuSize !== null &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuSize.length > 0
                                              ? "Size"
                                              : null}
                                          </Typography>
                                          {/* Ring Size */}
                                        </Grid>
                                        {/*  */}
                                        {/*  */}
                                        <Grid item lg={6} sm={6}>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .generatedSku}
                                          </Typography>

                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .purity + ""}
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .metalColor}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .skuWeight +
                                                " " +
                                                "GM"}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku
                                                .nodes &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku
                                                .nodes[0] &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku
                                                .nodes[0].stoneWeight +
                                                " " +
                                                "CT"}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .skuSize}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    {cart && cart.transSkuListByProductSku && (
                                      <Grid
                                        item
                                        lg={2}
                                        sm={2}
                                        style={{ padding: "16px 0px" }}
                                      >
                                        <Grid container spacing={12} lg={12}>
                                          <Typography className="subhesder">
                                            Quantity {cart.qty}
                                          </Typography>
                                          <Typography className="subhesder">
                                            <img
                                              alt=""
                                              loading="lazy"
                                              src="https://assets.stylori.com/images/static/icon-ship.png"
                                            />{" "}
                                            <a  href="/#"
                          target="_blank"
                          el="noopener noreferrer">
                                              {this.generateShipsBy(
                                                cart.transSkuListByProductSku
                                                  .readytoship,
                                                cart.transSkuListByProductSku
                                                  .vendorDeliveryTime
                                              )}
                                            </a>
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    )}

                                    {cart && cart.transSkuListByProductSku && (
                                      <Grid
                                        style={{
                                          padding: "10px",
                                          justifyContent: "center",
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                        className="rups"
                                        item
                                        lg={3}
                                        sm={2}
                                      >
                                        {Math.round(cart.price) >
                                        Math.round(
                                          cart.transSkuListByProductSku
                                            .markupPrice
                                        ) ? (
                                          <Pricing
                                            price={
                                              cart.transSkuListByProductSku
                                                .markupPrice
                                            }
                                            offerPrice={
                                              cart.transSkuListByProductSku
                                                .markupPrice
                                            }
                                            offerDiscount={"25% - OFF"}
                                            quantity={cart.qty}
                                          ></Pricing>
                                        ) : (
                                          <Pricing
                                            offerPrice={
                                              cart.transSkuListByProductSku
                                                .markupPrice
                                            }
                                            quantity={cart.qty}
                                          ></Pricing>
                                        )}
                                        <br />
                                      </Grid>
                                    )}
                                  </Grid>
                                </>
                              );
                            }
                          )}

                          <div
                            style={{
                              float: "right",
                              fontSize: "13px",
                              lineHeight: "1.5",
                            }}
                          >
                            Sub Total&nbsp;{this.calculatetotal(val)}
                            <br />
                            {val.shoppingCartByCartId.discount ? (
                              <div class={`subhesder`}>
                                DISCOUNT&nbsp;
                                {val.shoppingCartByCartId.discount}
                              </div>
                            ) : null}
                            Shipping&nbsp;FREE
                            <br />
                            Shipping Insurance&nbsp;FREE
                            <br />
                            <div style={{ float: "right", fontSize: "18px" }}>
                              Grand Total&nbsp;
                              <span
                                style={{ color: "#ed1165", fontSize: "18px" }}
                              >
                                { CurrencyConversion(
                                    val.shoppingCartByCartId.discountedPrice
                                  )
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", color: "#394578" }}>
                No orders yet
              </div>
            )}
          </div>
        ) : (
          <div
            className="pt-sm checkout-ovralldiv-media"
            style={{ margin: "auto", paddingTop: 10 }}
          >
            {allorderdata &&
            allorderdata.data &&
            allorderdata.data.allOrders.nodes.length > 0 ? (
              <Grid container spacing={3}>
                {allorderdata &&
                  allorderdata.data &&
                  allorderdata.data.allOrders.nodes.map((val) => {
                    return (
                      <div>
                      <Hidden smDown>
                             <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          margin: 20,
                        }}
                      >
                        <Grid item container xs={12} lg={6}>
                          <Typography
                            style={{ color: "#6D6E71", fontWeight: 700 }}
                          >
                            Order Summary
                          </Typography>
                          <Grid
                            item
                            style={{
                              marginTop: "20px",
                              backgroundColor: "#fff",
                            }}
                            className="address_details"
                          >
                            {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId
                                .shoppingCartItemsByShoppingCartId &&
                              val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                                (cart) => {
                                  if (cart && cart.transSkuListByProductSku)
                                    return (
                                      <>
                                        <Grid
                                          container
                                          lg={12}
                                          style={{
                                            overflow: "hidden",
                                            outline: "none",
                                            padding: "10px",
                                            // boxShadow:
                                            //   " 1px 2px 13px 7px #DEDADA",
                                            // marginBottom: "20px",
                                            // borderBottom:"1px solid grey",
                                            marginTop: "12px",
                                            color: "#394578",
                                          }}
                                        >
                                          <Grid item lg={3} sm={3}>
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(
                                                (imgs) =>
                                                  this.ImageUrl(
                                                    imgs,
                                                    cart &&
                                                      cart.transSkuListByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .generatedSku,
                                                    cart
                                                      .transSkuListByProductSku
                                                      .metalColor,
                                                    paymentsuccess
                                                  ) ? (
                                                    <div className="wishlist_img">
                                                      <img
                                                        className="viewport-img"
                                                        src={this.ImageUrl(
                                                          imgs,
                                                          cart &&
                                                            cart.transSkuListByProductSku &&
                                                            cart
                                                              .transSkuListByProductSku
                                                              .generatedSku,
                                                          cart
                                                            .transSkuListByProductSku
                                                            .metalColor,
                                                          paymentsuccess
                                                        )}
                                                        alt=""
                                                        loading="lazy"
                                                      />
                                                    </div>
                                                  ) : null
                                              )}
                                          </Grid>
                                          <Grid item lg={6} sm={4}>
                                            <Grid
                                              container
                                              spacing={12}
                                              lg={12}
                                              className="classGrid"
                                            >
                                              <b style={{ width: "100%" }}>
                                                {" "}
                                                {
                                                  cart.transSkuListByProductSku
                                                    .productListByProductId
                                                    .productName
                                                }
                                              </b>

                                              <Grid item lg={12} sm={12}>
                                                <Typography className="subhesder">
                                                  {
                                                    cart
                                                      .transSkuListByProductSku
                                                      .generatedSku
                                                  }
                                                </Typography>
                                                <Typography className="subhesder">
                                                  Quantity {cart.qty}
                                                </Typography>
                                                <Typography className="subhesder">
                                                  <img
                                                    alt=""
                                                    loading="lazy"
                                                    src="https://assets.stylori.com/images/static/icon-ship.png"
                                                  />{" "}
                                                  <a  href="/#"
                                                      target="_blank"
                                                      el="noopener noreferrer">
                                                    {this.generateShipsBy(
                                                      cart
                                                        .transSkuListByProductSku
                                                        .readytoship,
                                                      cart
                                                        .transSkuListByProductSku
                                                        .vendorDeliveryTime
                                                    )}
                                                  </a>
                                                </Typography>
                                                {/* 
                                                  <Typography className="subhesder">
                                                    {cart
                                                      .transSkuListByProductSku
                                                      .purity + ""}
                                                    {
                                                      cart
                                                        .transSkuListByProductSku
                                                        .metalColor
                                                    }
                                                  </Typography>
                                                  <Typography className="subhesder">
                                                    {cart
                                                      .transSkuListByProductSku
                                                      .skuWeight +
                                                      " " +
                                                      "GM"}
                                                  </Typography>
                                                  <Typography className="subhesder">
                                                    {cart.transSkuListByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku
                                                        .nodes &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku
                                                        .nodes[0] &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku
                                                        .nodes[0].stoneWeight +
                                                        " " +
                                                        "CT"}
                                                  </Typography> */}

                                                <Typography className="subhesder">
                                                  {
                                                    cart
                                                      .transSkuListByProductSku
                                                      .skuSize
                                                  }
                                                </Typography>
                                              </Grid>
                                            </Grid>
                                          </Grid>
                                          {/* <Grid
                                              item
                                              style={{
                                                alignItems: "center",
                                                display: "flex",
                                                padding: "16px",
                                              }}
                                            >
                                              <Grid
                                                container
                                                spacing={12}
                                                lg={12}
                                              >
                                                 <Typography className="subhesder">
                                                  Quantity {cart.qty}
                                                </Typography> 
                                                 <Typography className="subhesder">
                                                  <img
                                                    alt=""
                                                    src="https://assets.stylori.com/images/static/icon-ship.png"
                                                  />{" "}
                                                  <a>
                                                    {this.generateShipsBy(
                                                      cart
                                                        .transSkuListByProductSku
                                                        .readytoship,
                                                      cart
                                                        .transSkuListByProductSku
                                                        .vendorDeliveryTime
                                                    )}
                                                  </a>
                                                </Typography>
                                              </Grid>
                                            </Grid> */}
                                          <Grid
                                            style={{
                                              padding: "10px",
                                              justifyContent: "center",
                                              display: "flex",
                                              alignItems: "center",
                                            }}
                                            className="rups"
                                            item
                                            lg={3}
                                            sm={2}
                                          >
                                            <Pricing
                                              price={
                                                cart.transSkuListByProductSku
                                                  .discountPrice
                                              }
                                              offerPrice={
                                                cart.transSkuListByProductSku
                                                  .markupPrice
                                              }
                                            ></Pricing>

                                            <br />
                                          </Grid>
                                        </Grid>
                                       {allorderdata.data.allOrders.nodes.length >1 ?
                                        <Divider
                                        style={{
                                          border: "1px solid #E6E7E8",
                                        }}
                                        variant="middle"
                                      />
                                      :null
                                       }
                                       
                                      
                                        
                                      </>
                                    );
                                }
                                
                              )}

                            {/* <div style={{ float: "right", fontSize: "18px" }}>
                                Grand Total&nbsp;
                                <span
                                  style={{ color: "#ed1165", fontSize: "18px" }}
                                >
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    minimumFractionDigits: 0,
                                  }).format(
                                    Math.round(
                                      val.shoppingCartByCartId.discountedPrice
                                    )
                                  )}
                                </span>
                              </div> */}
                          </Grid>
                          <Typography
                            style={{
                              color: "#6D6E71",
                              fontWeight: 700,
                              marginTop: 10,
                            }}
                          >
                            Order Details
                          </Typography>
                          <Grid
                            item
                            style={{
                              marginTop: "20px",
                              backgroundColor: "#fff",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                marginBottom: "10px",
                                display: "flex",
                                margin: 15,
                              }}
                            >
                              <Grid
                                container
                                spacing={12}
                                lg={12}
                                xs={11}
                                sm={11}
                              >
                                <Grid
                                  item
                                  sm={6}
                                  lg={6}
                                  xs={12}
                                  className="order_addres"
                                  style={{ color: "rgb(109, 110, 113)" }}
                                >
                                  <div style={{ fontSize: "16px" }}>
                                    {" "}
                                    <b>ORDER NUMBER</b>:
                                  </div>
                                  <br />
                                  <div style={{ fontSize: "16px" }}>
                                    <b>ORDER DATE </b> :
                                  </div>
                                  <br />
                                  <div style={{ fontSize: "16px" }}>
                                    {" "}
                                    <b>PAYMENT METHOD</b> :
                                  </div>
                                </Grid>
                                <Grid
                                  item
                                  sm={6}
                                  lg={6}
                                  xs={12}
                                  className="order_addres"
                                  style={{ color: "rgb(109, 110, 113)" }}
                                >
                                  <div> #{val && val.id}</div>
                                  <br />
                                  <div style={{ lineHeight: 3 }}>
                                    {moment(val && val.createdAt).format(
                                      "Do MMMM YYYY"
                                    )}
                                  </div>
                                  <br />
                                  <div>{val.paymentMode}</div>
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                          <Divider
                            style={{
                              border: "1px solid #BCBEC1",
                              width: "100%",
                              marginTop: 20,
                            }}
                          />
                          <Grid
                            item
                            container
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item>
                              <Typography
                                style={{
                                  color: "#6D6E71",
                                  fontWeight: 700,
                                  marginTop: 10,
                                }}
                              >
                                TOTAL COST
                              </Typography>
                            </Grid>
                            <Grid item style={{ marginTop: 10 }}>
                              <span
                                style={{
                                  color: "#6D6E71",
                                  fontSize: "20px",
                                  fontWeight: 700,
                                }}
                              >
                                { CurrencyConversion(
                                    val.shoppingCartByCartId.discountedPrice
                                  )
                                }
                              </span>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={6}
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            marginLeft: "50px",
                          }}
                        >
                          <Typography
                            style={{
                              color: "#6D6E71",
                              fontWeight: 700,
                            }}
                          >
                            Ship To
                          </Typography>
                          <Box
                            className="order_addres_user"
                            style={{
                              marginTop: "27px",
                              backgroundColor: "#fff",
                              width: "100%",
                            }}
                          >
                            <div className="add">
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].firstname}
                                &nbsp;
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].lastname}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].addressline1}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].city + "-"}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].pincode}
                              </div>
                              <br />
                              <br />
                              {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId
                                .nodes &&
                              val.shoppingCartByCartId.giftwrapsByCartId.nodes
                                .length > 0 ? (
                                <>
                                  <div>
                                    {" "}
                                    <b>Gift to</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].giftTo}
                                  </div>
                                  <br />
                                  <div>
                                    {" "}
                                    <b>Gift message</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].message}
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </Box>
                          <Typography
                            style={{
                              color: "#6D6E71",
                              fontWeight: 700,
                              marginTop: 30,
                            }}
                          >
                            Bill To
                          </Typography>
                          <Box
                            className="order_addres_user"
                            style={{
                              marginTop: "10px",
                              backgroundColor: "#fff",
                              width: "100%",
                            }}
                          >
                            <div className="add">
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].firstname}
                                &nbsp;
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].lastname}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].addressline1}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].city + "-"}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].pincode}
                              </div>
                              <br />
                              <br />
                              {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId
                                .nodes &&
                              val.shoppingCartByCartId.giftwrapsByCartId.nodes
                                .length > 0 ? (
                                <>
                                  <div>
                                    {" "}
                                    <b>Gift to</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].giftTo}
                                  </div>
                                  <br />
                                  <div>
                                    {" "}
                                    <b>Gift message</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].message}
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </Box>
                          <Button
                    style={{
                      background: "#d51f63",
                      color: "#fff",
                      padding: "5px 20px",
                      marginTop:30
                    }}
                    onClick={() => {
                      localStorage.removeItem("a__c_t");
                      localStorage.removeItem("panel");
                      localStorage.removeItem("order_id");
                      localStorage.removeItem("cartDetails");
                      localStorage.removeItem("ship_isactive");
                      localStorage.removeItem("select_addres");
                      localStorage.removeItem("bil_isactive");
                      if (gut_lg === true) {
                        localStorage.clear();
                      }
                      this.props.history.push("/home");
                    }}
                  >
                    Continue Shopping
                  </Button>
                          <Grid item container spacing={2} >
                            <Grid
                              item
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: "15px",
                                marginTop:"25px"
                              }}
                            >
                              <ArrowLeft fontSize="small" />

                              <div>
                                Go Back to{" "}
                                <span
                                  style={{
                                    borderBottom: "2px solid #f14880",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    window.location.replace("/styloriz")
                                  }
                                >
                                  Stylori
                                </span>
                              </div>
                            </Grid>
                            <Grid
                              item
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "15px",
                                marginTop:"25px"
                              }}
                            >
                              <ArrowLeft fontSize="small" />
                              <div>
                                Go Back to{" "}
                                <span
                                  style={{
                                    borderBottom: "2px solid #06ab9f",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    window.location.replace("/styloriSilver")
                                  }
                                >
                                  Stylori Silver
                                </span>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                       </Hidden>
                      <Hidden mdUp>
                             <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: 20,
                        }}
                      >
                        <Grid item container xs={12} lg={6}>
                          <Typography
                            style={{ color: "#6D6E71", fontWeight: 700,lineHeight:3 }}
                          >
                            Order Summary
                          </Typography>
                          <Grid
                            item
                            style={{
                              marginTop: "20px",
                              backgroundColor: "#fff",
                            }}
                            className="address_details"
                          >
                            {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId
                                .shoppingCartItemsByShoppingCartId &&
                              val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                                (cart) => {
                                  if (cart && cart.transSkuListByProductSku)
                                    return (
                                      <>
                                        <Grid
                                          container
                                          lg={12}
                                          style={{
                                            overflow: "hidden",
                                            outline: "none",
                                            // padding: "10px",
                                            // boxShadow:
                                            //   " 1px 2px 13px 7px #DEDADA",
                                            // marginBottom: "20px",
                                            // borderBottom:"1px solid grey",
                                            // marginTop: "12px",
                                            color: "#394578",
                                          }}
                                        >
                                          <Grid item lg={3} sm={3}>
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(
                                                (imgs) =>
                                                  this.ImageUrl(
                                                    imgs,
                                                    cart &&
                                                      cart.transSkuListByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .generatedSku,
                                                    cart
                                                      .transSkuListByProductSku
                                                      .metalColor,
                                                    paymentsuccess
                                                  ) ? (
                                                    <div className="wishlist_img">
                                                      <img
                                                        className="viewport-img"
                                                        loading="lazy"
                                                        src={this.ImageUrl(
                                                          imgs,
                                                          cart &&
                                                            cart.transSkuListByProductSku &&
                                                            cart
                                                              .transSkuListByProductSku
                                                              .generatedSku,
                                                          cart
                                                            .transSkuListByProductSku
                                                            .metalColor,
                                                          paymentsuccess
                                                        )}
                                                        alt=""
                                                      />
                                                    </div>
                                                  ) : null
                                              )}
                                          </Grid>
                                          <Grid item lg={6} sm={4}>
                                            <Grid
                                              container
                                              spacing={12}
                                              lg={12}
                                              className="classGrid"
                                            >
                                              <b style={{ width: "100%" }}>
                                                {" "}
                                                {
                                                  cart.transSkuListByProductSku
                                                    .productListByProductId
                                                    .productName
                                                }
                                              </b>

                                              <Grid item lg={12} sm={12}>
                                                <Typography className="subhesder">
                                                  {
                                                    cart
                                                      .transSkuListByProductSku
                                                      .generatedSku
                                                  }
                                                </Typography>
                                                <Typography className="subhesder">
                                                  Quantity {cart.qty}
                                                </Typography>
                                                <Typography className="subhesder">
                                                  <img
                                                    alt=""
                                                    loading="lazy"
                                                    src="https://assets.stylori.com/images/static/icon-ship.png"
                                                  />{" "}
                                                  <a  href="/#"
                                                  target="_blank"
                                                 el="noopener noreferrer">
                                                    {this.generateShipsBy(
                                                      cart
                                                        .transSkuListByProductSku
                                                        .readytoship,
                                                      cart
                                                        .transSkuListByProductSku
                                                        .vendorDeliveryTime
                                                    )}
                                                  </a>
                                                </Typography>
                                                {/* 
                                                  <Typography className="subhesder">
                                                    {cart
                                                      .transSkuListByProductSku
                                                      .purity + ""}
                                                    {
                                                      cart
                                                        .transSkuListByProductSku
                                                        .metalColor
                                                    }
                                                  </Typography>
                                                  <Typography className="subhesder">
                                                    {cart
                                                      .transSkuListByProductSku
                                                      .skuWeight +
                                                      " " +
                                                      "GM"}
                                                  </Typography>
                                                  <Typography className="subhesder">
                                                    {cart.transSkuListByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku
                                                        .nodes &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku
                                                        .nodes[0] &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .productListByProductId
                                                        .productDiamondsByProductSku
                                                        .nodes[0].stoneWeight +
                                                        " " +
                                                        "CT"}
                                                  </Typography> */}

                                                <Typography className="subhesder">
                                                  {
                                                    cart
                                                      .transSkuListByProductSku
                                                      .skuSize
                                                  }
                                                </Typography>
                                              </Grid>
                                            </Grid>
                                          </Grid>
                                          {/* <Grid
                                              item
                                              style={{
                                                alignItems: "center",
                                                display: "flex",
                                                padding: "16px",
                                              }}
                                            >
                                              <Grid
                                                container
                                                spacing={12}
                                                lg={12}
                                              >
                                                 <Typography className="subhesder">
                                                  Quantity {cart.qty}
                                                </Typography> 
                                                 <Typography className="subhesder">
                                                  <img
                                                    alt=""
                                                    src="https://assets.stylori.com/images/static/icon-ship.png"
                                                  />{" "}
                                                  <a>
                                                    {this.generateShipsBy(
                                                      cart
                                                        .transSkuListByProductSku
                                                        .readytoship,
                                                      cart
                                                        .transSkuListByProductSku
                                                        .vendorDeliveryTime
                                                    )}
                                                  </a>
                                                </Typography>
                                              </Grid>
                                            </Grid> */}
                                          <Grid
                                            className="rups"
                                            item
                                            lg={3}
                                            sm={2}
                                          >
                                            <Pricing
                                              price={
                                                cart.transSkuListByProductSku
                                                  .discountPrice
                                              }
                                              offerPrice={
                                                cart.transSkuListByProductSku
                                                  .markupPrice
                                              }
                                              isMobile
                                            ></Pricing>

                                            <br />
                                          </Grid>
                                        </Grid>
                                        <Divider
                                          style={{
                                            border: "1px solid #E6E7E8",
                                            width: "100%",
                                          }}
                                        />
                                      </>
                                    );
                                }
                                
                              )}

                            {/* <div style={{ float: "right", fontSize: "18px" }}>
                                Grand Total&nbsp;
                                <span
                                  style={{ color: "#ed1165", fontSize: "18px" }}
                                >
                                  {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "INR",
                                    minimumFractionDigits: 0,
                                  }).format(
                                    Math.round(
                                      val.shoppingCartByCartId.discountedPrice
                                    )
                                  )}
                                </span>
                              </div> */}
                          </Grid>
                          <Typography
                            style={{
                              color: "#6D6E71",
                              fontWeight: 700,
                              marginTop: 10,
                            }}
                          >
                            Order Details
                          </Typography>
                          <Grid
                            item
                            style={{
                              marginTop: "20px",
                              backgroundColor: "#fff",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                marginBottom: "10px",
                                display: "flex",
                                margin: 15,
                              }}
                            >
                              <Grid
                                container
                                spacing={12}
                                lg={12}
                                xs={12}
                                sm={12}
                                style={{display:"contents"}}
                              >
                                <Grid
                                  item
                                  sm={6}
                                  lg={6}
                                  xs={12}
                                  className="order_addres"
                                  style={{ color: "rgb(109, 110, 113)" }}
                                >
                                  <div >
                                    {" "}
                                    <b>ORDER NUMBER</b>:
                                  </div>
                                  <br />
                                  <div style={{lineHeight:7}}>
                                    <b>ORDER DATE </b> :
                                  </div>
                                  <br />
                                  <div >
                                    {" "}
                                    <b>PAYMENT METHOD</b> :
                                  </div>
                                </Grid>
                                <Grid
                                  item
                                  sm={6}
                                  lg={6}
                                  xs={12}
                                  className="order_addres"
                                  style={{ color: "rgb(109, 110, 113)" }}
                                >
                                  <div> #{val && val.id}</div>
                                  <br />
                                  <div style={{ lineHeight: 3 }}>
                                    {moment(val && val.createdAt).format(
                                      "Do MMMM YYYY"
                                    )}
                                  </div>
                                  <br />
                                  <div style={{lineHeight:6.4}}>{val.paymentMode}</div>
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                          <Divider
                            style={{
                              border: "1px solid #BCBEC1",
                              width: "100%",
                              marginTop: 20,
                            }}
                          />
                          <Grid
                            item
                            container
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid item>
                              <Typography
                                style={{
                                  color: "#6D6E71",
                                  fontWeight: 700,
                                  marginTop: 10,
                                }}
                              >
                                TOTAL COST
                              </Typography>
                            </Grid>
                            <Grid item style={{ marginTop: 10 }}>
                              <span
                                style={{
                                  color: "#6D6E71",
                                  fontSize: "20px",
                                  fontWeight: 700,
                                }}
                              >
                                { CurrencyConversion(
                                    val.shoppingCartByCartId.discountedPrice
                                  )
                                }
                              </span>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          lg={6}
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            marginTop:"10px"
                          }}
                        >
                          <Typography
                            style={{
                              color: "#6D6E71",
                              fontWeight: 700,
                            }}
                          >
                            Ship To
                          </Typography>
                          <Box
                            className="order_addres_user"
                            style={{
                              marginTop: "20px",
                              backgroundColor: "#fff",
                              width: "100%",
                            }}
                          >
                            <div className="add">
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].firstname}
                                &nbsp;
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].lastname}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].addressline1}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].city + "-"}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].pincode}
                              </div>
                              <br />
                              <br />
                              {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId
                                .nodes &&
                              val.shoppingCartByCartId.giftwrapsByCartId.nodes
                                .length > 0 ? (
                                <>
                                  <div>
                                    {" "}
                                    <b>Gift to</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].giftTo}
                                  </div>
                                  <br />
                                  <div>
                                    {" "}
                                    <b>Gift message</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].message}
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </Box>
                          <Typography
                            style={{
                              color: "#6D6E71",
                              fontWeight: 700,
                              marginTop: 30,
                            }}
                          >
                            Bill To
                          </Typography>
                          <Box
                            className="order_addres_user"
                            style={{
                              marginTop: "10px",
                              backgroundColor: "#fff",
                              width: "100%",
                            }}
                          >
                            <div className="add">
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].firstname}
                                &nbsp;
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].lastname}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].addressline1}
                              </div>
                              <br />
                              <div style={{ color: "#6D6E71" }}>
                                {" "}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].city + "-"}
                                {val.shoppingCartByCartId &&
                                  val.shoppingCartByCartId
                                    .cartAddressesByCartId &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0] &&
                                  val.shoppingCartByCartId.cartAddressesByCartId
                                    .nodes[0].pincode}
                              </div>
                              <br />
                              <br />
                              {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId &&
                              val.shoppingCartByCartId.giftwrapsByCartId
                                .nodes &&
                              val.shoppingCartByCartId.giftwrapsByCartId.nodes
                                .length > 0 ? (
                                <>
                                  <div>
                                    {" "}
                                    <b>Gift to</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].giftTo}
                                  </div>
                                  <br />
                                  <div>
                                    {" "}
                                    <b>Gift message</b> :
                                    {val &&
                                      val.shoppingCartByCartId.giftwrapsByCartId
                                        .nodes[0].message}
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </Box>
                          <Grid item container spacing={2}>
                            <Grid
                              item
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                                marginLeft: "15px",
                              }}
                            >
                              <ArrowLeft fontSize="small" />

                              <div>
                                Go Back to{" "}
                                <span
                                  style={{
                                    borderBottom: "2px solid #f14880",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    window.location.replace("/stylori")
                                  }
                                >
                                  Stylori
                                </span>
                              </div>
                            </Grid>
                            <Grid
                              item
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "15px",
                              }}
                            >
                              <ArrowLeft fontSize="small" />
                              <div>
                                Go Back to{" "}
                                <span
                                  style={{
                                    borderBottom: "2px solid #06ab9f",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    window.location.replace("/styloriSilver")
                                  }
                                >
                                  Stylori Silver
                                </span>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                      </Hidden>
                      </div> 
                    );
                  })}
              </Grid>
            ) : (
              <div style={{ textAlign: "center", color: "#394578" }}>
                No orders yet
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Allorders);
