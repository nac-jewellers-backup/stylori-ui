import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './store';
import './index.css'
import Loading from './screens/Loading';
// import RouterApp from './router';

const RouterApp = React.lazy(() => import('./router'));

function App() {
  return (
    <StoreProvider>
      <Router>
        <React.Suspense fallback={Loading} >
          <RouterApp />
        </React.Suspense>
      </Router>
    </StoreProvider>
  );
}

export default App;
