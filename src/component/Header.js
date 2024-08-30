import React from "react";
import "./asset/css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img src="/path-to-your-logo.png" alt="Health Sphere Logo" />
          </a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            {/* <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li> */}
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="/login" className="auth-button">Login</a>
          <a href="/signup" className="auth-button signup">Signup</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
