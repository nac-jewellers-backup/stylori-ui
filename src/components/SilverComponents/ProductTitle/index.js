import React from 'react'
import { Grid, Container } from '@material-ui/core'

import { useStyles } from './style'
const ProductTitle = (props) => {
    const classes = useStyles();

    return (

        <Grid container xs={12} justify="space-evenly" className={classes.containervalue}>
            <Grid item xs={3} sm={3} md={4} lg={5} xl={5}>

                <hr className={`${classes.hrline} ${classes.hrlineleft}`} />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={2} xl={2} className={`${classes.title}`}>
                {props.title}
            </Grid>
            <Grid item xs={3} sm={3} md={4} lg={5} xl={5}>
                <hr className={`${classes.hrline} ${classes.hrlineright}`} />
            </Grid>
        </Grid>

    )
}

export default ProductTitle;

