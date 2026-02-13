import React from 'react';
import './style.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Logos from './components/Logos.jsx';
import Services from './components/Services.jsx';
import Flywheel from './components/Flywheel.jsx';
import Framework from './components/Framework.jsx';
import Testimonials from './components/Testimonials.jsx';
import WhereWeShine from './components/WhereWeShine.jsx';
import WhoThisIsFor from './components/WhoThisIsFor.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import MeetTheTeam from './components/MeetTheTeam.jsx';
import ResultsTimeline from './components/ResultsTimeline.jsx';
import CompaniesWeWorkWith from './components/CompaniesWeWorkWith.jsx';
import OfficialPartners from './components/OfficialPartners.jsx';
import FAQ from './components/FAQ.jsx';
import FooterCta from './components/FooterCta.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Flywheel />
        {/* <Framework /> */}
        <Testimonials />
        <WhereWeShine />
        <WhoThisIsFor />
        {/* <CaseStudies /> */}
        <MeetTheTeam />
        <ResultsTimeline />
        <CompaniesWeWorkWith />
        <OfficialPartners />
        <FAQ />
        <section className="bottom-cta">
          <h2>Let&apos;s get started</h2>
          <p>Schedule a 30-minute call to see how we can build your outbound engine.</p>
          <a
            href="https://calendly.com/outreachboosters/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-cta"
          >
            Book a strategy call
          </a>
        </section>
      </main>
      <footer className="footer">
        <FooterCta />
        <div className="footer-main">
          <div className="footer-copyright">
            <div className="footer-address">
              Suite 14, 74 Craven Park Rd, London, NW10 9A7
            </div>
            <div>© {new Date().getFullYear()} Outreach Boosters AI. All rights reserved.</div>
            {/* <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div> */}
          </div>

          <div className="footer-contact">
            <h4 className="footer-section-title">Contact Us</h4>
            <a href="mailto:info@outreachboosters.io" className="footer-contact-link">
              info@outreachboosters.io
            </a>
            <a href="tel:+13159074273" className="footer-contact-link">
              +1 (315) 907-4273
            </a>
          </div>

          <div className="footer-social">
            <h4 className="footer-section-title">Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/people/Outreach-Boosters-AI/61567629869482"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/outreach-boosters-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

