import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style"
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
const panel_clear = JSON.parse(localStorage.getItem("panel")) ? JSON.parse(localStorage.getItem("panel")) : ""
class Addressdetails extends React.Component {
    state = {
        open: false,
        index_of_isActive: null
    };
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    Addressdetails = (props, value, value2) => {
        const { setValues, values } = props;
        const _add_data_addres = () => {
            if (con_gust === true) {
                return value
            } if (con_gust !== true) {
                return values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes
            }
        }
        // const cl = () => <input onChange={(e) => {
        //     if (_add_data_addres().length >= 0 && _add_data_addres().length <= 1) {
        //         alert("You have saved Shipping Address only")
        //         return false
        //     } else {
        //         setValues({
        //             values, ...values,
        //             checkValue1: !values.checkValue1
        //         })
        //     }

        // }} type='checkbox' checked={values.checkValue1} />

        // React.useEffect(() => {
        //     localStorage.removeItem("bil_isactive")
        //     localStorage.removeItem("ship_isactive")
        // }, [])

        // React.useEffect(() => {
        //     if (_add_data_addres().length >= 0 && _add_data_addres().length <= 1) {
        //         localStorage.removeItem("bil_isactive")
        //         localStorage.removeItem("ship_isactive")
        //     }
        // }, [panel_clear])

        // const select = () => {
        //     if (_add_data_addres().length >= 0 && _add_data_addres().length <= 1) {
        //         alert("You have saved Shipping Address only")
        //         return false
        //     } else {
        //         return ""
        //     }
        // }
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

        const delete_all_addresses = (val_addrs1, index) => {
            // alert(JSON.stringify(index))
            
            if (JSON.parse(localStorage.getItem("ship_isactive")) === this.state.index_of_isActive) {
                alert("Sorry u con't delete this address")
                // alert(JSON.stringify(this.state.index_of_isActive))
                return false
            }
            if (JSON.parse(localStorage.getItem("bil_isactive")) === this.state.index_of_isActive) {
                alert("Sorry u con't delete this address")
                // alert(JSON.stringify(this.state.index_of_isActive))
                return false
            } if ((JSON.parse(localStorage.getItem("bil_isactive")) || JSON.parse(localStorage.getItem("ship_isactive"))) !== this.state.index_of_isActive) {
                // alert(JSON.stringify(this.state.index_of_isActive))
                this.props.Delete_address(val_addrs1, this.state.index_of_isActive)
            }
        }
        // const back_color = () => {
        // }

        return (
            <div className='pt-sm'>
                <Grid container spacing={12}>
                    {window.location.pathname.split("-")[0] === "/account" ? "" : <h5 className='title'> Shipping Address</h5>}
                    {window.location.pathname.split("-")[0] === "/account" ? <>
                        {_add_data_addres() && _add_data_addres().map((val_addrs1, index) =>
                            <>
                                {localStorage.setItem("pin_cod", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].pincode))}
                                {localStorage.setItem("co_num", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].contactNumber))}
                                {/* {localStorage.setItem("addres_Id", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].id))} */}
                                {localStorage.setItem("namesOf_first", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].firstname))}
                                {localStorage.setItem("namesOf_last", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].lastname))}
                                <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                                    <div className='card-adrs wd'
                                        style={{ marginTop: "5px" }}>
                                        <h4 class="card-title">
                                            <i style={{ fontSize: "25px", color: "#394578" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                            <span class="address-name">
                                                {/* {aa ? aa + ' ' : aa1 + ' '} */}
                                                {val_addrs1 && val_addrs1.salutation}&nbsp;
                                                {val_addrs1.firstname}
                                                &nbsp;
                                                   {val_addrs1.lastname}
                                            </span>
                                            <i onClick={() => {
                                                this.props.redirectForm(val_addrs1, index, true, true, index)
                                            }} style={{ fontSize: "20px", color: "#394578", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                                class="fa fa-pencil-square-o"></i>
                                          {_add_data_addres().length >= 0 && _add_data_addres().length <= 1?
                                       <i
                                       onClick={() => {
                                           alert("Address could not be removed as it is in use")
                                       }} style={{ fontSize: "20px", color: "#394578", float: "right", marginRight: "10px", cursor: "pointer" }}
                                       className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>   
                                        :
                                        <i
                                        onClick={() => {
                                            this.setState({ index_of_isActive: index })
                                            this.handleOpen()
                                        }} style={{ fontSize: "20px", color: "#394578", float: "right", marginRight: "10px", cursor: "pointer" }}
                                        className={`${classes.normalfonts}`} class="fa fa-trash-o"></i> 
                                        }
                                            
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
                                                    <Grid item lg={6}><Button className="addres_dlt_ok" onClick={() => delete_all_addresses(val_addrs1, index)}>Confirm delete</Button></Grid>
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
                                            {window.location.pathname.split("-")[0] !== "/account" ?
                                                <>{JSON.parse(localStorage.getItem("ship_isactive")) === index || JSON.parse(localStorage.getItem("bil_isactive")) === index ? <>
                                                    <Button disabled
                                                        style={{ float: "right" }} className='apply-b address_card_disabled' onClick={() => {
                                                        }}> <i class="fa fa-check-circle" style={{ color: "#fff" }}></i> &nbsp;Selected</Button></> : <>
                                                        <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                                            this.props.selectaddreses(val_addrs1, 1, index)
                                                        }}>Select to continue </Button></>}</>
                                                : ""}
                                        </div>
                                    </div>
                                </Grid><br />
                            </>
                        )}</> : <>
                            {_add_data_addres() && _add_data_addres().map((val_addrs1, index) => {
                                return (JSON.parse(localStorage.getItem("bil_isactive")) === index ? false :
                                    <>
                                        {localStorage.setItem("pin_cod", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].pincode))}
                                        {localStorage.setItem("co_num", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].contactNumber))}
                                        {/* {localStorage.setItem("addres_Id", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].id))} */}
                                        {localStorage.setItem("namesOf_first", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].firstname))}
                                        {localStorage.setItem("namesOf_last", JSON.stringify(values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses && values.addressvalues.data.allUserAddresses.nodes[0].lastname))}
                                        <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                                            <div className='card-adrs wd'
                                                style={{ marginTop: "5px" }}>
                                                <h4 class="card-title">
                                                    <i style={{ fontSize: "25px", color: "#394578" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                                    <span class="address-name">
                                                        {/* {aa ? aa + ' ' : aa1 + ' '} */}
                                                        {val_addrs1 && val_addrs1.salutation}&nbsp;
                                                        {val_addrs1.firstname}
                                                        &nbsp;
                                                   {val_addrs1.lastname}
                                                    </span>
                                                    <i onClick={() => {
                                                        this.props.redirectForm(val_addrs1, index, true, true, index)
                                                    }} style={{ fontSize: "20px", color: "#394578", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                                        class="fa fa-pencil-square-o"></i>
                                                    <i
                                                        onClick={() => {
                                                            this.setState({ index_of_isActive: index })
                                                            this.handleOpen()
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
                                                            <Grid item lg={6}><Button className="addres_dlt_ok" onClick={() => delete_all_addresses(val_addrs1, index)}>Confirm delete</Button></Grid>
                                                            {/* {JSON.parse(localStorage.getItem("bil_isactive")) === index && "Sorry u con't delete this address"} */}
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
                                                    {window.location.pathname.split("-")[0] !== "/account" ?
                                                        <>{JSON.parse(localStorage.getItem("ship_isactive")) === index || JSON.parse(localStorage.getItem("bil_isactive")) === index ? <>
                                                            <Button disabled
                                                                style={{ float: "right" }} className='apply-b address_card_disabled' onClick={() => {
                                                                }}> <i class="fa fa-check-circle" style={{ color: "#fff" }}></i> &nbsp;Selected</Button></> : <>
                                                                <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                                                    this.props.selectaddreses(val_addrs1, 1, index)
                                                                }}>Select to continue </Button></>}</>
                                                        : ""}
                                                </div>
                                            </div>
                                        </Grid><br />
                                    </>)
                            })}</>}

                </Grid>
                {value.length > 4 || values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 4 ? "" :
                    <Button onClick={() => this.props.redirectForm1()} className={`add-new-address ${classes.normalfonts}`}>
                        <div></div>  Add New Address
                   </Button>}<br />

                {window.location.pathname.split("-")[0] !== "/account" ? <>
                    <div class="form-group tp ts">
                        {/* {cl()} */}{cl}
                        {/* {_add_data_addres().length > 0 && _add_data_addres().length < 1 ? "" : <>{cl}</>} */}
                        {!values.checkValue1 && 'Please check the box if your Billing address is same as your shipping address.'}
                        {values.checkValue1 && 'Please uncheck the box if your Billing address is different from your shipping address.'}
                    </div>
                    {!values.checkValue1 &&
                        <>
                            <h5 className='title'> Billing Address</h5><br />
                            <Grid container spacing={12}>
                                <>
                                    {_add_data_addres() && _add_data_addres().map((val_addrs2, index) => {
                                        return JSON.parse(localStorage.getItem("ship_isactive")) === index ? false :
                                            <>
                                                <Grid item xs={12} lg={6} style={{ paddingRight: "15px" }}>
                                                    <div className='card-adrs wd'
                                                        style={{ marginTop: "5px" }}
                                                    >
                                                        <h4 class="card-title">
                                                            <i style={{ fontSize: "25px", color: "#394578" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                                            <span class="address-name">
                                                                {/* {aa ? aa + ' ' : aa1 + ' '} */}
                                                                {val_addrs2 && val_addrs2.salutation}&nbsp;
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
                                                                    this.setState({ index_of_isActive: index })
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
                                                                    <Grid item lg={6}><Button className="addres_dlt_ok" onClick={() => delete_all_addresses(val_addrs2, index)}>Confirm delete</Button></Grid>
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
                                                            </span>

                                                            <>{JSON.parse(localStorage.getItem("ship_isactive")) === index || JSON.parse(localStorage.getItem("bil_isactive")) === index ? <>
                                                                <Button disabled
                                                                    style={{ float: "right" }} className='apply-b address_card_disabled' onClick={() => {
                                                                        // this.props.selectaddreses(val_addrs1, 1)
                                                                        // this.props.changevalue(3)
                                                                    }}> <i class="fa fa-check-circle" style={{ color: "#fff" }}></i> &nbsp;Selected</Button></> : <>
                                                                    <Button style={{ float: "right" }} className='apply-b' onClick={() => {
                                                                        this.props.selectaddreses(val_addrs2, 2, index)
                                                                        // this.props.changevalue(3)
                                                                    }}>Select to continue </Button></>}</>

                                                        </div>
                                                    </div>
                                                </Grid>
                                            </>
                                    }

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