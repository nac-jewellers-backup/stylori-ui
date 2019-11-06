import React from 'react';
import './ordersummary.css'
import {
    Container,
    Button,
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input';
import { withStyles } from '@material-ui/core/styles';
import Checkoutcard from '../../../components/Checkout/CartCard';
const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            boxShadow: "none",
            marginBottom: "25px"
        },
        [theme.breakpoints.up('lg')]: {
            width: "95%",
            boxShadow: "none",
        },
    },
});
class Productlist extends React.Component {
    state = {
        message: "",
        from: "",
        to: "",
        expanded1: "panel1",
        expanded2: "panel2",
        expanded3: "panel3",
        values: localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
    }
    handleChange(event, name) {
        this.setState({
            [name]: event.target.value
        })
    }
    componentWillReceiveProps(newprops) {
        this.setState({
            values: this.props.values
        })
    }
    handleSubmit = (e) => {
        // e.preventDefault();
    }
    //  handleChangemodal = panel => (event, newExpanded) => {
    //     this.setState(newExpanded ? panel : false);
    //   };
    render() {
        const { classes } = this.props;
        let value = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressOne : {}
        const { expanded1, expanded2, expanded3 } = this.state;
        return (
            <Container>
                <div className='pt-sm'>
                    {/* <Checkoutcard /> */}
                    <div>
                        <Grid container spacing={12}>
                            <Grid item xs={12} lg={4}>

                                <ExpansionPanel className={classes.cart}
                                    square
                                    className={classes.cart}
                                    expanded={expanded1 === 'panel1'} >
                                    <ExpansionPanelSummary
                                        aria-controls="panel1d-content" id="panel1d-header"
                                        expandIcon={<span className='side-arrow-symbol '><i class="fa fa-sort-up sml"></i></span>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='order-ship'
                                    >
                                        <h5 className='title' style={{ textAlign: "center" }}> Shipping Address</h5>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className='order-ship pdng'>
                                        <div style={{ width: "100%" }}>

                                            <p className='dis-phn btm'>{value.firstname}{value.lastname}</p>
                                            <p className='dis-phn btm'><div
                                                style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis" }} >{value.addressline1}</div> &nbsp;{value.city}
                                                &nbsp;{value.state}-{value.pincode}</p>
                                            <p className='dis-phn'>Phone : +91  {value.contactno} </p>
                                        </div>

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>

                            <Grid item xs={12} lg={4}>
                                <ExpansionPanel
                                    square
                                    className={classes.cart}
                                    expanded={expanded2 === 'panel2'} >
                                    <ExpansionPanelSummary
                                        aria-controls="panel1d-content" id="panel1d-header"
                                        expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up sml" ></i></span>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='order-ship'
                                    >
                                        <h5 className='title' style={{ textAlign: "center" }}> Gift Wrap</h5>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className='order-ship pdng'>
                                        <div style={{ width: "100%" }}>
                                            <from onSubmit={(e) => this.handleSubmit(e)}>
                                                <Input
                                                    name="from"
                                                    type="text"
                                                    value={this.state.from}
                                                    placeholder="From"
                                                    required
                                                    onChange={(event) => this.handleChange(event, "from")}
                                                    helperText="From is required"

                                                />
                                                <Input
                                                    placeholder='To'
                                                    name="to"
                                                    type="text"
                                                    value={this.state.to}
                                                    required
                                                    onChange={(event) => this.handleChange(event)}
                                                />
                                                <Input
                                                    placeholder='Message'
                                                    name="message"
                                                    type="text"
                                                    value={this.state.message}
                                                    required
                                                    onChange={(event) => this.handleChange(event)}
                                                />
                                                <div className='login-butn'>
                                                    <Button className='apply-b' type="submit">Save</Button>
                                                </div>
                                            </from></div>

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>



                            <Grid item xs={12} lg={4}>
                                <ExpansionPanel className={classes.cart}
                                    square
                                    expanded={expanded3 === 'panel3'} >
                                    <ExpansionPanelSummary
                                        aria-controls="panel1d-content" id="panel1d-header"
                                        expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up sml" ></i></span>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className='order-ship'
                                    >
                                        <h5 className='title' style={{ textAlign: "center" }}> Gift Wrap</h5>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className='order-ship pdng'>
                                        <div style={{ width: "100%" }}>
                                            <Grid container spacing={12}>
                                                <Grid item xs={8} lg={8}>
                                                    <Input
                                                        placeholder='Enter Promocode'
                                                    />
                                                </Grid>
                                                <Grid item xs={4} lg={4}>
                                                    <Button className='ship-promo-btn'>Apply</Button>
                                                </Grid>
                                            </Grid>
                                        </div>

                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Productlist);
