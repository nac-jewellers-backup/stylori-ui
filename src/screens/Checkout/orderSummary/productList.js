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
    const { handlers, values, val, data, setval } = useGift();
    const { classes } = props;
    let value = localStorage.getItem("select_addres") ? JSON.parse(localStorage.getItem("select_addres")) : {};
    const { expanded1, expanded2, expanded3 } = val;

    const handleChange1 = panel => (event) => {
        var values = val.expanded1 === panel ? null : panel
        val['expanded1'] = values
        setval({ val, ...val, })
    };
    const handleChange2 = panel => (event) => {
        var values = val.expanded2 === panel ? null : panel
        val['expanded2'] = values
        setval({ val, ...val, })
    };
    const handleChange3 = panel => (event) => {
        var values = val.expanded3 === panel ? null : panel
        val['expanded3'] = values
        setval({ val, ...val, })
    };
    return (
        <Grid>
            <div className='pt-sm'>
                {/* <Checkoutcard /> */}
                <div>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={4} sm={6}>

                            <ExpansionPanel
                                style={{ marginTop: "12px" }}
                                class="extra-box"
                                className={classes.cart}
                                square
                                className={classes.cart}
                                expanded={expanded1 === 1}
                                onChange={handleChange1(1)} >
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
                                            {/* {aa ? aa + ' ' : ""} */}
                                            {value && value.firstname}
                                            &nbsp;
                                        {value && value.lastname}
                                        </p>
                                        <p className='dis-phn btm'><div
                                            style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis" }} >
                                            {value && value.addressline1}
                                        </div>

                                            {value && value.city} <br />
                                            {value.state + "-"}
                                            {value && value.pincode}<br />IN</p>
                                        <p className='dis-phn'>
                                            Phone : +91 {value.contactNumber ? value.contactNumber : value.contactno} </p>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>

                        <Grid item xs={12} lg={4} sm={6} >
                            <ExpansionPanel
                                square
                                class="extra-box"
                                style={{ marginTop: "12px" }}
                                className={classes.cart}
                                expanded={expanded2 === 1}
                                onChange={handleChange2(1)} >
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
                                                value={values.gift_from}
                                                placeholder="From"
                                                required
                                                disabled={data && data.message === "Success" || values.haveAlready ?true:false}
                                                onChange={e => handlers.handleChange('gift_from', e.target.value)}
                                                helperText="From is required"

                                            />
                                            <Input
                                                helperText="To is required"
                                                placeholder='To'
                                                name="to"
                                                type="text"
                                                value={values.gift_to}
                                                required
                                                disabled={data && data.message === "Success" || values.haveAlready ?true:false}
                                                onChange={e => handlers.handleChange('gift_to', e.target.value)}
                                            />
                                            <Input
                                                helperText="Message is required"
                                                placeholder='Message'
                                                name="message"
                                                type="text"
                                                value={values.message}
                                                required
                                                disabled={data && data.message === "Success" || values.haveAlready ?true:false}
                                                onChange={e => handlers.handleChange('message', e.target.value)}
                                            />
                                            <div className='login-butn'>
                                                {data && data.message === "Success" || values.haveAlready ?
                                                    <Button style={{ filter: "grayscale(5)" }} disabled className='apply-b' type="submit">Saved</Button> :
                                                    <Button className='apply-b' type="submit">Save</Button>}

                                            </div>
                                        </form>
                                    </div>

                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                        <Grid item xs={12} lg={4} sm={6}>
                            <ExpansionPanel style={{ marginTop: "12px" }} className={classes.cart}
                                square
                                class="extra-box"
                                expanded={expanded3 === 1}
                                onChange={handleChange3(1)} >
                                <ExpansionPanelSummary

                                    aria-controls="panel1d-content" id="panel1d-header"
                                    expandIcon={<span className='side-arrow-symbol'><i class="fa fa-sort-up sml" ></i></span>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className='order-ship'
                                >
                                    <h5 className='title' style={{ textAlign: "center" }}> Promo Code</h5>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                    style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}
                                    className='order-ship pdng'>
                                    <Promo />

                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
    )
}
export default withStyles(styles)(Productlist);
