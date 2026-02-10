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
        <CaseStudies />
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
        <div className="footer-main">
          <div className="footer-copyright">
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
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/outreach-boosters-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

