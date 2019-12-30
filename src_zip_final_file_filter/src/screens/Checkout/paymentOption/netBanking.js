import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import './payment.css';
import SimpleSelect from '../../../components/InputComponents/Select/Select';
class Netbanking extends React.Component {
    render() {
        return (
            <Container>
                <Grid spacing={12} container lg={12} xs={12} style={{ textAlign: "center" }}>
                    <Grid item lg={4} xs={4}>
                        <img src=" https://assets-cdn.stylori.com/images/static/icons/bank_logo_02.png" />
                    </Grid>
                    <Grid item lg={4} xs={4}>
                        <img src="https://assets-cdn.stylori.com/images/static/icons/bank_logo_03.png" />
                    </Grid>
                    <Grid item lg={4} xs={4}>
                        <img src="https://assets-cdn.stylori.com/images/static/icons/bank_logo_04.png" />
                    </Grid>
                    <Grid item lg={2} />
                    <Grid item lg={8} xs={12}>
                        <SimpleSelect name={['India']}
                            selectData={[
                                'ICICI Bank',
                                "AXIS Bank",
                                'YES Bank',
                                'Deutsche Bank',
                                'Union Bank',
                                'IDBI Bank',
                                'Federal Bank',
                                'HDFC Bank',
                                'Indian Bank',
                                'Andhra Bank'
                            ]} /><br />
                        <span className="font-netbanking"> We will redirect you to your bank website to authorize the payment. </span>
                        <div className="credit-btn-div">
                            <Button className="credit-button" type="submit">Continue to Pay</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
export default Netbanking;