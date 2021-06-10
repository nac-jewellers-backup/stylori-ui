import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactPixel from "react-facebook-pixel";

// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//     gtmId: 'GTM-5W65BJT'
// }

// TagManager.initialize(tagManagerArgs)

// lambda_func_front_end()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
