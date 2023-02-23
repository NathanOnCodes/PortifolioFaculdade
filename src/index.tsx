import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Normalize } from 'styled-normalize';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Fragment>
      <Normalize />
      <App />
    </React.Fragment>
  </React.StrictMode>
);

