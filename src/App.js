import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NetworkProvider, GlobalProvider } from 'context';
import './index.css'
import Loading from 'screens/Loading';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
let outerTheme = createMuiTheme(require('./theme.json'));
let outerThemes = responsiveFontSizes(outerTheme);
const RouterApp = React.lazy(() => import('router'));  


// const client = new ApolloClient({
//   uri: ``,
// });



function App(props) {


  // const productId = props.location.state.data

  return (
    // <ApolloProvider client={client}>
    <GlobalProvider>
      <ThemeProvider theme={outerThemes}>
        <NetworkProvider>
           {/*productId="SP1135" <ProductDetailProvider productId="SP1135">*/ }
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
