import React from 'react';
import Accounts from 'containers/account'
import { CartProvider, ProductDetailProvider } from 'context'

class Account extends React.Component {
    render() {
        return (
            <CartProvider>
                <ProductDetailProvider>
                <Accounts />
                </ProductDetailProvider>
            </CartProvider>
        )
    }
}


export default Account;