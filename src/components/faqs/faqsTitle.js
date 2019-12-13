import React from 'react';
import { Grid } from '@material-ui/core'
import './faqs.css'

class FaqsTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Grid style={{marginTop:"4%"}}>
            <Grid item xs={12} class="main">
                    <a href="#"><span>Frequently Asked Questions</span></a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="#"> Shipping And Returns</a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="#">   Product Care </a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="#"> Privacy & Cookie Policy </a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="#"> Terms & Conditions </a>
                </Grid>
                </Grid>
        )
    }


}
export default FaqsTitle;