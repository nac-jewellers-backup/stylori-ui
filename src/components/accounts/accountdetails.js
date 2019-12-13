import {
    Hidden,
    Grid,
    Container
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
import Login from 'screens/Checkout/loginRegister/login';
class Accountdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: '1',
        };
    }

    Activeaccounts = (name) => {
        this.setState({ isActive: [name] })

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
                <div className="panel_body">
                    <Grid container spacing={12} >
                        <Grid item lg={2}>
                            <div className="pay-index-subhed">
                                <p className={this.state.isActive == '1' ? "backgrund" : ""}
                                    onClick={() => this.Activeaccounts('1')}
                                > Personal Information</p>
                                <p className={this.state.isActive == '2' ? "backgrund" : ""}
                                    onClick={() => this.Activeaccounts('2')}
                                >Address Book </p>
                                <p className={this.state.isActive == '3' ? "backgrund" : ""}
                                    onClick={() => this.Activeaccounts('3')}
                                >Shopping bag ({this.props.data.length ? this.props.data.length : "0"}) </p>
                                <p className={this.state.isActive == '4' ? "backgrund" : ""}
                                    onClick={() => this.Activeaccounts('4')}
                                >
                                    Wishlist ({this.props.wishlistdata &&
                                        this.props.wishlistdata.wishlistdata &&
                                        this.props.wishlistdata.wishlistdata.nodes.length ? this.props.wishlistdata &&
                                        this.props.wishlistdata.wishlistdata &&
                                        this.props.wishlistdata.wishlistdata.nodes.length : "0"
                                    })</p>
                                <p className={this.state.isActive == '5' ? "backgrund" : ""}
                                    onClick={() => this.Activeaccounts('5')}
                                >
                                    All Orders</p>
                            </div>
                        </Grid>
                        <Grid item lg={10}>
                            <div className="pay-index-subhed_datas">
                                {
                                    this.state.isActive == '1' &&
                                    <>
                                        {/* {c_k_l !== true ? */}
                                        <Register />
                                        {/* : <Login /> */}
                                        {/* } */}
                                    </>

                                }
                                {
                                    this.state.isActive == '2' && <Addressform />
                                }
                                {
                                    this.state.isActive == '3' && <>{this.props.data.length > 0 ? <CartCard data={this.props.data} /> :
                                        <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Shopping cart</div>}</>
                                }
                                {
                                    this.state.isActive == '4' && <>
                                        <Wishlists wishlistdata={this.props.wishlistdata} data={this.props.data} />
                                        {/* {JSON.stringify(this.props.wishlistdata)} */}
                                    </>
                                }
                                {
                                    this.state.isActive == '5' && <>
                                        <Allorders allorderdata={this.props.allorderdata} data={this.props.data} />

                                        {/* {JSON.stringify(this.props.allorderdata)} */}
                                    </>

                                }
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }
}


export default Accountdetails;