import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography, Button } from '@material-ui/core';
import Slideshow from '../../components/Carousel/carosul'
import { CDN_URL } from '../../config'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: "#fff",
        padding: "0px 15px"
    },
    [theme.breakpoints.up('lg')]: {
        root: {
            width: "1170px !important",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "0px 15px 10px 15px"
        }
    },
    [theme.breakpoints.only('xs')]: {
        imgcoinsm: {
            verticalAlign: 'middle',
            // width: "157px !important",
            // height: "157px !important"
        },
    },
    [theme.breakpoints.only('sm')]: {
        imgcoinsm: {
            verticalAlign: 'middle',
            width: "144px !important",
            height: "144px !important"
        },
    },

    [theme.breakpoints.down('sm')]: {
        middlecontainersm: {
            marginLeft: "0 !important",
            marginRight: "0 !important",
            padding: "0px 5px"
        },
        containerRoot: {
            width: "100%",
            backgroundImage: "none !important",
            boxShadow: "0 0 5px #888 !important"
        },
        smleftGrid: {
            marginTop: "50% !important"
        },
        Button: {
            fontSize: '9px !important',
            backgroundColor: '#394578',
            /* margin-top: 18px !important; */
            marginTop: '3px !important',
            color: '#fff',
            borderFadius: '0px',
            padding: '7px 15px',
            borderColor: '#ccc',
            '&:hover': {
                backgroundColor: '#454f7a'
            }
        },
    },
    [theme.breakpoints.up('sm')]: {
        middlecontainersm: {
            marginLeft: "25% !important",
            marginRight: "25% !important",
            padding: "0px 5px"
        },
        smleftGrid: {
            marginTop: "21% !important"
        },
    },


    containerRoot: {
        width: "100%",
        backgroundImage: "url(https://alpha-assets.stylori.com/images/static/home/box_bg.png)",
        boxShadow: "0 0 5px #888 !important"

    },
    imgleft: {
        backgroundImage: "url(https://alpha-assets.stylori.com/images/static/slider_icon.png) !important",
        backgroundPosition: "-27px -229px !important",
        width: "35px !important",
        height: "44px !important",
        backgroundRepeat: "no-repeat !important",
        float: "left",
        backgroundColor: "#fff",
        borderLeft: " 0px"
    },
    imgRight: {
        backgroundImage: "url(https://alpha-assets.stylori.com/images/static/slider_icon.png) !important",
        backgroundPosition: "-160px -229px !important",
        width: "35px !important",
        height: " 44px !important",
        backgroundRepeat: 'no-repeat !important',
        float: 'right',
        backgroundColor: '#fff',
        borderRight: '0px'
    },
    imgleftGrid: {
        display: "flex",
        marginTop: "162px"
    },
    smleftGrid: {
        marginTop: "21% "
    },
    leftIc: {
        backgroundPosition: '-16px -21px !important',
        width: '15px!important',
        height: '20px!important',
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important',
        borderLeft: '1px solid #ccc',
        marginLeft: '-8px!important',
        verticalAlign: "text-top",
        backgroundColor: '#fff'
    },
    rightIc: {
        backgroundPosition: '-65px -21px !important',
        width: '15px !important',
        height: '20px !important',
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/slider_button.png) !important',
        borderRight: '1px solid #ccc',
        marginRight: '-8px !important',
        float: 'right',
        backgroundColor: '#fff'

    },
    container: {
        display: 'flex !important'
    },
    imgRightGrid: {
        marginTop: "162px",
    },
    testimonialRight: {
        textAlign: "center !important",
        paddingLeft: ' 5px !important',
        paddingRight: '5px !important'
    },
    testimonyTitle: {
        display: "flex",
        justifyContent: " center",
        alignContent: 'center',
        minHeight: "45px",
        color: "#394578",
        fontWeight: '500',
        fontSize: "15px",
        marginBottom: '0px',
        lineHeight: '20px !important',
        marginTop: '10px'
    },
    imgcoin: {
        boxShadow: ' 0 0 5px #888 !important',
        float: 'left',
        padding: '5px',
        marginTop: '15px',
        marginBottom: '15px',
        verticalAlign: 'middle',
        width: "calc(100% - 20px) !important",
        marginLeft: "4px"
    },
    imgcoinsm: {
        verticalAlign: 'middle',
        width: "110px",
        height: "110px"
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
        '&:hover': {
            backgroundColor: '#454f7a'
        }
    },
    exclIcon: {
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/Testimonial_icons.png)',
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
        marginTop: '60px',
        paddingLeft: '15px',
    }, textInner: {
        color: '#666666',
        fontSize: '13px',
        lineHeight: '30px',
        marginTop: '25px',
        maxHeight: "140px ",
        overflow: "hidden"
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
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/Testimonial_icons.png)',
        backgroundPosition: '-82px -45px',
        width: '38px',
        height: '37px',
        backgroundRepeat: 'no-repeat',
        float: 'right',
        marginRight: '50px'
    },
    middlecontainersm: {
        marginLeft: "25%",
        marginRight: "25%",
        padding: "0px 5px"
    },
    buttonTypo: {
        textAlign: 'center', alignItems: "center", display: "flex"
    },
    spanimage: {
        backgroundPosition: '-24px -12px',
        width: '25px',
        height: '30px',
        backgroundRepeat: 'no-repeat',
        float: 'left',
        marginTop: '15px',
        marginLeft: '0px',
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/sprites-imgs.png)'
    },
    spanimage2: {
        backgroundPosition: '-93px -12px',
        width: '25px',
        height: '30px',
        backgroundRepeat: 'no-repeat',
        float: 'right',
        marginTop: '10px',
        marginLeft: '15px',
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/sprites-imgs.png)'

    },
    textInnersm: {
        color: '#666666',
        fontSize: '13px',
        lineHeight: '30px',
        maxHeight: "20px ",
        overflow: "hidden"
    },


}));



