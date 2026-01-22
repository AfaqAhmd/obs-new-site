import React from 'react';

const YT_EMBED_URL =
  'https://www.youtube.com/embed/u31qwQUeGuM?list=RDu31qwQUeGuM&start_radio=1&rel=0&modestbranding=1';

function Hero() {
  return (
    <section className="hero">
      <p className="hero-pill">For B2B companies above $100k/mo in revenue</p>
      <h1 className="hero-title">
        <span className="hero-highlight">Outbound + LinkedIn</span> that creates pipeline you can actually measure.
      </h1>
      <p className="hero-subtitle">Outbound execution for B2B teams.</p>

      <div className="hero-video">
        <div className="hero-video-inner">
          <iframe
            src={YT_EMBED_URL}
            title="Outbound demo video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <form className="hero-form">
        <input placeholder="Enter your work email" />
        <button type="button">Book a call</button>
      </form>
    </section>
  );
}

export default Hero;

