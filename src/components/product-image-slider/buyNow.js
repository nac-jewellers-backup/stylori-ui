import {
    Button,
    TextField,
    Hidden,
    Container,
    Grid
} from '@material-ui/core';
import React from "react";
import './product-images.css'
import ProductPrice from './productPrice'
import PriceTabs from "./priceTabs";
import buy from './producthoverData'
import PropTypes from 'prop-types';
const Buydetails = () => {
    return (
        <div>
            {buy.productsbuy.map(val =>
                <>
                    <Grid container spacing={12}>
                        <Grid item xs={5} style={{ textAlign: "left" }}>
                            <Button className="buynow-button">
                                <i class="fa fa-shopping-bag buynow-icon"></i> &nbsp;Buy Now</Button>
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
                                    <span ><i style={{ fontSize: "20px" }} class="fa fa-truck"></i>&nbsp;&nbsp;{val.shipby}</span>
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
                    <Container>
                        {buy.productsbuy.map(val =>
                            <div style={{ marginTop: "25px" }}>
                                <ProductPrice />
                                <Grid container spacing={12}>
                                    <Grid item xs={6} className="content">
                                        <b className="ships-by">
                                            {/* <span class="ship-img"></span> */}
                                            <span > <i class="fa fa-star fa-grey"></i>&nbsp; {val.shipby}</span>
                                        </b>
                                    </Grid>
                                    <Grid item xs={6} className="content">
                                        <b className="ships-by">
                                            <span > Top to Zoom</span></b>
                                    </Grid>
                                    <hr class="bottom-line product-inform-ation"></hr>
                                </Grid>
                                <PriceTabs />
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
                    </Container></Hidden>
            </div>
        );
    }
}
PriceBuynow.propTypes = {
    Buydetails: PropTypes.func,
};
export default PriceBuynow;