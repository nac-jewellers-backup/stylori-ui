import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import styloriGagets from '../../assets/styloriGagets.png'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "5%",
        margin: "auto"
    },
    houseofnac: {
        // backgroundImage: 'url(' + styloriGagets + ')',
        // backgroundPosition: "-520px 52px",
        width: "60%",
        height: "auto",
        margin: " 0 auto"
    }
}));

export default function ListDividers() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            {/* <Grid item style={{ width: "60%", margin: "auto" }}>
                wg
                <div className={classes.houseofnac}></div>
            </Grid> */}
            <img className={classes.houseofnac} src={styloriGagets} />
        </Grid>
    );
}
