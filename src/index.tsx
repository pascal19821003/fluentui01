import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppWithFrame from './AppWithFrame';
import reportWebVitals from './reportWebVitals';
import AppThemeing from './fluentui/developer/themeing/AppThemeing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <AppWithMediaSearch /> */}
    {/* <App /> */}
    <AppThemeing />
    {/* <AppWithFrame /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
