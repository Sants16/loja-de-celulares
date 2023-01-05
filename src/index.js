import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as RotasDaAplicacao } from 'react-router-dom'
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RotasDaAplicacao>
      <Header/>
      <App />
    </RotasDaAplicacao>
  </React.StrictMode>
);
