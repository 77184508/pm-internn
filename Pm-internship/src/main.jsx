import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n';
import './index.css'  
import About from './About.jsx'
import Navbar from "./Navbar";
import App from './App.jsx';
import Forms from './form.jsx';
import Wrapper from './Wrapper.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/app" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)