import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography, Button } from '@material-ui/core';
import Slideshow from '../../../components/Carousel/carosul';
import './index.css'
import Quodes from '../../../assets/Quotes'
import Arrows from '../../../assets/arrows'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',

        margin: "50px 0px 0px 0px "
    },
    [theme.breakpoints.up('lg')]: {

    },
    [theme.breakpoints.only('xs')]: {

    },
    exclIcon: {
        backgroundImage: 'url(https://www.flaticon.com/premium-icon/icons/svg/644/644079.svg)',
        // backgroundPosition: '-17px -45px',
        width: '100%',
        height: 'auto',
        backgroundRepeat: 'no-repeat',
        float: 'left',

    },
    testimonialInner: {
        color: '#666666',
        fontSize: '13px',
        lineHeight: '30px',
        paddingLeft: "6%",
        paddingRight: "4%"
    },
    textInner: {
        color: '#666666',
        fontSize: '15px',
        lineHeight: '30px',
        maxHeight: "140px ",
        overflow: "hidden"
    },
    name: {
        fontSize: '24px',
        fontWeight: 600,
        color: "#606061"
    },
    namecountry: {
        fontSize: "16px",
        color: "#606061",
        paddingBottom: "55px"
    },
    excliconright: {
        backgroundImage: 'url(https://alpha-assets.stylori.com/images/static/home/Testimonial_icons.png)',
        backgroundPosition: '-82px -45px',
        width: '38px',
        height: '37px',
        backgroundRepeat: 'no-repeat',
        float: 'right',
    },
    Quodes: {
        height: "50px ",
        width: "50px",
        fill: "#fff",
        transform: "rotate(180deg)"
    },
    Quode1: {
        height: "100px ",
        width: "100px",
        fill: "#fff",
        float: 'right',
        bottom: 0,
        right: 0

    },
    imgleftGrid: {
        width: "6%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    imgleft: {
        width: "14px",
        height: "12px",
        transform: "rotate(180deg)",
        fill: "  #949494",
        cursor: "pointer"
    },
    imgRight: {
        width: "14px",
        height: "12px",
        fill: "  #949494",
        cursor: "pointer"
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
            <Grid item className={classes.imgleftGrid}>
                {/* <img onClick={() => previous()} className={classes.imgleft} /> */}
                <div onClick={() => previous()}>
                    <Arrows className={classes.imgleft} />
                </div>
            </Grid>
            <Grid item style={{ width: "88%", boxShadow: '10px 10px 5px #ccc', backgroundColor: "#e8e8ea", }}>
                <Slideshow dataCarousel={props.data[0].settings} sliderRef={slider}>
                    {props.data[0].images.map((val, Index) =>
                        <Grid container style={{ height: "100%" }}>
                            <Grid item>
                                <Quodes className={classes.Quodes} />

                            </Grid>
                            <Grid item className={classes.testimonialInner}>
                                <Typography className={classes.textInner} >{val.Content}
                                </Typography>
                                <Grid container className={classes.textInner}>
                                    <Grid style={{ width: "50%" }} item>
                                        <Typography className={classes.name}>
                                            {val.name}
                                        </Typography>
                                        <Typography className={classes.namecountry}>
                                            <i>{val.location}</i>
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{ width: "50%" }}>
                                        <Quodes className={classes.Quode1} />
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    )}
                </Slideshow>
            </Grid>
            <Grid item className={classes.imgleftGrid}>
                {/* <img onClick={() => next()} className={classes.imgRight} />
             */}
                <div onClick={() => next()}>
                    <Arrows className={classes.imgRight} />
                </div>
            </Grid>
        </Grid >
    );
}