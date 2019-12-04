import {
    Hidden,
    Grid
} from '@material-ui/core';
import React, { Component } from 'react'
import 'screens/screens.css';
import { Container } from 'semantic-ui-react';
import "./accounts.css"
import CartCard from 'components/Checkout/CartCard';
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
    render() {
        return (
            <div>
                <Container>
                    <Grid container spacing={12} className="main_align">
                        <Grid item lg={2} className={this.state.isActive == '1' ? "backgrund" : ""}
                            onClick={() => this.Activeaccounts('1')}>Personal Information
                        </Grid>
                        <Grid item lg={2} className={this.state.isActive == '2' ? "backgrund" : ""}
                            onClick={() => this.Activeaccounts('2')}>Address Book (0)
                           
                        </Grid>
                        <Grid item lg={2} className={this.state.isActive == '3' ? "backgrund" : ""}
                            onClick={() => this.Activeaccounts('3')}>Shopping bag (1)
                        </Grid>
                        <Grid item lg={2} className={this.state.isActive == '4' ? "backgrund" : ""}
                            onClick={() => this.Activeaccounts('4')}>Wishlist (0)
                        </Grid>
                        <Grid item lg={2} className={this.state.isActive == '5' ? "backgrund" : ""}
                            onClick={() => this.Activeaccounts('5')}> All Orders
                        </Grid>
                    </Grid><br />
                    <Container>
                        <Grid container spacing={12} className="main_align">
                            <Grid item lg={12} >
                            {
                                this.state.isActive == '3' && <CartCard data={this.props.data} />
                            }
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </div>
        )
    }
}


export default Accountdetails;