import React from 'react';

const topRowLogos = [
  { id: 1, name: 'Clay', image: '/clay.png', hasCaseStudy: false },
  { id: 2, name: 'Instantly', image: '/instantly.png', hasCaseStudy: false },
  { id: 3, name: 'Heyreach', image: '/heyreach.png', hasCaseStudy: false },
  { id: 4, name: 'Apify', image: '/apify.png', hasCaseStudy: false },
  { id: 5, name: 'Hubspot', image: '/hubspot.png', hasCaseStudy: false },
  { id: 6, name: 'Gohighlevel', image: '/gohighlevel.png', hasCaseStudy: false },
];

const bottomRowLogos = [
  { id: 7, name: 'redbrain', image: '/logo7.png', hasCaseStudy: false },
  { id: 8, name: 'Hemlane', image: '/logo8.png', hasCaseStudy: true },
  { id: 9, name: 'teikametrics', image: '/logo9.png', hasCaseStudy: true },
  { id: 10, name: 'Tango', image: '/logo10.png', hasCaseStudy: false },
  { id: 11, name: 'salesmsg', image: '/logo11.png', hasCaseStudy: false },
  { id: 12, name: 'Pacaso', image: '/pacaso.png', hasCaseStudy: false },
];

function Logos() {
  return (
    <section className="logos">
      <h2 className="logos-title">CMOs & CDMOs that trust OBS Agency to grow their Pipelines</h2>
      
      <div className="logos-slider-container">
        <div className="logos-slider-row logos-slider-top">
          <div className="logos-slider-track">
            {[...topRowLogos, ...topRowLogos].map((logo, index) => (
              <div key={`top-${logo.id}-${index}`} className="logo-slide-item">
                <img src={logo.image} alt={logo.name} className="logo-slide-image" />
                {logo.hasCaseStudy && (
                  <button className="case-study-btn">Case Study</button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="logos-slider-row logos-slider-bottom">
          <div className="logos-slider-track logos-slider-reverse">
            {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <div key={`bottom-${logo.id}-${index}`} className="logo-slide-item">
                <img src={logo.image} alt={logo.name} className="logo-slide-image" />
                {logo.hasCaseStudy && (
                  <button className="case-study-btn">Case Study</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logos;

