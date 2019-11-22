import React from 'react';

const initialCtx = {
    PaymentCtx: {
        cartValue:''
    },

    setPaymentCtx: () => null
}


export const PaymentContext = React.createContext(initialCtx);

export const PaymentConsumer = PaymentContext.Consumer;

export const PaymentProvider = (props) => {

    const [Paymentctx, setPaymentCtx] = React.useState(initialCtx.PaymentCtx);

    console.info('object', 'total value in the cart', Paymentctx)

    return (
        <PaymentContext.Provider value={{ Paymentctx, setPaymentCtx }} >
            {props.children}
        </PaymentContext.Provider>
    )
}