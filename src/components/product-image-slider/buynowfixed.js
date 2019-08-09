import {
    Grid,
    AppBar,
} from '@material-ui/core';
import React from 'react';
import './product-images.css';
import Buynowbutton from '../Buynow/buynowbutton';


class Buynowfixed extends React.Component {
    render() {
        return (
            <div>
                <AppBar color="primary" className="product-page-fixed-footer">
                    <Grid container spacing={12}>
                        <Grid  item xs={6} className='fixed-grid'>
                            <Buynowbutton class='product-footer-buynow '/> </Grid>
                        <Grid className='talk-to-us' item xs={6}><i class="fa fa-comments"></i> &nbsp;Talk To Us</Grid>
                    </Grid>
                </AppBar>

            </div>
        )
    }
}
export default Buynowfixed;