import {
    Hidden,
    Grid,
    Container,
    ListItem
} from '@material-ui/core';
import React, { Component } from 'react'
import 'screens/screens.css';
// import {  } from 'semantic-ui-react';
import "./accounts.css"
import CartCard from 'components/Checkout/CartCard';
import Register from 'screens/Checkout/loginRegister/register';
import Addressform from 'screens/Checkout/addressDetails/addressForm';
import Allorders from './allorders';
import Wishlists from './whislists';
import List from '@material-ui/core/List';
import CommenDialog from "components/Common/Dialogmodel"
import TextField from '@material-ui/core/TextField';

class Accountdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: window.location.pathname.split("-")[1],
            currency: 'EUR',
            modelOpen: false
            // window.location.pathname.split("-")[1]
        };

    }
    handleClick = (e) => {

        this.setState({ currency: e.target.value, isActive: e.target.value });
    };

    Activeaccounts = (name) => {
        this.setState({ isActive: [name] })
        window.history.pushState(window.location.href, null, `/account${"-" + name}`);
    }
    // fun = () => {
    //     const allorder = this.props.allorderdata ? this.props.allorderdata : ""
    //     if (allorder.length > 0) {
    //         localStorage.setItem("order", this.props.allorderdata)
    //     }
    // }
    canceldeletechecklist = () => {

        this.setState({
            modelOpen: false,
        })
    }
    deletechecklists = () => {

        localStorage.clear();
        sessionStorage.clear()
        window.location.reload()
        window.location.pathname = "/login"
        this.setState({
            modelOpen: false,
        })
    }
    openmodel = () => {
        this.setState({
            modelOpen: true,
        })
    }
    render() {
        let c_k_l = localStorage.getItem("c_k_l") ? localStorage.getItem("c_k_l") : {}
        // console.log(this.props)
        // const { wishlistdata } = this.props.wishlistdata;
        const currencies = [
            {
                label: 'Profile',
                values: 'profile'
            },
            {
                label: 'Address Book',
                values: 'addresses'
            },
            {
                label: 'Shopping Bag',
                values: 'shoppingcart'
            },
            {
                label: 'Wishlist',
                values: 'wishlist'
            },
            {
                label: 'All Orders',
                values: 'allorders'
            },

        ];
        return (
            <Container>
                <Hidden smDown>
                    <div className="inner-page-title1"> My Account </div>

                    {/* <Container className="main_container" style={{ width: "60%", margin: "auto" }}> */}
                    <div className="panel_body">
                        <Grid container spacing={12} style={{ width: "100%", margin: "auto" }}  >
                            <Grid item xs={3}  >
                                <List className="pay-index-subhed" style={{ width: "100%" }}>
                                    <p className={this.state.isActive == 'profile' ? "backgrund" : ""}
                                        onClick={() => this.Activeaccounts('profile')}
                                    > Personal Information</p>
                                    <p className={this.state.isActive == 'addresses' ? "backgrund" : ""}
                                        onClick={() => this.Activeaccounts('addresses')}
                                    >Address Book </p>
                                    <p className={this.state.isActive == 'shoppingcart' ? "backgrund" : ""}
                                        onClick={() => this.Activeaccounts('shoppingcart')}
                                    >Shopping Bag ({this.props.data.length ? this.props.data.length : "0"}) </p>
                                    <p className={this.state.isActive == 'wishlist' ? "backgrund" : ""}
                                        onClick={() => this.Activeaccounts('wishlist')}
                                    >
                                        Wishlist ({this.props.wishlistdata &&
                                            this.props.wishlistdata.wishlistdata &&
                                            this.props.wishlistdata.wishlistdata.nodes.length ? this.props.wishlistdata &&
                                            this.props.wishlistdata.wishlistdata &&
                                            this.props.wishlistdata.wishlistdata.nodes.length : "0"
                                        })</p>
                                    <p className={this.state.isActive == 'allorders' ? "backgrund" : ""}
                                        onClick={() => this.Activeaccounts('allorders')}
                                    >
                                        All Orders</p>

                                    <p class="logedout"
                                        // onClick={() => this.Activeaccounts('allorders')}
                                        onClick={() => {
                                            this.openmodel()
                                        }}
                                    >
                                        Logout</p>
                                    <CommenDialog isOpen={this.state.modelOpen} content={`Are you sure you want to leave? `} handleClose={this.canceldeletechecklist} handleSuccess={this.deletechecklists} negativeBtn="No" positiveBtn="Logout" title="Logout" logout={true} />
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} >
                                <div className="pay-index-subhed_da">
                                    {
                                        this.state.isActive == 'profile' &&
                                        <>
                                            <div style={{ PaddingLeft: "30px" }}></div>
                                            {/* {c_k_l !== true ? */}

                                            <Container>
                                                <Register />
                                            </Container>
                                            {/* <Addressform/> */}
                                            {/* : <Login /> */}
                                            {/* } */}
                                        </>

                                    }
                                    {
                                        this.state.isActive == 'addresses' && <Addressform />
                                    }
                                    {
                                        this.state.isActive == 'shoppingcart' && <>

                                            {this.props.data.length > 0 ? <CartCard data={this.props.data} /> :
                                                <div style={{ textAlign: "center", color: "#394578" }}>Your shopping bag is empty</div>}</>
                                    }
                                    {
                                        this.state.isActive == 'wishlist' && < Grid >
                                            <Wishlists wishlistdata={this.props.wishlistdata} data={this.props.data} />
                                            {/* {JSON.stringify(this.props.wishlistdata)} */}
                                        </Grid>
                                    }
                                    {
                                        this.state.isActive == 'allorders' && <>
                                            <Allorders allorderdata={this.props.allorderdata} data={this.props.data} />

                                            {/* {JSON.stringify(this.props.allorderdata)} */}
                                        </>

                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    {/* </Container> */}
                </Hidden>

                <Hidden mdUp>
                    <Grid>
                        <div className="inner-page-title1"> My Account </div>
                    </Grid>
                    <Grid style={{ display: "flex", alignContent: "left", marginTop: "10px" }}>
                        <form noValidate autoComplete="off" style={{ width: "100%" }}>
                            <div >
                                <TextField
                                    style={{ width: "100%" }}
                                    select
                                    //   label="Select the options"
                                    value={this.state.isActive}
                                    onChange={(e) => this.handleClick(e)}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="outlined"
                                    helperText=""
                                >
                                    {currencies.map(option => (
                                        <option key={option.values} value={option.values}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </div>
                        </form>
                    </Grid>
                    {/* <Grid style={{ display: "flex", alignContent: "left", marginTop: "10px" }}>
                            <div >
                                kjkljkljkljl
                            </div>
                    </Grid> */}

                    <Grid item xs={12} className="topPadding">
                        <div className="pay-index-subhed_da">
                            {
                                this.state.isActive == 'profile' &&
                                <>

                                    {/* {c_k_l !== true ? */}
                                    <Register />
                                    {/* <Addressform/> */}
                                    {/* : <Login /> */}
                                    {/* } */}
                                </>

                            }
                            {
                                this.state.isActive == 'addresses' && <Addressform />
                            }
                            {
                                this.state.isActive == 'shoppingcart' && <>{this.props.data.length > 0 ? <CartCard data={this.props.data} /> :
                                    <div style={{ textAlign: "center", color: "#394578" }}>Your shopping bag is empty</div>}</>
                            }
                            {
                                this.state.isActive == 'wishlist' && <Grid style={{ margin: "20px 0px 0px 0px" }}>
                                    <Wishlists wishlistdata={this.props.wishlistdata} data={this.props.data} />
                                    {/* {JSON.stringify(this.props.wishlistdata)} */}
                                </Grid>
                            }
                            {
                                this.state.isActive == 'allorders' && <>
                                    <Allorders allorderdata={this.props.allorderdata} data={this.props.data} />

                                    {/* {JSON.stringify(this.props.allorderdata)} */}
                                </>

                            }
                        </div>
                    </Grid>


                </Hidden>
            </Container>
        )
    }
}


export default Accountdetails;
