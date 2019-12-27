import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Header from 'components/SilverComponents/Header'
import Chckoutindex from '../Checkout';
import Creditform from '../Checkout/paymentOption/creditForm';
import Debitform from '../Checkout/paymentOption/debitForm';
import Netbanking from '../Checkout/paymentOption/netBanking';
import CashonDelivey from '../Checkout/paymentOption/cashonDelivery';
import PaymentIndex from '../Checkout/paymentOption/paymentindex';
export default class Checkout extends Component {
    render() {

        return (
            <div>
               
                <Chckoutindex />
            </div>
        )
    }
}
