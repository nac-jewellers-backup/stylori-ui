import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../../components/Header/header'
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

                <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                    <Grid item xs={12} >
                        <Header />
                    </Grid>
                </Grid>
                <Container>
                    {/* <Chckoutindex/> */}
                    {/* <Creditform/>
                    <Debitform/>
                    <Netbanking/>
                    <CashonDelivey/> */}
                    <PaymentIndex/>
                </Container>



            </div>
        )
    }
}
