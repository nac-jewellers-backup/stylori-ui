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
import '../Checkout/Cart.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        return (
            <>
                {/* allorderdata.nodes */}
                <div className='pt-sm checkout-ovralldiv-media' >
                    {allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length > 0 ?
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
                                    <div style={{ float: "right" }}><Button className="bton_submit">SUBMITTED</Button> </div></Typography>
                                    </ExpansionPanelSummary >
                                    <ExpansionPanelDetails
                                    >
                                        <>
                                            <div style={{ width: "100%" }}>
                                                <Grid container spacing={12} lg={12} style={{ textAlign: "center" }}>
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
                                            </div>
                                            {/* <br />
                                            <Grid container spacing={12} lg={12} style={{ padding: "30px" }}>
                                                <Grid item lg={3}>
                                                    <div className="wishlist_img">
                                                        <img className="viewport-img" src="https://assets-cdn.stylori.com/144x144/images/product/SGC033/SGC033-1Y.jpg"
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item lg={4}>
                                                    <Grid container spacing={12} lg={12} style={{ padding: "30px" }}>
                                                        1 Gm Balaji Gold coin-22Kt
                                                        <Grid item lg={6}>
                                                            <Typography className="subhesder">1 Gm dfd</Typography>
                                                        </Grid>
                                                        <Grid item lg={6}>
                                                            <Typography className="subhesder">1 Gm dfd</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item lg={3} style={{ padding: "30px" }}>
                                                    <Grid container spacing={12} lg={12}>
                                                        <Typography className="subhesder">1 Gm dfd</Typography>
                                                        <Typography className="subhesder">1 Gm Balaji Gold coin-22Kt</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid style={{ padding: "30px" }} item lg={2}>879,989089</Grid>
                                            </Grid> */}
                                        </>
                                        {/* {val.paymentStatus} */}
                                        {/* {JSON.stringify(this.props.allorderdata)} */}
                                        {/* changePanel */}
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))}
                        </div> : <div style={{ textAlign: "center", color: "#394578" }}>Nothing added your Orders</div>}

                </div>
            </>
        )
    }
}


export default Allorders;
