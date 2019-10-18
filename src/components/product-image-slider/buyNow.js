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
import Buynowbutton from '../Buynow/buynowbutton';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import { NavLink } from 'react-router-dom';


const inputsearch = (props) => {
    const { data } = props;
    const { classes } = props;
    return (
        <div style={{
            marginTop: "12px", paddingRight: "20px",
            paddingLeft: "15px"
        }}>
            {data[0].ProductContactNum.map(val =>
                <Grid container spacing={12}>
                    <Grid item xs={8} lg={4} sm={8}>
                        <input
                            placeholder='&#xf041; &nbsp; Enter Pin Code'
                            className='buynow-search'
                        />
                    </Grid>
                    <Grid item xs={4} lg={3} sm={4}>
                        <Button className={`search-button ${classes.normalcolorback} ${classes.fontwhite}`}>Check for COD </Button>
                    </Grid>

                    <Hidden smDown>
                        <Grid item xs={5} className="content">
                            <b className={`ships-by ${classes.normalfonts}`}>
                                <span ><i style={{ fontSize: "20px" }} class="fa fa-truck"></i>&nbsp;&nbsp;{val.shipby}</span>
                            </b>
                        </Grid>
                    </Hidden>

                </Grid>
            )}
        </div>
    )
}

const Buydetails = (props) => {
    const { data } = props;
    const { classes } = props;
    const handleLocalStorage = () => {
        var skuId = data[0].skuId;
        var products = [];
        var cartId = "";
        var userId = "";
        var obj = { sku_id: '', qty: '', price: '' }
        obj['sku_id'] = skuId;
        obj['qty'] = 1
        obj['price'] = data[0].offerPrice[0]
        products.push(obj)
        var skuObj = {"cart_id":cartId,"user_id":userId,"products":products}
        // var skuIdLocalStorage = `products: ${JSON.parse(products)}`
        localStorage.setItem('cartDetails', JSON.stringify(skuObj));
        //    var arr = localStorage.getItem('skuId', skuId);
        //    debugger
        //     localStorage.setItem('skuId', skuId);
        window.location.href = "/cart"
    }
    return (
        <div>
            {data[0].ProductContactNum.map(val =>
                <>
                    <Grid container spacing={12} style={{ padding: "0 10px" }}>
                        <Grid item xs={12} lg={4} style={{ marginRight: "15px" }}>
                            {/* <NavLink to="/cart" style={{ textDecoration: 'none' }} > */}
                            <div onClick={handleLocalStorage.bind(this)}>
                                <Buynowbutton class={`buynow-button ${classes.buttons}`} button='buynow-btn-cont' />
                            </div>
                            {/* </NavLink> */}
                        </Grid>

                        <Grid xs={12} lg={7} style={{ marginTop: "7px" }}>
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

                                <Grid item lg={2} className={`buy-subheaders ${classes.normalfonts}`}>
                                    <i class="fa fa-comments-o overall-icons" aria-hidden="true"></i>&nbsp;{val.chat}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {inputsearch(props)}
                </>
            )}
        </div>
    )
}

class PriceBuynow extends React.Component {
    state = {
        showimage: this.props.data[0].fadeImages[0],
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        let { showimage } = this.state;
        const { classes, data } = this.props;
        return (
            <div>
                <Hidden smDown>
                    {Buydetails(this.props)}
                </Hidden>

                <Hidden mdUp>
                    {data[0].ProductContactNum.map(val =>
                        <div style={{ marginTop: "25px" }}>
                            <ProductPrice data={this.props.data} />
                            <Container>
                                <Grid container spacing={12} style={{ marginTop: "10px" }}>
                                    <Grid item xs={6} className="content">
                                        <b className={`ships-by ${classes.normalfonts}`}>
                                            {/* <span class="ship-img"></span> */}
                                            <span > <i class="fa fa-star fa-grey"></i>&nbsp; {val.shipby}</span>
                                        </b>
                                    </Grid>
                                    <Grid item xs={6} className="content">
                                        <b className={`ships-by curser ${classes.normalfonts}`}>
                                            <span onClick={this.handleOpen}> Top to Zoom</span></b>

                                        <Modal
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                            open={this.state.open}
                                        >
                                            <div className='modal-div'>
                                                <i style={{ fontSize: "20px", color: "#ccc", marginTop: "5%", marginRight: "5%", float: "right" }} className="modal-clos" onClick={this.handleClose} class="fa fa-times-circle"></i>
                                                <div style={{ backgroundImage: `url(${showimage})`, width: "100%", height: "100%" }}></div>
                                            </div>
                                        </Modal>

                                    </Grid>
                                    <hr class="bottom-line product-inform-ation"></hr>
                                </Grid>
                            </Container>
                            <PriceTabs data={this.props.data} />

                            {inputsearch(this.props)}

                        </div>
                    )}
                </Hidden>
            </div>
        );
    }
}
PriceBuynow.propTypes = {
    Buydetails: PropTypes.func,
};

export default withStyles(styles)(PriceBuynow);