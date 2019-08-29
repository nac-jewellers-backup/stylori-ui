import {
    Grid,
    Hidden,
    Container,
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import T from './producthoverData'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-images.css'
import Ratings from '../rating/rating'
import card from '../ProductCard/ProductData'
import Pricing from '../Pricing/index'
const dataCarousel = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: true,

}
const mobilecarousel = () => {

    return (
        <Container>
            <div style={{ height: '200px', width: "auto" }}>
                <Slideshow class='responseve-carousel testingcur' imgClass='responseve-carousel-img'
                    fadeImages={T.fadeImages} dataCarousel={dataCarousel} />
            </div>

        </Container>
    );
};
const Productprice = () => {
    return (
        <div>

            {card.dataCard1.map(val => (

                <>
                    <Grid container spacing={12} sm={12} style={{padding:"0 10px"}}>
                        <Grid item xs={7} lg={8}>
                            <div className="price-div">
                                <h1 className="pdp-title">
                                    {val.title}
                                </h1>
                                <p className="pdp-desc">
                                    {val.dis}
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={5} lg={4}>
                            <div className="starts">
                                <div className="row social-shares">
                                    <i class="fa fa-share-alt overall-icons"></i>&nbsp;
                       <i class="fa fa-heart-o overall-icons"></i>
                                </div>
                                <Ratings ratings="starts-review" />
                            </div>
                        </Grid>
                        <hr class="bottom-line product-inform-ation"></hr>
                    </Grid>
                    <Hidden mdUp>
                        {mobilecarousel()}
                    </Hidden>
                    <div style={{padding:"0 10px"}}>
                        <Pricing price={val.price} offerPrice={val.offerPrice} offerDiscount='25% FLAT OFF' >
                            <div className='price-info'>
                                <Grid container spacing={12}>
                                    <Grid item xs={4} lg={2} className='discount-container'>
                                        {val.price}
                                    </Grid>
                                    <Grid item lg={5} xs={8} className="selling-price"><i class="fa fa-rupee"></i> &nbsp;
                              {val.offerPrice}
                                    </Grid>
                                </Grid>
                                {/* <Grid container spacing={12}>
                                <Grid item lg={12} xs={5} > <span className='discount'>25% FLAT OFF</span></Grid>
                            </Grid> */}
                            </div>
                        </Pricing>
                        {/* <hr class="bottom-line product-inform-ation"></hr> */}
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
ProductPrice.propTypes = {
    mobilecarousel: PropTypes.func,
    Productprice: PropTypes.func,
};
export default ProductPrice;
