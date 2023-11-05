import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import './assets/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
