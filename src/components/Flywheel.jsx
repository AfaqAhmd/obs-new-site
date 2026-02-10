import React from 'react';

function Flywheel() {
  return (
    <section id="flywheel" className="flywheel">
      <h2 className="section-title">The Outreach Boosters Flywheel</h2>
      <p className="section-subtitle">
        Content builds trust, email outbound scales it. Calling motion turns trust into conversations, reply data
        improves targeting, and the loop compounds.
      </p>

      <div className="flywheel-graphic">
        <img 
          src="/flywheel5.png" 
          alt="The Outreach Boosters Flywheel diagram showing the cyclical process of content, email outbound, calling motion, and reply data"
          className="flywheel-image"
        />
      </div>

      <form className="hero-form flywheel-form">
        <input placeholder="Enter your work email" />
        <button className='primary-cta' type="button">Book a call</button>
      </form>
    </section>
  );
}

export default Flywheel;

