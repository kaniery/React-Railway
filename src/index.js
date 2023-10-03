import React from 'react';
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/App';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
