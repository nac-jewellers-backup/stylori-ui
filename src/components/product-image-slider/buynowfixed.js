import {
    Grid,
    AppBar,
} from '@material-ui/core';
import React from 'react';
import './product-images.css';


class Buynowfixed extends React.Component {
    render() {
        return (
            <div>
                <AppBar color="primary" className="product-page-fixed-footer">
                    <Grid container spacing={12}>
                        <Grid className='product-footer-buynow ' item xs={6}><i class="fa fa-shopping-bag"></i> Buy Now</Grid>
                        <Grid className='talk-to-us' item xs={6}><i class="fa fa-comments"></i> &nbsp;Talk To Us</Grid>
                    </Grid>
                </AppBar>

            </div>
        )
    }
}
export default Buynowfixed;