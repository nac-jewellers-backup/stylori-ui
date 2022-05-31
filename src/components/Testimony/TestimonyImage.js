import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: "auto",
        backgroundColor: "#fff",
    },
    [theme.breakpoints.up('lg')]: {
        root: {
            display: 'flex',
            width: "1170px !important",
            margin: "auto",
            backgroundColor: "#fff",
        }
    },
    [theme.breakpoints.down('sm')]: {
        root: {
            display: 'flex',
            margin: "auto",
            padding: "0px !important",
            backgroundColor: "#fff",
        }
    },
    [theme.breakpoints.only('sm')]: {
        lazyload2: {
            width: "100%",
            verticalAlign: " middle",
            marginTop: '14px !important'
        }
    },
    lazyload: {
        width: "100%",
        verticalAlign: " middle"
    },
    firstColumn: {
        width: '40.31% !important',
        float: 'left',
        marginRight: '1.25% !important',
        marginLeft: '2.66% !important'
    },
    secondcolumn: {
        width: '53.12% !important',
        float: 'right',
        marginRight: '2.66% !important'
    },
    lazyload2: {
        width: "100%",
        verticalAlign: " middle",
        marginTop: '6.50575px '
    }
}));



export default function ImageGridList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Hidden smDown>
                <Grid container xs={12} style={{ margin: "15px 0px 20px 0px", padding: "0px 15px " }}>
                    <Grid item md={3} sm={5} xs={6} style={{ padding: '0px !important' }}>
                        <div style={{ padding: "0px 8px 0px 0px" }}>
                            <a href={props.GridImage[0].navigateUrl}>
                                <img className={classes.lazyload} alt="addSection" src={props.GridImage[0].img} loading="lazy" />
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={9} sm={7} xs={6} >
                        <Grid container >
                            <Grid item md={4}>
                                <div style={{ padding: "0px 0px 16px 8px" }}>
                                    <a href={props.GridImage[1].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[1].img} loading="lazy" />
                                    </a>
                                </div>
                            </Grid>

                            <Grid item md={8}>
                                <div style={{ padding: "0px 0px 16px 16px" }}>
                                    <a href={props.GridImage[2].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[2].img} loading="lazy" />
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item md={8}>
                                <div style={{ padding: "0px 8px 0px 8px" }}>
                                    <a href={props.GridImage[3].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[3].img} loading="lazy"  />
                                    </a>
                                </div>
                            </Grid>

                            <Grid item md={4}>
                                <div style={{ padding: "0px 0px 0px 8px" }}>
                                    <a href={props.GridImage[4].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[4].img} loading="lazy" />
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid container md={12} sm={12} xs={12} style={{ margin: "15px 0px 20px 0px" }}>
                    <Grid item className={classes.firstColumn}>
                        <a href={props.GridImage[0].navigateUrl}>
                            <img className={classes.lazyload} alt="addSection" src={props.GridImage[0].img} loading="lazy" />
                        </a>
                    </Grid>
                    <Grid item className={classes.secondcolumn}>
                        <Grid container >
                            <Grid item md={4}>
                                <a href={props.GridImage[1].navigateUrl}>
                                    <img className={classes.lazyload} alt="addSection" src={props.GridImage[2].img} loading="lazy"/>
                                </a>
                            </Grid>

                            <Grid item md={8}>
                                <a href={props.GridImage[2].navigateUrl}>
                                    <img className={classes.lazyload2} alt="addSection" src={props.GridImage[3].img} loading="lazy" />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.lazyload2}>
                            <Grid md={6} sm={6} xs={6} item style={{ width: 'calc(50% - 5px) !important', padding: "0px 4px 0px 0px" }}>
                                <a href={props.GridImage[3].navigateUrl}>
                                    <img className={classes.lazyload} alt="addSection" src={props.GridImage[1].img} loading="lazy" />
                                </a>
                            </Grid>

                            <Grid md={6} sm={6} xs={6} item style={{ width: 'calc(50% - 5px) !important', padding: "0px 0px 0px 4px" }}>
                                <a href={props.GridImage[4].navigateUrl}>
                                    <img className={classes.lazyload} alt="addSection" src={props.GridImage[4].img} loading="lazy" />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </div>
    );
}