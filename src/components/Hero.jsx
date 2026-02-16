import React, { useState } from 'react';

const YT_EMBED_URL =
  'https://www.youtube.com/embed/MLpWrANjFbI?si=v4fpTVP_BWKKa8Ys';

function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      // Logic to handle email submission (e.g., send to server)
      console.log("Form submitted with email:", email);
    } else {
      console.log("Email is required");
    }
  };

  return (
    <section className="hero">
      <p className="hero-pill">For CMOs (Contract Manufacturing Organizations) &amp; <br/> CDMOs (Contract Development & Manufacturing Organizations)</p>
      <h1 className="hero-title">
        10+ qualified prospects in 30 days, <br/> or your month is on us until results show up
        
      </h1>
      <p className="hero-subtitle">GTM & RevOps for Contract Developers & Manufacturers</p>

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

      <form className="hero-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your work email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Book your free strategy call</button>
      </form>
    </section>
  );
}

export default Hero;
