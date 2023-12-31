import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../src/config";
import "./payment.css";
import { Button, Grid } from "@material-ui/core";
import { CartContext, VoucherContext } from "context";
import CurrencyConversion from "utils/CurrencyConversion";

export default function PaymentHiddenForm(props) {
  let {
    CartCtx: {cartFilters },
  } = React.useContext(CartContext);
  let {Voucherctx} = React.useContext(VoucherContext);
  const [hash, sethash] = useState({
    hashvalue: "",
    timedate: "",
    // amount: "",
    privatekey: "",
    mercid: "",
    currency: "",
    isocurrency: "",
    chmod: "",
    checksum: "",
    buyerEmail: "",
    buyerFirstName: "",
    buyerLastName: "",
    buyerAddress: "",
    buyerCity: "",
    buyerState: "",
    buyerCountry: "",
    buyerPhone: "",
    buyerPinCode: "",
  });
  
  const [orderId, setOrderId] = React.useState(null);
  const obj = {};
  // const order_idx = localStorage.getItem("order_id") ? JSON.parse(localStorage.getItem("order_id")) : "yourorder";
  let cart_id_lo = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
  let cart_id =
    cartFilters && cartFilters._cart_id && Object.keys(cartFilters._cart_id).length > 0 ? cartFilters._cart_id.cart_id : "";
  var cart_ids = cart_id?.length > 0 ? cart_id : cart_id_lo;
  // var hash = null
  // var day = null
  // var currentutc = null
  // let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
  let user_id = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : "";
  obj["payment_mode"] = "Prepaid";
  obj["user_id"] = user_id;
  obj["cart_id"] = cart_ids;
  obj["voucher_code"] = Voucherctx.vouchercode;
  const hitPaymentGateWayAPI = async (orderId) => {
    await fetch(`${API_URL}/sendtoairpay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderid: orderId,
        amount: props.data,
        //props.data
        customvar: "",
        subtype: "",
      }),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        sethash({
          ...hash,
          // hashvalue: data.hash,
          // timedate: data.day
          ...data,
          buyerEmail: data.buyerEmail,
          buyerPhone: data.buyerPhone,
          buyerFirstName: data.buyerFirstName,
          buyerLastName: data.buyerLastName,
          buyerAddress: data.buyerAddress,
          buyerCity: data.buyerCity,
          buyerState: data.buyerState,
          buyerCountry: data.buyerCountry,
          buyerPinCode: data.buyerPinCode,
          privatekey: data.privatekey,
          mercid: data.mercid,
          currency: data.currency,
          isocurrency: data.isocurrency,
          chmod: data.chmod,
          checksum: data.checksum,
          amount: data.amount,
        });

        //  hash=data.hash
        //  day = data.day
        //  currentutc = data.currentutc
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const generateOrderdId = async () => {
    const status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    };

    const json = (response) => {
      return response.json();
    };

    await fetch(`${API_URL}/createorder`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // then(async(response) =>await response.json()).
      body: JSON.stringify(obj),
    })
      .then(status)
      .then(json)
      .then((data) => {
        localStorage.removeItem("order_id");
        // if (localStorage.getItem('gut_lg')) localStorage.removeItem("user_id")
        sessionStorage.removeItem("updatedProduct");
        setOrderId(data.order.payment_id);
        if (data !== null && data !== undefined) {
          localStorage.setItem("order_id", JSON.stringify(data.order.id));
          hitPaymentGateWayAPI(data.order.id);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // document.getElementsByName("form_payment").submit();

    // document.getElementById("sendtoairpay").submit();
  };
  useEffect(() => {
    if (hash.checksum) document.getElementById("sendtoairpay").submit();
  }, [hash]);

  
  // useEffect(()=>{if(hash.checksum) console.log(hash,orderId,"hashandorderid")},[hash])

  return (
    <div container>
      <form
        method="POST"
        action="https://payments.airpay.co.in/pay/index.php"
        id="sendtoairpay"
      >
        <div class="form-group">
          <input
            id="privatekey"
            type="hidden"
            name="privatekey"
            value={hash.privatekey}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerPhone"
            type="hidden"
            name="mercid"
            value={hash.mercid}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="orderid"
            type="hidden"
            name="orderid"
            value={orderId}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="currency"
            type="hidden"
            name="currency"
            value={hash.currency}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="isocurrency"
            type="hidden"
            name="isocurrency"
            value={hash.isocurrency}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="chmod"
            type="hidden"
            name="chmod"
            value={hash.chmod}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerEmail"
            type="hidden"
            name="buyerEmail"
            value={hash.buyerEmail}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerPhone"
            type="hidden"
            name="buyerPhone"
            value={hash.buyerPhone}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerFirstName"
            type="hidden"
            name="buyerFirstName"
            value={hash.buyerFirstName}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerLastName"
            type="hidden"
            name="buyerLastName"
            value={hash.buyerLastName}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerAddress"
            type="hidden"
            name="buyerAddress"
            value={hash.buyerAddress}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerCity"
            type="hidden"
            name="buyerCity"
            value={hash.buyerCity}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerState"
            type="hidden"
            name="buyerState"
            value={hash.buyerState}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerCountry"
            type="hidden"
            name="buyerCountry"
            value={hash.buyerCountry}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="buyerPinCode"
            type="hidden"
            name="buyerPinCode"
            value={hash.buyerPinCode}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="orderid"
            type="hidden"
            name="orderid"
            value={orderId}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="amount"
            type="hidden"
            name="amount"
            value={hash.amount}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            id="checksum"
            type="hidden"
            name="checksum"
            value={hash.checksum}
            class="form-control"
          />
        </div>
      </form>
      <Grid item container>
        <Button
          onClick={generateOrderdId}
          style={{ cursor: "pointer",backgroundColor:"#D32564",color:"#fff",width:'inherit' }}
          variant="contained"
        >
          {` Pay ${props?.total}`}
        </Button>
        {/* <input
          style={{ cursor: "pointer" }}
          type="button"
          onClick={generateOrderdId}
          className="credit-button"
          name="submitBtn"
          value="Pay now"
        /> */}
      </Grid>
    </div>
  );
}
