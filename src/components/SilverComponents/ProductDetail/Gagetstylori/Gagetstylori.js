import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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
    mainsource: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"

    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.mainsource}>
                <img style={{ width: "50%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/fromthehouseofnac-pink.svg"} loading="lazy" alt="...."/>
            </Grid>
            <Grid item className={classes.mainsource}>
                <img style={{ width: "50%" }} src={"https://assets.stylori.com/images/Static%20Pages/Other%20Pages/certifiedjewellery-pink.svg"} loading="lazy" alt="...."/>
            </Grid>
            <Grid item className={classes.mainsource}>
                <img style={{ width: "50%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/securepayments-pink.svg"} loading="lazy" alt="...."/>
            </Grid>
            <Grid item className={classes.mainsource}>
                <img style={{ width: "50%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/diversestyles-pink.svg"} loading="lazy" alt="...."/>
            </Grid>
            <Grid item className={classes.mainsource}>
                <img style={{ width: "50%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/easyreturns-pink.svg"} loading="lazy" alt="...."/>
            </Grid>
        </Grid>
    );
}