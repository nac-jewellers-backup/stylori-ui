import React, { Component } from 'react';
import './product-images.css'
import Grid from '@material-ui/core/Grid';
import PriceTabs from './priceTabs'
class ProductPrice extends Component {
    state = {
    }


    render() {
        return (
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


        )
    }
}

export default ProductPrice;
