import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n';
import './index.css'  
import About from './About.jsx'
import Navbar from "./Navbar";
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)