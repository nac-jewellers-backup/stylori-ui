import {
    Grid,
    Hidden,
    ExpansionPanel,
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
import Wishlist from 'components/wishlist/wishlist';

const dataCarousel = {
    dots: true,
    infinite: false,
    speed: 1000,
    fade: true,
    arrows: false,
    className: 'button__bar',
}

const mobilecarousel = (props, val) => {
    const { data, classes } = props;
    return (
        <div>
            <Grid container spacing={12} xs={12} style={{ position: "absolute" }}>
                <Grid container item xs={6}>
                    <div className="css-ts7n45 e5toz5w4"><span style={{ color: "#fff" }} className="e195g4sk5 css-5pjie5 ekntgft2">{val.offerDiscount}</span><br />
                        {data[0].ProductContactNum[0].isReadyToShip === true ? <div className="css-ts7n45-redy_toship one-day-ship-mb"></div> : ""}
                    </div>
                </Grid>
                <Grid container item xs={4} />
                <Grid container item xs={2} className="css-ts7n45_wishlist">
                    <Wishlist props={"1"} />
                </Grid>
            </Grid>
            {/* <div style={{background:"red"}}>Earrings in 18K Yellow Gold and Peridot for Kids</div> */}
            <Slideshow class='responseve-carousel testingcur' imgClass='responseve-carousel-img'
                fadeImages={data[0].fadeImages} dataCarousel={dataCarousel} />
        </div>
    );
};

const Productprice = (props, anchorEl, handleClick, handleClose) => {
    const { data } = props;
    const { classes } = props;
    const open = anchorEl;
    return (
        <div>
            {data.map(val => (
                <>
                    <Grid container spacing={12} sm={12} className={classes.pricedetails}>
                        <Hidden mdUp>
                            <div className="resp" >
                                {/* <div className="respc"> */}
                                {/* <h1 className={`pdp-title ${classes.title}`}>
                                        {val.title}
                                    </h1> */}
                                {/* <Grid container spacing={12} xs={12}> */}
                                {/* <Grid container item xs={6} justify={'flex-start'}>
                                            <Pricing
                                                offerDiscount={}
                                            />
                                        </Grid> */}
                                {/* <Grid container item xs={6} md={6} justify={'flex-end'}>
                                            <Grid container item xs={8} xs={8} justify={'flex-end'}>
                                                {data[0].ProductContactNum[0].isReadyToShip == true ? <div className="one-day-ship-mb"></div> : ""}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div> */}
                                {mobilecarousel(props, val)}

                                {/* <div style={{ background: "rgb(238, 238, 238)", width: "100%" }}>
                                    <div className="respc">
                                        <Grid container spacing={12} xs={12}>
                                            <Grid container item xs={6} justify={'flex-start'}>
                                                <Pricing
                                                    price={data[0].price}
                                                    offerPrice={data[0].offerPrice}
                                                />
                                            </Grid> */}
                                {/* <Grid container item xs={6} justify={'flex-end'}>
                                                <div>
                                                    {data[0].ProductContactNum.map(val =>
                                                        <div style={{ marginTop: "10px" }}>
                                                            <b className={`ships-by ${classes.normalfonts}`}> */}
                                {/* <span class="ship-img"></span> */}
                                {/* <span > {val.shipby}</span>
                                                            </b>
                                                        </div>
                                                    )}
                                                </div>
                                            </Grid> */}
                                {/* </Grid>
                                    </div>
                                </div> */}
                                {/* <hr class="bottom-line product-inform-ation"></hr> */}
                                {/* <br /><br /> */}

                            </div>
                        </Hidden>
                        <Grid item xs={12} lg={9}>
                            <div className="price-div">
                                <Hidden mdUp>
                                    <ExpansionPanel style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05) ! important", padding: "0 5px", marginBottom: "3%", marginTop: "3%" }} >
                                        <Grid container spacing={12} xs={12}>
                                            <Grid container item xs={8} lg={7}>
                                               <div style={{width:"90%"}}>
                                               <h1 className={`pdp-title ${classes.title}`} >
                                                    {val.title}
                                                </h1>
                                                <p className={`pdp-desc ${classes.dis}`}>
                                                    {val.dis}
                                                </p>
                                               </div>
                                            </Grid>
                                            <Grid container item xs={4} lg={6}>
                                                <div>
                                                    {data[0].ProductContactNum.map(val =>
                                                        <div style={{ marginTop: "8px" }}>
                                                            <b className={`ships-by ${classes.normalfonts}`}>
                                                                {/* <span class="ship-img"></span> */}
                                                                <span > {val.shipby}</span>

                                                                <Grid container spacing={12} >
                                                                    <Grid item xs={12} style={{ textAlign: "center" }}>
                                                                        <span class="css-kqsna2">
                                                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(data[0].offerPrice))}</span>
                                                                        <br /> <span class="css-tg000w">
                                                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(data[0].price))}</span>
                                                                    </Grid>
                                                                </Grid>
                                                            </b>
                                                        </div>
                                                    )}
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </ExpansionPanel>
                                </Hidden>
                                <Hidden smDown>
                                    <h1 className={`pdp-title ${classes.title}`}>
                                        {val.title}
                                    </h1>
                                    <p className={`pdp-desc ${classes.dis}`}>
                                        {val.dis}
                                    </p>
                                </Hidden>

                            </div>
                        </Grid>

                        <Hidden smDown>
                            <Grid item xs={12} lg={3} style={{
                                display: "flex",
                                lineHeight: "20px"
                            }}>
                                <div className="starts product-icons" style={{ fontFamily: "fontawesome" }} >
                                    <div className="row social-shares"
                                        className={classes.icon}>
                                        <i class="fa fa-share-alt overall-icons"
                                            aria-owns={open ? 'simple-popper' : ""}
                                            onClick={handleClick}
                                        ></i> &nbsp;
                                        {/* {JSON.stringify(val.productId)} */}
                                        <Wishlist sku={val.skuId} productId={val.productId} />

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

                                        <div><Ratings ratings="starts-review" /></div>
                                    </div>
                                </div>
                            </Grid>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </Hidden>
                    </Grid>



                    <Hidden smDown>
                        <div className={classes.width} style={{ padding: "0 10px" }}>
                            <Pricing
                                price={data[0].price}
                                offerPrice={data[0].offerPrice}
                                offerDiscount={val.offerDiscount}
                            >
                                {/* <Grid container spacing={12}>
                                    <div className={`price-info ${classes.dis}`}>
                                        <Grid item xs={4} lg={2} className={`discount-container ${classes.dis}`}>
                                            {val.price}
                                        </Grid>
                                        <Grid item lg={5} xs={8} className={`selling-price ${classes.backgsecondary}`}><i class="fa fa-rupee"></i> &nbsp;
                              {val.offerPrice}
                                        </Grid>
                                    </div>
                                </Grid> */}
                            </Pricing>
                        </div>
                    </Hidden>
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


