import {
    Button,
    Hidden,
    Container,
    Grid,
    Modal
} from '@material-ui/core';
import React from "react";
import './product-images.css';
import ProductPrice from './productPrice'
import PriceTabs from "./priceTabs";
import PropTypes from 'prop-types';
import Buynowbutton from '../../Buynow/buynowbutton';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import { NavLink } from 'react-router-dom';
import { ProductDetailContext } from 'context/ProductDetailContext';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CheckForCod } from 'queries/productdetail';
import { CartContext } from 'context'
import { withRouter } from "react-router";
import CommenDialog from '../../Common/Dialogmodel'



const inputsearch = (props, state, handleChanges, handleCodChange) => {

    const { data } = props;
    const { classes } = props;

    // const [] = React.useState()

    return (
        <div style={{
            marginTop: "12px", paddingRight: "20px",
            paddingLeft: "15px"
        }}>
            {data[0].ProductContactNum.map(val =>
                <Grid container spacing={12} className={classes.shadow}>

                    <Grid item xs={8} lg={4} sm={8}>
                        {/* <input
                            placeholder='&#xf041; &nbsp; Enter Pin Code'
                            className='buynow-search'
                            type="text"
                            value={state.values}
                            onChange={(event) => { handleChanges(event) }}
                            onKeyPress={(e) => { if (!(e.which >= 48 && e.which <= 57)) e.preventDefault(); }}
                        /> */}
                        <input onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
                            placeholder="Enter Pincode"
                            type="tel"
                            maxLength="6"
                            className="pincode-cust buynow-search"
                            value={state.values}
                            onChange={(event) => { handleChanges(event) }}
                            onKeyPress={(e) => { if (!(e.which >= 48 && e.which <= 57)) e.preventDefault(); }}
                        />
                    </Grid>
                    <Grid item xs={4} lg={3} sm={4}>
                        <Button style={{backgroundColor:"#fa4a4a"}} className={`search-button ${classes.normalcolorback} ${classes.fontwhite}`} onClick={() => { handleCodChange() }}>{state.CheckForCodtitle}</Button>
                    </Grid>

                    <Hidden smDown>
                        <Grid container item justify="center" xs={12} sm={12} lg={5} className="content" style={{ margin: 'auto' }}>
                            <b className={`ships-by ${classes.normalfonts}`}>
                                <span ><i style={{ fontSize: "20px" }} class="fa fa-truck"></i>&nbsp;&nbsp;{val.shipby}</span>
                            </b>
                        </Grid>
                    </Hidden>
                    <label style={{  fontWeight: 'bold', color: 'rgba(185, 74, 72, 1)' }}>{(state.isRequired && 'Please fill out this field') || (state.pincodeNotFound && 'Pincode not found')}</label>
                </Grid>
            )}
        </div>
    )
}

const Buydetails = (props, state, handleChanges, handleCodChange, canceldeletechecklist, deletechecklists, handleLocalStorage) => {
    const { data } = props;
    const { classes } = props;

    return (
        <div>
            {data[0].ProductContactNum.map(val =>
                <>
                    <Grid container spacing={12} style={{ padding: "0 10px" }}>
                        <Grid item xs={12} lg={4} style={{ marginRight: "15px" }}>
                            {/* <NavLink to="/cart" style={{ textDecoration: 'none' }} onClick={handleLocalStorage.bind(this)}> */}
                            <div onClick={handleLocalStorage.bind(this)}>
                                <Buynowbutton sku={data[0].skuId} class={`buynow-button ${classes.buttons}`} button='buynow-btn-cont' />
                            </div>
                            {/* </NavLink> */}
                            <CommenDialog isOpen={state.modelOpen} content={`Are you sure you `} handleClose={canceldeletechecklist} handleSuccess={deletechecklists} negativeBtn="No" positiveBtn="Yes" title="Confirmation" />
                        </Grid>

                        <Grid xs={12} lg={7} style={{ marginBottom: "7px" }}>
                            <Grid container spacing={12}>
                                <Grid item lg={12} xs={12} className={`buy-subheaders nd-hlp ${classes.normalfonts}`}>Need Help ?</Grid>
                            </Grid>
                            <Grid container spacing={12} >

                                <Grid item lg={5} xs={4} className={`buy-subheaders ${classes.normalfonts}`}>
                                    <i class="fa fa-phone overall-icons" aria-hidden="true"></i>&nbsp;{val.telephone}
                                </Grid>

                                <Grid item lg={5} xs={4} className={`buy-subheaders ${classes.normalfonts}`}>
                                    <i class="fa fa-whatsapp overall-icons" aria-hidden="true"></i>&nbsp;{val.phonenum}
                                </Grid>

                                <Grid item lg={2} style={{ cursor: "pointer !important" }} className={`buy-subheaders ${classes.normalfonts}`}>
                                    <i class="fa fa-comments-o overall-icons" aria-hidden="true"></i>&nbsp;{val.chat}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {inputsearch(props, state, handleChanges, handleCodChange)}
                </>
            )}
        </div>
    )
}




