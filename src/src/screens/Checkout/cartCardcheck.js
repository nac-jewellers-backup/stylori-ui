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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
import { CheckForCod } from 'queries/productdetail';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import Header from 'components/SilverComponents/Header'

let value = localStorage.getItem("select_addres") ? JSON.parse(localStorage.getItem("select_addres")) : {};
var variab = {}
const CartCardCheck = (props) => {
    const { loading, error, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    return <Component  {...props} CodData={CodData} makeRequestCod={makeRequestCod} />
}

class Component extends React.Component {
    state = {
        expanded: 'panel' + (localStorage.getItem("panel") ? localStorage.getItem("panel") : 1),
        // expanded: 'panel2',
        // expandedlimit: localStorage.getItem("panel") ? localStorage.getItem("panel") : 1,
        // expandedlimit: 1,
        mailId: null
    }

    handleChange = panel => (event) => {
        debugger
        // alert("va",JSON.stringify(panel))
        const { expanded } = this.state
        // if (value && value.pincode && value.pincode.length > 2) {
        if ((localStorage.getItem("bil_isactive") || localStorage.getItem("ship_isactive")) && (value && value.pincode && value.pincode.length > 2) && expanded === 'panel' + panel) {
            this.setState({
                expanded: 'panel' + 3,
            });
            // }

            // window.location.reload()
        } else {

            if (expanded > 'panel' + panel) {
                this.setState({
                    expanded: 'panel' + panel,
                });
            }
            if ((expanded === 'panel3' || expanded === 'panel4') && ('panel' + panel === 'panel2')) {
                localStorage.removeItem("bil_isactive")
                localStorage.removeItem("ship_isactive")
                localStorage.removeItem("select_addres")
                return false
            }
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
    pincodeapi = () => {
        this.props.makeRequestCod(variab)
        this.changePanel(4)
    }
    render() {
        const { expanded, mailId, expandedlimit } = this.state;
        const { classes, data } = this.props;
        const { breadcrumsdata, cartsubdata } = this.props.data;
        let email = localStorage.getItem("email") ? localStorage.getItem("email") : '';
        variab["pincode"] = value && value.pincode

        return (
            <>
                <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                    <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000", width: "100%" }}>
                        <Header wishlist={this.props.wishlistdata} />
                    </Grid>
                </Grid>
                <CustomSeparator
                    arrowicon='cart-head-arrows'
                    className={`breadcrums-header ${classes.normalcolorback}`}
                    classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
                    list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
                    data={this.props.data[0].breadcrumsdata}
                    subdata={this.props.data[0].cartsubdata}
                    changePanel={this.changePanel}
                />
                <div className='pt-sm checkout-ovralldiv-media' >
                    <div style={{ marginTop: "20px" }}>
                        <ExpansionPanel
                            square
                            expanded={expanded === 'panel1'}
                            onChange={this.handleChange(1)}
                            style={{ boxShadow: "none" }}
                        >
                            <ExpansionPanelSummary style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }} expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>1</Avatar><Typography className='text-chck'> Login or Register
                            <div className="ch-d-vl">{email}</div></Typography>
                            </ExpansionPanelSummary >
                            <ExpansionPanelDetails style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}
                            >
                                <LoginRegisterIndex changePanel={this.changePanel} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel
                            square
                            expanded={expanded === 'panel2'}
                            onChange={this.handleChange(2)}
                            style={{ boxShadow: "none" }}>
                            <ExpansionPanelSummary style={{ width: "100%", overflow: "hidden", boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }} expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>2</Avatar>
                                <Typography className='text-chck'>Address Detail

                                 <div className="ch-d-vl">
                                        {value && value.firstname}
                                        &nbsp;
                                        {value && value.lastname}
                                        &nbsp;
                                        {value && value.addressline1}
                                        &nbsp;{value && value.city}
                                        {value && value.state}&nbsp;
                                        {value && value.pincode}
                                    </div>

                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}>
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
                            onChange={this.handleChange(3)}
                            style={{ boxShadow: "none", boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }} >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>3</Avatar><Typography className='text-chck'>Order Summary</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}>
                                <Grid container >
                                    <Grid item xs={12} lg={12}>
                                        {/* {JSON.stringify(this.datalist(cartContext))} */}
                                        <Grid container>
                                            <Grid xs={12} lg={7} />
                                            <Grid xs={12} lg={4} >
                                                <div style={{ float: "right" }}>
                                                    <Button
                                                        onClick={() => this.pincodeapi()}
                                                        className="summaryOrder-pay-btn">Continue to Pay</Button>
                                                </div>
                                            </Grid>
                                        </Grid><br />

                                        <CartCard data={data} />

                                        <Grid container>
                                            <Grid xs={12} lg={7} />
                                            <Grid xs={12} lg={4} >
                                                <div style={{ float: "right", marginBottom: "5px" }}>
                                                    <Button
                                                        onClick={() => this.pincodeapi()}
                                                        className="summaryOrder-pay-btn">Continue to Pay</Button>
                                                </div>
                                            </Grid>
                                        </Grid><br />
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
                            onChange={this.handleChange(4)}
                            style={{ boxShadow: "none", boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}  >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>4</Avatar><Typography className='text-chck'>Payment Options</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}>
                                <PaymentIndex data={data} CodData={this.props.CodData} />
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
    let { CartCtx: { data, loading, error, allorderdata, wishlistdata } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <CartCardCheck {...props} data={mapped} allorderdata={allorderdata} wishlistdata={wishlistdata} />

    return content
}
export default withStyles(styles)(Components);
