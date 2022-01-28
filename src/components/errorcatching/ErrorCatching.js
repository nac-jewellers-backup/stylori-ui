import React from "react";
import "./index.css";
import { Button } from "@material-ui/core";
import { API_URL } from "config";
import axios from "axios";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      handleError: true,
    });

    // error &&
    //   errorInfo &&
    //   axios
    //     .post(`${API_URL}/send_error_mail`, {
    //       page: window.location.href,
    //       error: error?.toString(),
    //       message: errorInfo?.componentStack?.toString(),
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
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
              </details>
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.reload()}
              >
                Refresh/Reload
              </Button>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  (document.location.href = window.location.hostname)
                }
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
