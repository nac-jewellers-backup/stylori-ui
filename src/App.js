import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NetworkProvider, GlobalProvider, VoucherProvider } from "context";
import "./index.css";
import Loading from "screens/Loading";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lambda_func_front_end } from "./utils";
import Theme from "./Theme.js";
import { withRouter } from "react-router-dom";
import CacheBuster from "./components/cacheBrust";
import ErrorBoundary from "components/errorcatching/ErrorCatching";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./config";

let jewellery_theme = createTheme(require("./jewellery_theme.json"));
let silver_jewellery_theme = createTheme(
  require("./silver_jewellery_theme.json")
);
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
const RouterApp = React.lazy(() => import("router"));

const theme_func = () => {
  if (window.location.pathname === "/StyloriSilver") {
    return silverThemes;
  } else {
    return jewelleryThemes;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    lambda_func_front_end();
  }
  render() {
    return (
      // <ApolloProvider client={client}>
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            // You can decide how and when you want to force reload
            refreshCacheAndReload();
          }
          return (
            <ErrorBoundary>
              <GlobalProvider>
                <Theme>
                <VoucherProvider>
                  <NetworkProvider>
                    {/*productId="SP1135" <ProductDetailProvider productId="SP1135">*/}
                    <Router>
                      <React.Suspense fallback={Loading}>
                        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                          <RouterApp />
                        </GoogleOAuthProvider>
                      </React.Suspense>
                    </Router>
                    {/* </ProductDetailProvider> */}
                  </NetworkProvider>
                  </VoucherProvider>
                </Theme>
              </GlobalProvider>
            </ErrorBoundary>
          );
        }}
      </CacheBuster>
      // </ApolloProvider>
    );
  }
}

export default withRouter(App);
