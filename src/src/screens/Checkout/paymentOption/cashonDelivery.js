import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './payment.css';
import SimpleSelect from '../../../components/InputComponents/Select/Select';
class CashonDelivey extends React.Component {
    render() {
        return (
            <Container>
                <Grid spacing={12} container lg={12} xs={12} style={{ width: "100%" }}>
                    <Grid item lg={12} xs={12}>
                        <div className="amout-pay"> Amount Payable </div>
                        <i class="fa fa-inr rups" aria-hidden="true">&nbsp;</i>
                        <div className="credit-btn-div">
                            <Button className="credit-button" type="submit">Place COD order</Button>
                        </div>

                    </Grid>
                    <div className="code-btn-top">
                        COD orders are subject to telephonic verification.
                        </div>
                </Grid>

            </Container>
        )
    }
}
export default CashonDelivey;