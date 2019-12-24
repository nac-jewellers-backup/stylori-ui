import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './style'
import Slideshow from '../../Carousel/carosul'
import './index.css'
import NacGagets from '../../../components/NacGagets/NacGagets'

export const FeaturedGridComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid container xs={12} className={classes.containerset} style={{}} justify="center">
            <Grid item xs={12} style={{ boxShadow: '10px 10px 5px #ccc' }}>
                <Slideshow dataCarousel={props.data[0].settings} >
                    {props.data[0].images.map((val, Index) =>
                        <img src={val} className={`${classes.img}`} />
                    )}
                </Slideshow>

            </Grid>
            < NacGagets />

        </Grid>
    );
}
