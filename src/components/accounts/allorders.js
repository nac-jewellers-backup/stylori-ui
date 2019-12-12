import React from 'react';
import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar,
    Grid,
    Button
} from '@material-ui/core';
// import "../../components/Checkout/Cart.css";
import "./accounts.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { valayal } from 'mappers/dummydata';

class Allorders extends React.Component {
    state = {
        expanded: 1,
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: 'panel' + panel,
        });
    };

    changePanel = (panel, mailId) => {
        this.setState({
            expanded: 'panel' + panel,
            expandedlimit: panel,
        })
    }
    render() {
        const { expanded, mailId, expandedlimit } = this.state;
        const { allorderdata } = this.props;
        debugger
        return (
            <>
                {/* allorderdata.nodes */}
                <div className='pt-sm checkout-ovralldiv-media' >
                    <div style={{ marginTop: "20px" }}>
                        {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.map(val => (
                            <ExpansionPanel
                                square
                                expanded={expanded === 'panel1'}
                                onChange={this.handleChange(1)}
                                style={{ boxShadow: "none" }}
                            >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className='arrow-chek' />} className='ckcut-main-body'>
                                    <Typography className='text-chck'>

                                        Order Number : #900002356 &nbsp;|&nbsp; Order Date : 27 February 2019
                                        <div style={{float:"right"}}><Button className="bton_submit">SUBMITTED</Button> </div></Typography>
                                </ExpansionPanelSummary >
                                <ExpansionPanelDetails
                                >
                                    <Grid container spacing={12} style={{ textAlign: "center" }}>
                                        <Grid item lg={6}>
                                            Order Number	: #900002356
                                            Order Date	: February 27
                                            Payment Method	: Cash On Delivery
                                    </Grid>
                                        <Grid item lg={6}>
                                            Shipping Address :
                                            dinbesh qdfh,
                                            ngnwgln ,
                                            Chennai - 600018
                                    </Grid>
                                    </Grid>
                                    {/* {val.paymentStatus} */}
                                    {/* {JSON.stringify(this.props.allorderdata)} */}
                                    {/* changePanel */}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}


export default Allorders;
