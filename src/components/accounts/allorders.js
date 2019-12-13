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

class Allorders extends React.Component {
    state = {
        expanded: "1",
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded:panel,
        });
    };

    changePanel = (panel, mailId) => {
        this.setState({
            expanded: panel,
            expandedlimit: panel,
        })
    }
    render() {
        const { expanded, mailId, expandedlimit } = this.state;
        const { allorderdata } = this.props;
        debugger
        return (
            <>
                {/* allorderdata.nodes */}
                <div className='pt-sm checkout-ovralldiv-media' >
                    {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length > 0 ?
                        <div style={{ marginTop: "20px",boxShadow:"4px 10px 20px 5px #DEDADA!important" }}>
                            {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.map(val => (
                                <ExpansionPanel
                                    square
                                    expanded={expanded === '1'}
                                    onChange={this.handleChange(1)}
                                    style={{ boxShadow: "none",boxShadow:"4px 10px 20px 5px #DEDADA"  }}
                                >
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                        <Typography className='text-chck'>

                                            Order Number : #900002356 &nbsp;|&nbsp; Order Date : 27 February 2019
                                    <div style={{ float: "right" }}><Button className="bton_submit">SUBMITTED</Button> </div></Typography>
                                    </ExpansionPanelSummary >
                                    <ExpansionPanelDetails
                                    >
                                        <div className="address_details">
                                            {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => (
                                                <div style={{ width: "100%",marginBottom:"10px" }}>
                                                    <Grid container spacing={12} lg={12} style={{ textAlign: "center" }}>
                                                        <Grid item lg={4} className="order_addres">
                                                            <div> <b>Order Number</b>:#900002356</div><br />
                                                            <div><b>Order Date	</b> : February 27</div><br />
                                                            <div> <b>Payment Method</b>: Cash On Delivery</div>
                                                        </Grid>
                                                        <Grid item lg={8} className="order_addres_user">
                                                            <div><b>Shipping Address :</b></div><br />
                                                            <div> {addreses.firstname}&nbsp;{addreses.lastname}</div><br />
                                                            <div> {addreses.addressline1}</div><br />
                                                            <div>  {addreses.city}{"-" + addreses.pincode}</div>
                                                        </Grid>
                                                    </Grid>
                                                </div>))}
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
                                                            <Grid container spacing={12} lg={12} style={{lineHeight: "20px" }}>
                                                                <b> {cart.transSkuListByProductSku.productListByProductId.productName}</b>
                                                                <Grid item lg={6}>
                                                                    <Typography className="subhesder">Gold Weight</Typography>
                                                                    <Typography className="subhesder">Diamond Weight</Typography>
                                                                    <Typography className="subhesder">Product Code</Typography>
                                                                </Grid>
                                                                <Grid item lg={6}>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.skuWeight + "" + "GM"}
                                                                    </Typography>
                                                                    <Typography className="subhesder">0.0 CT</Typography>
                                                                    <Typography className="subhesder">
                                                                        {cart.transSkuListByProductSku.generatedSku}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item lg={4} style={{ padding: "30px" }}>
                                                            <Grid container spacing={12} lg={12}>
                                                                <Typography className="subhesder">Quantity 1</Typography>
                                                                <Typography className="subhesder">
                                                                    <img alt="" src="https://assets-cdn.stylori.com/images/static/icon-ship.png" /> <a>SHIPS BYMar 04 2019</a></Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid style={{ padding: "30px" }} className="rups" item lg={2}>
                                                            {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(cart.transSkuListByProductSku.discountPrice))}
                                                        </Grid>
                                                    </Grid></>
                                            ))}

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
