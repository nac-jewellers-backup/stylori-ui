import React, { Component } from 'react';
import Header from '../../components/Header/header'
import ProductDescription from '../../components/productDescription';
import Grid from '@material-ui/core/Grid';
export default class Stylori extends Component {
    render() {
        return (
            <div>



            <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Header/>
                      <br/>
                      <br/>
                      <br/>
                      <br />
                      <br />
                      <br />
                      <br />
                    </Grid>
                    <Grid item xs={12}>
                    <ProductDescription />
                    </Grid>
                    </Grid>
            </div>

        )
    }
}