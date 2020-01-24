import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './GridList.css'
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        margin: "0px 0px 20px 0px "
    },
    [theme.breakpoints.down("md")]: {
        imagefull: {
            width: "100%",
        },
        imagefulllong: {
            width: "100%",
        },
        firstcolumn: {
            padding: "0px 8px 0px 0px !important"
        },
    },
    [theme.breakpoints.only("sm")]: {
        daisyday: {
            marginTop: "7.5px !important",
            width: "100%",
        },
        img2container: {
            marginTop: "7.5px !important",
        }
    }
    ,
    [theme.breakpoints.down("sm")]: {
        firstcolumn: {
            width: '53.12% !important',
            float: "left",
            marginLeft: '2.66% !important',
            padding: "0px !important"
        },
        marginAuto: {
            padding: "0px 0px 0px 0px !important",
            width: '40.31% !important',
            marginLeft: '1.25% !important',
            marginRight: '2.66% !important'
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            width: "100%",
            margin: "0px 0px 20px 0px ",
        },
    },

    gridList: {
        width: "100%",
        height: "auto",
    },
    marginAuto: {
        padding: "0px 0px 0px 6px"
    },
    firstcolumn: {
        padding: "0px 8px 0px 0px"
    },
    [theme.breakpoints.up("lg")]: {
        gridList: {
            width: " 1170px",
            height: "auto",
        },
    },
    [theme.breakpoints.down("lg")]: {
        gridList: {
            width: " 500px",
            height: "auto",

        },
    },
    imgsmall: {
        width: " calc(50% - 5px) !important"
    },
    imagefull: {
        width: "100%",
        verticalAlign: "center"
    },
    daisyday: {
        marginTop: 0,
        width: "100%",
    },
    img2container: {
        marginTop: 0,
    }

}));



export default function ImageGridList(props) {
    const tileData = props.GridImage;
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Hidden mdUp>
                <Grid container>
                    <Grid item className={classes.firstcolumn} md={9} lg={0} xl={0}>
                        <Grid container >
                            <Grid item md={12} sm={12} xs={12}>
                                <div>
                                    <a className={classes.imagefull} href={tileData[0].navigateUrl}>
                                        <img className={classes.imagefull} src={tileData[0].img} /></a>
                                </div>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} >
                                <div>
                                    <a className={classes.imagefull} href={tileData[3].navigateUrl}>
                                        <img className={classes.daisyday} src={tileData[3].img} style={{ paddingTop: "2px" }} />
                                    </a>
                                </div>
                            </Grid>
                            <Grid item container style={{ paddingTop: "2px" }} className={classes.img2container}>
                                <Grid item md={6} sm={6} xs={6} className={classes.imgsmall} >
                                    <div style={{ paddingRight: "3px" }}>
                                        <a className={classes.imagefull} href={tileData[2].navigateUrl}>
                                            <img className={classes.imagefull} src={tileData[2].img} />
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item md={6} sm={6} xs={6} >
                                    <div style={{ paddingLeft: "3px" }}>
                                        <a className={classes.imagefull} href={tileData[1].navigateUrl}>
                                            <img className={classes.imagefull} src={tileData[1].img} />
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item className={classes.marginAuto} md={3} p0 lg={0} xl={0}>
                        <a className={classes.imagefull} href={tileData[4].navigateUrl}>
                            <img className={classes.imagefulllong} src={tileData[4].img} />
                        </a>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid container style={{ padding: "0px 15px" }}>
                    <Grid item className={classes.firstcolumn} md={9} lg={9} xl={9}>
                        <Grid container >
                            <Grid item md={8} lg={8} xl={8} >
                                <div style={{ padding: "0px 8px 0px 0px " }}>
                                    <a className={classes.imagefull} href={tileData[0].navigateUrl}>
                                        <img className={classes.imagefull} src={tileData[0].img} />
                                    </a>
                                </div>
                            </Grid>
                            <Grid item md={4} lg={4} xl={4}>
                                <div style={{ padding: "0px 0px 0px 8px " }}>
                                    <a className={classes.imagefull} href={tileData[1].navigateUrl}>
                                        <img className={classes.imagefull} src={tileData[1].img} style={{ paddingTop: "2px" }} />
                                    </a>
                                </div>
                            </Grid>
                            <Grid item container style={{ paddingTop: "10px" }}>
                                <Grid item md={4} lg={4} xl={4} className={classes.imgsmall} >
                                    <div style={{ padding: "0px 8px 0px 0px " }}>
                                        <a className={classes.imagefull} href={tileData[2].navigateUrl}>
                                            <img className={classes.imagefull} src={tileData[2].img} />
                                        </a>
                                    </div>
                                </Grid>
                                <Grid item md={8} lg={8} xl={8} >
                                    <div style={{ padding: "0px 0px 0px 8px " }}>
                                        <a className={classes.imagefull} href={tileData[3].navigateUrl}>
                                            <img className={classes.imagefull} src={tileData[3].img} />
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item className={classes.marginAuto} md={3} lg={3} xl={3}>
                        <a className={classes.imagefull} href={tileData[4].navigateUrl}>
                            <img className={classes.imagefull} src={tileData[4].img} />
                        </a>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    );
}