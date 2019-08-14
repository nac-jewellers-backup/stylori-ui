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
import buy from './producthoverData'
import PropTypes from 'prop-types';
import Buynowbutton from '../Buynow/buynowbutton';
import T from './producthoverData';

const inputsearch = () => {
    return (
        <div style={{ marginTop: "25px" }}>
            {buy.productsbuy.map(val =>
                <Grid container spacing={12}>
                    <Grid item lg={4} sm={8}>
                        <input
                            placeholder='&#xf041; &nbsp; Enter Pin Code'
                            className='buynow-search'
                        />

                    </Grid>
                    <Grid item lg={3} sm={4}>
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
const Buydetails = () => {
    return (
        <div>
            {buy.productsbuy.map(val =>
                <>
                    <Grid container spacing={12}>
                        <Grid item xs={4} >
                            <Buynowbutton class="buynow-button" button='buynow-btn-cont'/>
                        </Grid>
                        <Grid xs={8} style={{ marginTop: "10px" }}>
                            <Grid container spacing={12}>
                                <Grid item xs={3} className='buy-subheaders'>Need Help ?</Grid>
                            </Grid>
                            <Grid container spacing={12} style={{ marginTop: "5px" }}>

                                <Grid item xs={4} className='buy-subheaders'>
                                    <i class="fa fa-phone overall-icons" aria-hidden="true"></i>&nbsp;{val.telephone}
                                </Grid>

                                <Grid item xs={4} className='buy-subheaders'>
                                    <i class="fa fa-whatsapp overall-icons" aria-hidden="true"></i>&nbsp;{val.phonenum}
                                </Grid>

                                <Grid item xs={2} className='buy-subheaders'>
                                    <i class="fa fa-comments-o overall-icons" aria-hidden="true"></i>&nbsp;{val.chat}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {inputsearch()}
                </>
            )}
        </div>
    )
}

class PriceBuynow extends React.Component {
    state = {
        showimage: T.fadeImages[0],
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        let { showimage } = this.state;
        return (
            <div>
                <Hidden smDown>
                    {Buydetails()}
                </Hidden>

                <Hidden mdUp>
                    <Container>
                        {buy.productsbuy.map(val =>
                            <div style={{ marginTop: "25px" }}>
                                <ProductPrice />
                                <Grid container spacing={12}>
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
                                                <div style={{ backgroundImage: `url(${showimage})`, width: "100%", height: "100%" }}></div>
                                           LLLLLL
                                           
                                            </div>
                                        </Modal>

                                    </Grid>
                                    <hr class="bottom-line product-inform-ation"></hr>
                                </Grid>
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

                                {inputsearch()}


                            </div>
                        )}
                    </Container></Hidden>
            </div>
        );
    }
}
PriceBuynow.propTypes = {
    Buydetails: PropTypes.func,
};
export default PriceBuynow;