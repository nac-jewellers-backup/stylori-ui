import React, { useEffect, useRef,useState } from "react";


export default function PaymentHiddenForm(props){
    const [hash,sethash] = useState({
        hashvalue:'',
        timedate:''
    })

    useEffect(() => {
        fetch('http://192.168.0.130:8000/generatepaymenturl', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: {},
        })
        .then((response) => response.json())
        .then((data) => {
            sethash({
                ...hash,
                hashvalue:data
            })
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        if(props.hiddenform && hash.hashvalue !== '' ){
            document.getElementById('payment_hidden_form').submit(
                // (event) => {
                //     // event.preventDefault();
                //     fetch(event.target.action, {
                //         method: 'POST',
                //         body: new URLSearchParams(new FormData(event.target)) // event.target is the form
                //     }).then((resp) => {
                //         return resp.json(); // or resp.text() or whatever the server sends
                //     }).then((body) => {
                //         // TODO handle body
                //     }).catch((error) => {
                //         // TODO handle error
                //     });
                // }
            );
        }
      }, []
      );
      return (
        <form id="payment_hidden_form" method="POST" action="https://www4.ipg-online.com/connect/gateway/processing">
        <div>
            <label>Transaction Type</label>
            <input size="50" type="hidden" name="txntype" value="sale"/>
        </div>
        <div>
            <label>Transaction Date Time</label>
            <input size="50" type="hidden" name="transactiondatetime" value={new Date()}/>
        </div>
        <div>
            <label>Calculated Hash</label>
            <input size="50" type="hidden" name="calculatedhash" value={hash.hashvalue}/>
        </div>
        <div>
            <label>Currency</label>
            <input size="50" type="hidden" name="currency" value={props.currency}/>
        </div>
        <div>
            <label>Payment Mode</label>
            <input size="50" type="hidden" name="paymentmode" value={props.paymentMod}/>
        </div>
        <div>
            <label>Store Id</label>
            <input size="50" type="hidden" name="storeid" value="3396023678"/>
        </div>
        <div>
            <label>Chargetotal</label>
            <input size="50" type="hidden" name="chargetotal" value="1"/>
        </div>
        <div>
            <label>Shared Secret</label>
            <input size="50" type="hidden" name="sharedsecret" value="Rx82ezCmTd"/>
        </div>
        <div>
            <label>successpage</label>
            <input size="50" type="hidden" name="success" value="http://192.168.0.130:8000/paymentsuccess"/>
        </div>
        <div>
            <label>fail</label>
            <input size="50" type="hidden" name="fail" value="http://192.168.0.130:8000/paymentfailure"/>
        </div>
        <div>
            <label>Language</label>
            <input size="50" type="hidden" name="language" value="en_EN"/>
        </div>
    </form>
      )
}
