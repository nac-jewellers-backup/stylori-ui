import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import {Certified} from './Certified'
import {Diversestyles} from './Diversestyles-pink'
import {Easyreturns} from './Easyreturns-pink'
import {Fromthehouseofnac} from './Fromthehouseofnac-pink.js'
import {Securepayments} from './Securepayments-pink'
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
    silverSvg:{
        "& svg":{
            fill:theme.palette.secondary.main
        }
        
    }
}));

const Logo = () =>{

}
export default function PaperSheet(props) {
    const isSilver = props.isSilver ? true : false
    const color = isSilver ? "#42ada4" : '#D91965'
    const classes = useStyles();
// "#D91965"
    return (
        
        <Grid container>
            <Grid item className={`silverSvg ${classes.mainsource} ${props.isSilver ? classes.silverSvg : ''}`} >
                {/* <img style={{ width: "70%", height: '100%' }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/fromthehouseofnac-pink.svg"} /> */}
                <Certified color={color} />
            </Grid>
            <Grid item className={classes.mainsource}>
                {/* <img style={{ width: "70%", height: '100%' }} src={"https://assets.stylori.com/images/Static%20Pages/Other%20Pages/certifiedjewellery-pink.svg"} /> */}
                <Diversestyles color={color}/>
            </Grid>
            <Grid item className={classes.mainsource}>
                {/* <img style={{ width: "70%", height: '100%' }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/securepayments-pink.svg"} /> */}
                <Easyreturns color={color}/>
            </Grid>
            <Grid item className={classes.mainsource}>
                {/* <img style={{ width: "70%", height: '100%' }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/diversestyles-pink.svg"} /> */}
                <Fromthehouseofnac color={color}/>
            </Grid>
            <Grid item className={classes.mainsource}>
                {/* <img style={{ width: "70%", height: '100%' }} src={"https://assets.stylori.com/images/Static+Pages/Other+Pages/easyreturns-pink.svg"} /> */}
                <Securepayments color={color}/>
            </Grid>
        </Grid>
    );
}