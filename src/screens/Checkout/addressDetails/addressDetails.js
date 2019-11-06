import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style"

class Addressdetails extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        values: localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
    }
    componentWillReceiveProps(newprops) {
        this.setState({
            values: this.props.values
        })
    }
    Addressdetails = (props, value) => {
        const { setValues, values } = props;
        const cl = <input onChange={(e) => {
            setValues({
                ...values,
                checkValue1: !values.checkValue1
            })
        }} type='checkbox' checked={values.checkValue1} />
        const { classes } = props;
        return (
            <div className='pt-sm'>
                <Grid container spacing={12}>
                    <h5 className='title'> Shipping Address</h5>
                    <Grid item xs={12} lg={6}>
                        <div class="form-group tp ts">
                            {cl}
                            {!values.checkValue1 && 'If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form.'}
                            {values.checkValue1 && 'If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form.'}
                        </div><div className='card-adrs wd'
                            style={{ marginTop: "5px" }}>
                            <h4 class="card-title">
                                <i style={{ fontSize: "25px" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                {/* {name1.adrs_firstname} */}
                                <span class="address-name">{value.addressOne.firstname}{value.addressOne.lastname}
                                </span>
                                <i style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                    class="fa fa-pencil-square-o"></i>
                                <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                    onClick={() => {
                                        localStorage.removeItem('valuessetdata')
                                    }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                            </h4>
                            <p className={`detils-p ${classes.normalfonts}`} >
                                {value.addressOne.addressline1} <br />
                                {value.addressOne.city} <br />
                                {value.addressOne.state}-{value.addressOne.pincode} <br />IN</p>
                            <div className="card-foo">
                                <span className={`shipping-phonenumber ${classes.normalfonts}`}>
                                    +91 {value.addressOne.contactno} </span>
                                <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                    this.props.changevalue(3)
                                }}>Select and  Review </Button>
                            </div>
                        </div>
                    </Grid>

                    {!values.checkValue1 &&
                        <Grid item xs={12} lg={6}>
                            <h5 className='title'> Billing address</h5>
                            <br />
                            <div className='card-adrs wd' >
                                <h4 class="card-title">
                                    <i style={{ fontSize: "25px" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                    {/* {name1.adrs_firstname} */}
                                    <span class="address-name">
                                        {value.addressTwo.firstname ? value.addressTwo.firstname : value.addressOne.firstname}
                                        {value.addressTwo.lastname ? value.addressTwo.lastname : value.addressOne.lastname}
                                    </span>
                                    <i style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                        class="fa fa-pencil-square-o"></i>
                                    <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                        className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                                </h4>
                                <p className={`detils-p ${classes.normalfonts}`} >
                                    {value.addressTwo.addressline1 ? value.addressTwo.addressline1 : value.addressOne.addressline1}
                                    <br />
                                    {value.addressTwo.city ? value.addressTwo.city : value.addressOne.city}<br />
                                    {value.addressTwo.state ? value.addressTwo.state : value.addressOne.state}-
                                    {value.addressTwo.pincode ? value.addressTwo.pincode : value.addressOne.pincode}
                                    <br />IN</p>
                                <div className="card-foo">
                                    <span className={`shipping-phonenumber ${classes.normalfonts}`}>
                                        +91 {value.addressTwo.contactno ? value.addressTwo.contactno : value.addressOne.contactno}
                                    </span>
                                    <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                        this.props.changevalue(3)
                                    }}>Select and  Review </Button>
                                </div>
                            </div>
                            {/* <Button onClick={() => this.props.redirectForm()} className={`add-new-address ${classes.normalfonts}`}>
                                <div></div>
                                Add New Address
                            </Button> */}
                        </Grid>}
                </Grid>
                <Button onClick={() => this.props.redirectForm()} className={`add-new-address ${classes.normalfonts}`}>
                    <div></div>  Add New Address
                            </Button>
            </div>
        )
    }
    render() {
        let value = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
        return (
            <Container>
                {this.Addressdetails(this.props, value)}
            </Container>
        )
    }
}
export default withStyles(styles)(Addressdetails);