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
import { CartContext } from 'context'
import cart from 'mappers/cart'
// import { FilterOptionsContext } from 'context/FilterOptionsContext';
// 
// 


class Checkoutcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: true
        }
    }
    handleDeleteLocalStorage = (e) => {
        var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
        var currentValue = e.target.id
        var a = local_storage.products.filter(val => {
            if (currentValue !== val.sku_id) {
                return val
            }
        })
        var cartId = JSON.parse(localStorage.getItem('cartDetails')).cart_id
        var userId = JSON.parse(localStorage.getItem('cartDetails')).user_id
        var localstorage = JSON.stringify({ "cart_id": `${cartId}`, "user_id": `${userId}`, "products": a })
        localStorage.setItem('cartDetails', localstorage)
        window.location.reload();
    }
    row = (props) => {
        const dataCarousel = {
            slidesToShow: 1,
            arrows: false,
        }
        const { classes, data } = this.props;
        const { productsDetails, fadeImages, dataCard1 } = this.props.data;
        // const { FilterOptionsCtx: { setcartcount } } = React.useContext(FilterOptionsContext);
        // React.useEffect(()=>{
        //     setcartcount({
        //         cartcount: this.props.data.length
        //     })
        // },[data])
debugger
return (
            <div style={{ marginTop: "10px" }}>
                {this.props.data.map(dataval => (
                    dataval.productsDetails.map(val => (
                        <div className={classes.cart}>
                            <Grid container spacing={12} xs={12}  >
                                <Grid item xs={1}  >
                                    <div id={val.namedetail[0].details} onClick={(event) => this.handleDeleteLocalStorage(event)} class="remove-product"></div>
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
                                            fadeImages={dataval.fadeImages} dataCarousel={dataCarousel} />
                                    </Card>
                                </Grid>
                                <Grid item xs={6} style={{ padding: "20px" }}>
                                    <h3 class={`title ${classes.normalfonts}`}>{val.pro_header}</h3>
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
                                            <Typography className={`subhesder hov ${classes.normalfonts}`}
                                                id={val.namedetail[0].details} onClick={(event) => this.handleDeleteLocalStorage(event)}>
                                                <i class="fa fa-trash"></i>
                                                &nbsp;Remove</Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item xs={3} >
                                    <div style={{ marginTop: "15%" }}>
                                        {dataval.dataCard1.map(val =>
                                            <Pricing price={val.price} offerPrice={val.offerPrice} >
                                                {/* <div className="product-rate">
                                                    <span class="offer-price">{val.price}</span><br />
                                                    <span class="price">{val.offerPrice}</span><br />
                                                </div> */}
                                            </Pricing>
                                        )}
                                        <span class={`offer-description ${classes.backgsecondary}`}>25% - OFF</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))
                ))}
                {this.subtotals(props)}
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
    subtotals = (props) => {
        // alert(JSON.stringify(props.cartFilters.discounted_price))
        // const { dataCard1 } = this.props.data;
        const dataCard1 = this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);
        // this.props.data.map(val=>{return val.dataCard1[0].offerPrice}).reduce(myFunc)

        var yousave = this.props.data.map((_data) => {
            return _data.dataCard1[0].price - _data.dataCard1[0].offerPrice
        }).reduce(myFunc)

        // function myFunc(total, num) {
        //     return Math.round(total + num);
        // }

        function myFunc(total, num, discounted_price) {
            var discounted_price = props.cartFilters.discounted_price ? JSON.stringify(props.cartFilters.discounted_price) : ""
            if (discounted_price.length > 0) {
                var a = Math.round(total + num);
                var cart_price = (a - discounted_price)
            } else {
                var cart_price = Math.round(total + num);
            }
            return cart_price
        }

        // const yousave = Math.round(Number(dataCard1.price) - Number(dataCard1.offerPrice))
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
                                {props.cartFilters.tax_price ? <Typography class={`subhesder ${classes.normalfonts}`}>GST</Typography> : ""}
                                <Typography class={`subhesder ${classes.normalfonts}`}>Shipping</Typography>
                                <Typography class={`subhesder-totsl-size ${classes.normalfonts}`}>Grand Total</Typography>
                            </Grid>
                            <Grid xs={5} lg={5}>
                                <Typography class={`subhesder ${classes.normalfonts}`}>{Math.round(dataCard1)}</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>{yousave}</Typography>
                                {props.cartFilters.tax_price ? <Typography class={`subhesder ${classes.normalfonts}`}>
                                    {props.cartFilters.tax_price}</Typography> : ""}
                                <Typography class={`subhesder ${classes.normalfonts}`}>FREE </Typography>
                                <Typography class={`subhesder-totsl-size ${classes.normalfonts}`}>{Math.round(dataCard1)}</Typography>
                            </Grid>
                        </Grid>
                        {/* // )}  */}
                    </Grid>
                </Grid>
                <Grid container>
                    {path == "checkout" ? "" :
                        <Grid xs={12} lg={7}>
                            <NavLink to="/jewellery">
                                <div className='btn-plain'> CONTINUE SHOPPING</div>
                            </NavLink>

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
        const { classes } = this.props;
        // alert(discounted_price)
        let path = window.location.pathname.split('/').pop();
        return (
            <div>
                <Hidden smDown>
                    {this.checkoutbutton(this.props)}
                    <br />
                    <br />
                    <br />
                    {this.row(this.props)}
                </Hidden>
                <Hidden smUp>
                    <CardSmallScreen data={this.props.data}
                        handleDeleteLocalStorage={(event) => this.handleDeleteLocalStorage(event)}
                        //  subtotals={Math.round(dataCard1)}
                        checkoutbutton={this.checkoutbutton()}
                    />
                    {this.subtotals(this.props)}
                </Hidden>
            </div>
        )
    }

}
const Components = props => {
    let { CartCtx: { cartFilters } } = React.useContext(CartContext);
    let content;
    console.log('props.cartFilters.discounted_price', cartFilters)
    content = <Checkoutcard {...props} cartFilters={cartFilters} />
    return content
}
export default withStyles(styles)(Components)