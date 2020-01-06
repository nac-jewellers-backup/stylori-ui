import React from 'react'
import { Typography, Grid, Hidden } from '@material-ui/core'
import '../product-image-slider/product-images.css'
import styles from './style'
import './pricing.css'

export default function Pricing(props) {
    const classes = styles();
    let path = window.location.pathname.split('/').pop();
    return (
        <div>
            {
                props.title ?
                    <Typography
                        // variant="caption"
                        // component="div"
                        className={`pricing  ${props.title != null & props.title !== '' ? '' : 'shine'} ${path == 'stylori' && 'pricingTitle'}`}
                    >
                        {/* Dazzling Gold Bloom Diamond Pendant */}
                        {props.title}
                    </Typography>
                    :
                    ""
            }
            {/*  */}
            <Grid spacing={12} container lg={12} xs={12}>
                <Grid item lg={window.location.pathname !== "/cart" && window.location.pathname.split("-")[0] !== "/account" && window.location.pathname !== "/checkout" ? 6 : 6} 
                xs={window.innerWidth < 330 ? 12 : 6}>
                    {props.offerPrice ?
                        <Typography style={{ display: "flex", width: '100%' }}>
                            <Typography
                                variant="h6"
                                component="h6"
                                className={`${props.offerPrice != null & props.offerPrice !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.h6FontSize} ${classes.offerPricePadding} `}
                            >
                                {/* ₹&nbsp;{props.offerPrice} */}
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(props.offerPrice))}
                            </Typography>
                        </Typography> : ""} 
                </Grid>   
                <Grid item  xs={6} >
                    <Grid spacing={12} container  xs={12} class="leftPadding">
                        <Grid item  xs={12}>
                            {props.price ?
                                <Typography style={{ display: "flex", width: '100%' }}>
                                    <Typography
                                        // variant="caption"
                                        className={`pricing-p${props.price != null & props.price !== '' ? '' : 'shine'} ${classes.deletePrice} ${classes.dis}`}
                                    // component="p"
                                    >
                                        <del>₹&nbsp;{Math.round(props.price)}</del>
                                    </Typography>
                                </Typography> : ""}
                        </Grid>
                        <Grid item  xs={12}>
                            <Hidden smDown>
                                {
                                    props.offerDiscount ?
                                        <span className={`discount ${classes.backgsecondary} ${classes.off}`}>{props.offerDiscount}</span>
                                        :

                                        <Typography style={{ display: "flex" }}>
                                            <Typography
                                                variant="caption"
                                                component="p"
                                                className={`${props.save != null & props.save !== '' ? '' : 'shine'} ${classes.colorMain}  `}
                                            >
                                                {path === 'stylori' && 'You save'} {props.save}
                                            </Typography>
                                        </Typography>
                                }
                            </Hidden>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            {/*  */}


        </div>
    )
}
