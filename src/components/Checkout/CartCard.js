import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Cart.css'
import {
    Grid,
    CardHeader,
    Card,
    IconButton,
    Hidden
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import { withStyles } from '@material-ui/core/styles';
import Buynowbutton from '../Buynow/buynowbutton';
import { useDummyRequest } from '../../hooks';
import { cartdatas } from '../../mappers';
import CardSmallScreen from './CartCardSmallScreen.js';
import Pricing from '../Pricing/index'
import styles from "./style"
import { NavLink } from 'react-router-dom';
// 
// 


class Checkoutcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: true
        }
    }

    row = () => {
        const dataCarousel = {
            slidesToShow: 1,
            arrows: false,
        }
        const { classes, data } = this.props;
        const { productsDetails, fadeImages, dataCard1 } = this.props.data;
        return (
            <div style={{ marginTop: "10px" }}>
                {this.props.data.map(dataval => (
                    dataval.productsDetails.map(val => (
                        <div className={classes.cart}>
                            <Grid container spacing={12} xs={12}  >
                                <Grid item xs={1}  >
                                    <a
                                        // onClick={() => remove(id)}
                                        style={{ textDecoration: "none" }} href=""><div class="remove-product"></div></a>
                                </Grid>
                                <Grid item xs={2} >
                                    <Card className="product-image-thumb">
                                        <CardHeader style={{ padding: "0px" }}
                                            action={
                                                <IconButton >
                                                    <i style={{ fontSize: "18px", color: "#337ab7" }} class='fa fa-heart-o'></i>
                                                </IconButton>
                                            }
                                        />
                                        <Slideshow class="image"
                                            fadeImages={data[0].fadeImages} dataCarousel={dataCarousel} />
                                    </Card>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "20px" }}>
                                    <h3 class={`title ${classes.normalfonts}`}>{val.header}</h3>
                                    <Grid container spacing={12} >
                                        <Grid item xs={6} >
                                            {val.namedetail !== undefined && val.namedetail.map(val => (
                                                <Grid container spacing={12}>

                                                    <Grid item xs={6} >
                                                        <Typography className={`subhesder ${classes.normalfonts}`}>{val.name}</Typography>
                                                    </Grid>
                                                    <Grid item xs={6} >
                                                        <Typography className={`subhesder ${classes.normalfonts}`}>{val.details}</Typography>
                                                    </Grid>
                                                </Grid>

                                            ))}
                                        </Grid>

                                        <Grid item xs={3} >
                                            <Typography className={`subhesder ${classes.normalfonts}`}>Quantity 1</Typography>
                                            <br />
                                            <Typography className={`subhesder hov ${classes.normalfonts}`}>
                                                <i class="fa fa-trash"></i>
                                                &nbsp;Remove</Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item xs={3} >
                                    <div style={{ marginTop: "15%" }}>
                                        {dataval.dataCard1.map(val =>
                                            <Pricing price={val.price} offerPrice={val.offerPrice} >
                                                <div className="product-rate">
                                                    <span class="offer-price">{val.price}</span><br />
                                                    <span class="price">{val.offerPrice}</span><br />
                                                </div>
                                            </Pricing>
                                        )}
                                        <span class={`offer-description ${classes.backgsecondary}`}>25% - OFF</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                ))}


                {this.subtotals()}
            </div>
        )

    }
    checkoutbutton = () => {
        const { classes } = this.props;
        let path = window.location.pathname.split('/').pop();
        return (
            <div>
                {path == "checkout" ? "" :
                    <div className='ckeckout-top'>
                        <NavLink to="/checkout" style={{ textDecoration: 'none' }}>
                            <Buynowbutton class={`chckout-page-buynow ${classes.buttons}`} />
                        </NavLink>
                    </div>}
            </div>
        )
    }
    subtotals = () => {
        // const { dataCard1 } = this.props.data;
        const dataCard1 = this.props.data[0].dataCard1[0];
        const yousave = Math.round(Number(dataCard1.price) - Number(dataCard1.offerPrice))
        let path = window.location.pathname.split('/').pop();
        const { classes } = this.props;
        return (
            <div style={{ marginTop: "10px" }} >
                <Grid container spacing={12}>
                    <Grid item xs={3} lg={9} />
                    <Grid item xs={9} lg={3}>
                        {/* {dataCard1.map(val => */}
                        <Grid container>
                            <Grid xs={7} lg={5}>
                                <Typography class={`subhesder ${classes.normalfonts}`}>Subtotal</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>You Saved</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>Shipping</Typography>
                                <Typography class={`subhesder-totsl-size ${classes.normalfonts}`}>Grand Total</Typography>
                            </Grid>
                            <Grid xs={5} lg={5}>
                                <Typography class={`subhesder ${classes.normalfonts}`}>{Math.round(dataCard1.offerPrice)}</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>{yousave}</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>------- </Typography>
                                <Typography class={`subhesder-totsl-size ${classes.normalfonts}`}>{Math.round(dataCard1.offerPrice)}</Typography>
                            </Grid>
                        </Grid>
                        {/* // )}  */}
                    </Grid>
                </Grid>
                <Grid container>
                    {path == "checkout" ? "" :
                        <Grid xs={12} lg={7}>
                            <div className='btn-plain'> CONTINUE SHOPPING</div>
                        </Grid>}
                    <Grid xs={12} lg={4} >
                        {this.checkoutbutton()}
                    </Grid>
                </Grid>
            </div>
        )
    }
    render() {
        const dataCarousel = {
            slidesToShow: 1,
            arrows: false,
        }
        var data = this.props.data
        // const {  cartsubdata } = this.props.data;


        const { classes } = this.props;
        let path = window.location.pathname.split('/').pop();
        return (
            <div>
                <Hidden smDown>
                    {this.checkoutbutton()}
                    <br />
                    <br />
                    <br />
                    {this.row()}
                </Hidden>
                <Hidden smUp>
                    <CardSmallScreen />
                    {this.subtotals()}
                </Hidden>
            </div>
        )
    }

}
export default withStyles(styles)(Checkoutcard)