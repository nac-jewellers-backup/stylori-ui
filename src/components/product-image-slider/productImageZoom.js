import React, {Component} from 'react';
import './product-images.css'
import { Grid } from '@material-ui/core';
const src = 'https://images8.alphacoders.com/387/387613.jpg'
class ProductImageZoom extends Component {
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%'
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }
 render(){

  return (
      <div> 
   <figure onMouseMove={this.handleMouseMove} style={this.state}>
      <img src={src} />
    </figure>
    <Grid container spacing={12} className='features-tags'>
    <Grid item xs={2} > <img className='features-tags-images'
     src="https://img.icons8.com/wired/64/000000/diamond.png"/>From the House of NAC</Grid>
    <Grid item xs={2}><i class="fa fa-share-alt"> &nbsp;</i>Quality Assurance</Grid>
    <Grid item xs={2}><i class="fa fa-share-alt"> &nbsp;</i>Easy 
Returns</Grid>
    <Grid item xs={2}><i class="fa fa-share-alt"> &nbsp;</i>Diverse Styles</Grid>
    <Grid item xs={2}><i class="fa fa-share-alt"> &nbsp;</i>Secure Payments</Grid>
    <Grid item xs={2}><i class="fa fa-share-alt"> &nbsp;</i>
Certified Jewellery</Grid>
    </Grid>
      </div>
 
  )
}
}

export default ProductImageZoom;
