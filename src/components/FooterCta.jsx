import React, { useState } from 'react';

const badges = [
  'Trusted by 10+ CMOs',
  '4.9/5 Rating',
  '500+ Qualified Leads',
];

const testimonial = {
  quote: "OBS transformed our outbound motion. We consistently get new qualified demos every week.",
  author: 'Max Gowing',
  role: 'CEO and Founder',
  company: 'Ohio',
};

const avatars = [
  { name: 'Abdul Rehman', image: '/ab-rehman.png' },
  { name: 'Awais Saad', image: '/awais.png' },
  { name: 'Hameez Akhtar', image: '/hameez.png' },
  { name: 'Shuraim', image: '/shuraim.png' },
];

function FooterCta() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Form submitted with email:', email);
      // Placeholder for form submission
      setEmail('');
    }
  };

  return (
    <div className="footer-cta">
      <div className="footer-cta-container">
        {/* Left Column */}
        <div className="footer-cta-left">
          {/* Brand Section */}
          <div className="footer-cta-brand">
            <div className="footer-cta-logo-line">
              <img src="/obs-newlogo.png" alt="Outreach Boosters AI" className="footer-cta-logo-image" />
              <div className="footer-cta-logo-text">Outreach Boosters AI</div>
            </div>
            <p className="footer-cta-description">
              Get 10+ Qualified Prospects in 30 Days Or We Work For Free Until You Do
            </p>
          </div>

          {/* CTA Button */}
          <div className="footer-cta-button-wrapper">
            <a
              href="https://calendly.com/outreachboosters/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-cta footer-cta-button"
            >
              Book your free strategy call
            </a>
          </div>

          {/* Badges */}
          <div className="footer-cta-badges">
            {badges.map((badge, index) => (
              <span key={index} className="footer-cta-badge">
                {badge}
              </span>
            ))}
          </div>

          {/* Credibility Line */}
          <div className="footer-cta-credibility">
            <span className="footer-cta-credibility-text">Trusted by industry leaders</span>
          </div>

          {/* Avatars */}
          <div className="footer-cta-avatars">
            {avatars.map((avatar, index) => (
              <div key={index} className="footer-cta-avatar" title={avatar.name}>
                <img src={avatar.image} alt={avatar.name} />
              </div>
            ))}
            <div className="footer-cta-avatar-more">+4</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-cta-right">
          {/* Description */}
          <p className="footer-cta-right-description">
            We integrate with the stack you already use, and we can run the infrastructure if you need speed.
          </p>

          {/* Lead Capture Form */}
          <form className="footer-cta-form" onSubmit={handleSubmit}>
            <label htmlFor="footer-email" className="footer-cta-form-label">
              Get started today
            </label>
            <div className="footer-cta-form-input-wrapper">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer-cta-form-input"
                required
              />
              <button type="submit" className="footer-cta-form-button">
                Submit
              </button>
            </div>
          </form>

          {/* Testimonial Card */}
          <div className="footer-cta-testimonial">
            <div className="footer-cta-testimonial-content">
              <p className="footer-cta-testimonial-quote">"{testimonial.quote}"</p>
              <div className="footer-cta-testimonial-author">
                <span className="footer-cta-testimonial-name">{testimonial.author}</span>
                <span className="footer-cta-testimonial-role">{testimonial.role}, {testimonial.company}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCta;
