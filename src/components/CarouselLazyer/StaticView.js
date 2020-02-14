import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    containItems: {
        padding: "0px 15px",
        margin: "0px 12px",
        width: "100%"
    },
    [theme.breakpoints.up("lg")]: {
        containItems: {
            padding: "0px 15px",
            margin: "auto",
            width: " 1170px"
        },
    },

    styloritags: {
        padding: "0px 15px",
        width: "20%",
        borderRight: "1px solid #eeeeee"
    },
    styloritags_PD_page: {
        padding: "0px !important",
        width: "20%",
        borderRight: "1px solid #eeeeee"
    },
    image1: {
        backgroundImage: 'url(' + 'https://assets.stylori.com/images/static/sprite-images.png' + ')',
        backgroundPosition: "-520px 52px",
        width: "28px",
        height: "20px",
        margin: "0 auto",
        minHeight: '30px'
    },
    image2: {
        backgroundImage: 'url(' + 'https://assets.stylori.com/images/static/sprite-images.png' + ')',
        backgroundPosition: "-602px 52px",
        width: "28px",
        height: "20px",
        margin: "0 auto",
        minHeight: '30px'
    },
    image3: {
        backgroundImage: 'url(' + 'https://assets.stylori.com/images/static/sprite-images.png' + ')',
        backgroundPosition: "-107px 52px",
        width: "28px",
        height: "20px",
        margin: "0 auto",
        minHeight: '30px'
    },
    image4: {
        backgroundImage: 'url(' + 'https://assets.stylori.com/images/static/sprite-images.png' + ')',
        backgroundPosition: "-273px 52px",
        width: "28px",
        height: "20px",
        margin: "0 auto",
        minHeight: '30px'
    },
    image5: {
        backgroundImage: 'url(' + 'https://assets.stylori.com/images/static/sprite-images.png' + ')',
        backgroundPosition: "-190px 52px",
        width: "28px",
        height: "20px",
        margin: "0 auto",
        minHeight: '30px'
    },
    typo: {
        textAlign: "center",
        width: "100%",
        margin: "3px 0px auto",
        float: "left",
        width: "100%",
        color: "#394578",
        fontSize: "11px"
    },
    fullWidth: {
        width: "100% !important",
        display: "flex",
        justifyContent: "center"
    },
    fullWidth_PD_page: {
        // width: "50% !important",
        display: "flex",
        justifyContent: "center"
    }

}));

export default function StaticView() {
    const classes = useStyles();
    const theme = useTheme();
    const path = window.location.pathname === "/home";
    return (
        <Grid container className={classes.containItems}>
            <Grid item className={path ? classes.styloritags : classes.styloritags_PD_page}>
                <Grid container >
                    <Grid item className={path ? classes.fullWidth : classes.fullWidth_PD_page}>
                        <img style={{ width: "40%",height:"100%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/fromthehouseofnac-pink.svg"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={path ? classes.styloritags : classes.styloritags_PD_page}>
                <Grid container >
                    <Grid item className={path ? classes.fullWidth : classes.fullWidth_PD_page}>
                        <img style={{ width: "40%",height:"100%" }} src={"https://assets.stylori.com/images/Static%20Pages/Other%20Pages/certifiedjewellery-pink.svg"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={path ? classes.styloritags : classes.styloritags_PD_page}>
                <Grid container >
                    <Grid item className={path ? classes.fullWidth : classes.fullWidth_PD_page}>
                        <img style={{ width: "40%",height:"100%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/securepayments-pink.svg"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={path ? classes.styloritags : classes.styloritags_PD_page}>
                <Grid container >
                    <Grid item className={path ? classes.fullWidth : classes.fullWidth_PD_page}>
                        <img style={{ width: "40%",height:"100%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/diversestyles-pink.svg"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={path ? classes.styloritags : classes.styloritags_PD_page}>
                <Grid container >
                    <Grid item className={path ? classes.fullWidth : classes.fullWidth_PD_page}>
                        <img style={{ width: "40%",height:"100%" }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/easyreturns-pink.svg"} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
