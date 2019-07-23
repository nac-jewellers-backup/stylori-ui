import React, { Component } from 'react';
import './product-images.css'
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import VerticalCarousel from './verticalcarousel'
import Container from '@material-ui/core/Container';
import PriceBuynow from './buyNow'
import PriceTabs from './priceTabs'
import dataCard from '../ProductCard/ProductData'
const render=()=>{
    return( 
        <div>
      <VerticalCarousel />
        </div>
      );
    };
const Productprice = () => {
    return (
        <div>
{dataCard[123].map(val => (
    <>
            <Grid container spacing={12} sm={12}>
                <Grid item xs={8}  sm={7}>
                    <div className="price-div">
                        <h1 className="pdp-title">{val.title}</h1>
                        <p className="pdp-desc">{val.dis}</p>
                    </div>
                </Grid>
                <Grid item xs={4}  sm={5}>
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
               <Hidden mdUp>
                   {render()}
               </Hidden>
                <hr class="bottom-line product-inform-ation"></hr>
            </Grid>
            <div className='price-info'>
                <Grid container spacing={12}>
                    <Grid item xs={6} lg={2} className='discount-container'> {val.offerPrice}</Grid>
                    <Grid item lg={2} xs={6} sm={6} className="selling-price">{val.save}</Grid>
                </Grid>
                <hr class="bottom-line product-inform-ation"></hr>
            </div>
            </>
))}
        </div>
    )
};

class ProductPrice extends Component {
    state = {
    }


    render() {
        return (
            <div>
                <Hidden smDown>
                    {Productprice()}
                </Hidden>
                <Hidden mdUp>
                    {Productprice()}
                </Hidden>
            </div>


        )
    }
}

export default ProductPrice;
