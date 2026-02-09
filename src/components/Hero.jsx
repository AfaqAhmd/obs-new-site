import React from 'react';

const YT_EMBED_URL =
  'https://www.youtube.com/embed/u31qwQUeGuM?list=RDu31qwQUeGuM&start_radio=1&rel=0&modestbranding=1';

function Hero() {
  return (
    <section className="hero">
      <p className="hero-pill">For CMOs & CDMOs above $150/mo in revenue</p>
      <h1 className="hero-title">
       RevOps for <span className="hero-highlight">contract manufacturers</span> that creates qualified meetings you can actually measure.
      </h1>
      <p className="hero-subtitle">RevOps execution for CMOs and CDMOs.</p>

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
        <button type="button">Book your free strategy call</button>
      </form>
    </section>
  );
}

export default Hero;

