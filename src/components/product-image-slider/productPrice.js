import {
    Grid,
    Hidden,
    Container,
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-images.css'
import Ratings from '../rating/rating'
// import card from '../ProductCard/ProductData'
import { withStyles } from '@material-ui/core/styles';
import Pricing from '../Pricing/index'
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
import styles from './style'
const dataCarousel = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: true,
}

const mobilecarousel = (props) => {
    const { fadeImages } = props.data;
    return (
        <Container>
            <div style={{ height: '200px', width: "auto" }}>
                <Slideshow class='responseve-carousel testingcur' imgClass='responseve-carousel-img'
                    fadeImages={fadeImages} dataCarousel={dataCarousel} />
            </div>

        </Container>
    );
};



const Productprice = (props) => {
    const { classes } = props;
    const { dataCard1 } = props.data;
    return (
        <div>
            {dataCard1.map(val => (
                <>
                    <Grid container spacing={12} sm={12} className={classes.pricedetails}>
                        <Grid item xs={7} lg={8}>
                            <div className="price-div">
                                <h1 className="pdp-title">
                                    {val.title}
                                </h1>
                                <p className={`pdp-desc ${classes.dis}`}>
                                    {val.dis}
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={5} lg={4}>
                            <div className="starts">
                                <div className="row social-shares" className={classes.icon}>
                                    <i class="fa fa-share-alt overall-icons"></i>
                                    &nbsp;
                                    <i class="fa fa-heart-o overall-icons"></i>
                                </div>
                                <Ratings ratings="starts-review" />
                            </div>
                        </Grid>
                        <hr class="bottom-line product-inform-ation"></hr>
                    </Grid>
                    <Hidden mdUp>
                        {mobilecarousel(props)}
                    </Hidden>
                    <div className={classes.width} style={{padding:"0 10px"}}>
                        <Pricing price={val.price} offerPrice={val.offerPrice} offerDiscount='25% FLAT OFF' >
                            <Grid container spacing={12}>
                                <div className={`price-info ${classes.dis}`}>
                                    <Grid item xs={4} lg={2} className={`discount-container ${classes.dis}`}>
                                        {val.price}
                                    </Grid>
                                    <Grid item lg={5} xs={8} className={`selling-price ${classes.backgsecondary}`}><i class="fa fa-rupee"></i> &nbsp;
                              {val.offerPrice}
                                    </Grid>
                                </div>
                            </Grid>
                            {/* <Grid container spacing={12}>
                                <Grid item lg={12} xs={5} > <span className='discount'>25% FLAT OFF</span></Grid>
                            </Grid> */}
                        </Pricing>
                        {/* <hr class="bottom-line product-inform-ation"></hr> */}
                    </div>
                </>
            ))}
        </div>
    )
};

class ProductPrice extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Hidden smDown>
                    {Productprice(this.props)}
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        {Productprice(this.props)}
                    </Container>
                </Hidden>
            </div>


        )
    }
}
ProductPrice.propTypes = {
    mobilecarousel: PropTypes.func,
    Productprice: PropTypes.func,
};
export default withStyles(styles, { withTheme: true })(props => {
    const { mapped } = useDummyRequest(productpricingPages);
    if (Object.keys(mapped).length === 0) return ''

    return <ProductPrice {...props} data={mapped} />
});


