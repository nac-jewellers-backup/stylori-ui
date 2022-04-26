
import React, { Component } from 'react';
import Chckoutindex from '../Checkout';
import { ProductDetailProvider } from "context";
export default class Checkout extends Component {
    componentDidMount(){
        localStorage.setItem('navfblogin',false)
    }
    
    render() {

        return (
            <div>
                {/* <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                    <Grid item xs={12} >
                        <Header />
                    </Grid>
                </Grid> */}
                <ProductDetailProvider>
                <Chckoutindex />
                </ProductDetailProvider>
            </div>
        )
    }
}
