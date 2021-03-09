import React from "react";
import "../product-image-slider/product-images.css";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
// var valus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ""
// let path = window.location.pathname.split('/').pop();
// const path = window.location.pathname !== "cart" || window.location.pathname!== "checkout"
class Buynowbutton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      vals: 0,
    };
  }

  valus = (props) => {
    var valus_locl = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products : "";

    var vals;
    // return valus_locl && valus_locl.map(val => {
    //     const vlx = this.props && this.props.sku
    //     if (vlx === val.sku_id) {
    //         vals = 1
    //         return vals
    //     } else {
    //         vals = 0
    //         return vals
    //     }

    // })
    if (valus_locl) {
      let productIds = valus_locl.map((val) => {
        return val.sku_id;
      });
      productIds.indexOf(props.sku) > -1 ? this.setState({ vals: 1 }) : this.setState({ vals: 0 });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sku !== this.props.sku) this.valus(this.props);
  }
  componentDidMount() {
    this.valus(this.props);
  }

  render() {
    let productIsActive = this.props.productIsActive ?? "";

    return (
      <div>
        <Button
          className={this.props.class}
          style={{ borderRadius: "5px", ...this.props.style }}
          disabled={productIsActive ? false : true}
        >
          {window.location.pathname.split("/").pop() !== "cart" &&
          window.location.pathname.split("/").pop() !== "checkout" &&
          this.state.vals === 1 ? (
            <>
              {!this.props.withoutBag && <i class="fa fa-shopping-bag buynow-icon"></i>}
              {this.props.addtoCartToBuyNow ? <span style={{ fontWeight: "bolder" }}> In Cart!</span> : <span> In bag!</span>}
            </>
          ) : (
            <>
              {/* {!this.props.withoutBag && !this.props.isSilver && !this.props.smallScreen && <i class="fa fa-shopping-bag buynow-icon"></i>} */}
              {this.props.addtoCartToBuyNow ? (
                <span style={{ fontWeight: "bolder", fontSize: "9px !important" }}>
                  <i class="fa fa-shopping-bag buynow-icon"></i> Add to Cart
                </span>
              ) : (
                <span className={this.props.button}>Buy Now</span>
              )}
            </>
          )}
        </Button>
      </div>
    );
  }
}
export default withRouter(Buynowbutton);
