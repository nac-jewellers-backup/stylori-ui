import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./payment.css";
import Divider from "@material-ui/core/Divider";
import { CartContext } from "context";
import { withRouter } from "react-router-dom";
import cart from "mappers/cart";
import Allorders from "components/accounts/allorders";
import { API_URL } from "../../../config";
import Header from "components/SilverComponents/Header";
import "../../../components/Checkout/Cart.css";
import "../chckout.css";

const order_id = localStorage.getItem("order_id")
  ? JSON.parse(localStorage.getItem("order_id"))
  : "";
const breadcrumsdata = [
  { title: "Shopping Bag" },
  { title: "Login/ Register" },
  { title: "Address Detail" },
  { title: "Payment Options" },
  { title: "Order Confirmation" },
];
const cartsubdata = [
  {
    name: "100% Certified Jewellery",
    icon: "https://assets.stylori.com/images/static/icon-star.png",
  },
  {
    name: "Secure Payments",
    icon: "https://assets.stylori.com/images/static/icon-lock.png",
  },
  {
    name: "Free Insured Shipping",
    icon: "https://assets.stylori.com/images/static/icon-van.png",
  },
  {
    name: "25-Day Returns",
    icon: "https://assets.stylori.com/images/static/icon-return.png",
  },
];
var obj = {};
obj["order_id"] = order_id;

class PaymentResponseSuccess extends React.Component {
  makeFetch_resend_mail = async (props) => {
    await fetch(`${API_URL}/resendorderemail`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((resdata) => {
        if (resdata.message !== undefined && resdata.message !== null) {
        }
        alert("Your mail has been Resending on successfully");
      })
      .catch((err) => {});
  };

  componentDidMount() {
    if (localStorage.getItem("gut_lg") && localStorage.getItem("user_id"))
      localStorage.removeItem("user_id");
      localStorage.removeItem("cartDetails");
      localStorage.removeItem("quantity");

  }
  render() {
    let gut_lg = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : {};
    const { data, classes } = this.props;
    return (
      <>
        <Header wishlist={this.props.wishlistdata} paymentSucces={true} />
        <Grid container justify="center" className="main-container" style={{height:this.props.allorderdata.length >1 ? "70vw":"55vw"}}>
          {/* <Hidden smDown>
            <Grid
              container
              justify="center"
              style={{ padding: "15px 5px 5px 15px" }}
            >
              <Grid container>
                <Grid
                  item
                  style={{
                    display: "flex",
                    marginRight: "auto",
                    paddingRight: "2px",
                  }}
                >
                  <Button
                    style={{
                      background: "#ed1165",
                      color: "#fff",
                      padding: "5px 20px",
                    }}
                    onClick={() => {
                      localStorage.removeItem("a__c_t");
                      localStorage.removeItem("panel");
                      localStorage.removeItem("order_id");
                      localStorage.removeItem("cartDetails");
                      localStorage.removeItem("ship_isactive");
                      localStorage.removeItem("select_addres");
                      localStorage.removeItem("bil_isactive");
                      if (gut_lg === true) {
                        localStorage.clear();
                      }
                      this.props.history.push("/home");
                    }}
                  >
                    Go back Home
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Hidden> */}
          <Grid container justify="center" className="smallScreenClass" style={{display:"flex",flexDirection:"column",marginTop:30}}>
              <Grid item  className="contant-center container-font-size">
              
                <Typography className="thank_you">A Big Thank You!</Typography>
                <Divider className="divider_payment"/>
                {/* {" "}
                <CheckCircleOutlineIcon className="svgiconsuccess"></CheckCircleOutlineIcon>
                &nbsp;&nbsp; A Big Thank you!&nbsp;&nbsp;Your order has been placed. */}
              </Grid>
              <Grid item  style={{marginTop:30}}> 
              <Typography className="center_content">Welcome to <span style={{fontWeight:700,margin:5}}>Stylori</span> Family! We'll take it from here</Typography> 
               </Grid>   
               <Grid
              item
              className="contant-center"
              style={{color:"#6D6E71"}}
            >
              We've send you an email confirmation.&nbsp;
              <a
                onClick={() => {
                  this.makeFetch_resend_mail();
                }}
                style={{
                  fontSize: "12px",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Resend Email
              </a>
              </Grid>
          </Grid>
          {/* <Grid container justify="center" >
            <Grid item xs={10} sm={10} md={6} className="contant-center">
              <Grid item className="container-font-size">
              <Typography style={{color:"#6D6E71"}}>Welcome to <span style={{fontWeight:700}}>Stylori</span> Family! We'll takeit from here</Typography>
                {" "}
                <CheckCircleOutlineIcon className="svgiconsuccess"></CheckCircleOutlineIcon>
                &nbsp;&nbsp; A Big Thank you!&nbsp;&nbsp;Your order has been placed.
                
              </Grid>
            </Grid> 
          </Grid>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              className="contant-center"
              style={{color:"#6D6E71"}}
            >
              We've send you an email confirmation.&nbsp;
              <a
                onClick={() => {
                  this.makeFetch_resend_mail();
                }}
                style={{
                  fontSize: "12px",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Resend Email
              </a>
            </Grid>
          </Grid> */}

          <Grid container>
            <Allorders allorderdata={this.props.allorderdata} />
          </Grid>
          {/* <Footer /> */}
        </Grid>
      </>
    );
  }
}
const Components = (props) => {
  let {
    CartCtx: {
      cartFilters,
      data,
      loading,
      error,
      allorderdata,
      allordersuccesful,
      wishlistdata,
    },
  } = React.useContext(CartContext);
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  if (Object.keys(allordersuccesful).length === 0) {
    content = window.location.href.toLowerCase().includes("silver") ? (
      <div className="overall-loader">
        <div id="loadingsilver"></div>
      </div>
    ) : (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  } else
    content = (
      <PaymentResponseSuccess
        {...props}
        data={mapped}
        allorderdata={allordersuccesful}
        wishlistdata={wishlistdata}
      />
    );
  return content;
};

export default withRouter(Components);
