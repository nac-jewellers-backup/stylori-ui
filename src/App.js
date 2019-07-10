import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

import RouterApp from "./router";

function App() {
  return (
    <Router>
      <RouterApp />
    </Router>
  );
}

export default App;
