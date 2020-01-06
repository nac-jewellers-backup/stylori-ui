import React, { useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';


 function PaymentResponseFail(props){
    useEffect(() => {
       
      }, []);
      function BackToPayment(){
        props.history.push('/home')
      }
      return (
        <Grid container>
            <Grid item  xs={12} sm={12} md={12} >
                <Grid container style={{margin:"15px"}}>
                    <Typography component="p">oh Snap! Sorry.Your transaction did not go through.If amount is already deducted,we will try to confirm your order otherwise amount will be refunded.</Typography>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={BackToPayment}>Back</Button>  
        </Grid>
      )
}

export default withRouter(PaymentResponseFail)