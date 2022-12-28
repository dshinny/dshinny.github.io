import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <a className="footer-link" href="https://www.linkedin.com/in/danielshin9/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a className="footer-link" href="https://www.github.com/dshinny" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a className="footer-link" href="mailto:dshinny21@gmail.com"><FaEnvelope /></a>
    </div>
  )
}

export default Footer;