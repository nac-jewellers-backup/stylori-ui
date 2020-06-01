import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography, Button } from '@material-ui/core';
import Slideshow from '../../components/Carousel/carosul'
import '../Testimony/Testimony.css';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: "#fff",
        width: "100%",
        padding: "0px 15px 0px 15px"


    },
    [theme.breakpoints.up('lg')]: {
        root: {
            width: "1170px !important",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "0px 15px 0px 15px"

        }
    },
    [theme.breakpoints.down('sm')]: {
        containerRoot: {
            width: "100%",
            backgroundImage: "none !important",
            boxShadow: "0 0 5px #888 !important",
        },

    },
    containerRoot: {
        width: "100%",
        backgroundImage: "url(https://assets.stylori.com/images/static/home/box_bg.png)",
        boxShadow: "0 0 5px #888 !important",

    },
    imgleft: {
        backgroundImage: "url(https://assets.stylori.com/images/static/home/slider_icon.png) !important",
        backgroundPosition: "-27px -42px !important",
        width: "40px !important",
        height: "50px !important",
        backgroundRepeat: "no-repeat !important",
        float: "left",
        backgroundColor: "#fff",
        borderLeft: " 0px"
    },
    imgRight: {
        backgroundImage: "url(https://assets.stylori.com/images/static/home/slider_icon.png) !important",
        backgroundPosition: "-155px -42px !important",
        width: "40px !important",
        height: " 50px !important",
        backgroundRepeat: 'no-repeat !important',
        float: 'right',
        backgroundColor: '#fff',
        borderRight: '0px'
    },
    imgleftGrid: {
        display: "flex",
        marginTop: "12%",

    },
    smleftGrid: {
        width: "5%"
    },
    leftIc: {
        backgroundPosition: '-16px -21px !important',
        width: '15px!important',
        height: '20px!important',
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important',
        borderLeft: '1px solid #ccc',
        marginLeft: '-8px!important',
        verticalAlign: "text-top",
        backgroundColor: '#fff',
        position: 'relative',
        top: '50%',
        zIndex: 5
    },
    rightIc: {
        backgroundPosition: '-65px -21px !important',
        width: '15px !important',
        height: '20px !important',
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important',
        borderRight: '1px solid #ccc',
        marginRight: '-8px !important',
        float: 'right',
        backgroundColor: '#fff',
        position: 'relative',
        top: '50%',
        zIndex: 5

    },
    container: {
        display: 'flex !important'
    },
    imgRightGrid: {
        marginTop: "12%",
    },
    testimonialRight: {
        width: "25%", padding: "6px 15px 20px 6px"
    },
    testimonyTitle: {
        display: "flex",
        justifyContent: " center",
        alignContent: 'center',
        minHeight: "40px",
        color: "#394578",
        fontWeight: '500',
        fontSize: "13px",
        marginBottom: '0px',
        lineHeight: '20px !important',
        marginTop: '10px'
    },
    imgcoin: {
        width: "100%",
        // cursor: "pointer"
    },
    imgcoinsm: {
        width: "100%"
    },
    Button: {
        fontSize: '12px',
        backgroundColor: '#394578',
        /* margin-top: 18px !important; */
        marginTop: '8px !important',
        color: '#fff',
        borderFadius: '0px',
        padding: '7px 15px',
        borderColor: '#ccc',
    },
    exclIcon: {
        backgroundImage: 'url(https://assets.stylori.com/images/static/home/Testimonial_icons.png)',
        backgroundPosition: '-24px -45px',
        width: '38px',
        height: '37px',
        backgroundRepeat: 'no-repeat',
        float: 'left',
        marginTop: '60px',
        marginLeft: '60px'
    },
    testimonialInner: {
        color: '#666666',
        fontSize: '13px',
        lineHeight: '30px',
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        padding: "0px 0px 20px 0px"

    }, textInner: {
        color: '#666666',
        fontSize: '13px',
        lineHeight: '30px',
        maxHeight: "140px ",
        overflow: "hidden",
        padding: "0px 15px 0px 0px"
    },
    name: {
        fontSize: '16px',
        fontWeight: 600,
        color: "#394578"
    },
    namecountry: {
        fontSize: "13px",
        color: "#394578"
    },
    excliconright: {
        backgroundImage: 'url(https://assets.stylori.com/images/static/home/Testimonial_icons.png)',
        backgroundPosition: '-82px -45px',
        width: '38px',
        height: '37px',
        backgroundRepeat: 'no-repeat',
        float: 'right',
        marginRight: '50px'
    },
    titleTypo: {
        fontWeight: 600,
        color: "rgb(57, 69, 120)",
        fontSize: '22px',
        lineHeight: 1.1
    },
    Titlehead: {
        margin: "20px 0px 10px 0px",
        justifyContent: "center",
        display: "flex"
    }


}));



