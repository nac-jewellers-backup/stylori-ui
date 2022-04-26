import React from 'react';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../faqs/faqs.css'
import ProductCareAccordian from '../../components/ProductCare/productCareAccordian';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        borderBottom: "1px solid #e8e8e8 "
    },
    titleColor: {
        color: '#ed1165',
        fontWeight: 600,
        marginTop: "3%",
        fontSize: "22px",
        fontFamily: "Roboto",
        // paddingTop:"10px",

    },
    titleColorsmall: {
        color: '#ed1165',
        fontWeight: 600,
        marginTop: "3%",
        fontSize: "16px",
        fontFamily: "Roboto",
        // paddingTop:"10px",

    },
    details: {
        padding: '10px 0px',
        borderTop: "0px",
        fontWeight: 500,
        fontSize: "14px"
    },

}));


export default function ProductCare(props) {
    const classes = useStyles();
    
    return (
        <>{props.ProductCare.faqs.map((val, index) => <Grid key={index} container>
            <Grid>
                <Typography className={val.font === "h2" ? classes.titleColor : classes.titleColorsmall} gutterBottom>{val.Title}</Typography>
            </Grid>
   
            {val.accordian.map((value, index) =>
                <ProductCareAccordian value={value} accordian ={val.accordianIcon} key={index}/>
                )}
        </Grid>)
        }</>
    )
}
