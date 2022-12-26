import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const NavBar = () => {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <ul className="navbar-left">
            <div className="navbar-left-logo">
              <img src="./image/ds-logo.png" alt=""/>
            </div>
          </ul>
          {state ? (
            <ul className="navbar-right">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  )
}

export default NavBar