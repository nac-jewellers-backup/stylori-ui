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
import { API_URL, CDN_URL } from "config"

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
    handleDeleteLocalStorage = (e) => {

        var local_storage = JSON.parse(localStorage.getItem('cartDetails'))
        // var currentValue = e.target.id
        var currentValue = e.target.id && e.target.id.length > 0 ? e.target.id : e.currentTarget.id


        // console.clear()
        // console.log("e-clear",e.target.id)

        var a = local_storage.products.filter(val => {
            if (currentValue !== val.sku_id) {
                return val
            }
        })
        function status(response) {

            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }

        function json(response) {
            return response.json()
        }
        if (JSON.parse(localStorage.getItem('cart_id'))) {
            
            let cart_id = JSON.parse(localStorage.getItem('cart_id')).cart_id
            let bodyVariableRemoveCartItem = { cart_id: cart_id, product_id: currentValue }
            fetch(`${API_URL}/removecartitem`, {

                method: 'post',
                // body: {query:seoUrlResult,variables:splitHiphen()}
                // body: JSON.stringify({query:seoUrlResult}),

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...bodyVariableRemoveCartItem
                })
            })
                .then(status)
                .then(json).then(val => {
                    
                    sessionStorage.removeItem('updatedProduct');
                    alert(val.message)
                    var cartId = JSON.parse(localStorage.getItem('cartDetails')).cart_id
                    var userId = JSON.parse(localStorage.getItem('cartDetails')).user_id
                    var localstorage = JSON.stringify({ "cart_id": `${cartId}`, "user_id": `${userId}`, "products": a })
                    localStorage.setItem('cartDetails', localstorage)
                    window.location.reload();
                })
        }
        else {

            var _products = JSON.parse(localStorage.getItem('cartDetails')).products.filter(val => {
                if (val.sku_id !== currentValue) return val
            })
            var cartId = JSON.parse(localStorage.getItem('cartDetails')).cart_id
            var userId = JSON.parse(localStorage.getItem('cartDetails')).user_id
            var _obj = { cart_id: cartId, user_id: userId, products: _products }
            if (_products.length > 0) {
                localStorage.setItem('cartDetails', JSON.stringify(_obj))
                alert("You removed this product successfully")
                window.location.reload()

            }
            else {
                localStorage.removeItem('cartDetails', _products)
                alert("You removed this product successfully")
                window.location.reload()
            }



        }



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
        const filter_image = (imges__val, name, details) => {
            var image_urls;
            const width = window.innerWidth;
            if (imges__val.imageUrl && imges__val.imageUrl.length > 0) {
                // this.props.data.map(dataval => {
                //     if (dataval !== undefined && dataval !== null) {
                //         dataval.productsDetails.map(val => {
                // if (val !== undefined && val !== null) {
                // val.namedetail !== undefined && val.namedetail.map(val___ => {
                if (name && name === "Metal") {
                    var valu = details.split(" ")
                    var valu1 = valu[1]
                    var valu2 = valu1[0]
                    //  imges__val && imges__val.map(img => {
                    var cnt = imges__val && imges__val.imageUrl.split("/")
                    var cnt_b = cnt[2].split("-")
                    var cnt_c = cnt_b[1]
                    if ((cnt_c && cnt_c[1]) === valu2) {
                        var browser_type = JSON.parse(localStorage.getItem('browserDetails'))
                        var resolution = 500
                        var _resolutions = width < 960 ? `${resolution * 2}X${resolution * 2}` : `${resolution}X${resolution}`
                        var url_split = imges__val && imges__val.imageUrl.split('/')
                        var extension_split = url_split && url_split[url_split.length - 1]
                        var browser_type_append = extension_split && extension_split.split('\.')[0].concat(`${browser_type && browser_type.browser_type}`)
                        url_split[url_split && url_split.length - 1] = browser_type_append
                        url_split.splice(2, 0, _resolutions);
                        var url_construct = url_split.join().replace(/\,/g, '/')
                        image_urls = `${CDN_URL}${url_construct}`
                        return [image_urls]
                    }
                    // })
                }
                // return url
                // })
                // }
                // return image
                // })
                // }
                // return detail
                // })
                // }
                // alert(JSON.stringify( [image_urls]))
            }
        }
        return (
            <div style={{ marginTop: "10px" }}>
                <Grid container>
                    <Grid xs={12} />
                    <Grid xs={12}>
                        {this.checkoutbutton()}</Grid>
                </Grid><br />
                {this.props.data.map(dataval => (
                    dataval.productsDetails.map(val => (
                        <div style={{ outline: "none", marginBottom: "25px", boxShadow: "1px 2px 13px 7px #DEDADA", padding: "10px" }} className={classes.cart}>
                            <Grid container spacing={12} xs={12}  >
                                {/* {window.location.pathname !== "/checkout" ?
                                    <Grid item xs={1}  >
                                        <a>Redirect</a>
                                    </Grid> : ""} */}
                                <Grid item xs={3} sm={3} style={{ display: "flex", alignContent: "center", alignItems: "center", padding: "1px" }}>
                                    {/* {val.namedetail !== undefined && val.namedetail.map(val => (
                                        dataval.fadeImages.map(im_ => <>
                                            {filter_image(im_, val.name, val.details).length > 0 ? */}
                                    <Card className="product-image-thumb">
                                        {/* <CardHeader style={{ padding: "0px", paddingTop: "10px" }}
                                            id={dataval.generatedSku}
                                            action={
                                                <Button id={dataval.generatedSku} onClick={(event) => this.handleDeleteLocalStorage(event, dataval.generatedSku)}>
                                                    <Wishlist sku={dataval.generatedSku} productId={dataval.productId} />
                                                </Button>
                                            }
                                        /> */}
                                        {/* <img src={}/> */}
                                        {val.namedetail !== undefined && val.namedetail.map(val => (
                                            dataval.fadeImages.map(im_ => <>
                                                {
                                                
                                                filter_image(im_, val.name, val.details) && filter_image(im_, val.name, val.details).length > 0 ?
                                                    <>
                                                    {
                                                        
                                                    window.location.pathname !== "/checkout" ? 
                                                    <NavLink to={dataval.skuUrl} style={{ textDecoration: 'none' }}>
                                                        <Slideshow className="image"
                                                            fadeImages={filter_image(im_, val.name, val.details)} dataCarousel={dataCarousel} />
                                                    </NavLink>
                                                     : 
                                                     <Slideshow className="image"
                                                        fadeImages={filter_image(im_, val.name, val.details)} dataCarousel={dataCarousel} />
                                                        }
                                                        </> : ""

                                                }</>)
                                        ))}
                                    </Card>
                                    {/* : ""

                                            }</>) */}
                                    {/* ))} */}
                                </Grid>

                                <Grid item xs={5} sm={7} lg={6} style={{ padding: "13px" }}>
                                    {window.location.pathname !== "/checkout" ? <NavLink to={dataval.skuUrl} style={{ textDecoration: 'none' }}>
                                        <h3 className={`title ${classes.normalfonts}`}>{val.pro_header}</h3>
                                    </NavLink> : <h3 className={`title ${classes.normalfonts}`}>{val.pro_header}</h3>}
                                    <Grid container spacing={12} >
                                        <Grid item xs={8} >
                                            {val.namedetail !== undefined && val.namedetail.map(val => {
                                                
                                                return (
                                                    <>
                                                        {val.name || val.detail  ?

                                                            <Grid container spacing={12}>
                                                                <Grid item xs={6} >
                                                                    <Typography className={`subhesder ${classes.normalfonts}`}>{val.name}</Typography>
                                                                </Grid>
                                                                <Grid item xs={6} >
                                                                    <Typography className={`subhesder ${classes.normalfonts}`}>{val.details}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                            :
                                                            null}
                                                    </>
                                                )
                                            }
                                            )}
                                        </Grid>

                                        <Grid item xs={4} >
                                            <Typography style={{ marginTop: "8px" }} className={`subhesder ${classes.normalfonts}`}>Quantity 1</Typography>

                                            {/* {data[0].isReadyToShip === true ? */}
                                            <Typography className={`subhesder ${classes.normalfonts}`}>{data[0].shipby}</Typography>
                                            {/* : ""} */}

                                            {window.location.pathname !== "/checkout" ? <div className="highlighter" className={`subhesder hov ${classes.normalfonts}`}
                                                id={dataval.generatedSku} onClick={(event) => this.handleDeleteLocalStorage(event)}>
                                                <i class="fa fa-trash"></i>
                                                &nbsp;Remove</div> : ""}
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item xs={4} sm={2} lg={3}>
                                    <div style={{ marginTop: "15%" }}>
                                        {dataval.dataCard1.map(val =>
                                        {
                                            
                                            return(<Pricing
                                                detail={dataval}
                                                offerDiscount={(val.discount) ? `${val.discount}% - OFF` : null}
                                                price={val.price}
                                                offerPrice={val.offerPrice} >
                                            </Pricing>)
                                        }
                                            
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

                        <div style={{ textDecoration: 'none' }} onClick={() => {
                            // window.location.reload()
                            localStorage.removeItem("bil_isactive")
                            localStorage.removeItem("ship_isactive")
                            localStorage.setItem("panel", 1);
                            localStorage.removeItem("select_addres")
                            window.location.href = '/checkout'
                        }}>
                            {/* {window.location.reload()} */}
                            <Buynowbutton class={`chckout-page-buynow ${classes.buttons}`} />
                        </div>
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
                                <Typography className={`subhesder ${classes.normalfonts}`}>Subtotal</Typography>
                                <Typography className={`subhesder ${classes.normalfonts}`}>You Saved</Typography>
                        {props.cartFilters.tax_price ? <Typography className={`subhesder ${classes.normalfonts}`}>{props.cartFilters.coupon_type}</Typography> : ""}
                                <Typography className={`subhesder ${classes.normalfonts}`}>Shipping</Typography>
                                <Typography className={`subhesder-totsl-size ${classes.normalfonts}`}>Grand Total</Typography>
                            </Grid>
                            <Grid xs={5} >
                                <Typography className={`subhesder ${classes.normalfonts}`}>{props.cartFilters.gross_amount ? Math.round(props.cartFilters.gross_amount) : 
                                Math.round(dataCard1)
                                }</Typography>
                                <Typography className={`subhesder ${classes.normalfonts}`}>{Math.round(yousave)}</Typography>
                                {props.cartFilters.tax_price ? <Typography className={`subhesder ${classes.normalfonts}`}>
                                    {props.cartFilters.tax_price}</Typography> : ""}
                                <Typography className={`subhesder ${classes.normalfonts}`}>FREE </Typography>
                                <Typography className={`subhesder-totsl-size ${classes.normalfonts}`}>{props.cartFilters.discounted_amount ?Math.round(props.cartFilters.discounted_amount) : Math.round(dataCard1 - discounted_price) }</Typography>
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
                                    <div className='btn-plain'>  Continue shopping</div>
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
