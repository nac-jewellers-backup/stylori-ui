import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './payment.css';
import Creditform from './creditForm';
import Debitform from './debitForm';
import CashonDelivey from './cashonDelivery';
import Netbanking from './netBanking';
var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
var visibleDivId = null;
class PaymentIndex extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    toggleVisibility = (divId) => {
        if (visibleDivId === divId) {
            visibleDivId = null;
        } else {
            visibleDivId = divId;
        }
        this.hideNonVisibleDivs();
    }
    hideNonVisibleDivs = () => {
        var i, divId;
        for (i = 0; i < divs.length; i++) { 
            divId = divs[i];
            if (visibleDivId === divId) {
                document.getElementById('divId').style.display = "block";
            } else {
                document.getElementById('divId').style.display = "none";
            }
        }
    }
    render() {
        return (
            <Container>
                <Grid container spacing={12} className="panel-body">
                    <Grid item lg={3} className='pay-index-subhed'>
                        <p onClick={this.toggleVisibility('Menu1')}>  <div className="cc-icon"></div> &nbsp; Credit card </p>
                        <p onClick={this.toggleVisibility('Menu2')}>  <div className="dc-icon"></div> &nbsp; Debit card </p>
                        <p onClick={this.toggleVisibility('Menu3')}>  <div className="net-bnk-icon"></div> &nbsp; Net Banking </p>
                        <p onClick={this.toggleVisibility('Menu4')}>  <div className="code-icon"></div>&nbsp;   Cash On Delivery (COD)</p>
                    </Grid>
                    <Grid item lg={7}>
                        <div id="Menu1" style={{ display: "none" }}>
                            <Creditform />
                        </div>
                        <div id="Menu2" style={{ display: "none" }}>
                            <Debitform />
                        </div>
                        <div id="Menu3" style={{ display: "none" }}>
                            <Netbanking />
                        </div>
                        <div id="Menu4" style={{ display: "none" }}>
                            <CashonDelivey />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
export default PaymentIndex;