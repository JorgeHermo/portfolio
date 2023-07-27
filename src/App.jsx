import React from 'react';
import "./style.css";
import './App.css';
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
