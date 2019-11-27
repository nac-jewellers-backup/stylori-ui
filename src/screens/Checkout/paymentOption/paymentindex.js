import React from 'react';
import { Container, Grid, Hidden, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import './payment.css';
import Creditform from './creditForm';
import Debitform from './debitForm';
import CashonDelivey from './cashonDelivery';
import Netbanking from './netBanking';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
class PaymentIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: 'Creditform',
        };
    }

    toggleCollapsed = (name) => {
        this.setState({ isActive: [name] })

    }

    render() {
        return (
            <div className="payment-div">
                <Container>
                    <Hidden smDown>
                        <Grid container spacing={12} className="panel-body">
                            <Grid item lg={3}>
                                <div className="pay-index-subhed">
                                    <p onClick={() => this.toggleCollapsed('Creditform')}> <div className="cc-icon"></div> &nbsp; Credit card </p>
                                    <p onClick={() => this.toggleCollapsed('Debitform')}>  <div className="dc-icon"></div> &nbsp; Debit card </p>
                                    <p onClick={() => this.toggleCollapsed('Netbanking')}>  <div className="net-bnk-icon"></div> &nbsp; Net Banking </p>
                                    <p onClick={() => this.toggleCollapsed('CashonDelivey')}>  <div className="code-icon"></div>&nbsp;   Cash On Delivery (COD)</p>
                                </div>
                            </Grid>
                            <Grid item lg={7}>
                                <div style={{ marginTop: "20px", width: "100%" }}>
                                    {
                                        this.state.isActive == 'Creditform' &&
                                        <Creditform />
                                    }

                                    {
                                        this.state.isActive == 'Debitform' && <Debitform />
                                    }
                                    {
                                        this.state.isActive == 'Netbanking' && <Netbanking />
                                    }
                                    {
                                        this.state.isActive == 'CashonDelivey' && <CashonDelivey />
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Hidden>

                </Container>
                <Hidden mdUp>
                    <ExpansionPanel className="respone-div">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head"><div className="cc-icon">&nbsp;</div>Credit card  </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Creditform />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className="respone-div">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="dc-icon"></div> &nbsp; Debit card </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Debitform />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className="respone-div">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="net-bnk-icon"></div> &nbsp; Net Banking  </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <Netbanking />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel className="respone-div">
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className="py-head">  <div className="code-icon"></div>&nbsp;   Cash On Delivery (COD) </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: "0px" }}>
                            <CashonDelivey data={this.props.data}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Hidden>
            </div>
        )
    }
}
export default PaymentIndex;