import React, { Component } from 'react';
import Header from '../../components/Header/header'
import ProductDescription from '../../components/productDescription';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/filter'
import HomeCarousel from '../../components/Home/homeCarousel'
import Subheader from '../../components/Home/subheader'
import SubCarousel from '../../components/Home/subcarousel'
import Socialmediacard from '../../components/Home/socialmediaCard'
import Footer from '../../components/Home/footer'
import Card from '@material-ui/core/Card';
export default class Stylori extends Component {
  render() {
    return (
      <div>
        <Grid container >
          <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
            <Header />
          </Grid>

          <Grid item xs={12}>
            <ProductDescription />
            <Filter />


          </Grid>



        </Grid>

      </div>
    )
  }
}
