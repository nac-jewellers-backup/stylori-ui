import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: "auto",
        padding: "0px 15px 0px 15px",
        backgroundColor: "#fff",
    },
    [theme.breakpoints.up('lg')]: {
        root: {
            display: 'flex',
            width: "1170px !important",
            margin: "auto",
            padding: "0px 15px 0px 15px",
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
    lazyload: {
        width: "100%",
        verticalAlign: " middle"
    }

}));



export default function ImageGridList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Hidden smDown>
                <Grid container md={12} sm={12} xs={12} style={{ margin: "15px 0px 20px 0px", padding: "0px 15px " }}>
                    <Grid item md={3} sm={5} xs={6} style={{ padding: '0px !important' }}>
                        <div style={{ padding: "0px 8px 0px 0px" }}>
                            <a href={props.GridImage[0].navigateUrl}>
                                <img className={classes.lazyload} alt="addSection" src={props.GridImage[0].img} />
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={9} sm={7} xs={6} >
                        <Grid container >
                            <Grid item md={4}>
                                <div style={{ padding: "0px 0px 16px 8px" }}>
                                    <a href={props.GridImage[1].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[1].img} />
                                    </a>
                                </div>
                            </Grid>

                            <Grid item md={8}>
                                <div style={{ padding: "0px 0px 16px 16px" }}>
                                    <a href={props.GridImage[2].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[2].img} />
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item md={8}>
                                <div style={{ padding: "0px 8px 0px 8px" }}>
                                    <a href={props.GridImage[3].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[3].img} />
                                    </a>
                                </div>
                            </Grid>

                            <Grid item md={4}>
                                <div style={{ padding: "0px 0px 0px 8px" }}>
                                    <a href={props.GridImage[4].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[4].img} />
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid container md={12} sm={12} xs={12} style={{ margin: "15px 0px 20px 0px" }}>
                    <Grid item md={3} sm={5} xs={6} style={{ padding: '0px !important' }}>
                        <div style={{}}>
                            <a href={props.GridImage[0].navigateUrl}>
                                <img className={classes.lazyload} alt="addSection" src={props.GridImage[0].img} />
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={9} sm={7} xs={6} >
                        <Grid container >
                            <Grid item md={4}>
                                <div style={{}}>
                                    <a href={props.GridImage[1].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[2].img} />
                                    </a>
                                </div>
                            </Grid>

                            <Grid item md={8}>
                                <div style={{}}>
                                    <a href={props.GridImage[2].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[3].img} />
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item sm={6} xs={6}>
                                <div style={{}}>
                                    <a href={props.GridImage[3].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[1].img} />
                                    </a>
                                </div>
                            </Grid>

                            <Grid item sm={6} xs={6}>
                                <div style={{}}>
                                    <a href={props.GridImage[4].navigateUrl}>
                                        <img className={classes.lazyload} alt="addSection" src={props.GridImage[4].img} />
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </div>
    );
}