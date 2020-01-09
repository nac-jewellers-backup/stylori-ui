import React from 'react';
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import { CollectionPageStylori } from './CollectionData';
import Slideshow from '../../components/Carousel/carosul';
import { makeStyles } from '@material-ui/styles';
import './Collection.css';

const useStyles = makeStyles(theme => ({

    [theme.breakpoints.down('sm')]: {
        Button: {
            fontSize: '11px !important',
            textTransform: "capitalize",
            backgroundColor: '#394578',
            /* margin-top: 18px !important; */
            marginTop: '3px !important',
            color: '#fff',
            borderFadius: '0px',
            padding: '7px 15px',
            borderColor: '#ccc',
            '&:hover': {
                backgroundColor: '#fff',
                border: '1px solid #394578',
                color: '#394578'
            }
        },
    },

    typograpyTop: {

        color: theme.palette.primary.main,
        fontSize: "17px",
        fontWeight: 600
    },
    container: {
        display: 'flex !important'
    },
    testimonialRight: {
        textAlign: "center !important",
        paddingLeft: ' 5px !important',
        paddingRight: '5px !important'
    },
    imgcoin: {
        // padding: '5px',
        marginTop: '15px',
        marginBottom: '15px',
        verticalAlign: 'middle',
        width: "100%",
        height: "auto"
        // width: "calc(100% - 450px) !important",
        // marginLeft: "4px",
    },
   
    Button: {
        fontSize: '12px',
        backgroundColor: '#394578',
        textTransform: "capitalize",
        /* margin-top: 18px !important; */
        marginTop: '8px !important',
        color: '#fff',
        borderRadius: '0px',
        padding: '7px 15px',
        borderColor: '#ccc',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #394578',
            color: '#394578'
        }
    },
    name: {
        fontSize: '16px',
        fontWeight: 600,
        color: "#394578"
    },
    ButtonExplore: {
        fontSize: '12px',
        backgroundColor: '#e01e56',
        textTransform: "capitalize",
        /* margin-top: 18px !important; */
        marginTop: '8px',
        color: '#fff',
        borderRadius: '0px !important',
        padding: '9px 29px',
        borderColor: '#ccc',
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid #e01e56',
            color: '#e01e56'
        }
    },
    ButtonViewMoreCollections: {
        fontSize: '12px',
        textTransform: "capitalize",
        color: '#394578',
        borderRadius: '0px !important',
        padding: '9px 29px',
        backgroundColor: '#fff',
        border: '1px solid #394578'
    },
    arrowIconLeft: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "45px",
        color: "#EC6160",
    },
    arrowIconRight: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: "45px",
        color: "#EC6160"
    },
    cardPadding: {
        padding: "0 15px"
    },
    imageResolution: {
    },
    containerMargin: {
        padding: "0 27px",
        maxWidth: "1170px",
        margin: "auto"
    },
    overrideContainer: {
        position: "relative",
        top: "-130px"
    },
    cardMargin: {
        display: "flex", justifyContent: "center", marginTop: "150px"
    },
    [theme.breakpoints.only('sm')]: {
        arrowIconLeft: {
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center",
            fontSize: "45px",
            color: "#EC6160",
        },
        arrowIconRight: {
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center",
            fontSize: "45px",
            color: "#EC6160"
        }
    },
    [theme.breakpoints.only('xs')]: {
        cardPadding: {
            padding: "0 15px !important"
        },
        containerMargin: {
            padding: "0 !important"
        },
        overrideContainer: {
            position: "relative",
            top: "-28px !important"
        },
        cardMargin: {
            display: "flex",
            justifyContent: "center",
            marginTop: "10px !important"
        }
    },
    [theme.breakpoints.down('md')]: {
        imageResolution: {
            width: "100% !important", height: "auto !important"
        }
    },
    [theme.breakpoints.down('xs')]: {
        typograpyTop: {

            color: theme.palette.primary.main,
            fontSize: "13px !important",
            fontWeight: 600,
        }
    }


}));
export default function ChildCollectionItemOne() {
    const classes = useStyles();
    const slider = React.createRef();
    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }
    return (
        <>
            {
                CollectionPageStylori.Testimony.carousel.data.map((data, index) => <>
                    {
                        index < 2 ?
                            <>
                                {
                                    index % 2 === 0 ? <>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <Slideshow
                                                    sliderRef={slider}
                                                    dataCarousel={CollectionPageStylori.carouselTop.setting}
                                                >
                                                    {data.containerImage.map((val, index) => (
                                                        <Grid container key={index}>
                                                            <img
                                                                src={val.img}
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Slideshow>
                                            </Grid>
                                        </Grid>
                                        <Grid container className={classes.overrideContainer} >
                                            <Hidden smDown>
                                                <Grid container direction="row-reverse" className={classes.containerMargin} >
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                        <Grid >
                                                            <img src={data.primaryImage} className={classes.imageResolution}></img>
                                                        </Grid>
                                                        <Grid style={{ margin: "0px 0px 10px 0px " }}>
                                                            <div style={{ margin: "20px 0px 10px 0px " }}>
                                                                <Typography component="h3" className={classes.typograpyTop}>
                                                                    {data.primaryContantName}
                                                                </Typography>
                                                            </div>
                                                            <Button type="button" className={classes.ButtonExplore} style={{ font: "13px Roboto" }}>{data.primaryButtonName}</Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                        <Grid container >
                                                            <Grid item item xs={12} sm={12} md={12} alignItems="center">
                                                                <Slideshow dataCarousel={CollectionPageStylori.Testimony.carousel.setting} sliderRef={slider}>
                                                                    {data.primaryCarouselDetails.map((val, index) => <>
                                                                        <Grid container className={classes.cardMargin}>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconLeft}>
                                                                                <i class="fa fa-angle-left" onClick={()=>previous()}></i>
                                                                            </Grid>
                                                                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.testimonialRight}>
                                                                                <Typography className={classes.typograpyTop}>
                                                                                    {val.imageTitle}
                                                                                </Typography>
                                                                                <Grid item style={{ display: "flex", justifyContent: 'center' }}>
                                                                                    <img className={classes.imgcoin} src={val.img} />
                                                                                </Grid>
                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                                                    <Typography style={{ color: "#394578" }}><i class="fa fa-inr" aria-hidden="true" style={{ fontSize: "14px", paddingRight: "2px" }}></i>
                                                                                        {val.price}</Typography>
                                                                                </Grid>
                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px 10px 15px" }}>
                                                                                    <a style={{ textDecoration: 'none' }} href={val.navigateUrl}><Button type="button" className={classes.Button} style={{ fontSize: "13px" }}>{val.buttonName}</Button></a>
                                                                                </Grid>

                                                                            </Grid>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconRight}>
                                                                                <i class="fa fa-angle-right" onClick={() =>next()}></i>
                                                                            </Grid>
                                                                        </Grid>

                                                                    </>)}
                                                                </Slideshow>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Hidden>
                                            <Hidden mdUp>
                                                <Grid container className={classes.containerMargin} >
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                        <Grid >
                                                            <img src={data.primaryImage} className={classes.imageResolution}></img>
                                                        </Grid>
                                                        <Grid style={{ margin: "0px 0px 10px 0px " }}>
                                                            <div style={{ margin: "20px 0px 10px 0px " }}>
                                                                <Typography component="h3" className={classes.typograpyTop}>
                                                                    {data.primaryContantName}
                                                                </Typography>
                                                            </div>
                                                            <Button type="button" className={classes.ButtonExplore} style={{ font: "13px Roboto" }}>{data.primaryButtonName}</Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                        <Grid container >
                                                            <Grid item item xs={12} sm={12} md={12} alignItems="center">
                                                                <Slideshow dataCarousel={CollectionPageStylori.Testimony.carousel.setting} sliderRef={slider}>
                                                                    {data.primaryCarouselDetails.map((val, index) => <>
                                                                        <Grid container className={classes.cardMargin}>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconLeft}>
                                                                                <i class="fa fa-angle-left" onClick={()=>previous()}></i>
                                                                            </Grid>
                                                                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.testimonialRight}>
                                                                                <Typography className={classes.typograpyTop}>
                                                                                    {val.imageTitle}
                                                                                </Typography>
                                                                                <Grid item style={{ display: "flex", justifyContent: 'center' }}>
                                                                                    <img className={classes.imgcoin} src={val.img} />
                                                                                </Grid>
                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                                                    <Typography style={{ color: "#394578" }}><i class="fa fa-inr" aria-hidden="true" style={{ fontSize: "14px", paddingRight: "2px" }}></i>
                                                                                        {val.price}</Typography>
                                                                                </Grid>
                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px 10px 15px" }}>
                                                                                    <a style={{ textDecoration: 'none' }} href={val.navigateUrl}><Button type="button" className={classes.Button} style={{ fontSize: "13px" }}>{val.buttonName}</Button></a>
                                                                                </Grid>

                                                                            </Grid>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconRight}>
                                                                                <i class="fa fa-angle-right" onClick={()=>next()}></i>
                                                                            </Grid>
                                                                        </Grid>

                                                                    </>)}
                                                                </Slideshow>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Hidden>
                                        </Grid>
                                        <Grid container >
                                            <Grid container className={classes.containerMargin} >
                                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                    <Grid >
                                                        <img src={data.secondaryImage} className={classes.imageResolution}></img>
                                                    </Grid>
                                                    <Grid style={{ margin: "0px 0px 10px 0px " }}>
                                                        <div style={{ margin: "20px 0px 10px 0px " }}>
                                                            <Typography component="h3" className={classes.typograpyTop}>
                                                                {data.secondaryContantName}
                                                            </Typography>
                                                        </div>
                                                        <Button type="button" className={classes.ButtonExplore} style={{ font: "13px Roboto" }}>{data.secondaryButtonName}</Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding}  >
                                                    <Grid container >
                                                        <Grid item item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center">
                                                            <Slideshow dataCarousel={CollectionPageStylori.Testimony.carousel.setting} sliderRef={slider}>
                                                                {data.secondaryCarouselDetails.map((val, index) => <>
                                                                    <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                                                        <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconLeft}>
                                                                            <i class="fa fa-angle-left" onClick={()=>previous()}></i>
                                                                        </Grid>
                                                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.testimonialRight}>
                                                                            <Typography className={classes.typograpyTop}>
                                                                                {val.imageTitle}
                                                                            </Typography>

                                                                            <Grid item style={{ display: "flex", justifyContent: 'center', width: "100%", height: "auto" }}>
                                                                                <img className={classes.imgcoin} src={val.img} />
                                                                            </Grid>

                                                                            <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                                                <Typography style={{ color: "#394578" }}><i class="fa fa-inr" aria-hidden="true" style={{ fontSize: "14px", paddingRight: "2px" }}></i>
                                                                                    {val.price}</Typography>
                                                                            </Grid>
                                                                            <Grid item style={{ textAlign: 'center', padding: "0px 15px 10px 15px" }}>
                                                                                <a style={{ textDecoration: 'none' }} href={val.navigateUrl}><Button type="button" className={classes.Button} style={{ fontSize: "13px" }}>{val.buttonName}</Button></a>
                                                                            </Grid>

                                                                        </Grid>
                                                                        <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconRight}>
                                                                            <i class="fa fa-angle-right" onClick={()=>next()}></i>
                                                                        </Grid>
                                                                    </Grid>

                                                                </>)}
                                                            </Slideshow>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </> : <>
                                            <Grid container style={{ position: "relative", top: "-19px" }}>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Slideshow
                                                        sliderRef={slider}
                                                        dataCarousel={CollectionPageStylori.carouselTop.setting}
                                                    >
                                                        {data.containerImage.map((val, index) => (
                                                            <Grid container key={index}>
                                                                <img
                                                                    src={val.img}
                                                                    style={{ width: "100%", height: "auto" }}
                                                                />
                                                            </Grid>
                                                        ))}
                                                    </Slideshow>
                                                </Grid>
                                            </Grid>
                                            <Grid container className={classes.overrideContainer}>
                                                <Grid container className={classes.containerMargin} >
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                        <Grid item >
                                                            <img src={data.primaryImage} className={classes.imageResolution}></img>
                                                        </Grid>
                                                        <Grid style={{ margin: "0px 0px 10px 0px " }}>
                                                            <div style={{ margin: "20px 0px 10px 0px " }}>
                                                                <Typography component="h3" className={classes.typograpyTop}>
                                                                    {data.primaryContantName}
                                                                </Typography>
                                                            </div>
                                                            <Button type="button" className={classes.ButtonExplore} style={{ font: "13px Roboto" }}>{data.primaryButtonName}</Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding}  >
                                                        <Grid container >
                                                            <Grid item item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center">
                                                                <Slideshow dataCarousel={CollectionPageStylori.Testimony.carousel.setting} sliderRef={slider}>
                                                                    {data.primaryCarouselDetails.map((val, index) => <>
                                                                        <Grid container style={{ display: "flex", justifyContent: "center", marginTop: "54px" }}>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconLeft}>
                                                                                <i class="fa fa-angle-left" onClick={()=>previous()}></i>
                                                                            </Grid>
                                                                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.testimonialRight}>
                                                                                <Typography className={classes.typograpyTop}>
                                                                                    {val.imageTitle}
                                                                                </Typography>

                                                                                <Grid item style={{ display: "flex", justifyContent: 'center', width: "100%", height: "auto" }}>
                                                                                    <img className={classes.imgcoin} src={val.img} />
                                                                                </Grid>

                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                                                    <Typography style={{ color: "#394578" }}><i class="fa fa-inr" aria-hidden="true" style={{ fontSize: "14px", paddingRight: "2px" }}></i>
                                                                                        {val.price}</Typography>
                                                                                </Grid>
                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px 10px 15px" }}>
                                                                                    <a style={{ textDecoration: 'none' }} href={val.navigateUrl}><Button type="button" className={classes.Button} style={{ fontSize: "13px" }}>{val.buttonName}</Button></a>
                                                                                </Grid>

                                                                            </Grid>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconRight}>
                                                                                <i class="fa fa-angle-right" onClick={()=>next()}></i>
                                                                            </Grid>
                                                                        </Grid>

                                                                    </>)}
                                                                </Slideshow>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid container className={classes.containerMargin} >
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding}>
                                                        <Grid >
                                                            <img src={data.secondaryImage} className={classes.imageResolution} ></img>
                                                        </Grid>
                                                        <Grid style={{ margin: "0px 0px 10px 0px " }}>
                                                            <div style={{ margin: "20px 0px 10px 0px " }}>
                                                                <Typography component="h3" className={classes.typograpyTop}>
                                                                    {data.secondaryContantName}
                                                                </Typography>
                                                            </div>
                                                            <Button type="button" className={classes.ButtonExplore} style={{ font: "13px Roboto" }}>{data.secondaryButtonName}</Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.cardPadding} >
                                                        <Grid container >
                                                            <Grid item item xs={12} sm={12} md={12} alignItems="center">
                                                                <Slideshow dataCarousel={CollectionPageStylori.Testimony.carousel.setting} sliderRef={slider}>
                                                                    {data.secondaryCarouselDetails.map((val, index) => <>
                                                                        <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconLeft}>
                                                                                <i class="fa fa-angle-left" onClick={()=>previous()}></i>
                                                                            </Grid>
                                                                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={classes.testimonialRight}>
                                                                                <Typography className={classes.typograpyTop}>
                                                                                    {val.imageTitle}
                                                                                </Typography>

                                                                                <Grid item style={{ display: "flex", justifyContent: 'center', width: "100%", height: "auto" }}>
                                                                                    <img className={classes.imgcoin} src={val.img} />
                                                                                </Grid>

                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px " }}>
                                                                                    <Typography style={{ color: "#394578" }}><i class="fa fa-inr" aria-hidden="true" style={{ fontSize: "14px", paddingRight: "2px" }}></i>
                                                                                        {val.price}</Typography>
                                                                                </Grid>
                                                                                <Grid item style={{ textAlign: 'center', padding: "0px 15px 10px 15px" }}>
                                                                                    <a style={{ textDecoration: 'none' }} href={val.navigateUrl}><Button type="button" className={classes.Button} style={{ fontSize: "13px" }}>{val.buttonName}</Button></a>
                                                                                </Grid>

                                                                            </Grid>
                                                                            <Grid xs={3} sm={3} md={3} lg={3} xl={3} className={classes.arrowIconRight}>
                                                                                <i class="fa fa-angle-right" onClick={()=>next()}></i>
                                                                            </Grid>
                                                                        </Grid>

                                                                    </>)}
                                                                </Slideshow>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </>
                                }
                            </>
                            : ''
                    }

                </>)
            }
        </>
    )
}
