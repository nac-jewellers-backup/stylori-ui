import React from 'react';
import Accounts from 'containers/account'
import { CartProvider } from 'context'

class Account extends React.Component {
    render() {
        return (
            <CartProvider>
                <Accounts />
            </CartProvider>
        )
    }
}


export default Account;