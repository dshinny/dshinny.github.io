import React, { useState, useEffect } from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const isMobile = () => {
    const mediaQuery = '(max-width: 768px)';
    return window.matchMedia(mediaQuery).matches;
  }

  useEffect(() => {
    if (isMobile()) setOpen(false);
  }, [])
  return (
    <nav className="navbar">
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
            </ul>
          ) : (
            ""
          )}
      </div>
      <div className="toggle" onClick={() => setOpen(!open)}>
        <FaAlignJustify />
      </div>
    </nav>
  )
}

export default NavBar