import React from "react";
import { useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import "./payment.css";
// import SimpleSelect from '../../../components/InputComponents/Select/Select';
import { CartContext, VoucherContext } from "context";
import cart from "mappers/cart";
import PaymentHiddenForm from "./paymentHiddenForm";
import CurrencyConversion from "utils/CurrencyConversion";
import { API_URL } from "config";
class Netbanking extends React.Component {
  render() {
    let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "";
    const data = this.props.data ? this.props.data : "";
    var discounted_price =  this.props.Voucherctx?.value ?  this.props.Voucherctx?.value : "";

    // var { data:coddata, error, loading, makeFetch} = useNetworkRequest('/api/auth/signin', {}, false);
    var dataCard1;
    if (data.length > 0 && data !== undefined && data !== null) {
      dataCard1 =
        this.props.data &&
        this.props.data
          .map((val) => {
            return val.dataCard1[0].offerPrice * JSON.parse(localStorage.getItem("quantity"))[val.generatedSku];
          })
          .reduce(myFunc);
      function myFunc(total, num) {
        // discounted_price = this && this.props.cartFilters.discounted_price ? JSON.stringify(this.props.cartFilters.discounted_price) : ""
        // if (discounted_price > 0) {
        //     var a = Math.round(total + num);
        //     var cart_price = (a - discounted_price)
        // } else {
        var cart_price = Math.round(total + num);
        // }
        return cart_price;
      }
    }
    const totalCostCal = (
      discountAmount,
      dataCard,
      discountPrice,
      shippingCharge
    ) => {
      if (discountAmount) {
        if (shippingCharge) {
          return CurrencyConversion(discountAmount + shippingCharge);
          // new Intl.NumberFormat("en-IN", {
          //   style: "currency",
          //   currency: "INR",
          //   minimumFractionDigits: 0,
          // }).format(Math.round(discountAmount + shippingCharge));
        } else {
          return CurrencyConversion(discountAmount);
          // new Intl.NumberFormat("en-IN", {
          //   style: "currency",
          //   currency: "INR",
          //   minimumFractionDigits: 0,
          // }).format(Math.round(discountAmount));
        }
      }
      if (dataCard - discountPrice) {
        if (shippingCharge) {
          return CurrencyConversion(dataCard - discountPrice + shippingCharge);
          //  new Intl.NumberFormat("en-IN", {
          //   style: "currency",
          //   currency: "INR",
          //   minimumFractionDigits: 0,
          // }).format(Math.round(dataCard - discountPrice + shippingCharge));
        } else {
          return CurrencyConversion(dataCard - discountPrice);

          // new Intl.NumberFormat("en-IN", {
          //   style: "currency",
          //   currency: "INR",
          //   minimumFractionDigits: 0,
          // }).format(Math.round(dataCard - discountPrice));
        }
      }
    };
    return (
      <Grid spacing={12} container lg={12} xs={12} style={{ width: "100%" }}>
        {/* <Container> */}
        {/* <Grid spacing={12} container lg={12} xs={12} style={{ textAlign: "center" }}>
                    <Grid item lg={4} xs={4}>
                        <img src=" https://assets.stylori.com/images/static/icons/bank_logo_02.png" />
                    </Grid>
                    <Grid item lg={4} xs={4}>
                        <img src="https://assets.stylori.com/images/static/icons/bank_logo_03.png" />
                    </Grid>
                    <Grid item lg={4} xs={4}>
                        <img src="https://assets.stylori.com/images/static/icons/bank_logo_04.png" />
                    </Grid>
                    <Grid item lg={2} />
                    <Grid item lg={8} xs={12}> 
                        <SimpleSelect name={['India']}
                            selectData={[
                                'ICICI Bank',
                                "AXIS Bank",
                                'YES Bank',
                                'Deutsche Bank',
                                'Union Bank',
                                'IDBI Bank',
                                'Federal Bank',
                                'HDFC Bank',
                                'Indian Bank',
                                'Andhra Bank'
                            ]} /><br />
                        <span className="font-netbanking"> We will redirect you to your bank website to authorize the payment. </span>
                        <div className="credit-btn-div">
                            <Button className="credit-button" type="submit">Continue to Pay</Button>
                        </div>
                    </Grid>
                </Grid> */}

        <Grid item lg={12} xs={12}>
        <PaymentHiddenForm   data={Math.round(
                  dataCard1 - discounted_price + this.props.ShippingCharge
                )}
                data1={CurrencyConversion(
                  this.props.ShippingCharge === "Free"
                    ? dataCard1 - discounted_price + 0
                    : dataCard1 - discounted_price + this.props.ShippingCharge
                )} />
          {/* <div className="amout-pay"> Amount Payable </div>
          <div className="credit-btn-div">
            <Grid container>
              <Grid item>
                <span className="rups">
                  {Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(
                    Math.round(dataCard1 - discounted_price)
                  )}
                </span>{" "}
                &nbsp;&nbsp;&nbsp;
              </Grid>
              <Grid item container>
                
              </Grid>
              <Button className="credit-button" type="submit"
                            >Pay Now</Button>
            </Grid>
          </div> */}
        </Grid>
        {/* <div className="code-btn-top">
                        COD orders are subject to telephonic verification.
                        </div> */}
      </Grid>
      // </Container>
    );
  }
}
// export default Netbanking;
const Components = (props) => {
  let {
    CartCtx: { setCartFilters, cartFilters, data, loading, error },
  } = React.useContext(CartContext);
  let {Voucherctx} = React.useContext(VoucherContext);
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  const [ShippingCharge, setShippingCharge] = React.useState(0);
  
  useEffect(() => {
    fetch(`${API_URL}/getshippingcharge`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: localStorage.getItem("cart_id"),
      method: "POST",
    })
      .then(async (response) => response.json())
      .then((val) => {
        if (val) setShippingCharge(val.shipping_charge);
      })
      .catch((err) => {
        console.log(error);
      });
  }, []);

  if (Object.keys(data).length === 0) {
    content = window.location.href.toLowerCase().includes("silver") ? (
      <div className="overall-loader">
        <div id="loadingsilver"></div>
      </div>
    ) : (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  } else content = <Netbanking {...props} data={mapped} cartFilters={cartFilters} setCartFilters={setCartFilters} Voucherctx={Voucherctx}  ShippingCharge={ShippingCharge ?? 0}/>;
  return content;
};
export default Components;
