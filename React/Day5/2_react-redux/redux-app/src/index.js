import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';

import { Provider } from 'react-redux';
import { store } from './store';

import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootComponent />
    </Provider>
  </React.StrictMode>
);

// ------------------------------

// let arr = [1, 2, 3, 4, 5];

// function append(rArr, item) {
//   var tArr = [...rArr];
//   tArr[tArr.length] = item;
//   return tArr;
// }

// var rArr1 = append(arr, 6);
// console.log(rArr1);

// var rArr2 = append(arr, 6);
// console.log(rArr2);