import React from 'react';
import CheackCart from './cartCardcheck';
import {CartProvider} from '../../context'

class Cart extends React.Component {
    render() {
        return (
            <CartProvider>
                <CheackCart />
            </CartProvider>

        )
    }
}


export default Cart;