import React from 'react';
import { Grid } from '@material-ui/core'
import './faqs.css'

class FaqsTitle extends React.Component {
    constructor(props) {

        super(props);
    }
    render() {
        return (
            <Grid style={{ marginTop: "4%" }}>
                <Grid item xs={12} class="main">
                    <a href="/faqs"><span>Frequently Asked Questions</span></a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="/deliveryreturns"> Shipping And Returns</a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="/productcare">   Product Care </a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="/privacypolicy"> Privacy & Cookie Policy </a>
                </Grid>
                <Grid item xs={12} class="main">
                    <a href="/termsconditions"> Terms & Conditions </a>
                </Grid>
            </Grid>
        )
    }


}
export default FaqsTitle;