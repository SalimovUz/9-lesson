import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// BrowserRouter, Routes, Route

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Banner from './Pages/Banner.jsx'
import Aksiya from './Pages/Aksiya.jsx'
import Believe from './Pages/Believe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/aksiya" element={<Aksiya />} />
        <Route path="/believe" element={<Believe />} />

        

      </Routes>
    </Router>
  </React.StrictMode>,
)
