import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const NavBar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <ul className="navbar-left">
            <div className="navbar-left-logo">
              <a href="#home">
                <img src="./image/ds-logo.png" alt=""/>
              </a>
            </div>
          </ul>
          {open ? (
            <ul className="navbar-right">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setOpen(!open)}>
        <FaAlignJustify />
      </div>
    </nav>
  )
}

export default NavBar