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
import { API_URL } from 'config'
import { SnackBar } from 'components/snackbarAlert/SnackBar'
const useStyles = makeStyles(theme => ({
    navTitle: {
        cursor: "pointer",
        padding: "7px 0px 6px 0px",
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
        color: theme.palette.primary.main,
        fontSize: "11px",
        padding: "0px 0px 10px 0px"
    },
    paddingSpace: {
        padding: '1% 2%',
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        },
    },
    buynowSearch: {
        color: theme.palette.primary.main,
        fontSize: '13px',
        // width: '100%',
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
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '12px',
        },
    },
    spanSizeColor: {
        color: '#808080',
        fontSize: '12px'
    },
    colorWhiteBorder: {
        borderTop: `1px solid ${theme.palette.common.white}`
    },
    topConatinerfooter: {
        color: theme.palette.common.white,
        fontSize: '12px',
        lineHeight: "16px",
        backgroundColor: theme.palette.secondary.main,
        padding: '3% 0px 2% 0px',
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
        },
        [theme.breakpoints.up('sm')]: {
            width: "750px",
            fontSize: '12px',
        },
        [theme.breakpoints.up('md')]: {
            width: "970px",
            fontSize: '13px',
            lineHeight: "19px",
        },
        [theme.breakpoints.up('lg')]: {
            width: "1170px",
            fontSize: '13px',
            lineHeight: "19px",
        }
    },
    buttonConatiner: {
        // display: 'flex',
        // justifyContent: 'center',
        width: "350px",
        flexGrow: 1
    },
    messageconatainer: {
        padding: "15px 15px 15px 15px",
        [theme.breakpoints.up('sm')]: {
            padding: "30px 15px 15px 15px"
        }
    }

}));


