import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode by class
  theme: {
    extend: {
      // Add custom themes here if needed
    },
  },
  plugins: [],
};


