import React from 'react'
import {
    Grid,
    InputBase,
    Typography,
    InputAdornment,
    ListItem
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Seach from '../../assets/search'

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "scroll",
        backgroundColor: "#fff",
        // transition: "all 3s"
    },
    closeIcons: {
        fontSize: "16px",
        color: "#b2b1b1",
        padding: "4px 7px 5px 6px",
        border: "1px solid #b2b1b1",
        borderRadius: "100%"
    },
    conatinerFull: {
        padding: "18px 18px"
    },
    withinput: {
        fontSize: "1.0rem",
        padding: "0px 0px 0px 8px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: " 0px",
        height: "40px !important",
        fontFamily: "Robot-Black!important",

    },
    closeContainer: {
        padding: "0px 0px 12px 0px"
    },
    productTitle: {
        fontSize: "0.9rem",
        color: " #666",
        padding: "8px 8px 8px 12px"
    },
    TitleContainer: {
        width: "100%",
        backgroundColor: "#eaeaea",
        marginBottom: "12px"
    },
    productSublist: {
        fontSize: "0.82rem",
        color: " #666",
        padding: "6px 8px 6px 20px"
    },
    searchContainer: {
        maxWidth: "950px",
    }

}))
export default function ElasticSearch(props) {
    const classes = useStyles();
    const product = ["Bange", "Ring", "pendent", "Nosepin"]

    return (
        <Grid container className={classes.root}>
            <Grid xs={12} className={classes.conatinerFull}>
                <Grid container justify="flex-end" className={classes.closeContainer} onClick={() => props.handleClose()}>
                    <i style={{}} class={`${classes.closeIcons} fa fa-times closebus`}></i>
                </Grid>
                <Grid container justify="center" style={{ paddingBottom: "16px" }}>
                    <Grid item container className={classes.searchContainer}>
                        <InputBase
                            className={classes.withinput}
                            placeholder="Search"
                            endAdornment={<InputAdornment position="end"><div className={classes.searchcontainerplain}><Seach className={"searchPlain"} />
                            </div></InputAdornment>} />
                    </Grid>
                </Grid>
                <Grid container justify="center" >
                    <Grid container item className={classes.searchContainer}>
                        <Grid item className={classes.TitleContainer}>
                            <Typography className={classes.productTitle}>
                                Product
                        </Typography>
                        </Grid>
                        <Grid item>
                            {product.map(val => <Typography className={classes.productSublist}>
                                {val}
                            </Typography>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

