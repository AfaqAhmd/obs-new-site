import React from 'react';

function Flywheel() {
  return (
    <section id="flywheel" className="flywheel">
      <h2 className="section-title">The Outreach Boosters Flywheel</h2>
      <p className="section-subtitle">
        Content builds trust, outbound converts intent into replies, calling turns replies into meetings, 
        and CRM reporting shows what actually creates pipeline, so each week gets sharper.
      </p>

      <div className="flywheel-graphic">
        <img 
          src="/flywheel.png" 
          alt="The Outreach Boosters Flywheel diagram showing the cyclical process of content, email outbound, calling motion, and reply data"
          className="flywheel-image"
        />
      </div>
        <p>Feedback driven iteration, weekly</p>

      <form className="hero-form flywheel-form">
        <input placeholder="Enter your work email" />
        <button className='primary-cta' type="button">Book a call</button>
      </form>
    </section>
  );
}

export default Flywheel;

