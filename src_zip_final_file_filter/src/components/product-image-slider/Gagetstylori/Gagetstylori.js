import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import './index.css'

const useStyles = makeStyles(theme => ({
    typo: {
        margin: "0 0 10px",
        color: "#394578",
        fontSize: "11px",
        marginBottom: 0,
        // textAlign: "center",
        fontFamily: 'Roboto'
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={2} style={{ display: "inline" }}>
                <span class="imagegaget1"></span>
                <Typography className={classes.typo}>
                    From the House of NAC
                    </Typography>
            </Grid>
            <Grid item xs={2} style={{ display: "inline" }}>
                <span class="imagegaget2"></span>
                <Typography className={classes.typo}>
                    Quality Assurance
                    </Typography>
            </Grid>
            <Grid item xs={2} style={{ display: "inline" }}>
                <span class="imagegaget3"></span>
                <Typography className={classes.typo}>
                    Easy Returns
                    </Typography>
            </Grid>
            <Grid item xs={2} style={{ display: "inline" }}>
                <span class="imagegaget4"></span>
                <Typography className={classes.typo}>
                    Diverse Styles
                    </Typography>
            </Grid>
            <Grid item xs={2} style={{ display: "inline" }}>
                <span class="imagegaget5"></span>
                <Typography className={classes.typo}>
                    Secure Payments
                    </Typography>
            </Grid>
            <Grid item xs={2} style={{ display: "inline" }}>
                <span class="imagegaget6"></span>
                <Typography className={classes.typo}>
                    Certified Jewellery
                    </Typography>
            </Grid>
        </Grid>
    );
}