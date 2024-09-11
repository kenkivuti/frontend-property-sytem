import React from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.css';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* <Router> */}
      <App />
      {/* </Router> */}
  </React.StrictMode>,
)