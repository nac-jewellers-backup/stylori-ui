import React from 'react';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './faqs.css'

import AccordianElement from '../../components/faqs/accordianElement'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        borderBottom: "1px solid #e8e8e8 "
    },
    titleColor: {
        color: '#ed1165',
        fontWeight: 600,
        // marginTop: "3%",
        fontSize: "21px",
        fontFamily: "Roboto",
        // paddingBottom: "10px"
        
    },
    titleColorsmall: {
        color: '#ed1165',
        fontWeight: 600,
        // marginTop: "3%",
        fontSize: "15px",
        fontFamily: "Roboto",
        paddingTop: "10px"
    },
  

}));


export default function Accordian(props) {
    const classes = useStyles();

    // const handleClick = () => {
    //     setOpen(!open);
    // };
    return (
        <>{props.faqs.faqs.map((val, i) => <Grid key={i} container>
            <Grid>
                <Typography className={val.font === "h2" ? classes.titleColor : classes.titleColorsmall} gutterBottom>{val.Title}</Typography>
            </Grid>
            {val.accordian.map((value, index) =>
                <AccordianElement value={value} accordian ={val.accordianIcon} keyvalues={index} opened={false} key={index} />
            )}
        </Grid>)
        }</>
    )
}
