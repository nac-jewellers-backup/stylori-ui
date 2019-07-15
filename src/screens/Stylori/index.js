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
export default class Stylori extends Component {
  render() {
    return (
      <div>
        

         <Grid container >
           <Grid item xs={12}>
             <Header />
           </Grid>
            {/* <Grid item xs={12}>
             <HomeCarousel />
           </Grid> */}
           {/* <Grid item xs={12} >
           <Subheader />
           </Grid>
           <Grid item xs={12} >
           <SubCarousel />
           </Grid>
           <Grid item xs={12} >
         <Socialmediacard/>
           </Grid>

           <Grid item xs={12} >
         <Footer/>
           </Grid>  */}
          
         </Grid>

      </div>
    )
  }
}
