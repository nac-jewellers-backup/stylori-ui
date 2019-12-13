import {
    Hidden,
    Grid
} from '@material-ui/core';
import React, { Component } from 'react'
import 'screens/screens.css';
import { Container } from 'semantic-ui-react';
import "./accounts.css"
import CartCard from 'components/Checkout/CartCard';
import Register from 'screens/Checkout/loginRegister/register';
import Addressform from 'screens/Checkout/addressDetails/addressForm';
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
    fun=()=>{
        const allorder=this.props.allorderdata?this.props.allorderdata:""
        if(allorder.length>0){
            localStorage.setItem("order",this.props.allorderdata)
        }
    }
    render() {
        return (
            <div>
                <Grid container spacing={12} className="panel-body">
                    <Grid item lg={2}>
                        <div className="pay-index-subhed">
                            <p className={this.state.isActive == '1' ? "backgrund" : ""}
                                onClick={() => this.Activeaccounts('1')} 
                             >
                                Personal Information</p>
                            <p className={this.state.isActive == '2' ? "backgrund" : ""}
                                onClick={() => this.Activeaccounts('2')}
                            >
                                Address Book (0) </p>
                            <p className={this.state.isActive == '3' ? "backgrund" : ""}
                                onClick={() => this.Activeaccounts('3')}
                            >
                                Shopping bag ({this.props.data.length}) </p>
                            <p className={this.state.isActive == '4' ? "backgrund" : ""}
                                onClick={() => this.Activeaccounts('4')}
                            >
                                Wishlist (0)</p>
                            <p className={this.state.isActive == '5' ? "backgrund" : ""}
                                onClick={() => this.Activeaccounts('5')}
                            >
                                All Orders</p>
                        </div>
                    </Grid>
                    <Grid item lg={7}>
                        <div className="pay-index-subhed_datas">
                            {
                                this.state.isActive == '1' && <Register />
                            }
                            {
                                this.state.isActive == '2' && <Addressform />
                            }
                            {
                                this.state.isActive == '3' && <CartCard data={this.props.data} />
                            }
                            {
                                this.state.isActive == '4' && " <4 />"
                            }
                            {
                                this.state.isActive == '5' &&  <>
                                {JSON.stringify(this.props.allorderdata)}
                                </>
                                
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default Accountdetails;