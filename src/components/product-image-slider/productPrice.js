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

const Productprice = (props, share) => {
    debugger
    const { classes, data } = props;
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
                                    <i class="fa fa-share-alt overall-icons"></i>
                                    {/* <i
                                        onClick={() => { this.setState({ share: !share }) }}
                                        class="fa fa-share-alt overall-icons"></i> &nbsp;
                                    <i class="fa fa-heart-o overall-icons"></i> */}
                                    {/* <div onClick={() => { this.setState({ heart: !this.state.heart }) }}>
                                        {this.state.heart === true ?
                                            <i class="fa fa-heart-o overall-icons"></i>
                                            : <p>heart</p>
                                        }
                                        }
                                    </div> */}
                                    {/* {this.state.share == true ?
                                        <div style={{ position: 'fixed' }}>
                                            share
                                            </div>
                                        :
                                        ''} */}
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
            heart: true,
        }
    }

    render() {
        const { share } = this.state
        return (
            <div>
                <Hidden smDown>
                    {Productprice(this.props, share)}
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        {Productprice(this.props, share)}
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


