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
                <Slideshow class='responseve-carousel' imgClass='responseve-carousel-img'
                    fadeImages={T.fadeImages} dataCarousel={dataCarousel} />
            </div>

        </Container>
    );
};
const Productprice = () => {
    return (
        <div>

            {/* // {dataCard[123].map(val => ( */}

            <>
                <Grid container spacing={12} sm={12}>
                    <Grid item xs={7} sm={7}>
                        <div className="price-div">
                            <h1 className="pdp-title">
                                {/* {val.title} */}Exquisite Pendant
                        </h1>
                            <p className="pdp-desc">
                                {/* {val.dis} */}Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )
                        </p>
                        </div>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                        <div className="starts">
                            <div className="row social-shares">
                                <i class="fa fa-share-alt overall-icons"></i>&nbsp;
                       <i class="fa fa-heart-o overall-icons"></i>
                            </div>
                            <div className="starts-review">
                                <Ratings />

                            </div>
                        </div>
                    </Grid>
                    <hr class="bottom-line product-inform-ation"></hr>
                </Grid>
                <Hidden mdUp>
                    {mobilecarousel()}
                </Hidden>
                <div className='price-info'>
                    <Grid container spacing={12}>
                        <Grid item xs={4} lg={2} className='discount-container'>
                            {/* {val.offerPrice} */} 955.4944
                    </Grid>
                        <Grid item lg={5} xs={8} className="selling-price"><i class="fa fa-rupee"></i> &nbsp;
                    {/* {val.save} */} 98.8989
                    </Grid></Grid>
                    <Grid container spacing={12}>
                        <Grid item lg={12} xs={5} > <span className='discount'>25% FLAT OFF</span></Grid>
                    </Grid>
                    <hr class="bottom-line product-inform-ation"></hr>
                </div>
            </>
            {/* ))} */}
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
