import React, { Component } from 'react';
import Header from '../../components/Header/header'
import ProductDescription from '../../components/productDescription';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/filter'

export default class Stylori extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    debugger;
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
