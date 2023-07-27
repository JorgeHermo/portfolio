import React from 'react';
import "./style.css";
import './App.css';
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
