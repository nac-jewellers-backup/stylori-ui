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

import TextField from '@material-ui/core/TextField';

class Accountdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: window.location.pathname.split("-")[1],
            // window.location.pathname.split("-")[1]
        };
    }

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
    render() {
        let c_k_l = localStorage.getItem("c_k_l") ? localStorage.getItem("c_k_l") : {}
        // const { wishlistdata } = this.props.wishlistdata;
        return (
            <Container>
                <Container>
                    <div class="inner-page-title"> My Account </div> 
                        <div className="panel_body">
                            <Grid container spacing={12}  >
                                <Grid item  >
                                    <List xs={3} className="pay-index-subhed">
                                        <p className={this.state.isActive == 'profile' ? "backgrund" : ""}
                                            onClick={() => this.Activeaccounts('profile')}
                                        > Personal Information</p>
                                        <p className={this.state.isActive == 'addresses' ? "backgrund" : ""}
                                            onClick={() => this.Activeaccounts('addresses')}
                                        >Address Book </p>
                                        <p className={this.state.isActive == 'shopping-cart' ? "backgrund" : ""}
                                            onClick={() => this.Activeaccounts('shopping-cart')}
                                        >Shopping bag ({this.props.data.length ? this.props.data.length : "0"}) </p>
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
                                    </List>
                                </Grid>
                                <Grid item xs={9}>
                                    <div className="pay-index-subhed_datas">
                                        {
                                            this.state.isActive == 'profile' &&
                                            <>
                                                    <div style={{PaddingLeft:"30px"}}></div>
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
                                            this.state.isActive == 'shopping-cart' && <>
                                            
                                            {this.props.data.length > 0 ? <CartCard data={this.props.data} /> :
                                                <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Shopping cart</div>}</>
                                        }
                                        {
                                            this.state.isActive == 'wishlist' && <>
                                                <Wishlists wishlistdata={this.props.wishlistdata} data={this.props.data} />
                                                {/* {JSON.stringify(this.props.wishlistdata)} */}
                                            </>
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
                            <Grid item lg={10} xs={12}>
                                <div className="pay-index-subhed_datas">
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
                                        this.state.isActive == 'shopping-cart' && <>{this.props.data.length > 0 ? <CartCard data={this.props.data} /> :
                                            <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Shopping cart</div>}</>
                                    }
                                    {
                                        this.state.isActive == 'wishlist' && <>
                                            <Wishlists wishlistdata={this.props.wishlistdata} data={this.props.data} />
                                            {/* {JSON.stringify(this.props.wishlistdata)} */}
                                        </>
                                    }
                                    {
                                        this.state.isActive == 'allorders' && <>
                                            <Allorders allorderdata={this.props.allorderdata} data={this.props.data} />

                                            {/* {JSON.stringify(this.props.allorderdata)} */}
                                        </>

                                    }
                                </div>
                            </Grid>
                    </div>
                </Container>
            </Container>
        )
    }
}


export default Accountdetails;