import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './product-images.css'
import { Hidden } from '@material-ui/core';
import ProductPrice from './productPrice'
class PriceBuynow extends React.Component {
    render() {
        return (
            <div>
                <Hidden smDown>
                    <Grid container spacing={12}>
                        <Grid item xs={5} style={{ textAlign: "left" }}>
                            <Button className="buynow-button">
                                Buy Now
                         </Button>
                        </Grid>
                        <Grid xs={7} style={{ marginTop: "10px" }}>
                            <Grid container spacing={12}>
                                <Grid item xs={3} className='buy-subheaders'>
                                    Need Help ?
                    </Grid>
                            </Grid>
                            <Grid container spacing={12} style={{ marginTop: "5px" }}>

                                <Grid item xs={4} className='buy-subheaders'>
                                    <i class="fa fa-heart"></i>&nbsp; 788-8978-78987
                    </Grid>
                                <Grid item xs={4} className='buy-subheaders'>
                                    <i class="fa fa-heart"></i>&nbsp;+91 876457987
                    </Grid>
                                <Grid item xs={2} className='buy-subheaders'>
                                    <i class="fa fa-heart"></i>&nbsp;Chat
                    </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{ marginTop: "25px" }}>

                        <Grid container spacing={12}>
                            <Grid item xs={4}>
                                <input
                                    placeholder='Enter Pin Code'
                                    className='buynow-search'
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Button className="search-button">Check for COD </Button>

                            </Grid>

                            <Grid item xs={5} className="content">
                                <b className="ships-by">
                                    {/* <span class="ship-img"></span> */}
                                    <span > <i class="fa fa-star fa-grey"></i>&nbsp;SHIPS BY 31 Jul 2019</span>
                                </b>
                            </Grid>
                        </Grid>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div style={{ marginTop: "25px" }}>

                        <Grid container spacing={12}>
                            <Grid item xs={6} className="content">
                                <b className="ships-by">
                                    {/* <span class="ship-img"></span> */}
                                    <span > <i class="fa fa-star fa-grey"></i>&nbsp;SHIPS BY 31 Jul 2019</span>
                                </b>
                            </Grid>
                            <Grid item xs={6} className="content">
                                <b className="ships-by">
                                    <span > Top to Zoom</span></b>
                            </Grid>
                        </Grid>
                        <hr class="bottom-line product-inform-ation"></hr>
                    </div>
                </Hidden>
            </div>
        );
    }
}
export default PriceBuynow;