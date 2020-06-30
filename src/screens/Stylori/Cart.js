import React from "react";
import CartContainer from "containers/Cart";
import { CartProvider, ProductDetailProvider } from "context";

class Cart extends React.Component {
  render() {
    return (
      <CartProvider>
        <ProductDetailProvider>
          <CartContainer />
        </ProductDetailProvider>
      </CartProvider>
    );
  }
}

export default Cart;
