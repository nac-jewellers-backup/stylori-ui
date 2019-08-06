// import checkoutbreadcrum
import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './checkout.css'
import { Container, Grid, CardHeader, Card, CardMedia, IconButton } from '@material-ui/core';
import { breadlist } from './checkoutData'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { breadlistcard } from './checkoutData'
class Checkoutcard extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    {breadlistcard.map(val => (
                        <Grid container spacing={12}>
                            <Grid item xs={1} style={{ marginTop: "10px", padding: "0px 50px" }}>
                                <a style={{ textDecoration: "none" }}><div class="remove-product"></div></a>
                            </Grid>
                            <Grid item xs={2}>
                                <Card className='product-image-thumb'>
                                    <CardHeader style={{ padding: "0px" }}
                                        action={
                                            <IconButton>
                                                <i style={{ fontSize: "18px", color: "#337ab7" }} class='fa fa-heart-o'></i>
                                            </IconButton>
                                        }
                                    />
                                    <img src="https://assets-cdn.stylori.com/166x166/images/product/SP0346/SP0346-1Y.jpg" />
                                </Card>
                            </Grid>
                            <Grid item xs={6} style={{ padding: "0 10px" }}>
                                <h3 class="title">{val.header}</h3>
                                <Grid container spacing={12}>
                                    <Grid item xs={3}>
                                        {val.subheadname.map(val => (
                                            <Typography className='subhesder'>{val}</Typography>
                                        ))}
                                    </Grid>
                                    <Grid item xs={3}>
                                        {val.subheaddetails.map(val => (
                                            <Typography className='subhesder'>{val}</Typography>
                                        ))}
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Typography className='subhesder'>Quantity 1</Typography>
                                    <br/>
                                    <Typography className='subhesder'>
                                    <i class="fa fa-trash"></i>
                                     &nbsp;Remove</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="product-rate">
                                    <span class="offer-price">₹  52,696</span><br />
                                    <span class="price">₹  39,522</span><br />
                                    <span class="offer-description">25% - OFF</span>
                                </div>
                            </Grid>
                        </Grid>
                    ))}

                </Container>
            </div>
        )
    }

}
export default Checkoutcard;