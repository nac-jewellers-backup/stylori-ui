import React from 'react';
import PaymentResponseSuccess from '../Checkout/paymentOption/paymendResposeSuccess'
import {CartProvider} from 'context'

class Success extends React.Component {
    render() {
        return (
            <CartProvider>
                {/* <CartContainer /> */}
                <PaymentResponseSuccess/>
            </CartProvider>

        )
    }
}


export default Success;