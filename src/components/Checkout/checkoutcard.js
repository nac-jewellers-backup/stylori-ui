import React from 'react';
import Typography from '@material-ui/core/Typography';
import './checkout.css'
import { Container, Grid, CardHeader, Card, IconButton, CardContent, Button, Hidden } from '@material-ui/core';
import { productsDetails } from '../product-image-slider/producthoverData';
import T from '../product-image-slider/producthoverData';
import Slideshow from '../Carousel/carosul'
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from '@material-ui/core/styles';
import Buynowbutton from '../Buynow/buynowbutton';
import { dataCard1 } from '../ProductCard/ProductData';

const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            overflowX: "scroll"
        },
        [theme.breakpoints.up('lg')]: {
            width: "100%"
        },
    },
});
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
                        <Grid container spacing={12} lg={12}  >
                            <Grid item lg={1}  >
                                <a
                                    // onClick={() => remove(id)}
                                    style={{ textDecoration: "none" }} href="#123"><div class="remove-product"></div></a>
                            </Grid>
                            <Grid item lg={2} xs={2} >
                                <Card className="product-image-thumb">
                                    <CardHeader style={{ padding: "0px" }}
                                        action={
                                            <IconButton>
                                                <i style={{ fontSize: "18px", color: "#337ab7" }} class='fa fa-heart-o'></i>
                                            </IconButton>
                                        }
                                    />
                                    <Slideshow class="image"
                                        fadeImages={T.fadeImages} dataCarousel={dataCarousel} />
                                </Card>
                            </Grid>
                            <Grid item lg={6} style={{ padding: "0 20px" }}>
                                <h3 class="title">{val.header}</h3>
                                <Grid container spacing={12} >
                                    <Grid item lg={6} >
                                        {val.namedetail !== undefined && val.namedetail.map(val => (
                                            <Grid container spacing={12}>

                                                <Grid item lg={6} >
                                                    <Typography className='subhesder'>{val.name}</Typography>
                                                </Grid>
                                                <Grid item lg={6} >
                                                    <Typography className='subhesder'>{val.details}</Typography>
                                                </Grid>
                                            </Grid>

                                        ))}
                                    </Grid>

                                    <Grid item lg={3} >
                                        <Typography className='subhesder'>Quantity 1</Typography>
                                        <br />
                                        <Typography className='subhesder'>
                                            <i class="fa fa-trash"></i>
                                            &nbsp;Remove</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item lg={3} >
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

        return (
            <div>
                <Button style={{ background: "#ccc" }}
                    onClick={() => { this.setState({ cart: !this.state.cart }) }}
                >click</Button>
                {this.state.cart === true ?
                    <Container>
                        <div>
                            {this.row()}
                        </div>
                    </Container>


               : 
                    <div>
                        <Container>
                            <Grid container>
                                {productsDetails.map(val => (
                                    <Grid item lg={4} xs={12} >
                                        <Card className="checkout-response-card">
                                            <CardHeader
                                                title={<span class="title-response">{val.header}</span>} />
                                            <CardContent style={{ borderBottom: "1px solid #CCC" }}>
                                                <Grid container lg={12} xs={12}>
                                                    <Grid item lg={4} xs={4} >
                                                        <Slideshow class="response-image" imgClass="response-image1"
                                                            fadeImages={T.fadeImages} dataCarousel={dataCarousel} />
                                                    </Grid>
                                                    <Grid item xs={8} lg={8}>
                                                        {val.namedetail !== undefined && val.namedetail.map(val => (
                                                            <Grid container>

                                                                <Grid item xs={6} lg={6} style={{ float: "left" }}>
                                                                    <Typography className='subhesder-response'>{val.name}</Typography>
                                                                </Grid>
                                                                <Grid item xs={6} lg={6} style={{ float: "left" }}>
                                                                    <Typography className='subhesder-response'>{val.details}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        ))}
                                                    </Grid>
                                                </Grid>
                                                <Grid container >
                                                    <Grid item xs={12} lg={12}>
                                                        {dataCard1.map(val =>
                                                            <>
                                                                <span class="offer-price">{val.price}</span>
                                                                <span class="price-response">{val.offerPrice}</span>
                                                                <span class="offer-description">25% - OFF</span>
                                                            </>
                                                        )}
                                                    </Grid>
                                                </Grid>

                                            </CardContent>
                                            <CardActions>
                                                <Grid container spacing={12}>
                                                    <Grid item xs={6} className="responsive-card-bottom">
                                                        <i style={{ fontSize: "16px", color: "#337ab7" }}
                                                            class='fa fa-heart-o'></i> &nbsp;jewellerys
                                        </Grid>
                                                    <Grid item xs={6} className="responsive-card-bottom">
                                                        <i class="fa fa-trash"></i>
                                                        &nbsp;<b style={{ borderBottom: "1px solid #394578" }}>Remove</b>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            {this.subtotals()}

                        </Container>
                    </div>
                 } 

            </div>
        )
    }

}
export default withStyles(styles, { withTheme: true })(Checkoutcard);