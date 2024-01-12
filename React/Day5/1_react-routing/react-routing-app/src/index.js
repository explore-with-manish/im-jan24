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


// -------------------------------------
// function add(x, y) {
//   log(`add called with arguments ${x}, ${y}`);
//   return x + y;
// }

// function subtract(x, y) {
//   log(`subtract called with arguments ${x}, ${y}`);
//   return x - y;
// }

// function log(msg) {
//   console.log(msg);
// }

// console.log(add(10, 20));
// console.log(subtract(10, 20));

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function logDecorator(fn) {
//   return function() {
//     console.log(`${fn.name} called with arguments ${arguments[0]}, ${arguments[1]}`);
//     return fn.apply(this, arguments);
//   }
// }

// const addWithLogging = logDecorator(add);
// const subtractWithLogging = logDecorator(subtract);

// console.log(addWithLogging(10, 20));
// console.log(subtractWithLogging(10, 20));