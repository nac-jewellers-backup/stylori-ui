import {
    Grid,
    Hidden,
    Container,
    Popover,
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-images.css'
import Ratings from '../rating/rating'
import { withStyles } from '@material-ui/core/styles';
import Pricing from '../Pricing/index'
import styles from './style';

const dataCarousel = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: true,
}

const mobilecarousel = (props) => {
    const { data } = props;
    return (
        <Container>
            <div style={{ height: '200px', width: "auto" }}>
                <Slideshow class='responseve-carousel testingcur' imgClass='responseve-carousel-img'
                    fadeImages={data.fadeImages} dataCarousel={dataCarousel} />
            </div>

        </Container>
    );
};

const Productprice = (props, anchorEl, handleClick, handleClose) => {
    const { classes, data } = props;
    const open = anchorEl;
    return (
        <div>
            {data.map(val => (
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
                            <div className="starts product-icons" style={{ fontFamily: "fontawesome" }} >
                                <div className="row social-shares"
                                    className={classes.icon}>
                                    <i class="fa fa-share-alt overall-icons"
                                        aria-owns={open ? 'simple-popper' : ""}
                                        onClick={handleClick}
                                    ></i> &nbsp;
                                    <i class="fa fa-heart-o overall-icons"
                                    //  onClick={() => }
                                    ></i>

                                    <Popover
                                        id="simple-popper"
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <div className="product-share">
                                            <h5>Share the Jewellery</h5>
                                            <a class="facebook" target="_blank">
                                                <img class="lazyload" src="https://assets-cdn.stylori.com/images/static/newsprite/iconmonstr-facebook-5-share.svg" />
                                            </a>&nbsp;
                                            <a class="twitter" target="_blank">
                                                <img class="lazyload" src="https://assets-cdn.stylori.com/images/static/newsprite/iconmonstr-twitter-5-share.svg" />
                                            </a>&nbsp;
                                            <a class="google" target="_blank">
                                                <img class="lazyload" src="https://assets-cdn.stylori.com/images/static/newsprite/iconmonstr-google-plus-5-share.svg" />
                                            </a>
                                        </div>
                                    </Popover>

                                    <Ratings ratings="starts-review" />
                                </div>
                            </div>
                        </Grid>
                        <hr class="bottom-line product-inform-ation"></hr>
                    </Grid>

                    <Hidden mdUp>
                        {mobilecarousel(props)}
                    </Hidden>

                    <div className={classes.width} style={{ padding: "0 10px" }}>
                        <Pricing
                            price={val.price}
                            offerPrice={val.offerPrice}
                            offerDiscount={val.offerDiscount}
                        >
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
                        </Pricing>
                    </div>
                </>
            ))}
        </div>
    )
};

class ProductPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share: false,
            heart: false,
            anchorEl: false
        }
    }
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: false,
        });
    };

    render() {
        const { anchorEl } = this.state
    return (
            <div>
                <Hidden smDown>
                    {Productprice(
                        this.props, anchorEl,
                        this.handleClick,
                        this.handleClose)}
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        {Productprice(
                            this.props,
                            anchorEl,
                            this.handleClick,
                            this.handleClose)}
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
export default withStyles(styles)(ProductPrice);


