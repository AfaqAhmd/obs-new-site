import React from 'react';

function Header() {
  return (
    <header className="top-bar">
      <div className="logo">
        <img src="/obs-newlogo.png" alt="Outreach Boosters AI" className="logo-image" />
      </div>

      <nav className="top-nav">
        <a href="#" className="nav-link">Agency</a>
        <a href="#" className="nav-link">Tools</a>
        {/* <a href="#" className="nav-link nav-link-dropdown">
          Products
          <span className="dropdown-arrow">▼</span>
          <span className="nav-badge">New</span>
        </a> */}
        <a href="#" className="nav-link nav-link-dropdown">
          Resources
          <span className="dropdown-arrow">▼</span>
        </a>
      </nav>

      <div className="header-cta">
        <a
          href="https://calendly.com/outreachboosters/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-cta"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

export default Header;

