import React from 'react';
import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar,
    Grid,
    Button
} from '@material-ui/core';
// import "../../components/Checkout/Cart.css";
import "./accounts.css";
import '../Checkout/Cart.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";
import Pricing from "../Pricing/index";
import { CDN_URL } from "config"
import { withRouter } from 'react-router-dom';
const order_id = localStorage.getItem('order_id') ? JSON.parse(localStorage.getItem('order_id')) : ""
var img_res;
var img_res_X_2 = null;
const width = window.innerWidth;
function myFunc(total, num) {
    return Math.round(total + num);
}
class Allorders extends React.Component {
    state = {
        expanded: [],
        check_img: null
    }

    handleChange = panel => (event) => {
        const { expanded } = this.state;
        var valus = expanded === panel ? "" : panel
        expanded.push(JSON.stringify(valus))
        this.setState({
            expanded

        });
    };

    // changePanel = (panel, mailId) => {
    //     this.setState({
    //         expanded: panel,
    //     })
    // }
    // const dataCard1 = this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);

    calculatetotal = (arr) => {

        var a;
        var dis_price;
        var _val = arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.filter(val => { if ((val.transSkuListByProductSku)) return val })
        if (_val.length > 0) {
            a =
                // arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes
                _val.filter(val => { if ((val.transSkuListByProductSku)) return val }).map(cart => {

                    if ((cart !== null || cart !== undefined) && cart.transSkuListByProductSku) {
                        dis_price = cart.transSkuListByProductSku.markupPrice
                    }
                    return dis_price
                }).reduce(myFunc);
        }

        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(a))
    }
    generateShipsBy = (readytoship, vendorDeliveryTime) => {
        var isReadytoShip = readytoship
        var numberOfDays = vendorDeliveryTime
        var date = moment().format(' h a')
        if (isReadytoShip) {
            if (JSON.stringify(date) > " 1 pm") {
                return 'Ships by' + ' ' + moment().add(1, 'days').format('MMM Do YYYY');
            }
        }

        else {
            return 'Ships by' + ' ' + moment().add(numberOfDays, 'days').format('MMM Do YYYY');
        }
    }


    ImageUrl = (imgs, sku, metal, paymentsuccess) => {
        
        // allorderdata.data.allOrders
        var check_img
        var ppp
        if (paymentsuccess) {
            var metalColor_ = metal
            var cnt = imgs.imageUrl.split("/")
            var cnt_b = cnt[2].split("-")
            var cnt_c = cnt_b[1]

            // if (sku === cart.transSkuListByProductSku.generatedSku) {
            var browser_type = JSON.parse(localStorage.getItem('browserDetails'))

            if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
                check_img = true

                var resolution = 500
                var _resolutions = width < 960 ? `${resolution * 2}X${resolution * 2}` : `${resolution}X${resolution}`
                var url_split = imgs && imgs.imageUrl.split('/')
                var extension_split = url_split && url_split[url_split.length - 1]
                var browser_type_append = extension_split && extension_split.split('\.')[0].concat(`${browser_type && browser_type.browser_type}`)
                url_split[url_split && url_split.length - 1] = browser_type_append
                url_split.splice(2, 0, _resolutions);
                var url_construct = url_split.join().replace(/\,/g, '/')
                // var img_url = `${baseUi}${url_construct}`
                ppp = `${CDN_URL}${url_construct}`
                // alert(this.state.check_img)
            }
            // }


            // return inside[0]



            // var outside = ppp.filter(val => (val !== undefined && val !== null))
            // alert(ppp)
            return ppp;

        }
        else {
            if (this.props && this.props.allorderdata && this.props.allorderdata.allorderdata && this.props.allorderdata.allorderdata.nodes.length > 0) {
                // allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes && allorderdata.allorderdata.nodes.length > 0
                var vera = this.props.allorderdata.allorderdata.nodes.map(val => {
                    if (val !== undefined && val !== null) {
                        var inside = val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(cart => {
                            if (cart !== undefined && cart !== null) {
                                if (cart !== undefined && cart !== null) {
                                    var metalColor_ = metal
                                    var cnt = imgs[0].transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes[0].imageUrl.split("/")
                                    var cnt_b = cnt[2].split("-")
                                    var cnt_c = cnt_b[1]

                                    // if (sku === cart.transSkuListByProductSku.generatedSku) {
                                    var browser_type = JSON.parse(localStorage.getItem('browserDetails'))

                                    if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
                                        check_img = true

                                        var resolution = 500
                                        var _resolutions = width < 960 ? `${resolution * 2}X${resolution * 2}` : `${resolution}X${resolution}`
                                        var url_split = imgs && imgs[0].transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes[0].imageUrl.split('/')
                                        var extension_split = url_split && url_split[url_split.length - 1]
                                        var browser_type_append = extension_split && extension_split.split('\.')[0].concat(`${browser_type && browser_type.browser_type}`)
                                        url_split[url_split && url_split.length - 1] = browser_type_append
                                        url_split.splice(2, 0, _resolutions);
                                        var url_construct = url_split.join().replace(/\,/g, '/')
                                        // var img_url = `${baseUi}${url_construct}`
                                        ppp = `${CDN_URL}${url_construct}`
                                        // alert(this.state.check_img)
                                    }
                                    // }
                                }
                            }
                        }
                        )
                        // return inside[0]
                    }
                })
                // var outside = ppp.filter(val => (val !== undefined && val !== null))
                // alert(ppp)
                return ppp;
            }
        }
    }

    render() {


        const { expanded, mailId, expandedlimit } = this.state;
        const { allorderdata } = this.props;
        
        const expanded_ = expanded.map(val => { return val })
        // var check_img = null
        const allDatas = () => {

            if (allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes && allorderdata.allorderdata.nodes.length > 0) {
                return allorderdata.allorderdata.nodes
            }
        }
        const paymentsuccess = true

        // const allDatas_filter = () => {
        //     if (allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length > 0) {
        //         allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.map(val => {
        //             if (order_id === val.id) {
        //                 alert(JSON.stringify(val))
        //                 return val 
        //             }
        //         })
        //     }
        // }

        return (
            <>
                {/* allorderdata.nodes */}
                {this.props.location.pathname.split("-")[0] === "/account" ?
                    <div className='pt-sm checkout-ovralldiv-media' >

                        {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes && allorderdata.allorderdata.nodes.length > 0 ?
                            <div style={{ marginTop: "20px", boxShadow: "none" }}>
                                {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                                {allDatas().map((val, index) => {

                                    return (
                                        <ExpansionPanel
                                            square
                                            // expanded={expanded.map(val=>val===index)}
                                            // onChange={this.handleChange(index)}
                                            style={{ boxShadow: "none", boxShadow: "rgb(242, 242, 242) 4px 10px 20px 5px" }}
                                            key={index}
                                            style={{ marginBottom: "10px" }}
                                        >
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                                <Typography className='text-chck'>

                                                    Order Number : <span >#{val.id}</span> &nbsp;|&nbsp; Order Date : {moment(val.createdAt).format('Do MMMM YYYY')}
                                                    <div style={{ float: "right" }}><Button className="bton_submit">{val.paymentStatus}</Button> </div></Typography>
                                            </ExpansionPanelSummary >
                                            <ExpansionPanelDetails
                                            >
                                                <div className="address_details">
                                                    {/* {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => ( */}
                                                    <div style={{ width: "100%", marginBottom: "10px" }}>
                                                        <Grid container spacing={12} lg={12} xs={12} >
                                                            <Grid item sm={6} lg={6} xs={12} className="order_addres">
                                                                <div> <b>Order Number</b>:#{val.id}</div><br />
                                                                <div><b>Order Date	</b> : {moment(val.createdAt).format('Do MMMM YYYY')}</div><br />
                                                                <div> <b>Payment Method</b>: {val.paymentMode}</div>
                                                            </Grid>
                                                            <Grid item sm={6} lg={6} xs={12} className="order_addres_user">
                                                                <div><b>Shipping Address :</b></div><br />
                                                                <div> {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].firstname}&nbsp;
                                                                {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].lastname}</div><br />
                                                                <div> {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].addressline1}</div><br />
                                                                <div>  {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].city + "-"}
                                                                    {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].pincode}</div>
                                                                <br />
                                                                <br />
                                                                {val.shoppingCartByCartId && val.shoppingCartByCartId.giftwrapsByCartId && val.shoppingCartByCartId.giftwrapsByCartId.nodes && val.shoppingCartByCartId.giftwrapsByCartId.nodes.length > 0 ? <>
                                                                    <div> <b>Gift to</b> :
                                                            {val.shoppingCartByCartId.giftwrapsByCartId.nodes[0].giftTo}</div>
                                                                    <br /><div> <b>Gift message</b> :
                                                            {val.shoppingCartByCartId.giftwrapsByCartId.nodes[0].message}</div></> : null}
                                                                {/* <div></div> */}
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                    {/* ))} */}
                                                    <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.shoppingCartByCartId.discountedPrice))}</span></div>
                                                    {val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(cart => {
                                                        debugger
                                                        return (<>
                                                            <br />
                                                            <Grid container spacing={12} lg={12} style={{ outline: "none", padding: " 10px", boxShadow: " 1px 2px 13px 7px #DEDADA", marginBottom: "20px", marginTop: "12px" }}>
                                                                <Grid item lg={3} sm={4}  >
                                                                    {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(imgs =>
                                                                        (

                                                                            this.ImageUrl(imgs, cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.generatedSku,
                                                                                cart.transSkuListByProductSku.metalColor, paymentsuccess) ?

                                                                                <div className="wishlist_img">
                                                                                    <img className="viewport-img" src={this.ImageUrl(imgs, cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.generatedSku,
                                                                                        cart.transSkuListByProductSku.metalColor, paymentsuccess)}
                                                                                        alt=""
                                                                                    />
                                                                                </div>
                                                                                :
                                                                                null

                                                                        )


                                                                    )}
                                                                </Grid>
                                                                <Grid item lg={4} sm={4}>
                                                                    <Grid container spacing={12} lg={12} style={{ lineHeight: "20px" }}>

                                                                        <b style={{ width: "100%" }}> {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId.productName}</b>
                                                                        <Grid item lg={6} sm={6}>
                                                                        <Typography className="subhesder">
                                                                                {(cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.generatedSku !== undefined) && (cart.transSkuListByProductSku.generatedSku !== null ? "Product Code" : null)}
                                                                            </Typography>
                                                                           
                                                                            {/* : ""} */}

                                                                          
                                                                            {/* : ""} */}
                                                                            {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                                                            {/* : ""} */}

                                                                            {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
                                                                            <Typography className="subhesder">
                                                                                {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== null) > 0 ? "Metal" : null}
                                                                            </Typography>
                                                                            <Typography className="subhesder">
                                                                                {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuWeight !== undefined && cart.transSkuListByProductSku.skuWeight !== null ?
                                                                                cart.transSkuListByProductSku.productListByProductId.productType == "Kada" 
                                                                                ?
                                                                                "Weight (Gm)"
                                                                                :
                                                                                "Gold Weight (Gm)" : null}
                                                                            </Typography>
                                                                            <Typography className="subhesder">
                                                                                {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== null) ? "Diamond Weight" : null} </Typography>
                                                                            {/* : ""} */}
                                                                            <Typography className="subhesder">
                                                                                {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== null) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize.length > 0)
                                                                                    ?
                                                                                    "Size"
                                                                                    : null}
                                                                            </Typography>
                                                                           {/* Ring Size */}
                                                                        </Grid>
                                                                        {/*  */}
                                                                        {/*  */}
                                                                        <Grid item lg={6} sm={6}>
                                                                        <Typography className="subhesder">
                                                                                {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.generatedSku}
                                                                            </Typography> 
                                                                           
                                                                          

                                                                            <Typography className="subhesder">
                                                                                {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity + ""}{cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.metalColor}
                                                                            </Typography>
                                                                            <Typography className="subhesder">
                                                                                {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuWeight + " " + "GM"}
                                                                            </Typography>
                                                                            <Typography className="subhesder">
                                                                                {cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight + " " + "CT"}
                                                                            </Typography>
                                                                            <Typography className="subhesder">
                                                                                {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize}
                                                                            </Typography>
                                                                             </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                                {cart && cart.transSkuListByProductSku &&
                                                                    <Grid item lg={2} sm={2} style={{ padding: "16px" }}>
                                                                        <Grid container spacing={12} lg={12}>
                                                                            <Typography className="subhesder">Quantity 1</Typography>
                                                                            <Typography className="subhesder">
                                                                                <img alt="" src="https://assets.stylori.com/images/static/icon-ship.png" /> <a>
                                                                                    {this.generateShipsBy(cart.transSkuListByProductSku.readytoship, cart.transSkuListByProductSku.vendorDeliveryTime)}</a></Typography>
                                                                        </Grid>
                                                                    </Grid>}

                                                                {cart && cart.transSkuListByProductSku &&
                                                                    <Grid style={{ padding: "10px", justifyContent: "center", display: "flex", alignItems: "center" }} className="rups" item lg={3} sm={2}>
                                                                        {Math.round(cart.price) > Math.round(cart.transSkuListByProductSku.markupPrice) ?
                                                                            <Pricing
                                                                                price={cart.transSkuListByProductSku.markupPrice}
                                                                                offerPrice={cart.transSkuListByProductSku.markupPrice}
                                                                                offerDiscount={"25% - OFF"}
                                                                            ></Pricing>
                                                                            : <Pricing
                                                                                offerPrice={cart.transSkuListByProductSku.markupPrice}
                                                                            ></Pricing>}<br />
                                                                    </Grid>}
                                                            </Grid></>)


                                                    })}

                                                    <div style={{ float: "right", fontSize: "13px", lineHeight: "1.5" }} >
                                                        Sub Total&nbsp;{this.calculatetotal(val)}<br />
                                                        {val.shoppingCartByCartId.discount ? <div class={`subhesder`}>REGISTRATION&nbsp;{val.shoppingCartByCartId.discount}</div>
                                                            : null}
                                                        Shipping&nbsp;FREE<br />
                                                        Shipping Insurance&nbsp;FREE<br />
                                                        <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.shoppingCartByCartId.discountedPrice))}</span></div>
                                                    </div>
                                                </div>
                                                {/* {val.paymentStatus} */}
                                                {/* {JSON.stringify(this.props.allorderdata)} */}
                                                {/* changePanel */}
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    )
                                })}
                            </div> : <div style={{ textAlign: "center", color: "#394578" }}>No orders yet</div>}

                    </div> :
                    <div className='pt-sm checkout-ovralldiv-media' style={{ margin: "auto" }}>
                        {allorderdata && allorderdata.data && allorderdata.data.allOrders.nodes.length > 0 ?
                            <Container>
                                <Container>

                                    {allorderdata && allorderdata.data && allorderdata.data.allOrders.nodes.map(val => {

                                        return (
                                            <div>
                                                {/* {JSON.stringify(val)} */}
                                                <div style={{ marginTop: "20px", boxShadow: "none" }}>

                                                    {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                                                    {/* {val.map((val, index) => ( */}
                                                    <div className="address_details">
                                                        {/* {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => ( */}
                                                        <div style={{ width: "100%", marginBottom: "10px", display: 'flex' }}>
                                                            <Grid container spacing={12} lg={12} xs={11} sm={11} style={{ justifyContent: 'center' }} >
                                                                <Grid item sm={6} lg={6} xs={12} className="order_addres" style={{ color: "#394578" }}>
                                                                    <div> <b>Order Number</b>:#{val && val.id}</div><br />
                                                                    <div><b>Order Date	</b> : {moment(val && val.createdAt).format('Do MMMM YYYY')}</div><br />
                                                                    <div> <b>Payment Method</b>:{val.paymentMode}</div>
                                                                </Grid>
                                                                <Grid item sm={3} lg={3} xs={12} style={{ color: "#394578" }} className="order_addres_user">
                                                                    <div><b>Shipping Address :</b></div><br />
                                                                    {/* {alert(JSON.stringify(val.shoppingCartByCartId))} */}
                                                                    <div> {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].firstname}&nbsp;
                                                            {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].lastname}</div><br />
                                                                    <div> {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].addressline1}</div><br />
                                                                    <div>  {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].city + "-"}
                                                                        {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].pincode}</div>
                                                                    <br />
                                                                    <br />
                                                                    {val && val.shoppingCartByCartId && val.shoppingCartByCartId.giftwrapsByCartId && val.shoppingCartByCartId.giftwrapsByCartId.nodes && val.shoppingCartByCartId.giftwrapsByCartId.nodes.length > 0 ? <>
                                                                        <div> <b>Gift to</b> :
                                                         {val && val.shoppingCartByCartId.giftwrapsByCartId.nodes[0].giftTo}</div>
                                                                        <br /><div> <b>Gift message</b> :
                                                         {val && val.shoppingCartByCartId.giftwrapsByCartId.nodes[0].message}</div></> : null}
                                                                    <div></div>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                        <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.shoppingCartByCartId.discountedPrice))}</span></div>
                                                        {val && val.shoppingCartByCartId && val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId && val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(cart => {
debugger
                                                            if (cart && cart.transSkuListByProductSku)
                                                                return (
                                                                    <>
                                                                        <br />
                                                                        <Grid container spacing={12} lg={12} style={{ overflow: "hidden", outline: "none", padding: " 10px", boxShadow: " 1px 2px 13px 7px #DEDADA", marginBottom: "20px", marginTop: "12px", color: "#394578" }}>
                                                                            <Grid item lg={2} sm={3}  >
                                                                                {cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(imgs =>
                                                                                    (

                                                                                        this.ImageUrl(imgs, cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.generatedSku,
                                                                                            cart.transSkuListByProductSku.metalColor, paymentsuccess) ?

                                                                                            <div className="wishlist_img">
                                                                                                <img className="viewport-img" src={this.ImageUrl(imgs, cart && cart.transSkuListByProductSku && cart.transSkuListByProductSku.generatedSku,
                                                                                                    cart.transSkuListByProductSku.metalColor, paymentsuccess)}
                                                                                                    alt=""
                                                                                                />
                                                                                            </div>
                                                                                            :
                                                                                            null

                                                                                    )


                                                                                )}
                                                                            </Grid>
                                                                            <Grid item lg={4} sm={4}>
                                                                                <Grid container spacing={12} lg={12} className="classGrid">

                                                                                    <b style={{ width: "100%" }}> {cart.transSkuListByProductSku.productListByProductId.productName}</b>
                                                                                    <Grid item lg={6} sm={6}>
                                                                                    <Typography className="subhesder">
                                                                                            {(cart.transSkuListByProductSku.generatedSku !== undefined) && (cart.transSkuListByProductSku.generatedSku !== null ? "Product Code" : null)}
                                                                                        </Typography>
                                                                                        <Typography className="subhesder">
                                                                                            {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== null) > 0 ? "Metal" : null}
                                                                                        </Typography>
                                                                                        <Typography className="subhesder">
                                                                                            {cart.transSkuListByProductSku.skuWeight !== undefined && cart.transSkuListByProductSku.skuWeight !== null ? 
                                                                                            cart.transSkuListByProductSku.productListByProductId.productType == "Kada" 
                                                                                            ?

                                                                                            "Weight (Gm)"
                                                                                            :
                                                                                            "Gold Weight (Gm)"
                                                                                            : null}
                                                                                        </Typography>
                                                                                        {/* : ""} */}

                                                                                        <Typography className="subhesder">
                                                                                            {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== null) ? "Diamond Weight" : null} </Typography>
                                                                                        {/* : ""} */}
                                                                                        {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                                                                        {/* : ""} */}

                                                                                        {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
                                                                                       
                                                                                        {/* : ""} */}
                                                                                        <Typography className="subhesder">
                                                                                            {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== null) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize.length > 0)
                                                                                                ?
                                                                                                "Size"
                                                                                                : null}
                                                                                        </Typography>
                                                                                      
                                                                                    </Grid>
                                                                                    <Grid item lg={6} sm={6}>
                                                                                    <Typography className="subhesder">
                                                                                            {cart.transSkuListByProductSku.generatedSku}
                                                                                        </Typography> 
                                                                                        
                                                                                        <Typography className="subhesder">
                                                                                            {cart.transSkuListByProductSku.purity + ""}{cart.transSkuListByProductSku.metalColor}
                                                                                        </Typography>
                                                                                        <Typography className="subhesder">
                                                                                            {cart.transSkuListByProductSku.skuWeight + " " + "GM"}
                                                                                        </Typography>
                                                                                        <Typography className="subhesder">
                                                                                            {cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight + " " + "CT"}
                                                                                        </Typography>

                                                                                        <Typography className="subhesder">
                                                                                            {cart.transSkuListByProductSku.skuSize}
                                                                                        </Typography>
                                                                                         </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid item lg={2} sm={2} style={{ alignItems: 'center', display: 'flex', padding: "16px" }}>
                                                                                <Grid container spacing={12} lg={12}>
                                                                                    <Typography className="subhesder">Quantity 1</Typography>
                                                                                    <Typography className="subhesder">
                                                                                        <img alt="" src="https://assets.stylori.com/images/static/icon-ship.png" /> <a>
                                                                                            {this.generateShipsBy(cart.transSkuListByProductSku.readytoship, cart.transSkuListByProductSku.vendorDeliveryTime)}</a></Typography>
                                                                                </Grid>
                                                                            </Grid>


                                                                            <Grid style={{ padding: "10px", justifyContent: "center", display: "flex", alignItems: "center" }} className="rups" item lg={3} sm={2}>
                                                                                {Math.round(cart.discountPrice) > Math.round(cart.transSkuListByProductSku.markupPrice) ?
                                                                                    <Pricing
                                                                                        price={cart.transSkuListByProductSku.discountPrice}
                                                                                        offerPrice={cart.transSkuListByProductSku.markupPrice}
                                                                                        offerDiscount={"25% - OFF"}
                                                                                    ></Pricing>
                                                                                    : <Pricing
                                                                                        offerPrice={cart.transSkuListByProductSku.markupPrice}
                                                                                    ></Pricing>}<br />
                                                                            </Grid>
                                                                        </Grid></>
                                                                )
                                                        }
                                                        )
                                                        }

                                                        {/* <div style={{ float: "right", fontSize: "13px", lineHeight: "1.5" }} >
                                                            Sub Total&nbsp;{this.calculatetotal(val)}<br />
                                                            {val.shoppingCartByCartId.discount !== null ? 
                                                            <div className={`subhesder`}>REGISTRATION : &nbsp;{val.shoppingCartByCartId.discount}</div>
                                                                : ""}
                                                            Shipping&nbsp;FREE<br />
                                                            Shipping Insurance&nbsp;FREE<br />
                                                            <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>

                                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.shoppingCartByCartId.discountedPrice))}
                                                            </span>
                                                            </div>
                                                        </div> */}
                                                    </div>

                                                </div>
                                            </div>

                                        )
                                    })}
                                </Container>
                            </Container>
                            : <div style={{ textAlign: "center", color: "#394578" }}>No orders yet</div>}


                    </div>
                }
            </>
        )
    }
}


export default withRouter(Allorders);