import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NetworkProvider, GlobalProvider } from "context";
import "./index.css";
import Loading from "screens/Loading";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { lambda_func_front_end } from "./utils";
import Theme from "./Theme.js";
import { withRouter } from "react-router-dom";
import CacheBuster from "./components/cacheBrust";
import ErrorBoundary from "components/errorcatching/ErrorCatching";
let jewellery_theme = createMuiTheme(require("./jewellery_theme.json"));
let silver_jewellery_theme = createMuiTheme(
  require("./silver_jewellery_theme.json")
);
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
const RouterApp = React.lazy(() => import("router")); 

// const client = new ApolloClient({
//   uri: ``,
// });

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
    console.log('----working----')
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
                  <NetworkProvider>
                    {/*productId="SP1135" <ProductDetailProvider productId="SP1135">*/}
                    <Router>
                      <React.Suspense fallback={Loading}>
                        <RouterApp />
                      </React.Suspense>
                    </Router>
                    {/* </ProductDetailProvider> */}
                  </NetworkProvider>
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
