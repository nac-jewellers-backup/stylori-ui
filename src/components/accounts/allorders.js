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
function myFunc(total, num) {
    return Math.round(total + num);
}
class Allorders extends React.Component {
    state = {
        expanded: null,
    }

    handleChange = panel => (event) => {
        const { expanded } = this.state;
        var valus = expanded === panel ? null : panel
        this.setState({
            expanded: valus,
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
        a = arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(cart => {
            if (cart !== null || cart !== undefined) {
                dis_price = cart.transSkuListByProductSku.discountPrice
            }
            return dis_price
        }).reduce(myFunc);
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
    render() {
        const { expanded, mailId, expandedlimit } = this.state;
        const { allorderdata } = this.props;
        debugger
        // namedetail: [
        //     {
        //         name: "Quality",
        //         details: k.diamondType
        //     },
        //     {
        //         name: "Metal",
        //         details: k.purity + ' ' + k.metalColor
        //     }, {
        //         name: "Gold",
        //         details: k.skuWeight + " " + "GM"
        //     },
        //     {
        //         name: k.skuSize && k.skuSize.length > 0 ? "Ring" : "",
        //         details: k.skuSize
        //     },
        //     {
        //         name: "Product Code",
        //         details: k.generatedSku
        //     }],
        return (
            <>
                {/* allorderdata.nodes */}
                <div className='pt-sm checkout-ovralldiv-media' >
                    {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length > 0 ?
                        <div style={{ marginTop: "20px", boxShadow: "none" }}>

                            {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                            {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.map((val, index) => (
                                <ExpansionPanel
                                    square
                                    expanded={expanded === index}
                                    onChange={this.handleChange(index)}
                                    style={{ boxShadow: "none", boxShadow: "rgb(242, 242, 242) 4px 10px 20px 5px" }}
                                    key={index}
                                >
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                        <Typography className='text-chck'>

                                            Order Number : #{val.id} &nbsp;|&nbsp; Order Date : {moment(val.createdAt).format('MMM Do YYYY')}
                                            <div style={{ float: "right" }}><Button className="bton_submit">SUBMITTED</Button> </div></Typography>
                                    </ExpansionPanelSummary >
                                    <ExpansionPanelDetails
                                    >
                                        <div className="address_details">
                                            {/* {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => ( */}
                                            <div style={{ width: "100%", marginBottom: "10px" }}>
                                                <Grid container spacing={12} lg={12} style={{ textAlign: "center" }}>
                                                    <Grid item lg={6} className="order_addres">
                                                        <div> <b>Order Number</b>:#{val.id}</div><br />
                                                        <div><b>Order Date	</b> : {moment(val.createdAt).format('MMM Do YYYY')}</div><br />
                                                        <div> <b>Payment Method</b>: Cash On Delivery</div>
                                                    </Grid>
                                                    <Grid item lg={6} className="order_addres_user">
                                                        <div><b>Shipping Address :</b></div><br />
                                                        <div> {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].firstname}&nbsp;
                                                            {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].lastname}</div><br />
                                                        <div> {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].addressline1}</div><br />
                                                        <div>  {val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].city}
                                                            {"-" + val.shoppingCartByCartId && val.shoppingCartByCartId.cartAddressesByCartId && val.shoppingCartByCartId.cartAddressesByCartId.nodes && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0] && val.shoppingCartByCartId.cartAddressesByCartId.nodes[0].pincode}</div>
                                                        <br />
                                                        {val.shoppingCartByCartId && val.shoppingCartByCartId.giftwrapsByCartId && val.shoppingCartByCartId.giftwrapsByCartId.nodes && val.shoppingCartByCartId.giftwrapsByCartId.nodes.length > 0 ? <>
                                                            <div> <b>gift To</b> :
                                                        {val.shoppingCartByCartId.giftwrapsByCartId.nodes[0].giftTo}</div>
                                                            <br /><div> <b>gift message</b> :
                                                        {val.shoppingCartByCartId.giftwrapsByCartId.nodes[0].message}</div></> : ""}
                                                        {/* <div></div> */}
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            {/* ))} */}
                                            <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>{this.calculatetotal(val)}</span></div>
                                            {val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(cart => (
                                                <>
                                                    <br />
                                                    <Grid container spacing={12} lg={12}>
                                                        <Grid item lg={2}>
                                                            {cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(imgs => (
                                                                <div className="wishlist_img">
                                                                    <img className="viewport-img" src={`https://assets.stylori.net/base_images/${imgs.imageUrl}`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Grid>
                                                        <Grid item lg={4}>
                                                            <Grid container spacing={12} lg={12} style={{ lineHeight: "20px" }}>
                                                                <b style={{ width: "100%" }}> {cart.transSkuListByProductSku.productListByProductId.productName}</b>
                                                                <Grid item lg={6}>
                                                                    {/* {cart.transSkuListByProductSku.skuWeight.length > 0 ? */}
                                                                    <Typography className="subhesder">Gold Weight</Typography>
                                                                    {/* : ""} */}

                                                                    {/* {cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0]&& cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight&&cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight.length > 0 ? */}
                                                                    <Typography className="subhesder">Diamond Weight</Typography>
                                                                    {/* : ""} */}
                                                                    {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                                                    <Typography className="subhesder">Product Code</Typography>
                                                                    {/* : ""} */}

                                                                    {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
                                                                    <Typography className="subhesder">
                                                            {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ?"Metal":""} </Typography>
                                                                    {/* : ""} */}
                                                                    <Typography className="subhesder">
                                                                          {cart.transSkuListByProductSku.productListByProductId&&cart.transSkuListByProductSku.productListByProductId.sizeVarient&&cart.transSkuListByProductSku.productListByProductId.sizeVarient.length > 0 ?
                                                                     "Ring"
                                                                     : ""}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item lg={6}>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.skuWeight + " " + "GM"}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight + " " + "CT"}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.generatedSku}
                                                                    </Typography>

                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.purity + ""}{cart.transSkuListByProductSku.metalColor}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.productListByProductId.sizeVarient}

                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item lg={4} style={{ padding: "30px" }}>
                                                            <Grid container spacing={12} lg={12}>
                                                                <Typography className="subhesder">Quantity 1</Typography>
                                                                <Typography className="subhesder">
                                                                    <img alt="" src="https://assets-cdn.stylori.com/images/static/icon-ship.png" /> <a>
                                                                        {this.generateShipsBy(cart.transSkuListByProductSku.readytoship, cart.transSkuListByProductSku.vendorDeliveryTime)}</a></Typography>
                                                            </Grid>
                                                        </Grid>


                                                        <Grid style={{ padding: "30px" }} className="rups" item lg={2}>
                                                            {cart.price > cart.transSkuListByProductSku.markupPrice ?
                                                                <del style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "18px" }}>{(Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(cart.transSkuListByProductSku.markupPrice)))}</del>
                                                                : ""}<br />
                                                            {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(cart.transSkuListByProductSku.discountPrice))}
                                                        </Grid>
                                                    </Grid></>
                                            ))}

                                            <div style={{ float: "right", fontSize: "15px" }} >
                                                Sub Total&nbsp;{this.calculatetotal(val)}<br />
                                                Shipping&nbsp;FREE<br />
                                                Shipping Insurance&nbsp;FREE<br />
                                                <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>{this.calculatetotal(val)}</span></div>
                                            </div>
                                        </div>
                                        {/* {val.paymentStatus} */}
                                        {/* {JSON.stringify(this.props.allorderdata)} */}
                                        {/* changePanel */}
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))}
                        </div> : <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Orders</div>}

                </div>
            </>
        )
    }
}


export default Allorders;