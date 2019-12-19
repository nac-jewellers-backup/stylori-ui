import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Header from "components/Header/header";
import Footer from "components/Footer/Footer";
import '../../containers/index.css'
const useStyles = makeStyles(theme => ({
   
}));

export default function AboutPage(props) {
    const classes = useStyles();

    return(
        <Grid container>
             <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000" }}>
                <Header />
            </Grid>

        <Grid container class="aboutwidth" style={{paddingTop:"15px"}} >
            <Grid container class="aboutMargin">
            <Grid container class="aboutFifty">
            <Grid item style={{padding:"0px 15px"}}>
                <img style={{width:"100%"}} src="https://alpha-assets.stylori.com/images/static/about-us.jpg" />
            </Grid>
            </Grid>
            <Grid container class="aboutFifty">
            
            <Grid item style={{padding:"0px 15px"}}>
                <Typography variant="h5" style={{color:"#ed1165",marginBottom:"10px"}}>About Us</Typography>
                <Typography style={{fontSize:"12px",}}>
                Stylori is one of the pioneers of everyday jewellery in India. Featuring jewellery that is contemporary and chic, Stylori is an exclusively online store for the modern Indian woman.
<br />
Our jewellery is crafted from certified metals, gemstones and diamonds. With craftmanship honed over decades, Stylori's designs draw upon diverse influences from across India and the world. At our online store you can shop for jewellery from the comfort of your home worry-free with easy payment options and a reliable return policy.
                </Typography>
            </Grid>
            
            </Grid>
        </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: 20 }}>
                <Footer />
            </Grid>
        </Grid>
    )
}
