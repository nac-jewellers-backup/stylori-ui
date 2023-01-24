import React from 'react';
import CheackCart from './cartCardcheck';
import {CartProvider, ProductDetailProvider, VoucherProvider} from '../../context'

class Cart extends React.Component {
    render() {
        return (
            <CartProvider>
                <ProductDetailProvider>
                    
                        <CheackCart />
                </ProductDetailProvider>
            </CartProvider>

        )
    }
}


export default Cart;