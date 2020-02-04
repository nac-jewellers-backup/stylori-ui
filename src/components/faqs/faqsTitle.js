import React from 'react';
import { Grid } from '@material-ui/core'
import './faqs.css'
import { NavLink } from "react-router-dom";

class FaqsTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid style={{ marginTop: "4%" }}>
                <Grid item xs={12} className="main">
                    <NavLink to={"/faqs"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >
                        <Grid className="router">
                            Frequently Asked Questions
                   </Grid>
                    </NavLink>
                </Grid>
                <Grid item xs={12} className="main">
                    <NavLink to={"/deliveryreturns"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >
                        <Grid className="router">
                            Shipping And Returns
                   </Grid>
                    </NavLink>
                </Grid>
                <Grid item xs={12} className="main">
                    <NavLink to={"/productcare"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >
                        <Grid className="router">
                            Product Care
                   </Grid>
                    </NavLink >
                </Grid>
                <Grid item xs={12} className="main">
                    <NavLink to={"/privacypolicy"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >
                        <Grid className="router">
                            Privacy & Cookie Policy
                   </Grid>
                    </NavLink>
                </Grid>
                <Grid item xs={12} className="main">
                    <NavLink to={"/termsconditions"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >
                        <Grid className="router">
                            Terms & Conditions
                   </Grid>
                    </NavLink>
                </Grid>
            </Grid>
        )
    }


}
export default FaqsTitle;