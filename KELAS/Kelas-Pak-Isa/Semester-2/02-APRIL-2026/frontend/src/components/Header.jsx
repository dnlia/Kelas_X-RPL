import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <div className="header-content">
        <Link to="/dashboard" className="logo">MyProfil</Link>
        <nav>
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/portfolio">Portofolio</Link></li>
            <li className="nav-separator"></li>
            <li className="dropdown" ref={dropdownRef}>
              <button 
                className="nav-info" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Info {dropdownOpen ? '▲' : '▼'}
              </button>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><button onClick={scrollToFooter}>Kontak</button></li>
                  <li><button onClick={scrollToFooter}>Tentang</button></li>
                </ul>
              )}
            </li>
            <li><button onClick={handleLogout} className="danger" style={{ padding: '5px 15px', fontSize: '12px' }}>Logout</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
