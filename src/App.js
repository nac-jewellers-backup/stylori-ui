import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NetworkProvider, GlobalProvider } from 'context';
import './index.css'
import Loading from 'screens/Loading';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
let jewellery_theme = createMuiTheme(require('./jewellery_theme.json'));
let silver_jewellery_theme = createMuiTheme(require('./silver_jewellery_theme.json'));
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
const RouterApp = React.lazy(() => import('router'));


// const client = new ApolloClient({
//   uri: ``,
// });

const theme_func = () => {

  if (window.location.pathname === "./silverjewellery") {
    return silverThemes
  }
  else {
    return jewelleryThemes
  }

}

function App(props) {


  // const productId = props.location.state.data

  return (
    // <ApolloProvider client={client}>
    <GlobalProvider>
      <ThemeProvider theme={theme_func()}>
        <NetworkProvider>
          {/*productId="SP1135" <ProductDetailProvider productId="SP1135">*/}
          <Router>
            <React.Suspense fallback={Loading} >
              <RouterApp />
            </React.Suspense>
          </Router>
          {/* </ProductDetailProvider> */}
        </NetworkProvider>
      </ThemeProvider>
    </GlobalProvider>
    // </ApolloProvider>
  );
}

export default App;
