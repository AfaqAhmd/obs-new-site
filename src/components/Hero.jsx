import React, { useEffect, useState } from 'react';

const YT_EMBED_URL =
  'https://www.youtube.com/embed/MLpWrANjFbI?si=v4fpTVP_BWKKa8Ys';

const TYPING_PHRASES = ['Contract Development Manufacturers', 'Contract Manufacturers'];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];

    let timeout = 180;
    if (isDeleting) timeout = 60;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = 1500; // pause before deleting
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      timeout = 400; // pause before typing next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
    }

    const timer = setTimeout(() => {
      const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(nextIndex);
      setDisplayText(currentPhrase.slice(0, nextIndex));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="hero">
      <p className="hero-pill">For CMOs &amp; CDMOs above $150/mo in revenue</p>
      <h1 className="hero-title">
        RevOps for{' '}<br/>
        <span className="hero-typewriter">
          <span className="hero-typewriter-text">{displayText}</span>
          <span className="hero-typewriter-cursor">|</span>
        </span>
        <br />
        that creates qualified meetings you can actually measure.
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
        <input type='email'  placeholder="Enter your work email" />
        <button type="button">Book your free strategy call</button>
      </form>
    </section>
  );
}

export default Hero;

