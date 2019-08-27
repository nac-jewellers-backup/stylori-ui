import React from 'react';
import './address.css'
import { Container, Grid, Button } from '@material-ui/core';
import { Input } from '../../../components/InputComponents/TextField/Input'
import { fontSize } from '@material-ui/system';

class Addressdetails extends React.Component {
    state = {
        firstname:"",
        lastname:"",
        selectcountry:"",
        zipcode:"",
        address:"",
        state:"",
        City:"",
        phonenumber:""
    }
 Addressdetails =() =>{
     return(
        <div className='pt-sm'>
        <Grid container spacing={12}>
            <Grid item lg={1} />
            <Grid item xs={12} lg={6}>
                <div className='card-adrs'>
                    <h4 class="card-title">
                        <i style={{ fontSize: "25px", color: "#394578" }} class="fa fa-check-circle-o"></i>
                        <span class="address-name">1 1
                        </span>
                        <i style={{ fontSize: "25px", color: "#394578", float: "right" }} class="fa fa-pencil-square-o"></i>
                        <i style={{ fontSize: "25px", color: "#394578", float: "right", marginRight: "10px" }} class="fa fa-trash-o"></i>
                    </h4>
                    <p className='detils-p'>jjjjjj <br />fffffff <br />vvvvvv <br />ffff</p>
                    <div className="card-foo">
                        <span class="shipping-phonenumber">  2343234543</span>
                        <Button style={{ float: "right" }} className='apply-b'>Select and  Review </Button>
                    </div>
                </div>
            </Grid>
        </Grid>

    </div>
     )
 }
    render() {
        return (
            <Container>
               {this.Addressdetails()}
            </Container>
        )
    }
}
export default Addressdetails;