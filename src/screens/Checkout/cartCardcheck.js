import React from 'react';
import './chckout.css';
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
import "../../components/Checkout/Cart.css";
import "./chckout.css";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Addressform from './addressDetails/addressForm';
import ProductList from './orderSummary/productList';
import Cart from 'containers/Cart';
import LoginRegisterIndex from './loginRegister';
import { withStyles } from '@material-ui/core/styles';
import PaymentIndex from './paymentOption/paymentindex';
import { useDummyRequest } from '../../hooks';
import { cartdatas } from '../../mappers';
import CustomSeparator from '../../components/BreadCrumb/index'
import styles from '../Checkout/loginRegister/style';
import CartCard from '../../components/Checkout/CartCard'
import { CartContext } from '../../context/CartContext';
import cart from '../../mappers/cart';

class CartCardCheck extends React.Component {
    state = {
        // expanded: 'panel' + (localStorage.getItem("panel") ? localStorage.getItem("panel") : 1),
        expanded: 'panel2',
        // expandedlimit: localStorage.getItem("panel") ? localStorage.getItem("panel") : 1,
        // expandedlimit: 1,
        mailId: null
    }

    handleChange = panel => (event, expanded) => {
        if (this.state.expandedlimit > panel) {
            this.setState({
                expanded: expanded ? 'panel' + (panel + 1) : false,
            });
        }
    };

    changePanel = (panel, mailId) => {
        localStorage.setItem("panel", panel);
        this.setState({
            expanded: 'panel' + panel,
            expandedlimit: panel,
            mailId: mailId ? mailId : this.state.mailId
        })
    }

    render() {
        const { expanded, mailId, expandedlimit } = this.state;
        const { classes, data } = this.props;
        const { breadcrumsdata, cartsubdata } = this.props.data;
        let email = localStorage.getItem("email") ? localStorage.getItem("email") : '';
        let value = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressOne : {};
        return (
            <>
                <CustomSeparator
                    arrowicon='cart-head-arrows'
                    className={`breadcrums-header ${classes.normalcolorback}`}
                    classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
                    list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
                    data={this.props.data[0].breadcrumsdata}
                    subdata={this.props.data[0].cartsubdata}
                />
                <div className='pt-sm checkout-ovralldiv-media' >

                    <div style={{ marginTop: "20px" }}>
                        <ExpansionPanel
                            square
                            expanded={expanded === 'panel1'}
                            // onChange={this.handleChange(0)}
                            style={{ boxShadow: "none" }}
                        >
                            <ExpansionPanelSummary expandIcon={<ExpandLessIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>1</Avatar><Typography className='text-chck'> Login or Register
                            <div className="ch-d-vl">{email}</div></Typography>
                            </ExpansionPanelSummary >
                            <ExpansionPanelDetails
                            >
                                <LoginRegisterIndex changePanel={this.changePanel} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel
                            square
                            expanded={expanded === 'panel2'}
                            onChange={this.handleChange(1)}
                            style={{ boxShadow: "none" }}>
                            <ExpansionPanelSummary style={{ width: "100%", overflow: "hidden" }} expandIcon={<ExpandLessIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>2</Avatar>
                                <Typography className='text-chck'>Address Detail

                                 <div className="ch-d-vl">
                                        {value.firstname}
                                        &nbsp;{value.lastname}
                                        &nbsp;{value.addressline1}
                                        &nbsp;{value.city}
                                        {value.state}&nbsp;{value.pincode}
                                    </div>

                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container >
                                    <Grid item xs={12} lg={12}>
                                        <Addressform changePanel={this.changePanel} />
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel
                            square
                            expanded={expanded === 'panel3'}
                            onChange={this.handleChange(2)}
                            style={{ boxShadow: "none" }} >
                            <ExpansionPanelSummary expandIcon={<ExpandLessIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>3</Avatar><Typography className='text-chck'>Order Summary</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails >
                                <Grid container >
                                    <Grid item xs={12} lg={12}>
                                        {/* {JSON.stringify(this.datalist(cartContext))} */}
                                        <div style={{ float: "right" }}>
                                            <Button
                                                onClick={() => this.changePanel(4)} className="summaryOrder-pay-btn">Continue to Pay</Button>
                                        </div>
                                        <CartCard data={data} />
                                        <div style={{ float: "right", marginBottom: "5px" }}>
                                            <Button onClick={() => this.changePanel(4)}
                                                className="summaryOrder-pay-btn">Continue to Pay</Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} lg={12} className={classes.cart}>
                                        <ProductList />
                                    </Grid>

                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel
                            square
                            expanded={expanded === 'panel4'}
                            onChange={this.handleChange(3)}
                            style={{ boxShadow: "none" }}  >
                            <ExpansionPanelSummary expandIcon={<ExpandLessIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>4</Avatar><Typography className='text-chck'>Payment Options</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <PaymentIndex />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>



                    </div>
                </div>
            </>
        )
    }
}
// export default withStyles(styles)(props => {
//     const { mapped } = useDummyRequest(cartdatas);
//     if (Object.keys(mapped).length === 0) return '';
//     return <CartCardCheck {...props} data={mapped} />
// });
const Components = props => {
    let { CartCtx: { data, loading, error } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <CartCardCheck {...props} data={mapped} />

    return content
}
export default withStyles(styles)(Components);
