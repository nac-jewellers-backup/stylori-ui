import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style"
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
class Addressdetails extends React.Component {
    state = {
        open: false,
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    Addressdetails = (props, value, value2) => {
        const { setValues, values } = props;
        const cl = <input onChange={(e) => {
            setValues({
                values, ...values,
                checkValue1: !values.checkValue1
            })
        }} type='checkbox' checked={values.checkValue1} />
        const { classes } = props;
        var con_gust = localStorage.getItem('gut_lg') ? JSON.parse(localStorage.getItem('gut_lg')) : ""

        const aa = localStorage.getItem("m") ? localStorage.getItem("m") : ""
        const aa1 = localStorage.getItem("m1") ? localStorage.getItem("m1") : ""
        const _add_data_addres = () => {
            if (con_gust === true) {
                return value
            } if (con_gust !== true) {
                return values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes
            }
        }
        // const back_color = () => {
        // }
        debugger
        return (
            <div className='pt-sm'>
                <Grid container spacing={12}>
                    <h5 className='title'> Shipping Address</h5>
                    {_add_data_addres() && _add_data_addres().map((val_addrs1, index) =>
                        <>
                            {/* {localStorage.setItem("namesOf_first", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].firstname))}
                            {localStorage.setItem("namesOf_last", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].lastname))} */}
                            {localStorage.setItem("pin_cod", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].pincode))}
                            {localStorage.setItem("co_num", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].contactNumber))}
                            {localStorage.setItem("addres_Id", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].id))}
                            {localStorage.setItem("namesOf_first", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].firstname))}
                            {localStorage.setItem("namesOf_last", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].lastname))}
                            <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                                <div className='card-adrs wd'
                                    // className={values.Id === val_addrs1.id || values.Id2 === val_addrs1.id ? "address_card_disabled" : ""}
                                    style={{ marginTop: "5px" }}>
                                    <h4 class="card-title">
                                        <i style={{ fontSize: "25px", color: "#394578" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                        <span class="address-name">
                                            {/* {aa ? aa + ' ' : aa1 + ' '} */}
                                            {val_addrs1.firstname}
                                            &nbsp;
                                                   {val_addrs1.lastname}
                                        </span>
                                        <i onClick={() => {
                                            // localStorage.setItem("isedit", 1)
                                            this.props.redirectForm(val_addrs1, index, true, true, index)
                                        }} style={{ fontSize: "20px", color: "#394578", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                            class="fa fa-pencil-square-o"></i>
                                        <i
                                            onClick={() => {
                                                // localStorage.removeItem("valuessetdata")
                                                // dlt_locl1()
                                                this.handleOpen()
                                                // localStorage.removeItem('vals')
                                                // window.location.reload();
                                            }} style={{ fontSize: "20px", color: "#394578", float: "right", marginRight: "10px", cursor: "pointer" }}
                                            className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                                    </h4>
                                    <Modal
                                        open={this.state.open}
                                    >
                                        <div className="modal_addrs_dlt">
                                            <Grid container lg={12} spacing={12} className="dlt_div">
                                                <div className="dlt_content">
                                                    Are you sure you want to delete this Address?
                                                                </div>
                                                <Grid item lg={6}><Button className="addres_dlt_cancel" onClick={this.handleClose}>Cancel</Button></Grid>
                                                <Grid item lg={6}><Button className="addres_dlt_ok" onClick={() => this.props.Delete_address(val_addrs1, index)}>Confirm delete</Button></Grid>
                                            </Grid>
                                        </div>
                                    </Modal>
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
                                            +91 {val_addrs1.contactNumber}{val_addrs1.contactno}
                                        </span>
                                        {window.location.pathname !== "/account" ?
                                            <>{values.Id2 === index || values.Id === index || JSON.parse(localStorage.getItem("select_addres")) && JSON.parse(localStorage.getItem("select_addres")).id === val_addrs1.id ? <>
                                                <Button disabled 
                                                    style={{ float: "right" }} className='apply-b address_card_disabled' onClick={() => {
                                                        // this.props.selectaddreses(val_addrs1, 1)
                                                        // this.props.changevalue(3)
                                                    }}> <i class="fa fa-check-circle" style={{ color: "#fff" }}></i> &nbsp;Your Shipping address</Button></> : <>
                                                    <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                                        this.props.selectaddreses(val_addrs1, 1, index)
                                                        // this.props.changevalue(3)
                                                    }}>Select and  Review </Button></>}</> : ""}
                                    </div>
                                </div>
                            </Grid><br />
                        </>
                    )}
                </Grid>
                {value.length > 4 || values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 4 ? "" :
                    <Button onClick={() => this.props.redirectForm1()} className={`add-new-address ${classes.normalfonts}`}>
                        <div></div>  Add New Address
                   </Button>}<br />

                {window.location.pathname !== "/account" ? <>
                    <div class="form-group tp ts">
                        {cl}
                        {!values.checkValue1 && 'If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form.'}
                        {values.checkValue1 && 'If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form.'}
                    </div>
                    {!values.checkValue1 &&
                        <>
                            <h5 className='title'> Billing Address</h5><br />
                            <Grid container spacing={12}>
                                <>
                                    {_add_data_addres() && _add_data_addres().map((val_addrs2, index) =>
                                        // return 
                                        <>
                                            <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                                                <div className='card-adrs wd'
                                                    style={{ marginTop: "5px" }}
                                                >
                                                    <h4 class="card-title">
                                                        <i style={{ fontSize: "25px", color: "#394578" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                                        <span class="address-name">
                                                            {/* {aa ? aa + ' ' : aa1 + ' '} */}
                                                            {val_addrs2.firstname}
                                                            &nbsp;
                                                      {val_addrs2.lastname}
                                                        </span>
                                                        <i onClick={() => {
                                                            // localStorage.setItem("isedit", 1)
                                                            this.props.redirectForm(val_addrs2, index, true, false, index)
                                                        }} style={{ fontSize: "20px", color: "#394578", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                                            class="fa fa-pencil-square-o"></i>
                                                        <i style={{ fontSize: "20px", color: "#394578", float: "right", marginRight: "10px", cursor: "pointer" }}
                                                            onClick={() => {
                                                                // localStorage.removeItem("valuessetdata")
                                                                // dlt_locl1()
                                                                this.handleOpen()
                                                                // this.props.Delete_address(val_addrs2, index)
                                                                // localStorage.removeItem('vals')
                                                                // window.location.reload();
                                                            }} className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                                                    </h4>
                                                    <Modal
                                                        open={this.state.open}
                                                    >
                                                        <div className="modal_addrs_dlt">
                                                            <Grid container lg={12} spacing={12} className="dlt_div">
                                                                <div className="dlt_content">
                                                                    Are you sure you want to delete this Address?
                                                                </div>
                                                                <Grid item lg={6}><Button className="addres_dlt_cancel" onClick={this.handleClose}>Cancel</Button></Grid>
                                                                <Grid item lg={6}><Button className="addres_dlt_ok" onClick={() => this.props.Delete_address(val_addrs2, index)}>Confirm delete</Button></Grid>
                                                            </Grid>
                                                        </div>
                                                    </Modal>
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
                                                            +91 {val_addrs2.contactNumber}{val_addrs2.contactno}
                                                        </span>{values.Id === index || values.Id2 === index || JSON.parse(localStorage.getItem("select_addres")) && JSON.parse(localStorage.getItem("select_addres")).id === val_addrs2.id ? <>
                                                            <Button disabled style={{ float: "right" }} className='apply-b address_card_disabled' onClick={() => {
                                                                // this.props.selectaddreses(val_addrs2, 2)
                                                                // this.props.changevalue(3)
                                                            }}> <i class="fa fa-check-circle" style={{ color: "#fff" }}></i> &nbsp;Your Billing address </Button></> : <>
                                                                <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                                                    this.props.selectaddreses(val_addrs2, 2, index)
                                                                    // this.props.changevalue(3)
                                                                }}>Select and  Review </Button></>}
                                                    </div>
                                                </div>
                                            </Grid>
                                        </>
                                    )}
                                </>
                            </Grid>
                            {value.length > 4 || values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 4 ? "" :
                                <Button onClick={() => this.props.redirectForm1()} className={`add-new-address ${classes.normalfonts}`}>
                                    <div></div>  Add New Address
                   </Button>}
                        </>
                    }</> : ""}
            </div>
        )
    }
    render() {
        let value = localStorage.getItem("gustaddres") ? JSON.parse(localStorage.getItem("gustaddres")).address : ""
        return (
            <Container>
                {this.Addressdetails(this.props, value)}
            </Container>
        )
    }
}
export default withStyles(styles)(Addressdetails);