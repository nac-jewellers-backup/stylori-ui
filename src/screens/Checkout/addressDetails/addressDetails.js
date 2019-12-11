import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style"
class Addressdetails extends React.Component {
    Addressdetails = (props, value, value2) => {
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
        // const DeleteLocalStorage_address = (e, num, isAdressOne) => {
        //     debugger
        //     var local_storage = JSON.parse(localStorage.getItem('valuessetdata'))
        //     local_storage[isAdressOne ? 'addressOne' : 'addressTwo'].pop(num);
        //     window.localStorage.removeItem('valuessetdata');
        //     window.localStorage.setItem('valuessetdata', JSON.stringify(local_storage));
        // }
        debugger
        // const back_color = () => {


        // }
        return (
            <div className='pt-sm'>
                <Grid container spacing={12}>
                    <h5 className='title'> Shipping Address</h5>
                    {values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.map((val_addrs1, index) => (
                       <>
                        <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                            <div className='card-adrs wd' className={(values.Id === val_addrs1.id) ? "address_card_disabled" : ""}
                                style={{ marginTop: "5px" }}>
                                <h4 class="card-title">
                                    <i style={{ fontSize: "25px" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                    <span class="address-name">
                                        {aa ? aa + ' ' : aa1 + ' '}
                                        {val_addrs1.firstname}
                                        &nbsp;
                                                   {val_addrs1.lastname}
                                    </span>
                                    <i onClick={() => {
                                        // localStorage.setItem("isedit", 1)
                                        this.props.redirectForm(val_addrs1, index, true, true)
                                    }} style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                        class="fa fa-pencil-square-o"></i>
                                    <i
                                        onClick={() => {
                                            // localStorage.removeItem("valuessetdata")
                                            // dlt_locl1()
                                            this.props.Delete_address()
                                            // localStorage.removeItem('vals')
                                            // window.location.reload();
                                        }} style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                        className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                                </h4>
                                <p className={`detils-p ${classes.normalfonts}`} >
                                    {val_addrs1.addressline1}
                                    <br />
                                    {val_addrs1.city}
                                    <br />
                                    {val_addrs1.state}
                                    {val_addrs1.pincode}
                                    <br />IN
                                               </p>
                                <div className="card-foo">
                                    <span className={`shipping-phonenumber ${classes.normalfonts}`}>
                                        +91 {val_addrs1.contactno}
                                    </span> <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                        this.props.selectaddreses(val_addrs1, 1)
                                        // this.props.changevalue(3)
                                    }}>Select and  Review </Button>
                                </div>
                            </div>
                        </Grid><br/>
                       </>
                    ))}
                </Grid>
                {values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 5 ? "" :
                    <Button onClick={() => this.props.redirectForm1()} className={`add-new-address ${classes.normalfonts}`}>
                        <div></div>  Add New Address
                   </Button>}<br />
                <div class="form-group tp ts">
                    {cl}
                    {!values.checkValue1 && 'If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form.'}
                    {values.checkValue1 && 'If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form.'}
                </div>
                {!values.checkValue1 &&
                    <>
                        <Grid container spacing={12}>
                            <>
                                {values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.map((val_addrs2, index) =>
                                    // return 
                                    <>
                                        <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                                            <h5 className='title'> Billing Address</h5><br />
                                            <div className='card-adrs wd'
                                                style={{ marginTop: "5px" }} className={(values.Id2 === val_addrs2.id) ? "address_card_disabled" : ""}>
                                                <h4 class="card-title">
                                                    <i style={{ fontSize: "25px" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                                    <span class="address-name">
                                                        {aa ? aa + ' ' : aa1 + ' '}
                                                        {val_addrs2.firstname}
                                                        &nbsp;
                                                      {val_addrs2.lastname}
                                                    </span>
                                                    <i onClick={() => {
                                                        // localStorage.setItem("isedit", 1)
                                                        this.props.redirectForm(val_addrs2, index, true, false)
                                                    }} style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                                        class="fa fa-pencil-square-o"></i>
                                                    <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                                        onClick={() => {
                                                            // localStorage.removeItem("valuessetdata")
                                                            // dlt_locl1()
                                                            this.props.Delete_address()
                                                            // localStorage.removeItem('vals')
                                                            // window.location.reload();
                                                        }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                                                </h4>
                                                <p className={`detils-p ${classes.normalfonts}`} >
                                                    {val_addrs2.addressline1}
                                                    <br />
                                                    {val_addrs2.city}
                                                    <br />
                                                    {val_addrs2.state}-
                                                   {val_addrs2.pincode}
                                                    <br />IN
                                                   </p>
                                                <div className="card-foo">
                                                    <span className={`shipping-phonenumber ${classes.normalfonts}`}>
                                                        +91 {val_addrs2.contactno}
                                                    </span> <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                                        this.props.selectaddreses(val_addrs2, 2)
                                                        // this.props.changevalue(3)
                                                    }}>Select and  Review </Button>
                                                </div>
                                            </div>
                                        </Grid>
                                    </>
                                )}
                            </>
                        </Grid>
                        {values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 5 ? "" :
                            <Button onClick={() => this.props.redirectForm1()} className={`add-new-address ${classes.normalfonts}`}>
                                <div></div>  Add New Address
                   </Button>}
                    </>
                }
            </div>
        )
    }
    render() {
        let value = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")) : ""
        return (
            <Container>
                {this.Addressdetails(this.props, value)}
            </Container>
        )
    }
}
export default withStyles(styles)(Addressdetails);