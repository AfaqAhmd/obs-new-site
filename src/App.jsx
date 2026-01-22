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
        <Framework />
        <Testimonials />
        <WhereWeShine />
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
        <div>© {new Date().getFullYear()} Outreach Boosters AI. All rights reserved.</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

