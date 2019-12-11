import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Typography, Button } from '@material-ui/core';
import Slideshow from '../../../components/Carousel/carosul';
import './index.css'
import Quodes from '../../../assets/Quotes'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: "#e8e8ea",
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
        fontSize: '13px',
        lineHeight: '30px',
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
        color: "#394578",
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
        position: "absolute",
        bottom: 0,
        right: 0

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
            <Grid item style={{ width: "100%", boxShadow: '10px 10px 5px #ccc' }}>
                <Slideshow dataCarousel={props.data[0].settings} >
                    {props.data[0].images.map((val, Index) =>
                        <Grid container>
                            <Grid item>
                                <Quodes className={classes.Quodes} />

                            </Grid>
                            <Grid item className={classes.testimonialInner}>
                                <Typography className={classes.textInner}>{val.Content}
                                </Typography>
                                <Grid className={classes.textInner}>
                                    <Typography className={classes.name}>
                                        {val.name}
                                    </Typography>
                                    <Typography className={classes.namecountry}>
                                        {val.location}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item >
                                {/* <span className={classes.excliconright}></span> */}
                                <Quodes className={classes.Quode1} />
                            </Grid>

                        </Grid>
                    )}
                </Slideshow>
            </Grid>
        </Grid >
    );
}