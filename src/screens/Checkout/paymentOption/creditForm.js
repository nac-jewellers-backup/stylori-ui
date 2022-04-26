import React from "react";
import {
    Grid,
    Button,
    Container,
} from '@material-ui/core';
import './payment.css'
import { Input } from '../../../components/InputComponents/TextField/Input';

class Creditform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            card_num: "",
            card_holder: "",
            expiry: "",
            cv: "",
        }
    }
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value,
            // checked: !this.state.checked
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
    }
    handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };
    render() {


        return (
            <div>
                <Container>
                    <form onSubmit={(e) => this.handleSubmit()}>
                        <Grid  lg={12} container>
                            <Grid item lg={12} xs={12}>
                                <Input
                                    name="card_num"
                                    type="text"
                                    value={this.state.card_num}
                                    placeholder="Card Number*"
                                    required
                                    onChange={(event) => this.handleChange(event, "card_num")}
                                    onKeyPress={(e) => this.handleKeyPress(e, "card_num")}
                                />
                                <Input
                                    name="card_holder"
                                    type="text"
                                    value={this.state.card_holder}
                                    placeholder="Card Holder Name*"
                                    required
                                    onChange={(event) => this.handleChange(event, "card_holder")}
                                />
                                  <Input
                                    name="expiry"
                                    type="text"
                                    value={this.state.expiry}
                                    placeholder="Expiry MM/YY"
                                    onChange={(event) => this.handleChange(event, "expiry")}
                                    onKeyPress={(e) => this.handleKeyPress(e, "expiry")}
                                    />
                                <Grid container lg={12} xs={12}>
                                    <Grid item lg={8} xs={12}>
                                        <Input
                                            name="cv"
                                            type="text"
                                            value={this.state.cv}
                                            placeholder="CVV"
                                            onChange={(event) => this.handleChange(event, "cv")}
                                            onKeyPress={(e) => this.handleKeyPress(e, "cv")}
                                        />
                                    </Grid>
                                    <Grid item lg={4} xs={12}>  
                                                <div className="credit-img" style={{margin:10}}>
                                                    <img className="imd-credit" src="https://assets.stylori.com/images/static/icons/cvv.png" loading="lazy" alt="...." />
                                                </div>
                                    </Grid>
                                    <Grid item>
                                    <div className="credit-contnt">
                                                    Last 3 digits printed on the back of the card.
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <Button className="credit-button" type="submit" style={{width:"100%"}}>Pay Now</Button>    
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

export default (Creditform)
