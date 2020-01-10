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
function myFunc(total, num) {
    return Math.round(total + num);
}
class Allorders extends React.Component {
    state = {
        expanded: [],
    }

    handleChange = panel => (event) => {

        const { expanded } = this.state;
        var valus = expanded === panel ? "" : panel
        expanded.push(JSON.stringify(valus))
        this.setState({
            expanded,
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
        const expanded_ = expanded.map(val => { return val })
        
        return (
            <>
                {/* allorderdata.nodes */}
                {window.location.pathname.split("-")[0] === "/account"?
                <div className='pt-sm checkout-ovralldiv-media' >
                    {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length > 0 ?
                        <div style={{ marginTop: "20px", boxShadow: "none" }}>

                            {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                            {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.map((val, index) => (
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
                                            <div style={{ float: "right" }}><Button className="bton_submit">SUBMITTED</Button> </div></Typography>
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
                                                        <div> <b>Payment Method</b>: Cash On Delivery</div>
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
                                                    <Grid container spacing={12} lg={12} style={{ outline: "none", padding: " 10px", boxShadow: " 1px 2px 13px 7px #DEDADA", marginBottom: "20px", marginTop: "12px" }}>
                                                        <Grid item lg={3} sm={4}  >
                                                            {cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(imgs => (
                                                                <div className="wishlist_img">
                                                                    <img className="viewport-img" src={`https://assets.stylori.net/base_images/${imgs.imageUrl}`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Grid>
                                                        <Grid item lg={4} sm={4}>
                                                            <Grid container spacing={12} lg={12} style={{ lineHeight: "20px" }}>

                                                                <b style={{ width: "100%" }}> {cart.transSkuListByProductSku.productListByProductId.productName}</b>
                                                                <Grid item lg={6} sm={6}>

                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.skuWeight !== undefined && cart.transSkuListByProductSku.skuWeight !== null ? "Gold Weight" : ""}
                                                                    </Typography>
                                                                    {/* : ""} */}

                                                                    <Typography className="subhesder">
                                                                        {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== null) ? "Diamond Weight" : ""} </Typography>
                                                                    {/* : ""} */}
                                                                    {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                                                    {/* : ""} */}

                                                                    {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
                                                                    <Typography className="subhesder">
                                                                        {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== null) > 0 ? "Metal" : ""}
                                                                    </Typography>
                                                                    {/* : ""} */}
                                                                    <Typography className="subhesder">
                                                                        {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== null) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize.length > 0)
                                                                            ?
                                                                            "Ring"
                                                                            : ""}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {(cart.transSkuListByProductSku.generatedSku !== undefined) && (cart.transSkuListByProductSku.generatedSku !== null ? "Product Code" : "")}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item lg={6} sm={6}>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.skuWeight + " " + "GM"}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight + " " + "CT"}
                                                                    </Typography>

                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.purity + ""}{cart.transSkuListByProductSku.metalColor}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.skuSize}
                                                                    </Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.generatedSku}
                                                                    </Typography>  </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item lg={2} sm={2} style={{ padding: "16px" }}>
                                                            <Grid container spacing={12} lg={12}>
                                                                <Typography className="subhesder">Quantity 1</Typography>
                                                                <Typography className="subhesder">
                                                                    <img alt="" src="https://assets-cdn.stylori.com/images/static/icon-ship.png" /> <a>
                                                                        {this.generateShipsBy(cart.transSkuListByProductSku.readytoship, cart.transSkuListByProductSku.vendorDeliveryTime)}</a></Typography>
                                                            </Grid>
                                                        </Grid>


                                                        <Grid style={{ padding: "10px", justifyContent: "center", display: "flex", alignItems: "center" }} className="rups" item lg={3} sm={2}>
                                                            {cart.price > cart.transSkuListByProductSku.markupPrice ?
                                                                <Pricing
                                                                    price={cart.transSkuListByProductSku.markupPrice}
                                                                    offerPrice={cart.transSkuListByProductSku.discountPrice}
                                                                    offerDiscount={"25% - OFF"}
                                                                ></Pricing>
                                                                : <Pricing
                                                                    offerPrice={cart.transSkuListByProductSku.discountPrice}
                                                                ></Pricing>}<br />
                                                        </Grid>
                                                    </Grid></>
                                            ))}

                                            <div style={{ float: "right", fontSize: "13px", lineHeight: "1.5" }} >
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
                        </div> : 
                        
                        
                        
                        
                        
                        <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Orders</div>}

                </div>:
                 <div className='pt-sm checkout-ovralldiv-media' >
                 {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length > 0 ?
                     <div style={{ marginTop: "20px", boxShadow: "none" }}>

                         {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                         {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.map((val, index) => (
                                     <div className="address_details">
                                         {/* {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => ( */}
                                         <div style={{ width: "100%", marginBottom: "10px" }}>
                                             <Grid container spacing={12} lg={12} xs={11} sm={11} style={{marginLeft:"auto",marginRight:"auto"}} >
                                                 <Grid item sm={6} lg={6} xs={12} className="order_addres">
                                                     <div> <b>Order Number</b>:#{val.id}</div><br />
                                                     <div><b>Order Date	</b> : {moment(val.createdAt).format('Do MMMM YYYY')}</div><br />
                                                     <div> <b>Payment Method</b>: Cash On Delivery</div>
                                                 </Grid>
                                                 <Grid item sm={3} lg={3} xs={12} className="order_addres_user">
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
                                                 <Grid container spacing={12} lg={12} style={{ outline: "none", padding: " 10px", boxShadow: " 1px 2px 13px 7px #DEDADA", marginBottom: "20px", marginTop: "12px" }}>
                                                     <Grid item lg={2} sm={3}  >
                                                         {cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(imgs => (
                                                             <div className="wishlist_img">
                                                                 <img className="viewport-img" src={`https://assets.stylori.net/base_images/${imgs.imageUrl}`}
                                                                 />
                                                             </div>
                                                         ))}
                                                     </Grid>
                                                     <Grid item lg={4} sm={4}>
                                                         <Grid container spacing={12} lg={12} style={{ lineHeight: "20px" }}>

                                                             <b style={{ width: "100%" }}> {cart.transSkuListByProductSku.productListByProductId.productName}</b>
                                                             <Grid item lg={6} sm={6}>

                                                                 <Typography className="subhesder">
                                                                     {cart.transSkuListByProductSku.skuWeight !== undefined && cart.transSkuListByProductSku.skuWeight !== null ? "Gold Weight" : ""}
                                                                 </Typography>
                                                                 {/* : ""} */}

                                                                 <Typography className="subhesder">
                                                                     {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight !== null) ? "Diamond Weight" : ""} </Typography>
                                                                 {/* : ""} */}
                                                                 {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                                                 {/* : ""} */}

                                                                 {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
                                                                 <Typography className="subhesder">
                                                                     {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.purity && cart.transSkuListByProductSku.purity !== null) > 0 ? "Metal" : ""}
                                                                 </Typography>
                                                                 {/* : ""} */}
                                                                 <Typography className="subhesder">
                                                                     {(cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== undefined) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize !== null) && (cart.transSkuListByProductSku && cart.transSkuListByProductSku.skuSize.length > 0)
                                                                         ?
                                                                         "Ring"
                                                                         : ""}
                                                                 </Typography>
                                                                 <Typography className="subhesder">
                                                                     {(cart.transSkuListByProductSku.generatedSku !== undefined) && (cart.transSkuListByProductSku.generatedSku !== null ? "Product Code" : "")}
                                                                 </Typography>
                                                             </Grid>
                                                             <Grid item lg={6} sm={6}>
                                                                 <Typography className="subhesder">
                                                                     {cart.transSkuListByProductSku.skuWeight + " " + "GM"}
                                                                 </Typography>
                                                                 <Typography className="subhesder">
                                                                     {cart.transSkuListByProductSku && cart.transSkuListByProductSku.productListByProductId && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0] && cart.transSkuListByProductSku.productListByProductId.productDiamondsByProductSku.nodes[0].stoneWeight + " " + "CT"}
                                                                 </Typography>

                                                                 <Typography className="subhesder">
                                                                     {cart.transSkuListByProductSku.purity + ""}{cart.transSkuListByProductSku.metalColor}
                                                                 </Typography>
                                                                 <Typography className="subhesder">
                                                                     {cart.transSkuListByProductSku.skuSize}
                                                                 </Typography>
                                                                 <Typography className="subhesder">
                                                                     {cart.transSkuListByProductSku.generatedSku}
                                                                 </Typography>  </Grid>
                                                         </Grid>
                                                     </Grid>
                                                     <Grid item lg={2} sm={2} style={{ padding: "16px" }}>
                                                         <Grid container spacing={12} lg={12}>
                                                             <Typography className="subhesder">Quantity 1</Typography>
                                                             <Typography className="subhesder">
                                                                 <img alt="" src="https://assets-cdn.stylori.com/images/static/icon-ship.png" /> <a>
                                                                     {this.generateShipsBy(cart.transSkuListByProductSku.readytoship, cart.transSkuListByProductSku.vendorDeliveryTime)}</a></Typography>
                                                         </Grid>
                                                     </Grid>


                                                     <Grid style={{ padding: "10px", justifyContent: "center", display: "flex", alignItems: "center" }} className="rups" item lg={3} sm={2}>
                                                         {cart.price > cart.transSkuListByProductSku.markupPrice ?
                                                             <Pricing
                                                                 price={cart.transSkuListByProductSku.markupPrice}
                                                                 offerPrice={cart.transSkuListByProductSku.discountPrice}
                                                                 offerDiscount={"25% - OFF"}
                                                             ></Pricing>
                                                             : <Pricing
                                                                 offerPrice={cart.transSkuListByProductSku.discountPrice}
                                                             ></Pricing>}<br />
                                                     </Grid>
                                                 </Grid></>
                                         ))}

                                         <div style={{ float: "right", fontSize: "13px", lineHeight: "1.5" }} >
                                             Sub Total&nbsp;{this.calculatetotal(val)}<br />
                                             Shipping&nbsp;FREE<br />
                                             Shipping Insurance&nbsp;FREE<br />
                                             <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>{this.calculatetotal(val)}</span></div>
                                         </div>
                                     </div>
                                     
                         ))}
                     </div> : <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Orders</div>}

             </div>
                                    }
            </>
        )
    }
}


export default Allorders;