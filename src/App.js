// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Render the routes component */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
