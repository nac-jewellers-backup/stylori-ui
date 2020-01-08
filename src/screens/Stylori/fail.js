import React from 'react';
import PaymentResponseFail from '../Checkout/paymentOption/paymentResponseFail'
import {CartProvider} from 'context'

class Fail extends React.Component {
    render() {
        return (
            <CartProvider>
                {/* <CartContainer /> */}
                <PaymentResponseFail/>
            </CartProvider>

        )
    }
}


export default Fail;