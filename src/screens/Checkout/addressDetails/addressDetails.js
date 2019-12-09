import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style"
class Addressdetails extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    // state = {
    //     values: localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : {}
    // }
    // componentWillReceiveProps(newprops) {
    //     this.setState({
    //         values: this.props.values
    //     })
    // }
    Addressdetails = (props, value) => {
        const { setValues, values } = props;
        const cl = <input onChange={(e) => {
            setValues({
                ...values,
                checkValue1: !values.checkValue1
            })
        }} type='checkbox' checked={values.checkValue1} />
        const { classes } = props;
        const aa = localStorage.getItem("m") ? localStorage.getItem("m") : ""
        const aa1 = localStorage.getItem("m1") ? localStorage.getItem("m1") : ""
        let lgn = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[0] : ""
        let lgn1 = JSON.parse(localStorage.getItem("vals")) ? JSON.parse(localStorage.getItem("vals")).data.allUserAddresses.nodes[1] : ""

        var objj = {};
        var objj1 = {};

        objj['addressOne'] = value.addressOne || lgn
        objj1['addressTwo'] = value.addressTwo || lgn1

        var chk_locl = (value && value.addressOne ? value.addressOne.pincode || value.addressOne.addressline1 || value.addressOne.lastname : chk_locl2) ||
            (lgn ? lgn.addressline1 || lgn.pincode || lgn.lastname : chk_locl2)
        var chk_locl2 = (value && value.addressTwo ? value.addressTwo.pincode || value.addressTwo.addressline1 || value.addressTwo.lastname : chk_locl) ||
            (lgn1 ? lgn1.pincode || lgn1.addressline1 || lgn1.lastname : chk_locl)

        const dlt_locl1 = (dlt) => {
            debugger
            if (chk_locl !== undefined && chk_locl !== null && chk_locl2 !== undefined && chk_locl2 !== null && chk_locl !== chk_locl2) {
                localStorage.removeItem("valuessetdata")
                if (objj.addressOne && objj.addressOne.lastname.length > 0) {
                    localStorage.setItem("valuessetdata", JSON.stringify(objj ? objj : localStorage.removeItem("valuessetdata")))
                }
                return false
            } else {
                localStorage.removeItem("valuessetdata")
                if (values.addrs === false) {
                    debugger
                    values["addrs"] = true
                    setValues({
                        ...values,
                        values
                    })
                }
                // this.props.redirectForm()
                return false
            }
        }
        const dlt_locl2 = (dlt) => {
            debugger
            if (chk_locl2 !== undefined && chk_locl2 !== null && chk_locl !== undefined && chk_locl !== null && chk_locl !== chk_locl2) {
                localStorage.removeItem("valuessetdata")
                if (objj1.addressTwo && objj1.addressTwo.lastname.length > 0) {
                    localStorage.setItem("valuessetdata", JSON.stringify(objj1 ? objj1 : localStorage.removeItem("valuessetdata")))
                }
                return false
            } else {
                localStorage.removeItem("valuessetdata")
                if (values.addrs === false) {
                    debugger
                    values["addrs"] = true
                    setValues({
                        ...values,
                        values
                    })
                }
                // this.props.redirectForm()
                return false
            }
        }

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
                                <span class="address-name">
                                    {aa ? aa + ' ' : aa1 + ' '}
                                    {value && value.addressOne && value.addressOne.firstname || lgn && lgn.firstname ? value && value.addressOne && value.addressOne.firstname || lgn.firstname : value && value.addressTwo && value.addressTwo.firstname || value && value.addressOne && value.addressOne.firstname}
                                    &nbsp;
                                    {value && value.addressOne && value.addressOne.lastname || lgn && lgn.lastname ? value && value.addressOne && value.addressOne.lastname || lgn.lastname : value && value.addressTwo && value.addressTwo.lastname || value && value.addressOne && value.addressOne.lastname}
                                </span>
                                {/* <i onClick={() => {
                                    localStorage.setItem("isedit", 1)
                                    this.props.redirectForm()
                                }} style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                    class="fa fa-pencil-square-o"></i> */}
                                <i onClick={() => {
                                    // localStorage.setItem("isedit", 1)
                                    this.props.redirectForm()
                                }} style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                    class="fa fa-pencil-square-o"></i>
                                {localStorage.getItem("valuessetdata") ? <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                    onClick={() => {
                                        // localStorage.removeItem("valuessetdata")
                                        // dlt_locl1()
                                        dlt_locl2()
                                        // localStorage.removeItem('vals')
                                        window.location.reload();
                                    }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i> : ""}
                                {localStorage.getItem("vals") ? <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                    onClick={() => {
                                        alert('Address already in use')
                                    }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i> : ""}
                            </h4>
                            <p className={`detils-p ${classes.normalfonts}`} >
                                {value && value.addressOne && value.addressOne.addressline1 || lgn && lgn.addressline1 ? value && value.addressOne && value.addressOne.addressline1 || lgn.addressline1 : value && value.addressTwo && value.addressTwo.addressline1 || value && value.addressOne && value.addressOne.addressline1}
                                <br />
                                {value && value.addressOne && value.addressOne.city || lgn && lgn.city ? value && value.addressOne && value.addressOne.city || lgn.city : value && value.addressTwo && value.addressTwo.city || value && value.addressOne && value.addressOne.city}
                                <br />
                                {value && value.addressOne && value.addressOne.state || lgn && lgn.state ? value && value.addressOne && value.addressOne.state || lgn.state : value && value.addressTwo && value.addressTwo.state || value && value.addressOne && value.addressOne.state}-
                                {value && value.addressOne && value.addressOne.pincode || lgn && lgn.pincode ? value && value.addressOne && value.addressOne.pincode || lgn.pincode : value && value.addressTwo && value.addressTwo.pincode || value && value.addressOne && value.addressOne.pincode}
                                <br />IN
                                </p>
                            <div className="card-foo">
                                <span className={`shipping-phonenumber ${classes.normalfonts}`}>
                                    +91 {value && value.addressOne && value.addressOne.contactno || lgn && lgn.contactNumber ? value && value.addressOne && value.addressOne.contactno || lgn && lgn.contactNumber : value && value.addressTwo && value.addressTwo.contactno || value && value.addressOne && value.addressOne.contactno}
                                </span> <Button style={{ float: "right" }} className='apply-b' onClick={() => {
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
                                        {aa1 ? aa1 + ' ' : aa + ' '}
                                        {lgn1 && lgn1.firstname ? lgn1 && lgn1.firstname : lgn.firstname}
                                        {value && value.addressTwo && value.addressTwo.firstname ? value && value.addressTwo && value.addressTwo.firstname : value && value.addressOne && value.addressOne.firstname}&nbsp;
                                        {value && value.addressTwo && value.addressTwo.lastname ? value && value.addressTwo && value.addressTwo.lastname : value && value.addressOne && value.addressOne.lastname}
                                        {/* &nbsp;        {lgn1 || (value.addressTwo.lastname ? value.addressTwo.lastname : value.addressOne.lastname)} */}
                                    </span>
                                    <i onClick={() => this.props.redirectForm()} style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                        class="fa fa-pencil-square-o"></i>
                                    {localStorage.getItem("valuessetdata") ?
                                        <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                            onClick={() => {
                                                // localStorage.removeItem("valuessetdata")
                                                // localStorage.setItem("valuessetdata", JSON.stringify(objj))
                                                dlt_locl1()
                                                // localStorage.removeItem('vals')
                                                window.location.reload();
                                                // localStorage.getItem("valuessetdata")==={}?this.props.redirectForm():""
                                            }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i> : ""}
                                    {localStorage.getItem("vals") ? <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                        onClick={() => {
                                            alert('Address already in use')
                                        }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i> : ""}
                                </h4>
                                <p className={`detils-p ${classes.normalfonts}`} >
                                    {lgn1 && lgn1.addressline1 ? lgn1 && lgn1.addressline1 : lgn && lgn.addressline1}{value && value.addressTwo && value.addressTwo.addressline1 ? value && value.addressTwo && value.addressTwo.addressline1 : value && value.addressOne && value.addressOne.addressline1}
                                    <br />
                                    {lgn1 && lgn1.city ? lgn1 && lgn1.city : lgn && lgn.city}{value && value.addressTwo && value.addressTwo.city ? value && value.addressTwo && value.addressTwo.city : value && value.addressOne && value.addressOne.city}<br />
                                    {lgn1 && lgn1.state ? lgn1 && lgn1.state : lgn && lgn.state}{value && value.addressTwo && value.addressTwo.state ? value && value.addressTwo && value.addressTwo.state : value && value.addressOne && value.addressOne.state}-
                                    {lgn1 && lgn1.pincode ? lgn1 && lgn1.pincode : lgn && lgn.pincode}{value && value.addressTwo && value.addressTwo.pincode ? value && value.addressTwo && value.addressTwo.pincode : value && value.addressOne && value.addressOne.pincode}
                                    <br />IN</p>
                                <div className="card-foo">
                                    <span className={`shipping-phonenumber ${classes.normalfonts}`}>
                                        +91 {lgn1 && lgn1.contactNumber ? lgn1 && lgn1.contactNumber : lgn && lgn.contactNumber}
                                        {value && value.addressTwo && value.addressTwo.contactno ? value && value.addressTwo && value.addressTwo.contactno : value && value.addressOne && value.addressOne.contactno}
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
                <Button onClick={() => this.props.redirectForm1()} className={`add-new-address ${classes.normalfonts}`}>
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