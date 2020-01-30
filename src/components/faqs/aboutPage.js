import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Header from "components/SilverComponents/Header";
import Footer from "components/Footer/Footer";
import '../../containers/index.css'
import { aboutus } from '../../containers/dummydatafaqs';

const useStyles = makeStyles(theme => ({

}));

export default function AboutPage(props) {
    const classes = useStyles();

    return (
        <Grid container>
            <Header />

            <Grid container className="aboutwidth" style={{ paddingTop: "15px" }} >
                <Grid container className="aboutMargin">
                    <Grid container className="aboutFifty">
                        <Grid item style={{ padding: "10px" }}>
                            <img style={{ width: "100%" }} src={aboutus.data.img} />
                        </Grid>
                    </Grid>
                    <Grid container className="aboutFifty">

                        <Grid item style={{ padding: "10px" }}>
                            <Typography variant="h5" style={{ color: "#ed1165", marginBottom: "10px" }}>About Us</Typography>
                            <Typography style={{ color: "rgb(102, 102, 102)", fontSize: "12px" }} dangerouslySetInnerHTML={{ __html: aboutus.data.content }}>

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
