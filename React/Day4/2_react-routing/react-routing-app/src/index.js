import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';

import reportWebVitals from './reportWebVitals';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

reportWebVitals();