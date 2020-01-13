import React from 'react';

import { Grid, Button, Hidden, Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import googlePlaystore from '../../assets/iconsPlayStore.png'
import visa from '../../assets/visa.jpg'
import mastercard from '../../assets/mastercard.gif'
import AmericanExpress from '../../assets/American-Express.png'
import DinersClub from '../../assets/Diners-Club.jpg'
import Netbanking from '../../assets/mouse.png'
import cartoonFooter from '../../assets/cartoonFooter.png'
import './Footer.css'
import { pointer } from 'popmotion';
import styloriLogo from "../../assets/Stylorilogo.svg"

const useStyles = makeStyles(theme => ({
    navTitle: {
        cursor: "pointer",
        margin: "0 0 10px",
        padding: "0px 15px",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    colorMain: {
        backgroundColor: theme.palette.secondary.main,

    },
    colorWhiteBackground: {
        backgroundColor: theme.palette.common.white,

    },
    colorWhite: {
        color: theme.palette.common.white,
        fontSize: '12px',
    },
    colorBlue: {
        color: theme.palette.primary.main
    },
    paddingSpace: {
        padding: '3%',
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        },
    },
    buynowSearch: {
        color: theme.palette.primary.main,
        fontSize: '13px',
        width: '100%',
        height: '34px',
        border: '1px solid #ccc',
        borderRadius: '0',
        padding: '0px 3px',
    },

    searchButtonFooter: {
        border: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: '10px',
        borderRadius: '0',
        height: '36px',
        width: '100%',
        fontWeight: '400',
        lineHeight: '1.42857143',
        textTransform: 'none',
    },
    spanSizeColor: {
        color: '#808080',
        fontSize: '12px'
    },
    colorWhiteBorder: {
        border: `1px solid ${theme.palette.common.white}`
    }
}));


export default function Footer(props) {
    const silver = props.silver
    const classes = useStyles();
    const footerData = [
        {
            url: "aboutus",
            Title: "About Stylori"
        },
        {
            url: "/account-profile",
            Title: "My Account"
        },
        {
            url: "/productcare",
            Title: "Product Care"
        },
        {
            url: "",
            Title: "Careers"
        },
        {
            url: "/faqs",
            Title: "Frequently Asked Questions"
        },
        {
            url: "/privacypolicy",
            Title: "Privacy & Cookie Policy"
        },
        {
            url: "",
            Title: "Contact Us"
        },
        {
            url: "/deliveryreturns",
            Title: "Shopping & Returns"
        },
        {
            url: "/termsconditions",
            Title: "Terms & Conditions"
        },
    ]
    const footerData1 = [
        {
            url: "/aboutus",
            Title: "About Stylori"
        },
        {
            url: "",
            Title: "Careers"
        },

        {
            url: "",
            Title: "Contact Us"
        },

    ]
    const footerData2 = [
        {
            url: "/account-profile",
            Title: "My Account"
        },
        {
            url: "/faqs",
            Title: "Frequently Asked Questions"
        },
        {
            url: "/deliveryreturns",
            Title: "Shopping & Returns"
        },
    ]
    const footerData3 = [
        {
            url: "/productcare",
            Title: "Product Care"
        },
        {
            url: "/privacypolicy",
            Title: "Privacy & Cookie Policy"
        },
        {
            url: "/termsconditions",
            Title: "Terms & Conditions"
        },
    ]

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: '0' }}
        >

            {/* footer pink color starts */}
            {silver ? "" : <>
                <Grid container item style={{ marginBottom: '-5.5%', zIndex: '4' }}>
                    <Grid item xs="12" >
                        <img src={cartoonFooter} width="100%" height="auto" alt="noImage" />
                    </Grid>
                </Grid></>}

            <Grid container item className={`${classes.colorMain} ${classes.paddingSpace} ${classes.colorWhite}`} xs={12}

            >

                <Grid container item xl={4} lg={4} md={4} xs={12} sm={5}>
                    <Grid item style={{ textAlign: 'left', paddingTop: '9%', paddingLeft: '2%' }}>
                        Join the Stylori mailing list to stay up to date on the
                        most exciting offers on your favourite jewellery collections
                    </Grid>
                    {/* Hidden */}
                    <Hidden only={['sm', 'xs']}>
                        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={6} xl={8} lg={8} md={8} >
                                <input
                                    placeholder='Email address...'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} xs={4}>
                                <Button className={`${classes.searchButtonFooter}`}>Stay Informed</Button>
                            </Grid>
                        </Grid>

                    </Hidden>
                    {/* Hidden */}
                </Grid>

                {/* mobile */}
                <Hidden only={['lg', 'xl', 'md']} >
                    <Grid container item xl={4} lg={4} md={4} xs={12} sm={4} style={{ padding: '3%' }}>
                        <Grid container style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Grid item xs={6} xl={8} lg={8} md={8} sm={8}>
                                <input
                                    placeholder='Email address...'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item sm={4} xs={3} xl={4} lg={4} md={4}>
                                <Button className={`${classes.searchButtonFooter}`}>Stay Informed</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                    {/* listing starts */}


                    <Grid container item xl={5} lg={5} md={5} xs={12} sm={12}>
                        <Grid container item xs={12} style={{ backgroundColor: 'colorMain', fontSize: '13px', padding: '2%' }} className={`${classes.colorWhiteBorder} ${classes.colorWhite}`}>
                            {

                                footerData.map(data => {
                                    return (
                                        <Grid item xs={6} sm={6} style={{ padding: '1% 10px 0px 0px ' }} onClick={() => { window.location.href = data.url }} href="#">
                                            {data.Title}
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                    {/* listing ends */}

                </Hidden>
                {/*  */}
                <Hidden only={['sm', 'xs']}>
                    <Grid container direction="row" item xl={4} lg={4} md={4} xs={12} sm={6} style={{ padding: '3%' }}>
                        {/* <Hidden only={['sm', 'xs']}>
                            <Grid container item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid item xs={6}  >
                                    Get the Stylori app and stay mobile.
                                    Available on Android.
                    </Grid>
                            </Grid>
                        </Hidden> */}
                        <Grid container item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                {/* <img src={googlePlaystore} className={`${classes.colorMain}`} alt="" /> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden only={['sm', 'xs']}>
                    <Grid container direction="row" item xl={4} lg={4} md={4} xs={12} sm={6} style={{ padding: '3%' }}>

                        <Grid container item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Grid item xs={9}  >
                                Stay social with Stylori.
                                We promise we won’t bore you.
                    </Grid>
                        </Grid>

                        <Grid container item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "10px" }} className="footer-icons">
                            <Grid item xs={9}>
                                <a class="twitter" target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: 'white', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                                <a class="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                    <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf09a;</i></a>
                                <a class="facebook" target="_blank" href="https://plus.google.com/+Stylori">
                                    <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf0d5;</i></a>
                                <a class="facebook" target="_blank" href="https://in.pinterest.com/stylori2015/">
                                    <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf231;</i></a>
                                <a class="facebook" target="_blank" href="https://instagram.com/stylorilove">
                                    <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf16d;</i></a>
                                <a class="facebook" target="_blank" href="https://www.youtube.com/c/stylori">
                                    <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf167;</i></a>
                            </Grid>
                        </Grid>
                    </Grid>

                </Hidden>



            </Grid>


            <Hidden only={['lg', 'xl', 'md']}>

                {/*  */}
                {/*  */}
                {/*  */}
                <Grid container item xs={12} className={`${classes.colorWhite} ${classes.colorMain} ${classes.colorWhiteBorder}`} style={{ display: 'flex', justifyContent: 'left', padding: '5%' }}>
                    <Grid item xs={12}  >
                        Stay social with Stylori.
                        We promise we won’t bore you.
</Grid>
                    <Grid item xs={12} sm={6} className="footer-icons">

                        <a class="twitter" target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                        <a class="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf09a;</i></a>
                        <a class="facebook" target="_blank" href="https://plus.google.com/+Stylori">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf0d5;</i></a>
                        <a class="facebook" target="_blank" href="https://in.pinterest.com/stylori2015/">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf231;</i></a>
                        <a class="facebook" target="_blank" href="https://instagram.com/stylorilove">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf16d;</i></a>
                        <a class="facebook" target="_blank" href="https://www.youtube.com/c/stylori">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf167;</i></a>
                    </Grid>
                </Grid>


            </Hidden>
            {/* footer pink color ends */}


            {/* footer color menuItems starts  */}
            <Container>
                <Grid container item className={`${classes.colorWhiteBackground}`} style={{ padding: '18px 1% 18px 1%' }}>
                    <Hidden only={['sm', 'xs']}>
                        <Grid container item xl={5} lg={5} md={5} xs={12} sm={6}>
                            <Grid container item xs={12} style={{ color: '#808080', fontSize: '13px' }}>
                                <Grid item xs={3}>
                                    {footerData1.map(data => {
                                        return (
                                            <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid item xs={5}>
                                    {footerData2.map(data => {
                                        return (
                                            <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid item xs={4}>
                                    {footerData3.map(data => {
                                        return (
                                            <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Hidden only={['sm', 'xs']}>

                        <Grid container item xl={4} lg={4} md={5} xs={12} sm={6}>
                            <Grid item xs={12} style={{ padding: '3% 0px 0px 20px', fontWeight: '500', fontSize: '12px', color: '#808080' }}>
                                Need Help?
                                </Grid>
                            <Grid item xs={12} className="footer-icons">
                                <a onClick={() => { window.location.href = "mailto: hello@stylori.com" }} >
                                    <i style={{ fontSize: '24px', textAlign: 'center', paddingLeft: '5%' }} className="fa">
                                        &#xf003;
                                    <br />
                                        <span className={classes.spanSizeColor}>
                                            hello@stylori.com
                                    </span>
                                    </i>
                                </a>
                                <i style={{ fontSize: '24px', textAlign: 'center', paddingLeft: '5%' }} className="fa">
                                    &#xf0e6;
                                    <br />
                                    <span className={classes.spanSizeColor}>
                                        chat
                                    </span>
                                </i>
                                <i style={{ fontSize: '24px', textAlign: 'center', paddingLeft: '5%' }} className="fa">
                                    &#xf095;
                                    <br />
                                    <span className={classes.spanSizeColor}>
                                        1800 102 0330
                                    </span>
                                </i>
                                <i style={{ fontSize: '24px', textAlign: 'center', paddingLeft: '5%' }} className="fa">
                                    &#xf232;
                                    <br />
                                    <span className={classes.spanSizeColor}>

                                        +91 99526 25252
                                    </span>
                                </i>

                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden only={['sm', 'xs']}>
                        <Grid container item xl={3} lg={3} md={2} xs={12} sm={6} style={{ paddingTop: '2%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Grid item xs={6} >
                                <div onClick={() => { window.location.href = "/home" }}>
                                    <img src={styloriLogo} alt="" style={{ width: "100%", cursor: "pointer" }} />
                                </div>
                                <div style={{ color: '#808080', fontSize: '11px' }}>Copyright © 2020 stylori.com</div>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
            <Hidden only={['md', 'lg', 'xl']}>
                <Grid container item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#808080', fontSize: '11px' }}>
                    Copyright © 2020 stylori.com
                            </Grid>
            </Hidden>
            {/* footer color menuItems ends  */}


            {/* visa Cards banking details starts */}
            <Grid container style={{ backgroundColor: '#a7a7aa', display: 'flex', justifyContent: 'center' }} >
                <Grid item container xs={12} sm={6} md={6} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center', padding: "10px 0px" }}>
                    <i style={{ fontSize: '33px', textAlign: 'center', paddingLeft: '3%', color: '#fff' }} className="fa">&#xf023;</i>
                    <img src={visa}
                        style={{ paddingLeft: "3%", width: '54px', height: "32px" }}
                        alt=""
                    />
                    <img src={mastercard}
                        style={{ paddingLeft: "3%", width: '50px', height: "32px" }}
                        alt=""
                    />
                    <img src={AmericanExpress}
                        style={{ paddingLeft: "3%", width: '30px', height: "32px" }}
                        alt=""
                    />
                    <img src={DinersClub}
                        style={{ paddingLeft: "3%", width: '30px', height: "32px" }}
                        alt=""
                    />
                    <img src={Netbanking}
                        style={{ paddingLeft: "3%", width: '30px', height: "32px" }}
                        alt=""
                    />
                    <div style={{ color: "#fff", fontSize: "0.8rem", paddingLeft: "4px" }}>NET<br /> BANKING</div>
                    <i class="fa fa-inr" style={{ fontSize: '30px', paddingLeft: "3%", color: "#fff", fontWeight: "normal" }} aria-hidden="true"></i>
                    <div style={{ color: "#fff", fontSize: "0.8rem", paddingLeft: "4px" }}>CASH ON<br /> DELIVERY</div>
                </Grid>
            </Grid>

            {/* visa Cards banking details ends */}
            <Hidden only={['sm', 'xs']}>

                <Grid container className={`${classes.colorWhiteBackground}`}>
                    <Container>
                        <Grid item xs={12}>
                            <Typography variant="caption" className={`${classes.colorBlue}`}>
                                POPULAR SEARCH TERMS:
                            </Typography>
                            <Typography style={{ fontSize: '10px', color: '#808080' }}>
                                Gold Jewellery , Gold Ring, Diamond Ring, Platinum Jewellery, Diamond Jewellery, Women’s Rings, Gold Earrings, Diamond Earrings, Platinum Earrings, Jhumkas Earrings, Studs Earrings, Drops Earrings, Huggies Earring, Diamond Pendants, Gold Pendants, Casual Pendants, Fashion Pendants, Traditional Pendants, Modern Pendants, Office Pendants, Diamond Nose Pins, Gold Nose Pins, Ear Cuff Earrings, Engagement Rings, Couple Bands, Gold Bangles, Diamond Bangles, Classic Bangles, Oval Bangles, Bracelets, Diamond Bracelets, Gold Bracelets
                            </Typography>
                        </Grid>
                    </Container>
                </Grid>

            </Hidden>
        </Grid>
    );

}
