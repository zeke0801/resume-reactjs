import React from 'react';
import './CSS/header.css'

const Header = () => (
  <header className="App-header">
    <div className="logo">
      <img src="/img/ZB.png" alt="Logo" />
    </div>
    <nav className="nav-links">
      <a href="#home">Home</a>
      <a href="#contact">Contact</a>
      <a href="#work">Work</a>
    </nav>
    <div className="social-icons">
    </div>
  </header>
);

export default Header;
