import React from 'react'
import Slideshow from '../../Carousel/carosul'
import { useDummyRequest } from '../../../hooks';
import { HomedataSilver } from '../../../mappers';
import { Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useStyles } from './style.js'

const SilverCarousel = (props) => {
    const dataCarousel = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
    }
    const { carouselTop } = props.data;
    const classes = useStyles();
    return (
        <Grid container xs={12}>
            <Grid item xs={12} style={{ backgroundColor: "#e4d6bb" }}>
                <Slideshow
                    dataCarousel={carouselTop[0].settings}
                >
                    {carouselTop[0].images.map((val, index) => (
                        <Grid container key={index}>
                            <img
                                src={val}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Grid>
                    ))}
                </Slideshow>

            </Grid>
            <Grid item xs={12} style={{ backgroundColor: "#e4d6bb", justifyContent: "center", display: "flex" }}>
                <Typography className={classes.TypoGraphy}>
                    {carouselTop[0].content}
                </Typography>
            </Grid>
        </Grid>
    )
}
export default (props => {
    const { mapped } = useDummyRequest(HomedataSilver);
    if (Object.keys(mapped).length === 0) return ''
    return <SilverCarousel {...props} data={mapped} />
});

