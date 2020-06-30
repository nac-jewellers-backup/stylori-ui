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
    Button,
    Hidden
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
import { CartContext, ProductDetailContext } from '../../context';
import cart from '../../mappers/cart';
import { CheckForCod } from 'queries/productdetail';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import Header from 'components/SilverComponents/Header'
import { withRouter } from 'react-router-dom';
var adres = {};
var variab = {}
const CartCardCheck = (props) => {
    const { loading, error, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    let { CartCtx: { setCartFilters } } = React.useContext(CartContext);
    return <Component  {...props} CodData={CodData} makeRequestCod={makeRequestCod} setCartFilters={setCartFilters} isdatafromstate={props.isdatafromstate}/>
}

var obj_values = {};
class Component extends React.Component {
    state = {
        expanded: 'panel' + (localStorage.getItem("panel") ? localStorage.getItem("panel") : 1),
        // expanded: 'panel2',
        // expandedlimit: localStorage.getItem("panel") ? localStorage.getItem("panel") : 1,
        // expandedlimit: 1,
        mailId: null,
        adres_details: null
    }

    handleChange = panel => (event) => {
        // alert(JSON.stringify(panel))
     
        // alert("va",JSON.stringify(panel))
        if (panel === 2) {
            adres["value"] = {}
            localStorage.removeItem("bil_isactive")
            localStorage.removeItem("ship_isactive")
            localStorage.removeItem("select_addres")
            obj_values["adres_details"] = {}
        }
        if (panel === 1) {
            adres["value"] = {}
            localStorage.removeItem("bil_isactive")
            localStorage.removeItem("ship_isactive")
            localStorage.removeItem("select_addres")
            obj_values["adres_details"] = {}
        }
        const { expanded } = this.state
        // if (value && value.pincode && value.pincode.length > 2) {
        if ((localStorage.getItem("bil_isactive") || localStorage.getItem("ship_isactive")) && (adres.value && adres.value.pincode && adres.value.pincode.length > 2) && expanded === 'panel' + panel) {
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
                // return false
            }
        }
        if (Object.keys(adres.value).length <= 0) {
            if (panel === 1) {
                return localStorage.setItem("panel", 1);
            }
            if (panel === 2) {
                return localStorage.setItem("panel", 2);
            }
            localStorage.setItem("panel", 1);
        }
    };

    changePanel = (panel, adres_detail) => {
     
        // if (!localStorage.getItem("cartDetails")&&Object.keys(adres.value).length <= 0) {
        //     localStorage.setItem("panel", 1);
        // }
        if (panel === 2) {
            adres["value"] = {}
            localStorage.removeItem("bil_isactive")
            localStorage.removeItem("ship_isactive")
            obj_values["adres_details"] = {}
            localStorage.removeItem("select_addres")
        }
        if (panel === 1) {
            adres["value"] = {}
            localStorage.removeItem("bil_isactive")
            localStorage.removeItem("ship_isactive")
            localStorage.removeItem("select_addres")
            obj_values["adres_details"] = {}
        }
        // if(!panel===null){
        localStorage.setItem("panel", panel);
        obj_values["adres_details"] = adres_detail
        this.setState({
            expanded: 'panel' + panel,
            expandedlimit: panel,
            // mailId: mailId ? mailId : this.state.mailId
        })
        // }
        
        if (Object.keys(adres.value).length <= 0 &&obj_values.length <= 0) {
            if (panel === 1) {
                return localStorage.setItem("panel", 1);
            }
            if (panel === 2) {
                return localStorage.setItem("panel", 2);
            }
            localStorage.setItem("panel", 1);
        }
        // alert(JSON.stringify(obj_values))
    }
    pincodeapi = () => {
        var obj_user = {}
        let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
        // let set_check = localStorage.getItem("set_check") ? localStorage.getItem("set_check") : ""
        this.props.makeRequestCod(variab)
        obj_user["user_id"] = user_id
        // obj_user["jewellery"] = "jewellery"
        // if (!set_check.length > 0) {
        // localStorage.removeItem("cart_id")
        // this.props.setCartFilters(obj_user)
        // }
        this.changePanel(4)
    }

    render() {
        const { expanded, mailId, expandedlimit } = this.state;
        const { classes, data } = this.props;
        const { breadcrumsdata, cartsubdata } = this.props.data;
        let email = localStorage.getItem("email") ? localStorage.getItem("email") : '';
        variab["pincode"] = adres.value && adres.value.pincode
        // alert(JSON.stringify(this.props.data))
        const breadcrumsdata_static = [
            { title: "Shopping Bag" },
            { title: "Login/ Register" },
            { title: "Address Detail" },
            { title: "Payment Options" },
            { title: "Order Confirmation" },
        ]
        const cartsubdata_static = [
            {
                name: "100% Certified Jewellery",
                icon: "https://assets.stylori.com/images/static/icon-star.png"
            }, {
                name: "Secure Payments",
                icon: "https://assets.stylori.com/images/static/icon-lock.png"
            }, {
                name: "Free Insured Shipping",
                icon: "https://assets.stylori.com/images/static/icon-van.png"
            }, {
                name: "25-Day Returns",
                icon: "https://assets.stylori.com/images/static/icon-return.png"
            }
        ]
        adres["value"] = localStorage.getItem("select_addres") ? JSON.parse(localStorage.getItem("select_addres")) : {};
        
        // if (Object.keys(adres.value).length <= 0) {
        //     if (panel === 1) {
        //         return localStorage.setItem("panel", 1);
        //     }
        //     if (panel === 2) {
        //         return localStorage.setItem("panel", 2);
        //     }
        //     localStorage.setItem("panel", 1);
        // }
        // if (!localStorage.getItem("cartDetails")&&Object.keys(adres.value).length <= 0) {
        //     localStorage.setItem("panel", 1);
        // }
        return (
            <Grid >
                <Header wishlist={this.props.wishlistdata} />
                <CustomSeparator
                    arrowicon='cart-head-arrows'
                    className={`breadcrums-header ${classes.normalcolorback}`}
                    classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
                    list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
                    data={this.props.data.length > 0 ? this.props.data[0].breadcrumsdata : breadcrumsdata_static}
                    subdata={this.props.data.length > 0 ? this.props.data[0].cartsubdata : cartsubdata_static}
                    changePanel={this.changePanel}
                />
                <div className='pt-sm checkout-ovralldiv-media marginTop'  >
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
                            xs={6}
                            square
                            expanded={expanded === 'panel2'}
                            onChange={this.handleChange(2)}
                            style={{ boxShadow: "none" }}>
                            <ExpansionPanelSummary style={{ width: "100%", overflow: "hidden", boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }} expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                <Avatar className={`avart-ckc ${classes.normalcolorback}`}>2</Avatar>
                                <Typography className='text-chck'>Address Detail

                                 <div className="ch-d-vl" >
                                        {obj_values && obj_values.adres_details && obj_values.adres_details.firstname && obj_values.adres_details.firstname.length > 0 ? obj_values.adres_details && obj_values.adres_details.firstname : adres.value && adres.value.firstname}
                                        &nbsp;
                                        {obj_values && obj_values.adres_details && obj_values.adres_details.firstname && obj_values.adres_details.firstname.length > 0 ? obj_values.adres_details && obj_values.adres_details.lastname : adres.value && adres.value.lastname}

                                        &nbsp;
                                        {obj_values && obj_values.adres_details && obj_values.adres_details.firstname && obj_values.adres_details.firstname.length > 0 ? obj_values.adres_details && obj_values.adres_details.addressline1 : adres.value && adres.value.addressline1}

                                        &nbsp;
                                        {obj_values && obj_values.adres_details && obj_values.adres_details.firstname && obj_values.adres_details.firstname.length > 0 ? obj_values.adres_details && obj_values.adres_details.city : adres.value && adres.value.city}

                                        {obj_values && obj_values.adres_details && obj_values.adres_details.firstname && obj_values.adres_details.firstname.length > 0 ? obj_values.adres_details && obj_values.adres_details.state : adres.value && adres.value.state}
                                        &nbsp;
{obj_values && obj_values.adres_details && obj_values.adres_details.firstname && obj_values.adres_details.firstname.length > 0 ? obj_values.adres_details && obj_values.adres_details.pincode : adres.value && adres.value.pincode}

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

                                        <CartCard data={data} isStateFilterContextQty={this.props.isdatafromstate} isdatafromstate={this.props.isdatafromstate}/>

                                        <Hidden smDown>
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
                                        </Hidden>
                                    </Grid>
                                    <Grid item xs={12} lg={12} className={classes.cart}>
                                        <ProductList />
                                    </Grid>
                                    <Hidden mdUp>
                                        <Grid container style={{ marginTop: "10px" }}>
                                            <Grid xs={12} lg={7} />
                                            <Grid xs={12} lg={4} >
                                                <div style={{ float: "right", marginBottom: "5px" }}>
                                                    <Button
                                                        onClick={() => this.pincodeapi()}
                                                        className="summaryOrder-pay-btn">Continue to Pay</Button>
                                                </div>
                                            </Grid>
                                        </Grid><br />
                                    </Hidden>
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
            </Grid>

        )
    }
}
// export default withStyles(styles)(props => {
//     const { mapped } = useDummyRequest(cartdatas);
//     if (Object.keys(mapped).length === 0) return '';
//     return <CartCardCheck {...props} data={mapped} />
// });
const Components = props => {
    // React.useEffect(()=>{
    //     localStorage.setItem('panel', 1)
    // },[])
    let { CartCtx: { data, loading, error, allorderdata, wishlistdata } } = React.useContext(CartContext);
    const {
        ProductDetailCtx: { filters },setFilters
      } = React.useContext(ProductDetailContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    const cartValueEmpty = () => {
        alert('Your cart is empty')
        props.history.push('/jewellery')
    }
    if (Object.keys(data).length === 0 || data.data.allTransSkuLists.nodes.length === 0) content = <div className="overall-loader">
        {/* {cartValueEmpty() */}
    </div>
    else content = <CartCardCheck {...props} data={mapped} allorderdata={allorderdata} wishlistdata={wishlistdata} isdatafromstate={filters.quantity}/>


    if (Object.keys(data).length === 0 && data.constructor === Object) content = <div className="overall-loader"> {/* {cartValueEmpty()} */}</div>
    else if (Object.keys(data).length > 0 && data.constructor === Object && data.data && data.data.allTransSkuLists && data.data.allTransSkuLists.nodes && data.data.allTransSkuLists.nodes.length === 0) {

        content = <div className="overall-loader"> {cartValueEmpty()} </div>
    }
    else {

        content = <CartCardCheck {...props} data={mapped} allorderdata={allorderdata} wishlistdata={wishlistdata} isdatafromstate={filters.quantity}/>
    }
    return content
}

export default withRouter(withStyles(styles)(Components));
