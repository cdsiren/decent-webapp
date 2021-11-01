import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {DAppProvider} from '@usedapp/core';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* 
       Wrap our app in the provider, config is required, 
        but can be left as an empty object: 
    */}
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
