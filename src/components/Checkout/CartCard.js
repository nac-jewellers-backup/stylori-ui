import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Cart.css'
import { Container, Grid, CardHeader, Card, IconButton, CardContent, Button, Hidden } from '@material-ui/core';
import { productsDetails } from '../product-image-slider/producthoverData';
import T from '../product-image-slider/producthoverData';
import Slideshow from '../Carousel/carosul'
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from '@material-ui/core/styles';
import Buynowbutton from '../Buynow/buynowbutton';
import { dataCard1 } from '../ProductCard/ProductData';
import CardSmallScreen from './CartCardSmallScreen.js';
// 
// 
import { makeStyles, useTheme } from "@material-ui/core/styles";
const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            overflowX: "auto",
         
        },
        [theme.breakpoints.up('lg')]: {
            width: "100%",
            border:"0.5px solid #ccc",
            padding:"10px",
            marginBottom:"20px"
        },
    },
});



const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    height: "20vh",
    margin: "auto",
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    width: "100%"
  },
  content: {
    flex: "1 0 auto",
    padding: 0
  },
  cover: {
    width: "30vw"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "& button": {
      padding: "2.1px 13.8px"
    },
    [theme.breakpoints.down("sm")]: {
      "& button": {
        padding: "1.1px 1.8px"
      }
    }
  },

  playIcon: {
    height: 38,
    width: 38
  },
  contents: {
    fontSize: "0.8rem",
    color: "#394578"
  },
  labelPrice: {
    display: "flex"
  },
  labelPriceDel: {
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center"
  },
  labelPriceOff: {
    fontSize: "1.1rem"
  }
}));
class Checkoutcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: true
        }
    }
    
    
    // sortBy = (key) => {
    //     let arrayCopy = [...this.state.data];
    //     arrayCopy.sort(this.compareBy(key));
    //     this.setState({data: arrayCopy});
    //   };
    // remove = (rowId) => {
    //     // Array.prototype.filter returns new array
    //     // so we aren't mutating state here
    //     const arrayCopy = this.state.data.filter((row) => row.id !== rowId);
    //     this.setState({data: arrayCopy});
    //   };
    row = () => {
        const dataCarousel = {
            slidesToShow: 1,
            arrows: false,
        }
        const { classes } = this.props;
        return (
            <div>
                {productsDetails.map(val => (
                    <div className={classes.cart}>
                        <Grid container spacing={12} xs={12}  >
                            <Grid item xs={1}  >
                                <a
                                    // onClick={() => remove(id)}
                                    style={{ textDecoration: "none" }} href="#123"><div class="remove-product"></div></a>
                            </Grid>
                            <Grid item  xs={2} >
                                <Card className="product-image-thumb">
                                    <CardHeader style={{ padding: "0px" }}
                                        action={
                                            <IconButton >
                                                <i style={{ fontSize: "18px", color: "#337ab7" }} class='fa fa-heart-o'></i>
                                            </IconButton>
                                        }
                                    />
                                    <Slideshow class="image" 
                                        fadeImages={T.fadeImages} dataCarousel={dataCarousel} />
                                </Card>
                            </Grid>
                            <Grid item xs={6} style={{ padding: "20px" }}>
                                <h3 class="title">{val.header}</h3>
                                <Grid container spacing={12} >
                                    <Grid item xs={6} >
                                        {val.namedetail !== undefined && val.namedetail.map(val => (
                                            <Grid container spacing={12}>

                                                <Grid item xs={6} >
                                                    <Typography className='subhesder'>{val.name}</Typography>
                                                </Grid>
                                                <Grid item xs={6} >
                                                    <Typography className='subhesder'>{val.details}</Typography>
                                                </Grid>
                                            </Grid>

                                        ))}
                                    </Grid>

                                    <Grid item xs={3} >
                                        <Typography className='subhesder'>Quantity 1</Typography>
                                        <br />
                                        <Typography className='subhesder'>
                                            <i class="fa fa-trash"></i>
                                            &nbsp;Remove</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={3} >
                                {dataCard1.map(val =>
                                    <div className="product-rate">
                                        <span class="offer-price">{val.price}</span><br />
                                        <span class="price">{val.offerPrice}</span><br />
                                        <span class="offer-description">25% - OFF</span>
                                    </div>
                                )} </Grid>
                        </Grid>
                    </div>
                ))}


                {this.subtotals()}
            </div>
        )

    }
    checkoutbutton = () => {
        return (
            <div className='ckeckout-top'>
                <Buynowbutton class='chckout-page-buynow' />
            </div>
        )
    }
    subtotals = () => {
        return (
            <div>
                <Grid container spacing={12}>
                    <Grid item xs={3} lg={9} />
                    <Grid item xs={9} lg={3}>
                        {dataCard1.map(val =>
                            <Grid container>
                                <Grid xs={7} lg={5}>
                                    <Typography class="subhesder">Subtotal</Typography>
                                    <Typography class="subhesder">You Saved</Typography>
                                    <Typography class="subhesder">Shipping</Typography>
                                    <Typography class="subhesder totsl-size">Grand Total</Typography>
                                </Grid>
                                <Grid xs={5} lg={5}>
                                    <Typography class="subhesder">{val.price}</Typography>
                                    <Typography class="subhesder">{val.save}</Typography>
                                    <Typography class="subhesder">------- </Typography>
                                    <Typography class="subhesder totsl-size">{val.offerPrice}</Typography>
                                </Grid>
                            </Grid>
                        )} </Grid>
                </Grid>
                {this.checkoutbutton()}
            </div>
        )
    }
    render() {
        const dataCarousel = {
            slidesToShow: 1,
            arrows: false,
        }
        const { classes } = this.props;

        return (
            <div>
               <Hidden smDown>
{this.row()}
               </Hidden>
               <Hidden smUp>
               <CardSmallScreen/>
               </Hidden>
                            
                     
            </div>
        )
    }

}
export default withStyles(styles, { withTheme: true })(Checkoutcard);