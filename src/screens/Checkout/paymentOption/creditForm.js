import React from "react";
import {
    Grid,
    Button,
    Hidden,
    Container,
    ExpansionPanelSummary,
    ExpansionPanel,
    Typography,
    TextField
} from '@material-ui/core';
import './payment.css'
import { Input } from '../../../components/InputComponents/TextField/Input'
import Buynowbutton from "../../../components/Buynow/buynowbutton";
import { CartContext } from 'context'
import cart from 'mappers/cart'
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
                        <Grid spacing={12} lg={12} container>
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
                                <Grid container lg={12} xs={12}>
                                    <Grid item lg={4} xs={12}>
                                        <Input
                                            name="expiry"
                                            type="text"
                                            value={this.state.expiry}
                                            placeholder="Expiry MM/YY"
                                            onChange={(event) => this.handleChange(event, "expiry")}
                                            onKeyPress={(e) => this.handleKeyPress(e, "expiry")}
                                        />
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
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
                                        <Grid spacing={12} container>
                                            <Grid item lg={6} xs={4}>
                                                <div className="credit-img">
                                                    <img className="imd-credit" src="https://assets.stylori.com/images/static/icons/cvv.png" />
                                                </div>
                                            </Grid>
                                            <Grid item lg={6} xs={8}>
                                                <div className="credit-contnt">
                                                    Last 3 digits printed on the back of the card.
                                        </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <div className="credit-btn-div">
                                    <Button className="credit-button" type="submit">Pay Now</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

export default (Creditform)
