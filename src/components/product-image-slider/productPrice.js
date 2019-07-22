import React, { Component } from 'react';
import './product-images.css'
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import VerticalCarousel from './verticalcarousel'
import Container from '@material-ui/core/Container';
import PriceBuynow from './buyNow'
import PriceTabs from './priceTabs'
class ProductPrice extends Component {
    state = {
    }


    render() {
        return (
            <div>
                <Hidden smDown>
                    <div>
                        <Grid container spacing={12}>
                            <Grid item xs={7} >
                                <div className="price-div">
                                    <h1 className="pdp-title">Cute Bunchberry Diamond Ring</h1>
                                    <p className="pdp-desc">Rings set in 18 Kt Yellow Gold 1.88 gm with Diamonds (0.25 ct, IJ  - SI )</p>
                                </div>
                            </Grid>

                            <Grid item xs={5} >
                                <div className="starts">
                                    <div className="row social-shares">
                                        <i class="fa fa-share-alt"></i>&nbsp;
                                           <i class="fa fa-heart"></i>
                                    </div>
                                    <div className="starts-review">
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                    </div>
                                </div>
                            </Grid>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </Grid>
                        <div className='price-info'>
                            <Grid container spacing={12}>
                                <Grid item xs={2} className='discount-container'>
                                    $ 34,876
                           </Grid>
                                <Grid item xs={2} className="selling-price">
                                    $ 87,7634
                                   </Grid>
                                <Grid item xs={12}>
                                    <p class="discount offer-info">10% Flat off</p>
                                </Grid>
                            </Grid>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </div>
                    </div>
                </Hidden>


                <Hidden mdUp>
                    <Container>
                        <Grid container spacing={12} style={{ marginTop: "20px" }}>
                            <Grid item xs={8} >
                                <div className="price-div">
                                    <h4 className="pdp-title">Cute  Diamond Ring</h4>
                                    <p className="pdp-desc">Rings set in 18 Kt Yellow Gold 1.88 gm with Diamonds (0.25 ct, IJ  - SI )</p>
                                </div>
                            </Grid>

                            <Grid item xs={4} >
                                <div className="starts">
                                    <div className="starts-review">
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                        <i class="fa fa-star fa-grey"></i>
                                    </div>
                                </div>
                            </Grid>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </Grid>
                        <VerticalCarousel />
                        <PriceBuynow />
                        <div className='price-info'>
                            <Grid container spacing={12}>
                                <Grid item xs={3} className='discount-container'>
                                    $ 34,876
                           </Grid>
                                <Grid item xs={6} className="selling-price">
                                    $ 87,7634
                                   </Grid>
                                <Grid item xs={12}>
                                    <p class="discount offer-info">10% Flat off</p>
                                </Grid>
                            </Grid>
                        </div>
                        <hr className="bottom-line product-inform-ation"></hr><br/>
                    <PriceTabs/>

                    </Container> </Hidden>
            </div>


        )
    }
}

export default ProductPrice;
