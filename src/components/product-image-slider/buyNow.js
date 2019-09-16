import {
    Button,
    Hidden,
    Container,
    Grid,
    Modal
} from '@material-ui/core';
import React from "react";
import './product-images.css'
import ProductPrice from './productPrice'
import PriceTabs from "./priceTabs";
import PropTypes from 'prop-types';
import Buynowbutton from '../Buynow/buynowbutton';
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
const inputsearch = (props) => {
    const { productsbuy } = props.data;
    return (
        <div style={{ marginTop: "25px", padding: "0 10px" }}>
            {productsbuy.map(val =>
                <Grid container spacing={12}>
                    <Grid item xs={8} lg={4} sm={8}>
                        <input
                            placeholder='&#xf041; &nbsp; Enter Pin Code'
                            className='buynow-search'
                        />

                    </Grid>
                    <Grid item xs={4} lg={3} sm={4}>
                        <Button className="search-button">Check for COD </Button>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={5} className="content">
                            <b className="ships-by">
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
    const { productsbuy, fadeImages } = props.data;
    return (
        <div>
            {productsbuy.map(val =>
                <>
                    <Grid container spacing={12} style={{ padding: "0 10px" }}>
                        <Grid item xs={4} style={{ marginRight: "15px" }}>
                            <Buynowbutton class="buynow-button" button='buynow-btn-cont' />
                        </Grid>
                        <Grid xs={7} style={{ marginTop: "7px" }}>
                            <Grid container spacing={12}>
                                <Grid item xs={3} className='buy-subheaders'>Need Help ?</Grid>
                            </Grid>
                            <Grid container spacing={12} >

                                <Grid item xs={5} className='buy-subheaders'>
                                    <i class="fa fa-phone overall-icons" aria-hidden="true"></i>&nbsp;{val.telephone}
                                </Grid>

                                <Grid item xs={5} className='buy-subheaders'>
                                    <i class="fa fa-whatsapp overall-icons" aria-hidden="true"></i>&nbsp;{val.phonenum}
                                </Grid>

                                <Grid item xs={2} className='buy-subheaders'>
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
        // showimage: fadeImages[0],
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        // let { showimage } = this.state;
        const { productsbuy, fadeImages } = this.props.data;
        return (
            <div>
                <Hidden smDown>
                    {Buydetails(this.props)}
                </Hidden>

                <Hidden mdUp>
                    {productsbuy.map(val =>
                        <div style={{ marginTop: "25px" }}>
                            <ProductPrice />
                            <Container>
                                <Grid container spacing={12} style={{ marginTop: "10px" }}>
                                    <Grid item xs={6} className="content">
                                        <b className="ships-by">
                                            {/* <span class="ship-img"></span> */}
                                            <span > <i class="fa fa-star fa-grey"></i>&nbsp; {val.shipby}</span>
                                        </b>
                                    </Grid>
                                    <Grid item xs={6} className="content">
                                        <b className="ships-by curser">
                                            <span onClick={this.handleOpen}> Top to Zoom</span></b>

                                        <Modal
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                            open={this.state.open}
                                        >
                                            <div className='modal-div'>
                                                <i style={{ fontSize: "20px", color: "#ccc", marginTop: "5%", marginRight: "5%", float: "right" }} className="modal-clos" onClick={this.handleClose} class="fa fa-times-circle"></i>
                                                <div style={{ backgroundImage: `url(${fadeImages})`, width: "100%", height: "100%" }}></div>
                                            </div>
                                        </Modal>

                                    </Grid>
                                    <hr class="bottom-line product-inform-ation"></hr>
                                </Grid>
                            </Container>
                            <PriceTabs />
                            {/* <Grid container spacing={12}>
                                    <Grid item xs={8}>
                                        <input
                                            placeholder='Enter Pin Code'
                                            className='buynow-search'
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button className="search-button">Check for COD </Button>
                                    </Grid>
                                </Grid> */}

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

export default (props => {
    const { mapped } = useDummyRequest(productpricingPages);
    if (Object.keys(mapped).length === 0) return ''

    return <PriceBuynow {...props} data={mapped} />
});