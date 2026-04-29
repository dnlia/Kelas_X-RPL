import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CV from './CV';
import Portfolio from './Portofolio';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* MENU NAVIGASI */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">📄 CV</Link></li>
            <li><Link to="/portfolio">🎨 Portfolio</Link></li>
          </ul>
        </nav>

        {/* ISI HALAMAN (ketika menu ditekan) */}
        <Routes>
          <Route path="/" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
