import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NetworkProvider, GlobalProvider } from 'context';
import './index.css'
import Loading from 'screens/Loading';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { lambda_func_front_end } from './utils'
import Theme from './Theme.js'
import { withRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
let jewellery_theme = createMuiTheme(require('./jewellery_theme.json'));
let silver_jewellery_theme = createMuiTheme(require('./silver_jewellery_theme.json'));
let jewelleryThemes = responsiveFontSizes(jewellery_theme);
let silverThemes = responsiveFontSizes(silver_jewellery_theme);
const RouterApp = React.lazy(() => import('router'));



// const client = new ApolloClient({
//   uri: ``,
// });

const theme_func = () => {

  if (window.location.pathname === "/StyloriSilver") {
    return silverThemes
  }
  else {
    return jewelleryThemes
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    lambda_func_front_end()
  }
  render() {
    return (
      <>
          <Helmet> 
<meta property="og:url" content="https://swiftkey.com/en/united-states-emoji/"/>
<meta property="og:title" content="The United States of Emoji presented by SwiftKey Keyboard"/>
<meta property="og:description" content="Which emoji does each US state use more than others? Explore the map above or select a state below to learn more."/>
<meta property="og:site_name" content="SwiftKey"/>
<link rel="canonical" href="https://stylori.com"></link>
{/* <meta property="og:image" content="https://i.imgur.com/fdPhX2E.png"/> */}
   
  </Helmet>
      {/* // <ApolloProvider client={client}> */}
      <GlobalProvider>
        <Theme>
          <NetworkProvider>
            {/*productId="SP1135" <ProductDetailProvider productId="SP1135">*/}
            <Router>
              <React.Suspense fallback={Loading} >
                <RouterApp />
              </React.Suspense>
            </Router>
            {/* </ProductDetailProvider> */}
          </NetworkProvider>
        </Theme>
      </GlobalProvider>
      {/* // </ApolloProvider> */}

      </>
    );
  }

}

export default withRouter(App);
