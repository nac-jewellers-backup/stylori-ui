import React, { Component } from "react";
import ProductDetail from "containers/productDetail";
import { ProductDetailProvider } from "context";
import { withRouter } from "react-router-dom";
import { CartProvider } from "context";

class Stylori extends Component {
 
  render() {
    let productId = window.location.search.replace("?", "");
    return (
      <div>
        {/* {this.props.location.state && this.props.location.state.data !== undefined ? */}
        <ProductDetailProvider
          productId={productId}
        // ringSize={
        //   this.state.ringSize
        // }
        >
          <CartProvider>
            <ProductDetail />
          </CartProvider>
        </ProductDetailProvider>
        {/* :
          window.location.href = "/stylori"
        } */}
      </div>
    );
  }
}
export default withRouter(Stylori);
