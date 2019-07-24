import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './product-images.css'
import { Hidden } from '@material-ui/core';
import ProductPrice from './productPrice'
import PriceTabs from "./priceTabs";
import Container from '@material-ui/core/Container';
import buy from './producthoverData'

const Buydetails = () => {
    return (
        <div>
            {buy.productsbuy.map(val =>
                <>
                    <Grid container spacing={12}>
                        <Grid item xs={5} style={{ textAlign: "left" }}>
                            <Button className="buynow-button">Buy Now</Button>
                        </Grid>
                        <Grid xs={7} style={{ marginTop: "10px" }}>
                            <Grid container spacing={12}>
                                <Grid item xs={3} className='buy-subheaders'>Need Help ?</Grid>
                            </Grid>
                            <Grid container spacing={12} style={{ marginTop: "5px" }}>

                                <Grid item xs={4} className='buy-subheaders'>
                                    <i class="fa fa-heart"></i>&nbsp;{val.telephone}
                                </Grid>

                                <Grid item xs={4} className='buy-subheaders'>
                                    <i class="fa fa-heart"></i>&nbsp;{val.phonenum}
                                </Grid>

                                <Grid item xs={2} className='buy-subheaders'>
                                    <i class="fa fa-heart"></i>&nbsp;{val.chat}
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
                                    <span > <i class="fa fa-star fa-grey"></i>&nbsp;{val.shipby}</span>
                                </b>
                            </Grid>
                        </Grid>
                    </div>
                </>
            )}
        </div>
    )
}

class PriceBuynow extends React.Component {
    render() {
        return (
            <div>
                <Hidden smDown>
                    {Buydetails()}
                </Hidden>



                <Hidden mdUp>
            {buy.productsbuy.map(val =>
                    <div style={{ marginTop: "25px" }}>
                        <ProductPrice />
                        <Grid container spacing={12}>
                            <Grid item xs={6} className="content">
                                <b className="ships-by">
                                    {/* <span class="ship-img"></span> */}
                                    <span > <i class="fa fa-star fa-grey"></i>&nbsp;{val.shipby}</span>
                                </b>
                            </Grid>
                            <Grid item xs={6} className="content">
                                <b className="ships-by">
                                    <span > Top to Zoom</span></b>
                            </Grid>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </Grid>
                        <PriceTabs />
                        <hr class="bottom-line product-inform-ation"></hr>
                        <Grid container spacing={12}>
                            <Grid item xs={8}>
                                <input
                                    placeholder='Enter Pin Code'
                                    className='buynow-search'
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Button className="search-button">Check for COD </Button>
                            </Grid>
                        </Grid>
                    </div>
            )}
                </Hidden>
            </div>
        );
    }
}
export default PriceBuynow;