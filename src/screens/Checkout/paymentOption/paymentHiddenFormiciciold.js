import React, { useState } from "react";
import { API_URL } from "../../../config";
import "./payment.css";
import { Grid } from "@material-ui/core";
import { CartContext } from "context";

export default function PaymentHiddenForm(props) {
  let {
    CartCtx: { setCartFilters, cartFilters, data, loading, error },
  } = React.useContext(CartContext);
  const [hash, sethash] = useState({
    hashvalue: "",
    timedate: "",
  });
  const [orderId, setOrderId] = React.useState(null);
  const obj = {};
  const order_idx = localStorage.getItem("order_id") ? JSON.parse(localStorage.getItem("order_id")) : "yourorder";
  let cart_id_lo = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
  let cart_id =
    cartFilters && cartFilters._cart_id && Object.keys(cartFilters._cart_id).length > 0 ? cartFilters._cart_id.cart_id : "";
  var cart_ids = cart_id.length > 0 ? cart_id : cart_id_lo;
  // var hash = null
  // var day = null
  // var currentutc = null
  // let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
  let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "";
  obj["payment_mode"] = "Prepaid";
  obj["user_id"] = user_id;
  obj["cart_id"] = cart_ids;
  obj["voucher_code"] = cartFilters.vouchercode;

  const generateOrderdId = async () => {
    await fetch(`${API_URL}/generatepaymenturl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chargetotal: props.data,
      }),
    })
      .then(async (response) => await response.json())
      .then((data) => {
        sethash({
          ...hash,
          hashvalue: data.hash,
          timedate: data.day,
        });

        //  hash=data.hash
        //  day = data.day
        //  currentutc = data.currentutc
      })

      .catch((error) => {
        console.error("Error:", error);
      });

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
        if (data !== null && data !== undefined) {
          localStorage.setItem("order_id", JSON.stringify(data.order.id));
        }

        setOrderId(data.order.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // document.getElementsByName("form_payment").submit();

    document.getElementById("payment_hidden_form").submit();
  };
  return (
    <div container>
      <form id="payment_hidden_form" method="POST" action="https://www4.ipg-online.com/connect/gateway/processing">
        <div>
          {/* <label>Transaction Type</label> */}
          <input size="50" type="hidden" name="txntype" value="sale" />
        </div>
        <div>
          {/* <label>Transaction Date Time</label> */}
          <input size="50" type="hidden" name="txndatetime" value={hash.timedate} />
        </div>
        <div>
          {/* <label>Calculated Hash</label> */}
          <input size="50" type="hidden" name="hash" value={hash.hashvalue} />
        </div>
        <div>
          {/* <label>Currency</label> */}
          <input size="50" type="hidden" name="currency" value="356" />
        </div>
        <div>
          {/* <label>Payment Mode</label> */}
          <input size="50" type="hidden" name="mode" value="payonly" />
        </div>
        <div>
          {/* <label>Store Id</label> */}
          <input size="50" type="hidden" name="storename" value="3396023678" />
        </div>
        <div>
          {/* <label>Chargetotal</label> */}
          <input
            size="50"
            type="hidden"
            name="chargetotal"
            // value="1"
            value={`${props.data}`}
          />
        </div>
        <div>
          {/* <label>successpage</label> */}
          <input size="50" type="hidden" name="responseSuccessURL" value={`${API_URL}/paymentsuccess`} />
        </div>
        <div>
          {/* <label>fail</label> */}
          <input size="50" type="hidden" name="responseFailURL" value={`${API_URL}/paymentfailure`} />
        </div>
        <div>
          {/* <label>Language</label> */}
          <input size="50" type="hidden" name="language" value="en_EN" />
        </div>
        <div>
          <input size="50" type="hidden" name="sharedsecret" value="" />
          <input type="hidden" name="timezone" value="IST" />
          <input type="hidden" name="authenticateTransaction" value="true" />
          <input type="hidden" name="checkoutoption" value="combinedform" />
          <input size="50" type="hidden" name="oid" value={orderId} />
          {/* <input size="50" type="hidden" name="paymentMethod" value=""/>
                <input type="hidden" name="cardFunction" value = "credit" /> */}
        </div>
        {/* style={{background: "#ec7ea8",color: "white",padding: "6px"}}  */}
      </form>
      <Grid item container>
        <input
          style={{ cursor: "pointer" }}
          type="button"
          onClick={generateOrderdId}
          className="credit-button"
          name="submitBtn"
          value="Pay now"
        />
      </Grid>
    </div>
  );
}
