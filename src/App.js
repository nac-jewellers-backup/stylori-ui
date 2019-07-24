import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './store';
import './index.css'
import Loading from './screens/Loading';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import RouterApp from './router';
let outerTheme = createMuiTheme(require('./theme.json'));
let outerThemes = responsiveFontSizes(outerTheme);
const RouterApp = React.lazy(() => import('./router'));

function App() {
  return (
    <ThemeProvider theme={outerThemes}>
    <StoreProvider>
      <Router>
        <React.Suspense fallback={Loading} >
          <RouterApp />
        </React.Suspense>
      </Router>
    </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
