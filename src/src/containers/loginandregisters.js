import {
  Hidden,
  Grid
} from '@material-ui/core';
import React, { Component } from 'react';
import Header from 'components/SilverComponents/Header'
import Footer from "components/Footer/Footer"
import 'screens/screens.css';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Hidden smDown>
          <Grid container spacing={12} >
            <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000", width: "100%" }}>
              <Header />
            </Grid>
          </Grid>

          <Grid Container spacing={12}>
            <Grid item xs={12}>

            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Hidden>
      </div>
    )
  }
}

export default ProductDetail;