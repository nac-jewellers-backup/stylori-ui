import React, { useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import './payment.css';
import Divider from '@material-ui/core/Divider';

export default function PaymentResponseSuccess(props){
    useEffect(() => {
       
      }, []);
      return (
        <Grid container style={{    padding: "60px"}}>
            <Grid item container  xs={8} sm={8} md={8} >
                <Grid item xs={3}>
                    <Typography component="h6" className="paymentsuccessfont">Amount</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="h6" className="paymentsuccessfont">100</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="h6" className="paymentsuccessfont">IND</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={4} sm={4} md={4}>

            </Grid>
            <Grid container item xs={8} sm={8} md={6} style={{marginTop:"40px",background: "whitesmoke"}}>
                <Grid container justify="center">
                    <Typography component="h6" style={{color: "#05409a"}}>Order Confirmation</Typography>
                </Grid>
                <Grid item xs={5} sm={5} md={5} className="paymentcontent">
                    <Grid>
                       <Typography component="h6">Transaction State</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Order Id</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Time</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Ref No</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Approval Code</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Total</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Currency</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Card No</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Valid to (month)</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6">Valid to (year)</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={7} sm={7} md={7} className="paymentcontent">
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Transaction State</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Order Id</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Time</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Ref No</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Approval Code</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Total</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Currency</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Card No</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Valid to (month)</Typography>
                    </Grid>
                    <Grid>
                       <Typography component="h6" className="paymentsuccessfont">Valid to (year)</Typography>
                    </Grid>
                </Grid>
                <Grid container style={{marginTop:"20px"}}>
                   <Typography component="span">Please retain the copy for statement verification</Typography>
               </Grid>
               <Grid container justify="center">
                  <Button variant="contained" color="primary">Return To Stylori</Button>
               </Grid> 
               <Divider className="horizontal"/>
               <Grid className="paymentdivider">
                       <Typography component="h6" className="paymentsuccessfont">we recommented that you print the page as  confirmation of your order.</Typography>
               </Grid>
            </Grid>
        </Grid>
      )
}
