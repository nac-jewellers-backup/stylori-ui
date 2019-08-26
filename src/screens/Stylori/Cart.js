import React from 'react';
// import Checkoutbreadcrum from '../../components/Checkout/checkoutbreadcrum';
import BreadCrumb from '../../components/BreadCrumb/index'
import CartCard from '../../components/Checkout/CartCard';
import Footer from '../../components/Footer/Footer'
import {Grid,Container} from '@material-ui/core';
class Checkout extends React.Component {
    render() {
        return (
            <div>
                    <Grid Container spacing={12}>
                        <Grid item xs={12}>
                            <BreadCrumb />
                            <CartCard />
                            <Footer/>
                        </Grid>
                    </Grid>
            </div>
        )
    }
}
export default Checkout;