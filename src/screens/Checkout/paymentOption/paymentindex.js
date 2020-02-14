import React from 'react';
import { Container, Grid, Hidden, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import './payment.css';
import Creditform from './creditForm';
import Debitform from './debitForm';
import CashonDelivey from './cashonDelivery';
import Netbanking from './netBanking';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CartContext } from 'context'
import cart from 'mappers/cart'
var va = {}
class PaymentIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: 'CashonDelivey',
        };
    }

    toggleCollapsed = (name) => {
        this.setState({ isActive: [name] })

    }

    render() {

        const valus = this.props.CodData.data ? this.props.CodData.data.allPincodeMasters.nodes[0].maxCartvalue : ""
        const data = this.props.data ? this.props.data : ""
        var dataCard1;
        if (data.length > 0 && data !== undefined && data !== null) {
            dataCard1 = this.props.data && this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);
            function myFunc(total, num, discounted_price) {
                discounted_price = this && this.props.cartFilters.discounted_price ? JSON.stringify(this.props.cartFilters.discounted_price) : ""
                if (discounted_price.length > 0) {
                    var a = Math.round(total + num);
                    var cart_price = (a - discounted_price)
                } else {
                    var cart_price = Math.round(total + num);
                }
                if (cart_price === valus || valus <= cart_price) {
                    var cart_prices = cart_price;
                    return false
                } else {
                    var cart_prices = 0;
                }
                return cart_prices
            }
        }
        // const val = () => {
        //     var va = {};
        //     if (valus.length > 0) {
        //         if (dataCard1 === valus) {
        //             va["true"] = true
        //         } else {
        //             va["true"] = false
        //         } 
        //     } 
        //     return va  
        // } 
        return (
            <div className="payment-div" style={{ width: "100%" }}>
                <Hidden smDown>
                    <Grid container spacing={12} lg={12} className="panel-body">
                        <Grid item lg={3}>
                            <div className="pay-index-subhed">
                                {/* <p style={{ background: this.state.isActive == "Creditform" ? "#dfdfdf" : "" }}
                                    style={{ background: "#a8a1a1" }}
                                onClick={() => this.toggleCollapsed('Creditform')}
                                >
                                    <div className="cc-icon"></div> &nbsp; Credit card </p>
                                <p style={{ background: this.state.isActive == "Debitform" ? "#dfdfdf" : "" }}
                                    onClick={() => this.toggleCollapsed('Debitform')}
                                    style={{ background: "#a8a1a1" }}

                                >
                                    <div className="dc-icon"></div> &nbsp; Debit card </p> */}
                                <p className={this.state.isActive == "Netbanking" ? "selectedcolor" : "unselected"}
                                    onClick={() => this.toggleCollapsed('Netbanking')}
                                // style={{ background: "#dfdfdf" }}
                                >
                                    <div className="net-bnk-icon"></div> &nbsp; Pay Online </p>
                                <p className={this.state.isActive == "CashonDelivey" ? "selectedcolor" : "unselected"}
                                    onClick={() => this.toggleCollapsed('CashonDelivey')}
                                >
                                    <div className="code-icon"></div>&nbsp;   Cash on Delivery (COD)</p>
                            </div>
                        </Grid>
                        <Grid item lg={9}>
                            <div style={{ marginTop: "20px" }} className="pay-index-subhed_datas ">
                                {
                                    this.state.isActive == 'Creditform' && <Creditform />
                                }
                                {
                                    this.state.isActive == 'Debitform' && <Debitform />
                                }
                                {
                                    this.state.isActive == 'Netbanking' && <Netbanking />
                                }
                                {
                                    // !dataCard1.length > 0 ?
                                    this.state.isActive == 'CashonDelivey' && <CashonDelivey />
                                    // :"cash on delivery is not available"
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Hidden>

                <Hidden mdUp>
                    {/* <ExpansionPanel className="respone-div div_DARK"
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head"><div className="cc-icon">&nbsp;</div>Credit card  </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Creditform data={this.props.data} dataCard1={dataCard1}/>
                        </ExpansionPanelDetails> 
                    </ExpansionPanel> */}

                    {/* <ExpansionPanel className="respone-div div_DARK"
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="dc-icon"></div> &nbsp; Debit card </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Debitform data={this.props.data} dataCard1={dataCard1}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>  */}

                    <ExpansionPanel className="respone-div"
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="net-bnk-icon"></div> &nbsp; Online Pay  </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Netbanking />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className="respone-div">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="code-icon"></div>&nbsp;   Cash On Delivery (COD) </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <CashonDelivey data={this.props.data} dataCard1={dataCard1} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Hidden>
            </div>
        )
    }
}
const Components = props => {
    let { CartCtx: { cartFilters, data, loading, error } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <PaymentIndex {...props} data={mapped} cartFilters={cartFilters} />
    return content
}
export default (Components)
