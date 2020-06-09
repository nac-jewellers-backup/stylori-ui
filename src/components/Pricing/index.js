import React from 'react'
import { Typography, Grid, Hidden } from '@material-ui/core'
import '../product-image-slider/product-images.css'
import styles from './style'
import './pricing.css'

export default function Pricing(props) {
    const classes = styles();
    let path = window.location.pathname.split('/').pop();
    const {globalContext} = props
    
    const isSilver = globalContext && globalContext.pathName ? true : false
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
            <Grid spacing={12} style={{ padding:isSilver ?  0  :   "0px 8px" }} container lg={12}>

                {/* <Grid item xs={12}lg={12} >
                    <Grid spacing={12} container xs={12} lg={12} class="leftPadding"> */}
                {window.location.pathname !== "/cart" && window.location.pathname.split("-")[0] !== "/account" && window.location.pathname !== "/checkout" ?
                    <Grid container>
                        <Grid item >
                            {props.offerPrice ?
                                <Typography style={{ display: "flex", width: '100%' }}>
                                    <Typography
                                        className={`${props.offerPrice != null & props.offerPrice !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.h6FontSize} ${classes.offerPricePadding} ${isSilver ? classes.pricesilver : ''}`}
                                    >
                                        {/* ₹&nbsp;{props.offerPrice} */}
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(props.offerPrice))}
                                    </Typography>
                                </Typography> : ""}
                        </Grid>
                        <Grid item style={{ display: "flex", alignItems: "center" }} className={classes.alignval}>
                            {props.price ?
                                <Typography style={{ display: "flex", width: '100%' }} className={classes.resetpadd}>
                                    <Typography style={{ fontSize: "0.9rem" }}
                                        className={`pricing-p${props.price != null & props.price !== '' ? '' : 'shine'} ${classes.deletePrice} ${classes.dis}`}
                                    >
                                        {props.offerPrice === props.price ? "" : <del>₹&nbsp;{Math.round(props.price)}</del>}
                                    </Typography>
                                </Typography> : ""}
                        </Grid></Grid>
                    :
                    <>
                        <Grid item
                            xs={12}
                            lg={window.location.pathname !== "/cart" && window.location.pathname.split("-")[0] !== "/account" && window.location.pathname !== "/checkout" ? 2 : 12}>
                            {props.price ?
                                <Typography style={{ display: "flex", width: '100%' }}>
                                    <Typography
                                        // variant="caption"
                                        className={`pricing-p${props.price != null & props.price !== '' ? '' : 'shine'} ${classes.deletePrice} ${classes.dis}`}
                                    // component="p"
                                    >
                                        {props.offerPrice === props.price ? "" : <del>₹&nbsp;{Math.round(props.price)}</del>}
                                    </Typography>
                                </Typography> : ""}
                        </Grid>
                        <Grid item xs={12}
                            xs={window.location.pathname !== "/cart" && window.location.pathname.split("-")[0] !== "/account" && window.location.pathname !== "/checkout" ? 6 : 12}
                        >
                            {props.offerPrice ?
                                <Typography style={{ display: "flex", width: '100%' }}>
                                    <Typography
                                        // variant="h6"
                                        // component="h6"
                                        className={`${props.offerPrice != null & props.offerPrice !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.h6FontSize} ${classes.offerPricePadding} `}
                                    >
                                        {/* ₹&nbsp;{props.offerPrice} */}
                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(props.offerPrice))}
                                    </Typography>
                                </Typography> : ""}
                        </Grid></>
                }

                <Grid item xs={12}
                    lg={window.location.pathname.split("-")[0] !== "/account" && window.location.pathname !== "/cart" && window.location.pathname.split("-")[1] !== "allorders" ? 6 : 6} style={{ display: "flex", alignItems: "normal" }}>
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
                    {/* </Grid>

                    </Grid> */}
                </Grid>
            </Grid>

            {/*  */}


        </div>
    )
}
