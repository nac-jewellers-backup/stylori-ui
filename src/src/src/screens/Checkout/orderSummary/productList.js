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
import useGift from "./usegift"
import Promo from './promocode'
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
const Productlist = (props) => {
    return <ProductlistComponent  {...props} />
}
const ProductlistComponent = (props) => {
    const { handlers, values, val } = useGift();
    const { classes } = props;
    let value = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
    const aa = localStorage.getItem("m") ? localStorage.getItem("m") : ""
    let lgn = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
    const { expanded1, expanded2, expanded3 } = val;
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
                                        <p className='dis-phn btm'>
                                            {aa ? aa + ' ' : ""}
                                            {lgn && lgn.firstname ? lgn.firstname : value && value.addressOne && value.addressOne.firstname}&nbsp;{lgn && lgn.lastname ? lgn.lastname : value && value.addressOne && value.addressOne.lastname}
                                        </p>
                                        <p className='dis-phn btm'><div
                                            style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis" }} >
                                            {lgn && lgn.addressline1 ? lgn.addressline1 : value && value.addressOne && value.addressOne.addressline1}</div>

                                            {lgn && lgn.city ? lgn.city : value && value.addressOne && value.addressOne.city} <br />
                                            {lgn && lgn.state ? lgn.state : value && value.addressOne && value.addressOne.state}-{lgn && lgn.pincode ? lgn.pincode : value && value.addressOne && value.addressOne.pincode} <br />IN</p>
                                        <p className='dis-phn'>Phone :
                                        +91 {lgn && lgn.contactNumber ? lgn && lgn.contactNumber : value && value.addressOne && value.addressOne.contactno} </p>
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
                                        <form action="javascript:void(0)" onSubmit={() => handlers.handleSubmit()}>
                                            <Input
                                                name="from"
                                                type="text"
                                                value={values.from}
                                                placeholder="From"
                                                required
                                                onChange={e => handlers.handleChange('from', e.target.value)}
                                                helperText="From is required"

                                            />
                                            <Input
                                                helperText="To is required"
                                                placeholder='To'
                                                name="to"
                                                type="text"
                                                value={values.to}
                                                required
                                                onChange={e => handlers.handleChange('to', e.target.value)}
                                            />
                                            <Input
                                                helperText="Message is required"
                                                placeholder='Message'
                                                name="message"
                                                type="text"
                                                value={values.message}
                                                required
                                                onChange={e => handlers.handleChange('message', e.target.value)}
                                            />
                                            <div className='login-butn'>
                                                <Button className='apply-b' type="submit">Apply</Button>
                                            </div>
                                        </form>
                                    </div>

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
                                    <Promo />

                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}
export default withStyles(styles)(Productlist);
