import React, { useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import './payment.css';
import Divider from '@material-ui/core/Divider';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { CartContext } from 'context'
import { withRouter } from 'react-router-dom';
import cart from 'mappers/cart'
import Allorders from "components/accounts/allorders";

class PaymentResponseSuccess extends React.Component{
render(){ 
   // alert(JSON.stringify(this.props.data))
return (
         <Grid container justify="center">
            <Grid container justify="center">
               <CheckCircleOutlineIcon className="svgiconsuccess"></CheckCircleOutlineIcon>
               <Grid item xs={10} sm={10} md={4} className="contant-center" >
                  <Grid item className="container-font-size">Thank you!Your order has been placed.</Grid>
               </Grid>
            </Grid>
            <Grid container justify="center">
               <Grid item xs={12} sm={12} md={4} className="contant-center" style={{ justifyContent: "center"}}>We've send you an email confirmation.Resend Email</Grid>
            </Grid>
            {/* <Grid container style={{marginTop:"15px"}}>
               <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={6} className="paymentsuccess-content">
                        <Grid container>
                           <Grid item xs={6} sm={6} md={4}>
                              <Typography component="h4">Order Number</Typography>
                           </Grid>
                           <Grid item xs={6} sm={6} md={4}> <Typography component="h4">:9875897</Typography></Grid>
                        </Grid>
                        <Grid container>
                           <Grid xs={6} sm={6} md={4}>
                              <Typography component="h4">Order Date</Typography>
                           </Grid>
                           <Grid item xs={6} sm={6} md={4}> <Typography component="h4">:10-05-1997</Typography></Grid>
                        </Grid>
                        <Grid container>
                           <Grid xs={6} sm={6} md={4}>
                              <Typography component="h4">Payment Method</Typography>
                           </Grid>
                           <Grid item xs={6} sm={6} md={4}> <Typography component="h4">:Cash On Delivery</Typography></Grid>
                        </Grid>
                        <Grid container>
                           <Grid xs={6} sm={6} md={4}>
                              <Typography component="h4">Shipping Address</Typography>
                           </Grid>
                           <Grid item xs={6} sm={6} md={4}> <Typography component="h4">:3/23,north street,chennai</Typography></Grid>
                        </Grid>
                  </Grid>
               </Grid> */}
               <Grid container justify="center">
                  <Grid container style={{width:"100%"}}  >
                     <Grid item style={{display:"flex",marginLeft:"auto",paddingRight:"6%"}}>
                     <Button style={{background:"#ed1165",color:"#fff"}}  onClick={()=>this.props.history.push("/jewellery")}>Home</Button>
                     </Grid>
                  </Grid>
               </Grid>
            <Grid container> 
               {/* <CartCard data={this.props.data}/> */}
               <Allorders allorderdata={this.props.allorderdata}/>
            </Grid>
         </Grid>
      )
}}

// export default PaymentResponseSuccess;
const Components = props => {
   let { CartCtx: { cartFilters, data, loading, error, allorderdata, wishlistdata } } = React.useContext(CartContext);
   let content, mapped;
   if (!loading && !error) {
       if (Object.keys(data).length !== 0) {
           mapped = cart(data);
       }
   }
   if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
   else content = <PaymentResponseSuccess {...props} data={mapped} allorderdata={allorderdata} wishlistdata={wishlistdata} />
   // localStorage.setItem("a__w_l", wishlistdata && wishlistdata.length)
   return content
}

export default  withRouter(Components);
