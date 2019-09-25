import React from 'react';
// import Checkoutbreadcrum from '../../components/Checkout/checkoutbreadcrum';
import BreadCrumb from '../../components/BreadCrumb/index'
import CartCard from '../../components/Checkout/CartCard';
import Footer from '../../components/Footer/Footer'
import { Grid, Container, Hidden } from '@material-ui/core';
import CustomSeparator from '../../components/BreadCrumb/index'
import Header from '../../components/Header/header'
import './index.css'
class Checkout extends React.Component {
    render() {
        return (
            <div>

                <Hidden smDown>
                    <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                        <Grid item xs={12} >
                            <Header />
                        </Grid>
                    </Grid>
                    <div className="cart-ovralldiv-media">
                        <Grid Container spacing={12}>
                            <Grid item xs={12}>
                                <CartCard />
                            </Grid>
                        </Grid>
                    </div>
                    <Grid Container spacing={12}>
                        <Grid item xs={12}>
                            <Footer />
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Container>
                        <Grid Container spacing={12}>
                            <Grid item xs={12}>
                                <CartCard />
                            </Grid>
                        </Grid>
                    </Container>
                    <Grid Container spacing={12}>
                        <Grid item xs={12}>
                            <Footer />
                        </Grid>
                    </Grid>
                </Hidden>
            </div>
        )
    }
}
export default Checkout;