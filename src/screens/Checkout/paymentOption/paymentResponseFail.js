import React, { useEffect, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import { CartContext } from 'context'
import './payment.css';
import cart from 'mappers/cart'
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import Allorders from "components/accounts/allorders";
function PaymentResponseFail(props) {
  function BackToPayment() {
    props.history.push('/')
  }
  const handleClick = () =>{
    
    localStorage.setItem("panel","3")
    props.history.push('/checkout');

  }
  return (
    <>
      <Header wishlist={props.wishlistdata}  paymentSucces={true} />
      <Grid container style={{ marginTop: "15px" }}>
        <Grid item xs={12} sm={12} md={12} >
          <Grid container justify="center">
            <Grid item>
              <Grid container>
                <CancelIcon className="svgiconfail" />
                <Typography style={{ display: "flex", alignItems: "center" }} component="h4">Sorry,Your transaction has been failed.</Typography>
              </Grid>
            </Grid>
            <Grid item style={{ marginLeft: "20px" }}>
              <Button className="retrypaymentbtn" onClick={handleClick}>Retry Payment</Button>
            </Grid>
          </Grid>
        </Grid>
        <Allorders allorderdata={props.allorderdata} />
      </Grid>
      <Footer />
    </>
  )
}


const Components = props => {
  let { CartCtx: { cartFilters, data, loading, error, allorderdata,allordersuccesful, wishlistdata } } = React.useContext(CartContext);
  
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  
  if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
  else content = <PaymentResponseFail {...props} data={mapped} allorderdata={allordersuccesful} wishlistdata={wishlistdata} />
  // localStorage.setItem("a__w_l", wishlistdata && wishlistdata.length)
  return content
}

export default withRouter(Components);