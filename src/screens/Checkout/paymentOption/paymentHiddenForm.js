import React, { useEffect, useRef,useState } from "react";


export default function PaymentHiddenForm(props){
    const [hash,sethash] = useState({
        hashvalue:"",
        timedate:""
    })
    useEffect(() => {
        fetch('https://api-alpha.stylori.net/generatepaymenturl', {
        method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            sethash({
                ...hash,
                hashvalue:data.hash,
                timedate:data.day
            })
        console.log('Success:', data.hash,data.day);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        // document.getElementById("payment_hidden_form").style.display="block";
        // if( hash.hashvalue !== '' ){
        //     document.getElementById('payment_hidden_form').submit(
        //         // (event) => {
        //         //     // event.preventDefault();
                    // fetch(event.target.action, {
                    //     method: 'POST',
                    //     body: new URLSearchParams(new FormData(event.target)) // event.target is the form
                    // }).then((resp) => {
                    //     return resp.json(); // or resp.text() or whatever the server sends
                    // }).then((body) => {
                    //     // TODO handle body
                    // }).catch((error) => {
                    //     // TODO handle error
                    // });
        //         // }
        //     );
        // }
      }, []
      );
      return (
        <form id="payment_hidden_form" method="POST" action="https://www4.ipg-online.com/connect/gateway/processing">
        <div>
            {/* <label>Transaction Type</label> */}
            <input size="50" type="hidden" name="txntype" value="sale"/>
        </div>
        <div>
            {/* <label>Transaction Date Time</label> */}
            <input size="50" type="hidden" name="txndatetime" value={hash.timedate}/>
        </div>
        <div>
            {/* <label>Calculated Hash</label> */}
            <input size="50" type="hidden" name="hash" value={hash.hashvalue}/>
        </div>
        <div>
            {/* <label>Currency</label> */}
            <input size="50" type="hidden" name="currency" value="356"/>
        </div>
        <div>
            {/* <label>Payment Mode</label> */}
            <input size="50" type="hidden" name="mode" value="payonly"/>
        </div>
        <div>
            {/* <label>Store Id</label> */}
            <input size="50" type="hidden" name="storename" value="3396023678"/>
        </div>
        <div>
            {/* <label>Chargetotal</label> */}
            <input size="50" type="hidden" name="chargetotal" value="1"/>
        </div>
        <div>
            {/* <label>successpage</label> */}
            <input size="50" type="hidden" name="responseSuccessURL" value="https://alpha.stylori.net/paymentsuccess/:6565656"/>
        </div>
        <div>
            {/* <label>fail</label> */}
            <input size="50" type="hidden" name="responseFailURL" value="https://alpha.stylori.net/paymentfail/:6565656"/>
        </div>
        <div>
            {/* <label>Language</label> */}
            <input size="50" type="hidden" name="language" value="en_EN"/>
        </div>
        <div>
        <input size="50" type="hidden" name="sharedsecret" value="" />
        <input type="hidden" name="timezone" value="IST" />
        <input type="hidden" name="authenticateTransaction" value="true" />
        </div>
       <input type="submit" style={{background: "#ec7ea8",color: "white",padding: "6px"}} name ="submitBtn" value="Place Order" />
    </form>
      )
}
