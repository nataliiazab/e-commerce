import React, { useState } from "react";
import "./Header.css";


function Header() {
   const [isMenuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
     setMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
     setMenuOpen(false);
   };
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="nav-branding">
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