export default function ImageGridList(props) {
    const classes = useStyles();
    const slider = React.createRef();
    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }
    return (
        <Grid container className={classes.root}>
            <Hidden smDown>
                <Grid item className={classes.containerRoot}>
                    <Grid container className={classes.container}>
                        <Grid item style={{ width: "3%" }} className={classes.imgleftGrid}>
                            <img onClick={() => previous()} className={classes.imgleft} />
                        </Grid>
                        <Grid item style={{ width: "94%", padding: "0px 15px" }}  >
                            <Slideshow dataCarousel={props.dataCarousel} sliderRef={slider}>
                                {props.carosolData.map((val, index) => <>
                                    <Grid item className={classes.Titlehead}>
                                        <Typography variant="h3" className={classes.titleTypo}>{val.title}
                                        </Typography>
                                    </Grid>
                                    <Grid container>
                                        <Grid item item xs={12} alignItems="center">
                                            <Grid container>
                                                <Grid item className={classes.testimonialRight}>
                                                    <Grid item >
                                                        {/* <a href={val.navigateUrl}> */}
                                                        <img className={classes.imgcoin} src={val.image} />
                                                        {/* </a> */}
                                                    </Grid>
                                                </Grid>
                                                <Grid item style={{ width: "75%" }} className={classes.testimonialInner}>
                                                    <Grid item >
                                                        <Typography className={classes.textInner}>{val.cardContent}
                                                        </Typography>
                                                        {/* <a href={val.navigateUrl} style={{ fontSize: "12px", color: '#a77e6c' }} href="">Read more</a> */}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>)}
                            </Slideshow>
                        </Grid>
                        <Grid item style={{ width: "3%" }} className={classes.imgRightGrid}>
                            <img onClick={() => next()} className={classes.imgRight} />
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item className={classes.containerRoot}>
                    <Grid container className={classes.container}>
                        <Grid item className={classes.smleftGrid}>
                            <img onClick={() => previous()} className={classes.leftIc} />
                        </Grid>
                        <Grid item style={{ marginBottom: "15px", width: "89%" }}>
                            <Grid container justify="center">
                                <Grid item item xs={12} md={3} lg={3} sm={6} xs={12} alignItems="center">
                                    <Slideshow dataCarousel={props.dataCarousel} sliderRef={slider}>
                                        {props.carosolData.map((val, index) => <>
                                            <Grid container justify="center">
                                                <Typography style={{ textAlign: "center" }} className={classes.testimonyTitle}>
                                                    {val.title}
                                                </Typography>
                                                <Grid container>
                                                    <Grid item style={{ textAlign: 'center' }}>
                                                        {/* <a href={val.navigateUrl}> */}
                                                        <img className={classes.imgcoinsm} src={val.image} />
                                                        {/* </a> */}
                                                    </Grid>
                                                    <Grid item >
                                                        <Grid>
                                                            <Typography style={{ fontSize: "12px", color: "rgb(102, 102, 102)", marginTop: "10px", height: "70px", overflow: "hidden" }}>
                                                                {val.cardContent}
                                                            </Typography>
                                                        </Grid>
                                                        {/* <a href={val.navigateUrl} style={{ fontSize: "12px", color: '#a77e6c' }} href="">Read more</a> */}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </>)}
                                    </Slideshow>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.smleftGrid}>
                            <img onClick={() => next()} className={classes.rightIc} />
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    );
}