import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { BankContextProvider } from './context/bank_context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BankContextProvider>
      <App />
    </BankContextProvider>
  </React.StrictMode>,
);
