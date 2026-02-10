import React, { useState } from 'react';

function Header() {
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-bar">
      <div className="logo">
        <img src="/obs-newlogo.png" alt="Outreach Boosters AI" className="logo-image" />
      </div>

      <button
        type="button"
        className={`nav-toggle ${isMenuOpen ? 'nav-toggle-open' : ''}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <nav className={`top-nav ${isMenuOpen ? 'top-nav-open' : ''}`}>
        <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Services
        </a>
        <a href="#who-this-is-for" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Who this is for
        </a>
        <a href="#proof" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Proof
        </a>
        <a href="#flywheel" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Flywheel
        </a>
        <a href="#case-studies" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Case Studies
        </a>

        <div
          className={`nav-dropdown ${isOtherOpen ? 'nav-dropdown-open' : ''}`}
          onMouseLeave={() => setIsOtherOpen(false)}
        >
          <button
            type="button"
            className="nav-link nav-link-dropdown"
            onClick={() => setIsOtherOpen((open) => !open)}
          >
            Other <span className="dropdown-arrow">▼</span>
          </button>
          <div className="nav-dropdown-menu">
            <a href="#team" className="nav-dropdown-item" onClick={() => setIsMenuOpen(false)}>
              Team
            </a>
            <a href="#faq" className="nav-dropdown-item" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="#partners" className="nav-dropdown-item" onClick={() => setIsMenuOpen(false)}>
              Partners and Integrations
            </a>
          </div>
          
        </div>
        
      </nav>

      <div className="header-cta">
        <a
          href="https://calendly.com/outreachboosters/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-cta"
        >
          Book a free call
        </a>
      </div>
    </header>
  );
}

export default Header;



