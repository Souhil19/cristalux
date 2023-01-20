import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