export default function ImageGridList(props) {
    let carosolData = props && props.carosolData && props.carosolData.data && props.carosolData.data.allCustomerReviews && props.carosolData.data.allCustomerReviews.nodes;
    const classes = useStyles();
    const slider = React.createRef();
    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }
    const imageslice = (image) => {
        let val = image.split('/')
        return (`${CDN_URL}${val[0]}/${val[1]}/275X275/${val[2]}`)


    }

    return (
        <Grid container className={classes.root}>
            <Hidden smDown>
                <Grid item className={classes.containerRoot}>
                    <Grid container className={classes.container}>
                        <Grid item md={1} lg={1} sm={1} xs={1} className={classes.imgleftGrid}>
                            <img onClick={() => previous()} className={classes.imgleft} />
                        </Grid>
                        <Grid item md={10} lg={10} sm={10} xs={10}  >
                            <Grid container>
                                <Grid item item xs={12} alignItems="center">
                                    <Slideshow dataCarousel={props.dataCarousel} sliderRef={slider}>
                                        {carosolData && carosolData.map((val, index) => <>
                                            <Grid container>
                                                <Grid item md={3} lg={3} sm={6} xs={12} classNmae={classes.testimonialRight}>
                                                    <Typography className={classes.testimonyTitle}>
                                                        {val.title}
                                                    </Typography>
                                                    <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                        <Slideshow>
                                                            {val.productListByProductId.productImagesByProductId.nodes[0].imageUrl ? <img className={classes.imgcoin} src={imageslice(val.productListByProductId.productImagesByProductId.nodes[0].imageUrl)} /> : <img className={classes.imgcoin} src={`${CDN_URL}product/1000X1000/productnotfound.webp`} />}
                                                        </Slideshow>
                                                    </Grid>
                                                    <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                        <Typography style={{ color: "#394578", fontSize: "0.9rem" }}><i class="fa fa-inr" aria-hidden="true" style={{ fontSize: "14px", paddingRight: "2px" }}></i>
                                                            {val.transSkuListByProductSku && val.transSkuListByProductSku.markupPrice && val.transSkuListByProductSku.markupPrice}</Typography>
                                                    </Grid>
                                                    <Grid item style={{ textAlign: 'center', padding: "0px 15px 10px 15px" }}>
                                                        <a style={{ textDecoration: 'none' }} href={val.transSkuListByProductSku && val.transSkuListByProductSku.skuUrl && val.transSkuListByProductSku.skuUrl}><Button type="button" className={classes.Button}>Shop Now</Button></a>
                                                    </Grid>

                                                </Grid>
                                                <span className={classes.exclIcon} ></span>
                                                <Grid item md={7} lg={7} sm={12} xs={12} className={classes.testimonialInner}>
                                                    <Typography className={classes.textInner}>{val.message}
                                                    </Typography>
                                                    <Grid className={classes.textInner}>
                                                        <Typography className={classes.name}>
                                                            {val.customerName}
                                                        </Typography>
                                                        <Typography className={classes.namecountry}>
                                                            {val.country}
                                                        </Typography>
                                                        <span className={classes.excliconright}></span>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </>)}
                                    </Slideshow>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={1} lg={1} sm={1} xs={1} className={classes.imgRightGrid}>
                            <img onClick={() => next()} className={classes.imgRight} />
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item className={classes.containerRoot}>
                    <Grid container className={classes.container}>
                        <Grid item md={1} lg={1} sm={1} xs={1} className={classes.smleftGrid}>
                            <img onClick={() => previous()} className={classes.leftIc} />
                        </Grid>
                        <Grid item md={10} lg={10} sm={10} xs={10} style={{ marginBottom: "15px", minHeight: "250px" }}>
                            <Grid container >
                                <Grid item xs={12} >
                                    <Slideshow dataCarousel={props.dataCarousel} sliderRef={slider}>
                                        {carosolData && carosolData.map((val, index) => <>
                                            <Grid container >
                                                <Grid item xs={12} md={3} lg={3} sm={6} xs={12} className={classes.middlecontainersm} >
                                                    <Typography className={classes.testimonyTitle}>
                                                        {val.title}
                                                    </Typography>
                                                    <Grid container>
                                                        <Grid item xs={6} sm={6} style={{ textAlign: 'center' }}>
                                                            <Grid>
                                                                <img className={classes.imgcoinsm} src={imageslice(val.productListByProductId.productImagesByProductId.nodes[0].imageUrl)} />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container item xs={6} sm={6} className={classes.buttonTypo}>
                                                            <Grid>

                                                            </Grid>
                                                            <Grid>
                                                                <Typography style={{ color: "#394578", fontSize: "12px" }}><i class="fa fa-inr" aria-hidden="true" style={{ paddingRight: "2px" }}></i>
                                                                    {val.transSkuListByProductSku && val.transSkuListByProductSku.markupPrice && val.transSkuListByProductSku.markupPrice}</Typography>
                                                                <a style={{ textDecoration: 'none' }} href={val.navigateUrl}><Button type="button" className={classes.Button}>Shop Now</Button></a></Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <span className={classes.spanimage}>
                                                </span>
                                                <Grid item md={7} lg={7} sm={12} xs={12} >
                                                    <Typography className={classes.textInnersm}>{val.message}
                                                    </Typography>
                                                    <Grid >
                                                        <Typography className={classes.name}>
                                                            {val.customerName}
                                                        </Typography>
                                                        <Typography className={classes.namecountry}>
                                                            {val.country}
                                                        </Typography>
                                                        <span className={classes.spanimage2}></span>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </>)}
                                    </Slideshow>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item md={1} lg={1} sm={1} xs={1} className={classes.smleftGrid}>
                            <img onClick={() => next()} className={classes.rightIc} />
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    );
}