export default function Footer(props) {
    const {silver} = props
    const [state, setState] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [stateClassname, setStateClassname] = React.useState('snackBar')

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
            url: "/privacypolicy",
            Title: "Privacy & Cookie Policy"
        },
        {
            url: "/faqs",
            Title: "FAQ"
        },

        {
            url: "/deliveryreturns",
            Title: "Shipping & Returns"
        },
        {
            url: "/contactus",
            Title: "Contact us"
        },
        {
            url: "/termsconditions",
            Title: "Terms & Conditions"
        },
        {
            url: "/careers",
            Title: "Careers"
        },

    ]
    const footerData1 = [
        {
            url: "/aboutus",
            Title: "About Stylori"
        },
        // {
        //     url: "",
        //     Title: "Careers"
        // },

        // {
        //     url: "",
        //     Title: "Contact Us"
        // },
        {
            url: "/account-profile",
            Title: "My Account"
        },
        {
            url: "/productcare",
            Title: "Product Care"
        },
        // {
        //     url: "/deliveryreturns",
        //     Title: "Shopping & Returns"
        // },


    ]
    const footerData2 = [
        // {
        //     url: "/account-profile",
        //     Title: "My Account"
        // },
        // {
        //     url: "/faqs",
        //     Title: "Frequently Asked Questions"
        // },
        {
            url: "/faqs",
            Title: "Frequently Asked Questions"
        },
        {
            url: "/deliveryreturns",
            Title: "Shipping & Returns"
        },
        {
            url: "/privacypolicy",
            Title: "Privacy & Cookie Policy"
        },
    ]
    const footerData3 = [
        // {
        //     url: "/productcare",
        //     Title: "Product Care"
        // },
        // {
        //     url: "/privacypolicy",
        //     Title: "Privacy & Cookie Policy"
        // },
        {
            url: "/termsconditions",
            Title: "Terms & Conditions"
        },
        {
            url: "/contactus",
            Title: "Contact us"
        },
        {
            url: "/careers",
            Title: "Careers"
        },
    ]

    const status = (response) => {

        if ((response.status >= 200 && response.status < 300) || response.status === 409) {
            if (response.status === 409) setStateClassname('snackBarError')
            else setStateClassname('snackBar')
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    const json = (response) => {
        return response.json()
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleChage = (e) => {
        setState(e.target.value)
        var element = document.getElementById('_button');
        var element_input = document.getElementById('_input');
        element_input.classList.remove('error');
        element.classList.remove('error');
    }
    const handleEmail = (e) => {

        var element = document.getElementById('_button');
        var element_input = document.getElementById('_input');
        element_input.classList.remove('error');
        element.classList.remove('error');
        var emailvld = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!document.getElementById("_input").value.length > 0) {
            element_input.classList.add('error');
            element.classList.add('error');
            return
        }
        else if (!Boolean(document.getElementById("_input").value.match(emailvld))) {
            element_input.classList.add('error');
            element.classList.add('error');
            return
        }

        else if (document.getElementById("_input").value.length > 0 && document.getElementById("_input").value.match(emailvld)) {
            fetch(`${API_URL}/addemailsubscription`, {

                method: 'post',
                // body: {query:seoUrlResult,variables:splitHiphen()}
                // body: JSON.stringify({query:seoUrlResult}),

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: state
                })
            })
                .then(status)
                .then(json).then(async val => {

                    setMessage(val.message)
                    setOpen(true)
                })

        }


    }
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: '0' }}
        >

            {silver ? "" : <>
                <Grid container item style={{ marginBottom: '-5.5%', zIndex: 12 }}>
                    <Grid item xs="12" >
                        <img src={cartoonFooter} width="100%" height="auto" alt="noImage" />
                    </Grid>
                </Grid></>}

          {!silver &&  <Hidden only={['sm', 'xs']}>
                <Grid container item className={classes.topConatinerfooter} xs={12} >
                    <Container>
                        <Grid container>
                            <Grid container item className={classes.buttonConatiner}>
                                <Grid item style={{ textAlign: 'left' }}>
                                    Join the Stylori mailing list to stay up to date on the <br />
                                    most exciting offers on your favourite jewellery collections
                            <Grid container style={{ padding: "10px 0px 0px 0px " }}>
                                        <Grid item style={{ width: "300px" }}>
                                            <input
                                                value={state}
                                                id="_input"
                                                style={{ width: "300px" }}
                                                type="email"
                                                onInvalid={(e) => { e.preventDefault() }}
                                                onChange={(e) => handleChage(e)}
                                                placeholder='Email address'
                                                className={`${classes.buynowSearch}`}
                                            />

                                        </Grid>
                                        <Grid item>
                                            <Button type="submit" id="_button" className={`${classes.searchButtonFooter}`} onClick={(e) => { return handleEmail(e) }}>Stay Informed</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item>
                                <Grid container>
                                    <Grid item container justify="flex-end" style={{ textAlign: "end", }}>
                                        Stay social with Stylori.<br />
                                        We promise we won’t bore you.
                            </Grid>
                                    <Grid item container style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: "10px" }} className="footer-icons">
                                        <Grid item style={{ width: "100%", textAlign: "end" }}>
                                            <a class="twitter" style={{ textDecoration: "none" }} target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                                            <a class="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf09a;</i></a>
                                            <a class="facebook" target="_blank" href="https://in.pinterest.com/stylori2015/">
                                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf231;</i></a>
                                            <a class="facebook" target="_blank" href="https://instagram.com/stylorilove">
                                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf16d;</i></a>
                                            <a class="facebook" target="_blank" href="https://www.youtube.com/c/stylori">
                                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%' }} className="fa ">&#xf167;</i></a>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Hidden>}


            <Hidden only={['lg', 'xl', 'md']} >
                <Grid container item className={classes.topConatinerfooter} xs={12} >
                   {!silver && <Grid container className={classes.messageconatainer}>
                        <Grid item style={{ textAlign: 'left' }}>
                            Join the Stylori mailing list to stay up to date on the <br />
                            most exciting offers on your favourite jewellery collections
                            </Grid>
                        <Grid container style={{ display: 'flex', justifyContent: 'flex-start', padding: "6px 0px 0px 0px" }}>
                            <Grid item >
                                <input
                                    value={state}
                                    id="_input"
                                    type="email"
                                    onInvalid={(e) => { e.preventDefault() }}
                                    // ref={this._inputRef}
                                    onChange={(e) => handleChage(e)}
                                    placeholder='Email address'
                                    className={`${classes.buynowSearch}`}
                                />
                            </Grid>
                            <Grid item >
                                <Button type="submit" id="_button" className={`${classes.searchButtonFooter}`} onClick={(e) => handleEmail(e)}>Stay Informed</Button>
                            </Grid>
                        </Grid>
                    </Grid>}

                    <Grid container item xl={5} lg={5} md={5} xs={12} sm={12}>
                        <Grid container item xs={12} style={{ backgroundColor: 'colorMain', fontSize: '12px', padding: '15px' }} alignItems="center" className={`${classes.colorWhiteBorder} ${classes.colorWhite}`}>
                            {

                                footerData.map(data => {
                                    return (
                                        <Grid item xs={6} sm={6} style={{ padding: '2px 0px' }} onClick={() => { window.location.href = data.url }} href="#">
                                            {data.Title}
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
           {!silver && <Hidden only={['lg', 'xl', 'md']}>

                <Grid container item xs={12} className={`${classes.colorWhite} ${classes.colorMain} ${classes.colorWhiteBorder}`} style={{ display: 'flex', justifyContent: 'left', padding: '15px', lineHeight: "16px" }}>
                    <Grid item xs={12}  >
                        Stay social with Stylori.<br />
                        We promise we won’t bore you.
                    </Grid>
                    <Grid item xs={12} sm={6} className="footer-icons" style={{ paddingTop: "6px" }}>

                        <a class="twitter" style={{ textDecoration: "none" }} target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '3px', }} className="fa">&#xf099;</i> </a>
                        <a class="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '7%' }} className="fa ">&#xf09a;</i></a>
                        <a class="facebook" target="_blank" href="https://in.pinterest.com/stylori2015/">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '7%' }} className="fa ">&#xf231;</i></a>
                        <a class="facebook" target="_blank" href="https://instagram.com/stylorilove">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '7%' }} className="fa ">&#xf16d;</i></a>
                        <a class="facebook" target="_blank" href="https://www.youtube.com/c/stylori">
                            <i style={{ fontSize: '24px', color: 'white', paddingLeft: '7%' }} className="fa ">&#xf167;</i></a>
                    </Grid>
                </Grid>
            </Hidden>}

            <Container>
                <Hidden only={['sm', 'xs']}>

                    <Grid container item className={`${classes.colorWhiteBackground}`} style={{ padding: '15px 0px 15px 0px' }}>
                        <Grid container item xl={5} lg={5} md={5} xs={12} sm={6} alignItems="center">
                            <Grid container item xs={12} style={{ color: '#808080', fontSize: '13px' }}>
                                <Grid item xs={3}>
                                    {footerData1.map(data => {
                                        return (
                                            <>{localStorage.getItem("true") ? <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                {data.Title}
                                            </Grid> :
                                                <Grid container className={classes.navTitle} onClick={() => { window.location.href = data.url }} href="#">
                                                    {data.Title}
                                                </Grid>
                                            }</ >

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
                        {/* </Hidden>

                    <Hidden only={['sm', 'xs']}> */}

                        <Grid container item xl={4} lg={4} md={5} xs={12} sm={6} alignItems="center" >
                            <Grid item xs={12} style={{ padding: '0px 0px 0px 14px', fontWeight: '600', fontSize: '12px', color: '#808080', letterSpacing: "0.8px" }}>
                                Need Help?
                                </Grid>
                            <Grid container item xs={12} className="footer-icons">
                                <Grid class="contantf" onClick={() => { window.location.href = "mailto: hello@stylori.com" }} >
                                    <i class="iTags fa" >
                                        &#xf003;
                                   </i>
                                    <span className={classes.spanSizeColor}>
                                        hello@stylori.com
                                    </span>
                                </Grid>
                                <Grid class="contantf" >
                                    <i class="iTags fa" >
                                        &#xf0e6;
                                </i>
                                    <span className={classes.spanSizeColor}>
                                        chat
                                    </span>
                                </Grid>
                                <Grid class="contantf" > <i class="iTags fa" >
                                    &#xf095;
                                </i>
                                    <span className={classes.spanSizeColor}>
                                        1800 102 0330
                                    </span>
                                </Grid>
                                <Grid class="contantf" ><i class="iTags fa" >
                                    &#xf232;
                                </i>
                                    <span className={classes.spanSizeColor}>
                                        +91 99526 25252
                                    </span>
                                </Grid>

                            </Grid>
                        </Grid>
                        {/* </Hidden>
                    <Hidden only={['sm', 'xs']}> */}
                        <Grid container item xl={3} lg={3} md={2} xs={12} sm={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: "flex-start" }}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <div onClick={() => { window.location.href = window.location.origin }}>
                                    <img src={styloriLogo} alt="" style={{ width: "100%", cursor: "pointer" }} />
                                </div>
                                <div style={{ color: '#808080', fontSize: '11px', justifyContent: "center", display: "flex" }}>Copyright © 2020 stylori.com</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>

            </Container>
            <Hidden only={['md', 'lg', 'xl']}>
                <Grid container item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#808080', fontSize: '11px', padding: "8px 0px" }}>
                    Copyright © 2020 stylori.com
                            </Grid>
            </Hidden>
            <Grid container style={{ backgroundColor: '#a7a7aa', display: 'flex', justifyContent: 'center', padding: "10px 15px" }} >
                <Hidden mdUp>
                    <Grid container style={{ marginBottom: "10px" }}>
                        <Grid container item xs={4} justify="flex-start">
                            <span className="lockSymbol"></span>
                        </Grid>
                        <Grid container item xs={4} justify="center">
                            <span className="netbank"></span>
                        </Grid>
                        <Grid container item xs={4} justify="flex-end">
                            <span className="cashBack"></span>
                        </Grid>
                    </Grid>

                    <Grid container item xs={3} justify="flex-start">
                        <span className="visacard"></span>
                    </Grid>
                    <Grid container item xs={3} justify="center">
                        <span className="mastercard"></span>
                    </Grid>
                    <Grid container item xs={3} justify="center">
                        <span className="americanexp"></span>
                    </Grid>
                    <Grid container item xs={3} justify="flex-end">
                        <span className="dinerClubs"></span>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid container justify="center">
                        <Grid item md={6} lg={6} xl={6} >
                            <Grid container justify="center">
                                <span className="breathspace lockSymbol"></span>
                                <span className="breathspace visacard"></span>
                                <span className="breathspace mastercard"></span>
                                <span className="breathspace americanexp"></span>
                                <span className="breathspace dinerClubs"></span>
                                <span className="breathspace netbank"></span>
                                <span className="breathspace cashBack"></span>
                            </Grid>
                        </Grid>
                    </Grid>

                </Hidden>
            </Grid>

            <Hidden only={['sm', 'xs']}>

                <Grid container className={`${classes.colorWhiteBackground}`}>
                    <Container>
                        <Grid item xs={12} style={{ padding: "15px 0px 15px 0px" }}>
                            <Typography className={`${classes.colorBlue}`}>
                                POPULAR SEARCH TERMS:
                            </Typography>
                            <Typography style={{ fontSize: '11px', color: '#808080' }}>
                                Gold Jewellery , Gold Ring, Diamond Ring, Platinum Jewellery, Diamond Jewellery, Women’s Rings, Gold Earrings, Diamond Earrings, Platinum Earrings, Jhumkas Earrings, Studs Earrings, Drops Earrings, Huggies Earring, Diamond Pendants, Gold Pendants, Casual Pendants, Fashion Pendants, Traditional Pendants, Modern Pendants, Office Pendants, Diamond Nose Pins, Gold Nose Pins, Ear Cuff Earrings, Engagement Rings, Couple Bands, Gold Bangles, Diamond Bangles, Classic Bangles, Oval Bangles, Bracelets, Diamond Bracelets, Gold Bracelets
                            </Typography>
                        </Grid>
                    </Container>
                </Grid>

            </Hidden>

            <SnackBar handleClose={handleClose} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
                classNameCloseIcon={'closeIcon'}
                classNames={stateClassname} message={message} open={open} />
        </Grid>
    );

}
