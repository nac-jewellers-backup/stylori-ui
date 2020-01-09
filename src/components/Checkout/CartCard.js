import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Cart.css'
import {
    Grid,
    CardHeader,
    Card,
    IconButton,
    Hidden,
    Container,
    Button

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
import Wishlist from 'components/wishlist/wishlist';
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

    // handlereloadcart = (val) => {
    //     const data = this.props.data
    //     
    //     var redirect_url;
    //     redirect_url = data.map(val =>
    //         "/jewellery" + "/" + val.productType + "/" + val.materialName + "/" + val.prdheader + "/" + val.generatedSku
    //     )
    //     return alert(JSON.stringify(redirect_url))

    // }
    handleDeleteLocalStorage = (e, dlt) => {
        var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
        var currentValue = e.target.id || dlt
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
    handlereloadcart = (val) => {
        const data = this.props.data
        var redirect_url;
        redirect_url = data.map(val =>
            "/jewellery" + "/" + val.productType + "/" + val.materialName + "/" + val.prdheader + "/" + val.generatedSku
        )
        return alert(JSON.stringify(redirect_url))

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
        
        return (
            <div style={{ marginTop: "10px" }}>
                <Grid container>
                    <Grid xs={12} />
                    <Grid xs={12}>
                        {this.checkoutbutton()}</Grid>
                </Grid><br />
                {this.props.data.map(dataval => (
                    dataval.productsDetails.map(val => (
                        <div style={{ outline: "none", marginBottom: "10px", boxShadow: "1px 2px 13px 7px #DEDADA" }} className={classes.cart}>
                            <Grid container spacing={12} xs={12}  >
                                {/* {window.location.pathname !== "/checkout" ?
                                    <Grid item xs={1}  >
                                        <a>Redirect</a>
                                    </Grid> : ""} */}
                                <Grid item xs={3} sm={3} style={{ display: "flex", alignContent: "center", alignItems: "center", border: " 0.5px solid #0000001f", padding: "1px" }}>
                                    <Card className="product-image-thumb">
                                        {/* <CardHeader style={{ padding: "0px", paddingTop: "10px" }}
                                            id={dataval.generatedSku}
                                            action={
                                                <Button id={dataval.generatedSku} onClick={(event) => this.handleDeleteLocalStorage(event, dataval.generatedSku)}>
                                                    <Wishlist sku={dataval.generatedSku} productId={dataval.productId} />
                                                </Button>
                                            }
                                        /> */}
                                        {window.location.pathname !== "/checkout" ? <NavLink to={`jewellery/${dataval.productType}/${dataval.materialName[0]}/${val.pro_header}?skuId=${dataval.generatedSku}`} style={{ textDecoration: 'none' }}>
                                            <Slideshow class="image"
                                                fadeImages={dataval.fadeImages} dataCarousel={dataCarousel} />
                                        </NavLink> : <Slideshow class="image"
                                            fadeImages={dataval.fadeImages} dataCarousel={dataCarousel} />}
                                    </Card>
                                </Grid>

                                <Grid item xs={5} sm={7} lg={6} style={{ padding: "13px" }}>
                                    {window.location.pathname !== "/checkout" ? <NavLink to={`jewellery/${dataval.productType}/${dataval.materialName[0]}/${val.pro_header}?skuId=${dataval.generatedSku}`} style={{ textDecoration: 'none' }}>
                                        <h3 class={`title ${classes.normalfonts}`}>{val.pro_header}</h3>
                                    </NavLink> : <h3 class={`title ${classes.normalfonts}`}>{val.pro_header}</h3>}
                                    <Grid container spacing={12} >
                                        <Grid item xs={9} >
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
                                            {window.location.pathname !== "/checkout" ? <div className={`subhesder hov ${classes.normalfonts}`}
                                                id={val.namedetail[4].details} onClick={(event) => this.handleDeleteLocalStorage(event)}>
                                                <i class="fa fa-trash"></i>
                                                &nbsp;Remove</div> : ""}
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item xs={4} sm={2} lg={3} >
                                    <div style={{ marginTop: "15%" }}>
                                        {dataval.dataCard1.map(val =>
                                            <Pricing
                                                offerDiscount={"25% - OFF"}
                                                price={val.price}
                                                offerPrice={val.offerPrice} >
                                            </Pricing>
                                        )}
                                        {/* <span class={`offer-description ${classes.backgsecondary}`}>25% - OFF</span> */}
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
        var discounted_price = this.props.cartFilters.discounted_price ? this.props.cartFilters.discounted_price : ""
        const dataCard1 = this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);
        // this.props.data.map(val=>{return val.dataCard1[0].offerPrice}).reduce(myFunc)



        // function myFunc(total, num) {
        //     return Math.round(total + num);
        // }

        function myFunc(total, num) {
            // alert(JSON.stringify(props.cartFilters.discounted_price))
            var cart_price
            if (discounted_price.length > 0) {
                var a = Math.round(total + num);
                cart_price = (a - discounted_price)
            } else {
                cart_price = Math.round(total + num);
            }
            return cart_price
        }
        var yousave = this.props.data.map((_data) => {
            return _data.dataCard1[0].price - _data.dataCard1[0].offerPrice
        }).reduce(myFunc)
        // const yousave = Math.round(Number(dataCard1.price) - Number(dataCard1.offerPrice))
        let path = window.location.pathname.split('/').pop();
        const { classes } = this.props;
        return (
            <div style={{ marginTop: "10px" }} >
                <Grid container spacing={12}>
                    <Grid item xs={6} />
                    <Grid item xs={6} >
                        {/* {dataCard1.map(val => */}
                        <Grid container>
                            <Grid xs={7} >
                                <Typography class={`subhesder ${classes.normalfonts}`}>Subtotal</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>You Saved</Typography>
                                {props.cartFilters.tax_price ? <Typography class={`subhesder ${classes.normalfonts}`}>GST</Typography> : ""}
                                <Typography class={`subhesder ${classes.normalfonts}`}>Shipping</Typography>
                                <Typography class={`subhesder-totsl-size ${classes.normalfonts}`}>Grand Total</Typography>
                            </Grid>
                            <Grid xs={5} >
                                <Typography class={`subhesder ${classes.normalfonts}`}>{Math.round(dataCard1 - discounted_price)}</Typography>
                                <Typography class={`subhesder ${classes.normalfonts}`}>{Math.round(yousave)}</Typography>
                                {props.cartFilters.tax_price ? <Typography class={`subhesder ${classes.normalfonts}`}>
                                    {props.cartFilters.tax_price}</Typography> : ""}
                                <Typography class={`subhesder ${classes.normalfonts}`}>FREE </Typography>
                                <Typography class={`subhesder-totsl-size ${classes.normalfonts}`}>{Math.round(dataCard1 - discounted_price)}</Typography>
                            </Grid>
                        </Grid>
                        {/* // )}  */}
                    </Grid>
                </Grid>
                <Grid container>
                    {path == "checkout" ? "" :
                        <>
                            < Grid xs={12} >
                                <NavLink to="/jewellery">
                                    <div className='btn-plain'> CONTINUE SHOPPING</div>
                                </NavLink>

                            </Grid></>}
                    <Grid xs={12}  >
                        {this.checkoutbutton()}
                    </Grid>
                </Grid>
            </div >
        )
    }



    render() {
        const dataCarousel = {
            slidesToShow: 1,
            arrows: false,
        }
        var data = this.props.data
        console.log(data, 'data_data-data')
        const { classes } = this.props;
        // alert(discounted_price)
        let path = window.location.pathname.split('/').pop();

        return (
            <Grid >
                <Hidden smDown>
                    {window.location.pathname === "/cart" || window.location.pathname === "/checkout" ? <Container>
                        {this.row(this.props)}
                    </Container> :
                        <>{this.row(this.props)}</>}
                </Hidden>
                <Hidden mdUp>
                    <CardSmallScreen data={this.props.data}
                        handleDeleteLocalStorage={(event) => this.handleDeleteLocalStorage(event)}
                        //  subtotals={Math.round(dataCard1)}
                        checkoutbutton={this.checkoutbutton()}
                    />
                    {this.subtotals(this.props)}
                </Hidden>
            </Grid>
        )
    }

}
const Components = props => {
    let { CartCtx: { cartFilters } } = React.useContext(CartContext);
    let content;
    content = <Checkoutcard {...props} cartFilters={cartFilters} />
    return content
}
export default withStyles(styles)(Components)
