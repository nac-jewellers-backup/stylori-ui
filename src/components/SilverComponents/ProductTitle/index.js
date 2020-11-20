import React from 'react'
import { Grid, Container } from '@material-ui/core'

import { useStyles } from './style'
const ProductTitle = (props) => { 
    const classes = useStyles();
    const isSilver = props.isSilver ? true : false
    return ( 
        <Grid container xs={12} justify="space-evenly" className={classes.containervalue}>
            <Grid item xs={2} sm={3} md={4} lg={5} xl={5} style={{ margin: 'auto' }}>

                <hr className={`${isSilver ? classes.hrline2 : classes.hrline} ${classes.hrlineleft} ${props.class ? `${classes[props.class[1]]}` : ''}`} />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2} xl={2} style={{ letterSpacing: props.title === "TESTIMONIALS" && "5px" }} className={`${isSilver ? classes.title2 : classes.title} ${props.class ? `${classes[props.class[0]]}` : ''}`}>
                {props.title}
            </Grid>
            <Grid item xs={2} sm={3} md={4} lg={5} xl={5} style={{ margin: 'auto' }}>
                <hr className={`${isSilver ? classes.hrline2 : classes.hrline} ${classes.hrlineright} ${props.class ? `${classes[props.class[1]]}` : ''}`} />
            </Grid>
        </Grid>

    )
}

export default ProductTitle;

