import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root') // Ensure this matches your HTML file
  );

  reportWebVitals();
