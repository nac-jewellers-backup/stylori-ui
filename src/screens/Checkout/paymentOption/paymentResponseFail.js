import React, { useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import { CartContext } from 'context'
import './payment.css';
 function PaymentResponseFail(props){
    useEffect(() => {
       
      }, []);
      function BackToPayment(){
        props.history.push('/home')
      }
      return (
        <Grid container style={{marginTop:"15px"}}>
            <Grid item  xs={12} sm={12} md={12} >
                <Grid container justify="center">
                    <Grid item>
                      <Grid container>
                      <CancelIcon  className="svgiconfail"/>
                      <Typography style={{display: "flex",alignItems: "center"}} component="h4">Sorry,Your transaction has been failed.</Typography>
                      </Grid>
                    </Grid>
                    <Grid item style={{    marginLeft: "20px"}}>
                      <Button className="retrypaymentbtn" onClick={()=>props.history.push('/Checkout')}>Retry Payment</Button>
                    <Typography style={{marginTop:"10px"}} component="h6">Grand Total:20000</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      )
}

const Components = props => {
  let { CartCtx: { data, loading, error} } = React.useContext(CartContext);
  let content;
  content=  <PaymentResponseFail {...props} data={data} />
  return content
}

export default withRouter(Components);