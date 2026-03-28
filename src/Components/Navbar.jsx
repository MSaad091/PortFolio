import React, { useState } from 'react';
import '../Stylesheets/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // ✅ Track current path

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">LOGO</div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>☰</div>

        <nav className={open ? "nav active" : "nav"}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''} 
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={location.pathname === '/resume' ? 'active' : ''} 
                onClick={closeMenu}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''} 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div 
          className={`nav-backdrop ${open ? 'active' : ''}`} 
          onClick={closeMenu}
        ></div>
      </div>
    </>
  );
}

export default Navbar;