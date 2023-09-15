import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next/i18n';
import { AuthProviderWrapper } from './contexts/auth.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);