import React from 'react'
import './Testimony.css';
import { Grid } from '@material-ui/core';
import Testimonycarosol from './Testimonycarosol';
import TestimonyImage from './TestimonyImage';

export default function Testimony(props) {
    return (
        <Grid Container style={{ width: "100%" }}>
            <Grid item className="selectionHead">
                <em className="LeftImage"></em>
                <Grid className="headerTestimony">
                    <span className="Typograpytestimony">Testimonial</span>
                </Grid>
                <em className="rightImage"></em>
            </Grid>
            <Testimonycarosol carosolData={props.carosolData} dataCarousel={props.dataCarousel} />
            <TestimonyImage GridImage={props.GridImage} />
        </Grid >
    )
}
