import React, { Component } from 'react';
import './product-images.css'
import { Grid } from '@material-ui/core';
 import VerticalCarousel from './verticalcarousel'
import TB from './producthoverData'
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
  render() {
    return (
      <div>
        <Grid container spacing={12}>
        <Grid xs={2}>
          <VerticalCarousel/>
        </Grid>
        <Grid xs={10}>
        <div className="imagecard">
          <div className='figure' onMouseMove={this.handleMouseMove} style={this.state}>
            <img className='image' src={src} />
          </div>
        </div>
        <div>
        <Grid container spacing={12}
         className='features-tags'>
          {TB.productsubHead.map(val => (
            <Grid item xs={2} >
              <div key={val.name}>
                <img className='features-tags-images' src={val.icon} />
               <span style={{fontSize:"14px"}}>{val.name} </span> 
              </div>
            </Grid>
          ))}
        </Grid>
        </div>
        </Grid>
        </Grid>
        
      </div>

    )
  }
}

export default ProductImageZoom;