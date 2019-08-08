import React from 'react';
// import Checkoutbreadcrum from '../../components/Checkout/checkoutbreadcrum';
import Checkoutcard from '../../components/Checkout/checkoutcard';
import {Grid,Container} from '@material-ui/core';
class Checkout extends React.Component {
    render() {
        return (
            <div>
                    <Grid Container spacing={12}>
                        <Grid item xs={12}>
                            {/* <Checkoutbreadcrum /> */}
                            <Checkoutcard />
                        </Grid>
                    </Grid>
            </div>
        )
    }
}
export default Checkout;