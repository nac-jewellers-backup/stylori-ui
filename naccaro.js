import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { useStyles } from './style'
import Slideshow from '../../Carousel/carosul'

export const TopPicksGridComponent = (props) => {
    const classes = useStyles();
    const dataCarousel = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        fade: false,
        arrows: false
    }
    return (
        <Grid container>
            <Hidden mdUp>
                <Grid container xs={12} spacing={2} className={classes.containerset} justify="center">

                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify="center">
                        <Grid container item xs={12} justify="center">
                            <Grid item xs={6} style={{ padding: "0px 8px 8px 0px" }}>
                                <img src={props.data[2].img} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                            </Grid>
                            <Grid item xs={6} style={{ padding: "0px 0px 8px 8px" }}>
                                <img src={props.data[3].img} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: 'center', padding: "8px 0px 0px 0px" }}>
                                <img src={props.data[4].img} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} spacing={2} style={{ padding: "16px 8px 0px 0px" }}>
                                <img src={props.data[0].img} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} style={{ padding: "16px 0px 0px 8px" }}>
                                <img src={props.data[1].img} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid container xs={12} spacing={2} className={classes.containerset} justify="center">
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} spacing={2}>
                        <Slideshow class="subslider-carousel"
                            dataCarousel={dataCarousel} hoverlist={[props.data[0]]} TopPic={true} type='hover' />
                        {/* <img src={props.data[0]["topPicksOne"]} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} /> */}
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify="center">
                        <Grid container item xs={12} justify="center">

                            <Grid item xs={6} style={{ padding: "0px 8px 8px 0px" }}>
                                <Slideshow class="subslider-carousel"
                                    dataCarousel={dataCarousel} hoverlist={[props.data[3]]} TopPic={true} type='hover' />
                            </Grid>
                            <Grid item xs={6} style={{ padding: "0px 0px 8px 8px" }}>
                                <Slideshow class="subslider-carousel"
                                    dataCarousel={dataCarousel} hoverlist={[props.data[3]]} TopPic={true} type='hover' />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: 'center', padding: "8px 0px 0px 0px" }}>
                                <Slideshow class="subslider-carousel"
                                    dataCarousel={dataCarousel} hoverlist={[props.data[4]]} TopPic={true} type='hover' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <Slideshow class="subslider-carousel"
                            dataCarousel={dataCarousel} hoverlist={[props.data[1]]} TopPic={true} type='hover' />
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>

    );
}