const PriceBuynow = (props) => {
    const { loading, error, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    const { ProductDetailCtx, setFilters } = React.useContext(ProductDetailContext);
    const { setCartFilters } = React.useContext(CartContext);

    return <Component setCartFilters={setCartFilters} setFilters={setFilters} filters={ProductDetailCtx.filters} makeRequestCod={makeRequestCod} CodData={CodData} {...props} />
}


class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showimage: this.props.data[0].fadeImages[0],
            open: false,
            values: '',
            pincodeValues: {},
            CheckForCodtitle: 'Check for COD',
            isRequired: false,
            pincodeNotFound: false,
            modelOpen: false,
            ringSize: this.props && this.props.data && this.props.data[0] && this.props.data[0].productsDetails && this.props.data[0].productsDetails[0].namedetail && this.props.data[0].productsDetails[0].namedetail[3] && this.props.data[0].productsDetails[0].namedetail[3].details
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        var variab = {}
        variab["pincode"] = this.state.values
        if (prevProps.CodData !== this.props.CodData) {
            // Here i have handeled the "check for COD" condition because the response is not setting to the props instantly
            if (this.props.CodData.data.allPincodeMasters.nodes.length > 0) {
                if (this.props.data[0].price > this.props.CodData.data.allPincodeMasters.nodes[0].maxCartvalue) {
                    this.setState({ CheckForCodtitle: 'COD Not Available' })
                }
                else {
                    this.setState({ CheckForCodtitle: 'COD is Available' })
                }
            }
            else {
                this.setState({ pincodeNotFound: true })
            }
        }
        else{
            this.setState({ CheckForCodtitle: 'Check for COD' })
        }
    }

    openModel = () => {
        this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })
        window.location.pathname = "/cart"
    }

    handleLocalStorage = () => {
        if (this.props.data && this.props.data[0].productType === "Rings") {
            this.setState({
                modelOpen: true,
            })
        }
        else {
            this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })
            window.location.pathname = "/cart"
        }

    }

    canceldeletechecklist = () => {

        this.setState({
            modelOpen: false,
        })
    }

    deletechecklists = () => {
        this.props.setCartFilters({ skuId: this.props.data[0].skuId, qty: 1, price: this.props.data[0].offerPrice })
        window.location.pathname = "/cart"

        this.setState({
            modelOpen: false,
        })
    }
    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleChanges = (e) => {
        this.setState({ values: e.target.value, CheckForCodtitle: '', pincodeNotFound: false, isRequired: false })
    }
    handleCodChange = () => {
        if (this.state.values) {
            this.setState({ isRequired: false })
            var variab = {}
            variab["pincode"] = this.state.values
            if (Object.entries(variab).length !== 0 && variab.constructor === Object) {
                this.props.makeRequestCod(variab);

            }
            else {
                return {}
            }
        }
        else {
            this.setState({ isRequired: true })
            // alert('Please enter the pincode')
        }

    }
    render() {
        let { showimage } = this.state;
        const { classes, data } = this.props;
        return (
            <div>
                <Hidden smDown>
                    {Buydetails(this.props, this.state, this.handleChanges, this.handleCodChange, this.canceldeletechecklist, this.deletechecklists, this.handleLocalStorage)}
                </Hidden>

                <Hidden mdUp>
                    <div style={{ marginTop: "10px" }}>
                        <ProductPrice data={this.props.data} />

                        <PriceTabs data={this.props.data} />
                        {inputsearch(this.props, this.state, this.handleChanges, this.handleCodChange)}
                    </div>

                </Hidden>
            </div >
        );
    }
}
PriceBuynow.propTypes = {
    Buydetails: PropTypes.func,
};

export default withStyles(styles)(withRouter(PriceBuynow));