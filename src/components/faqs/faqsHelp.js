import React from 'react';
import { Grid } from '@material-ui/core'
import './faqs.css'
import Typography from '@material-ui/core/Typography';

class faqsHelp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid>
                {this.props.contactUs ? "" : <Grid item xs={12} className="submain">
                    <Typography style={{ fontSize: "17px", fontWeight: "600" }} gutterBottom>We're Here To Help?</Typography>
                </Grid>}
                <Grid item xs={12} container alignItems="center">
                    <span item xs={3} className="phone" >
                    </span>
                    <a href="tel:18001020330" style={{ color: '#394578', fontSize: "13px", paddingLeft: "6px", textDecoration: "none" }}>1800 102 0330</a>

                </Grid>
                <Grid item xs={12} container alignItems="center">
                    <span item xs={3} className="whatsapp">

                    </span>
                    <p style={{ color: "#394578", fontSize: "13px" }}><span style={{ paddingLeft: "6px", paddingTop: "14px" }}>+91 99526 25252</span></p>
                </Grid>
                <Grid item xs={12} container alignItems="center">
                    <span item xs={3} className="mail">

                    </span>
                    <a href="mailto:hello@stylori.com" style={{ color: "#394578 ", fontSize: "13px", paddingLeft: "6px", textDecoration: "none" }}>hello@stylori.com</a>
                </Grid>
                <Grid item xs={12} container alignItems="center" style={{ padding: "6px 0px 0px 2px" }}>
                    <span item xs={3} class="chat">
                    </span>
                    <a href="#" style={{ color: "#394578", fontSize: "13px", paddingLeft: "6px", textDecoration: "none" }}>Start live chat </a>
                </Grid>

            </Grid>
        )
    }
}
export default faqsHelp;