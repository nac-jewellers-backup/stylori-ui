import { Grid, AppBar } from "@material-ui/core";
import React from "react";
import "./product-images.css";
import Buynowbutton from "../../Buynow/buynowbutton";
import CommenDialog from "../../../components/Common/Dialogmodel";
import styles from "./style";
import { withStyles } from "@material-ui/core/styles";

class Buynowfixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelOpen: false,
    };
  }
  valus = (valueId) => {
    var valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";

    var vals;

    if (valus_locl) {
      let productIds = valus_locl.map((val) => {
        return val.sku_id;
      });
      productIds.indexOf(valueId) > -1 ? (vals = 1) : (vals = 0);
    }
    return vals;
  };
  render() {
    const { data, isSilver, classes } = this.props;
    const _isSilver = this.isSilver ? true : false;
    const canceldeletechecklist = () => {
      this.setState({
        modelOpen: false,
      });
    };

    const handleLocalStorage = () => {
      if (this.valus(this.props.data[0].skuId) === 1) {
        this.props.deleteComment();
      } else {
        this.setState({
          modelOpen: true,
        });
      }
    };
    const deletechecklists = () => {
      var skuId = this.props.data[0].skuId;
      var products = [];
      var cartId = "";
      var userId = "";
      var obj = { sku_id: "", qty: "", price: "" };
      obj["sku_id"] = skuId;
      obj["qty"] = 1;
      obj["price"] = this.props.data[0].offerPrice[0];
      products.push(obj);
      var skuObj = { cart_id: cartId, user_id: userId, products: products };
      localStorage.setItem("cartDetails", JSON.stringify(skuObj));
      window.location.href = "/cart";
      this.setState({
        modelOpen: false,
      });
    };
    return (
      <div>
        <AppBar color="primary" className="product-page-fixed-footer">
          {/* price={data[0].price}
                    offerPrice={data[0].offerPrice} */}
          {/* <Grid container spacing={12} >
                        <Grid item xs={12} style={{ textAlign: "center",background:"#f9f9f9" }}>
                            <div class="css-ocmcwm eu70xvk2"><span class="css-kqsna2">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(data[0].offerPrice))}</span><span class="css-tg000w">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(data[0].price))}</span></div>
                        </Grid>
                    </Grid> */}
          <Grid container spacing={12}>
            <Grid
              item
              xs={6}
              className={`fixed-grid ${
                isSilver ? classes.fixedGridsilver : ""
              }`}
              style={{ textAlign: "center", background: "#EBEAEA" }}
            >
              <div onClick={handleLocalStorage.bind(this)}>
                <Buynowbutton
                  sku={data[0].skuId}
                  class={`product-footer-buynow ${
                    isSilver ? classes.fixedGridsilver : ""
                  }`}
                />
              </div>
            </Grid>
            <CommenDialog
              isOpen={this.state.modelOpen}
              content={`Verify selected product details before proceeding`}
              handleClose={canceldeletechecklist.bind(this)}
              handleSuccess={() => this.props.deleteComment()}
              negativeBtn="No"
              positiveBtn="Yes"
              title="Confirmation"
            />
            <Grid
              className="talk-to-us"
              item
              xs={6}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <a
                href={isSilver ? "#" : "tel:18001020330"}
                style={{
                  textDecoration: "none",
                  color: "#394578",
                  fontWeight: "600",
                  fontSize: "14px",
                  letterSpacing: "1.5px",
                }}
              >
                {isSilver ? null : <i class="fa fa-comments"></i>}
                &nbsp;
                {isSilver ? (
                  <span style={{ fontFamily: "Roboto-bold" }}>Add To Cart</span>
                ) : (
                  "Talk To Us"
                )}
              </a>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Buynowfixed);
