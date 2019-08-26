import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../../components/Header/header'
import Register from '../../screens/Checkout/loginRegister/register';
import Login from '../Checkout/loginRegister/login';
import Continues from '../Checkout/loginRegister/continues';
import LoginRegisterIndex from '../Checkout/loginRegister';
import Addressform from '../Checkout/addressDetails/addressForm'
import Productlist from '../Checkout/orderSummary/productList';
import Chckoutindex from '../Checkout';
export default class Checkout extends Component {
    render() {

        return (
            <div>

                <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                    <Grid item xs={12} >
                        <Header />
                    </Grid>
                </Grid>
                <Container maxWidth='xl'>
                    {/* <Login />
                     <Register />
                    <Continues />
                    <LoginRegisterIndex />
                    <Addressform /> */}
                    {/* <Productlist/> */}
                    <Chckoutindex/>
                </Container>



            </div>
        )
    }
}
