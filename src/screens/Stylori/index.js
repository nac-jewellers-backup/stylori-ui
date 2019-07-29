import React, { Component } from 'react';
import Header from '../../components/Header/header'
import ProductDescription from '../../components/productDescription';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/Filter/filter'
import Footer from "../../components/Footer/Footer"
import { ChatHelp } from '../../components/ChatHelp';

export default class Stylori extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const fadeImages = [
      'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
      'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
      'https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg'
    ];

    const dataCarousel = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      fade: true,
      arrows: false
    }
    console.log(this.props)
    return (
      <Grid container >
        <Grid item xs={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <ProductDescription fadeImages={fadeImages} dataCarousel={dataCarousel} />
          <Filter />
        </Grid>
        <Grid item xs={12} >
          <ChatHelp />

          <Footer />
        </Grid>
      </Grid>


    )
  }
}
