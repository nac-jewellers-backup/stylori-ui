import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './store';
import './index.css'
// import RouterApp from './router';

const RouterApp = React.lazy(() => import('./router'));

function App() {
  return (
    <StoreProvider>
      <Router>
        <React.Suspense fallback={<div>Loading...</div>} >
          <RouterApp />
        </React.Suspense>
      </Router>
    </StoreProvider>
  );
}

export default App;
