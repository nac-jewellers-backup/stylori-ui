import React, { Component } from 'react';
import ProductDescription from '../../components/productDescription';
import Header from '../../components/Header/header';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/filter';
export default class Stylori extends Component {
    render() {
        return (
            <div>


<Filter />

            {/* <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Header/>
                      <br/>
                      <br/>
                    </Grid>
                    <Grid item xs={12}>
                    <ProductDescription />
                    </Grid>

                    <Grid item xs={12}>
                    <Filter />
                    </Grid>
                    </Grid> */}
            </div>

        )
    }
}