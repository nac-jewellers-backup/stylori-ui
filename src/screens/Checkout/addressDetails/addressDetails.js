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
        values: this.props.state
    }
    Addressdetails = () => {
        const { classes, values } = this.props;
        return (
            <div className='pt-sm'>
                {/* {this.props.state.map(val=>(
                    <div>{val.adrs_firstname}</div>
                ))} */}
                <Grid container spacing={12}>
                    <Grid item lg={1} />
                    <Grid item xs={12} lg={6}>
                        <div className='card-adrs'>
                            <h4 class="card-title">
                                <i style={{ fontSize: "25px" }} className={`${classes.normalfonts}`} class="fa fa-check-circle-o"></i>
                                {/* {name1.adrs_firstname} */}
                                <span class="address-name">{values.adrs_firstname}{values.adrs_lastname}
                              </span>
                                <i style={{ fontSize: "20px", float: "right", cursor: "pointer" }} className={`${classes.normalfonts}`}
                                    class="fa fa-pencil-square-o"></i>
                                <i style={{ fontSize: "20px", float: "right", marginRight: "10px", cursor: "pointer" }}
                                    className={`${classes.normalfonts}`} class="fa fa-trash-o"></i>
                            </h4>
                            <p className={`detils-p ${classes.normalfonts}`} >
                            {values.adrs_City} <br />
                            {values.bill_selectcountry}-{values.adrs_zipcode} <br />IN</p>
                            <div className="card-foo">
                                <span className={`shipping-phonenumber ${classes.normalfonts}`}> 
                               {values.adrs_phonenumber} </span>
                                <Button style={{ float: "right" }} className='apply-b'>Select and  Review </Button>
                            </div>
                        </div>
                        <Button onClick={() => this.props.redirectForm()} className={`add-new-address ${classes.normalfonts}`}>
                            <div></div>
                            Add New Address
                            </Button>
                    </Grid>
                </Grid>

            </div>
        )
    }
    render() {
        return (
            <Container>
                {this.Addressdetails(this.props)}
            </Container>
        )
    }
}
export default withStyles(styles)(Addressdetails);