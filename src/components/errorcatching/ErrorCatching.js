import React from "react";
import "./index.css";
import { Button } from "@material-ui/core";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
      handleError: true
    });
    // , () => {

    //   if (!localStorage.getItem('error') || (localStorage.getItem('error') && localStorage.getItem('error') !== this.state.error.toString())) {
    //     this.handleError()
    //   }
    //   localStorage.setItem('error', this.state.error.toString())
    // }

    // You can also log error messages to an error reporting service here
  }
  // handleError() {
  //   if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  //     if (caches) {
  //       // Service worker cache should be cleared with caches.delete()
  //       caches
  //         .keys()
  //         .then(async function (names) {
  //           console.log(names, "-> caches_list <-");
  //           for (let name of names) await caches.delete(name);
  //         })
  //         .catch((error) => {
  //           console.log("Error while deleting caches : ", error);
  //         });
  //     }
  //   }
  //   // <-
  //   // window.location.reload(true);

  //   // return window.history.go(-1)
  // }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          {/* <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details> */}
          <div id="notfound">
            <div class="notfound">
              <div class="notfound-404"></div>
              <h1>500</h1>
              <h2>Something went wrong.</h2>
              <p>Sorry but the page you are looking have been crashed.</p>
              <details style={{ whiteSpace: "pre-wrap" }}>
                <br />
                {this.state.error && <b>{this.state.error.toString()}</b>}
                <br />
                {/* {this.state.errorInfo.componentStack} */}
              </details>
              <Button variant="contained" color="primary" onClick={()=> window.location.reload()}>
                Refresh/Reload
</Button>
            </div>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
