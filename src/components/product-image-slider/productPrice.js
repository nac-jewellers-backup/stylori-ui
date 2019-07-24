import React, { Component } from 'react';
import './product-images.css'
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import Container from '@material-ui/core/Container';
import PriceBuynow from './buyNow'
import PriceTabs from './priceTabs'
import dataCard from '../ProductCard/ProductData'
const fadeImages = [
    'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg'
  ];
  
  const dataCarousel={
    dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        fade: true,
        arrows: false
      }
const render=()=>{

    return( 
      <Slideshow fadeImages={fadeImages} dataCarousel={dataCarousel}/>
      );
    };
const Productprice = () => {
    return (
        <div>

{/* // {dataCard[123].map(val => ( */}

    <>
            <Grid container spacing={12} sm={12}>
                <Grid item xs={8}  sm={7}>
                    <div className="price-div">
                        <h1 className="pdp-title">
                        {/* {val.title} */}dfdfdfdfdfdf
                        </h1>
                        <p className="pdp-desc">
                        {/* {val.dis} */}fddddddddddddddddddddddddddddddddddddd
                        </p>
                    </div>
                </Grid>
                <Grid item xs={4}  sm={5}>
                    <div className="starts">
                        <div className="row social-shares">
                            <i class="fa fa-share-alt"></i>&nbsp;
                       <i class="fa fa-heart"></i>
                        </div>
                        <div className="starts-review">
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                            <i class="fa fa-star fa-grey"></i>
                        </div>
                    </div>
                </Grid>
                <hr class="bottom-line product-inform-ation"></hr>
            </Grid>
            <Hidden mdUp>
                   {render()}
               </Hidden>
            <div className='price-info'>
                <Grid container spacing={12}>
                    <Grid item xs={6} lg={2} className='discount-container'> 
                    {/* {val.offerPrice} */} 955.4944
                    </Grid>
                    <Grid item lg={5} xs={6} sm={6} className="selling-price"><i class="fa fa-rupee"></i> &nbsp;
                    {/* {val.save} */} 98.8989
                    </Grid>
                </Grid>
                <hr class="bottom-line product-inform-ation"></hr>
            </div>
            </>
{/* ))} */}
        </div>
    )
};

class ProductPrice extends Component {
    state = {
    }


    render() {
        return (
            <div>
                <Hidden smDown>
                    {Productprice()}
                </Hidden>
                <Hidden mdUp>
                    {Productprice()}
                </Hidden>
            </div>


        )
    }
}

export default ProductPrice;
