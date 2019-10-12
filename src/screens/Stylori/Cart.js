import React from 'react';
import CartContainer from 'containers/Cart'
import {CartProvider} from 'context'

class Cart extends React.Component {
    render() {
        return (
            <CartProvider>
                <CartContainer />
            </CartProvider>

        )
    }
}


export default Cart;