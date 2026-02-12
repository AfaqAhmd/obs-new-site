import React from 'react';

const topRowLogos = [
  { id: 1, name: 'Micro Printing', image: '/Micro-Printing-Logo.png', hasCaseStudy: false, website: 'https://micro-printing.com/' },
  { id: 2, name: 'NCL', image: '/NCL-logo.png', hasCaseStudy: false, website: 'https://naturalcosmeticlabs.com/' },
  { id: 3, name: 'HWL', image: '/HWL_logo.png', hasCaseStudy: false, website: 'https://hwlmanufacturing.com' },
  { id: 4, name: 'Allyzent', image: '/allyzent-logo.png', hasCaseStudy: false, website: 'https://www.allyzent.com' },
  { id: 5, name: 'Axle', image: '/Axle-logo.png', hasCaseStudy: false, website: 'https://axletargets.com' },
  { id: 6, name: 'AR Unlimited', image: '/ar-unlimited-logo2.png', hasCaseStudy: false, website: 'https://www.arunlimitedsupply.com' },
];

const bottomRowLogos = [
  { id: 7, name: 'Serialio', image: '/serialio_logo.png', hasCaseStudy: false, website: 'https://serialio.com/' },
  { id: 8, name: 'EDG', image: '/Edg-neg-log.png', hasCaseStudy: false, website: 'https://edgenegotiation.com' },
  { id: 9, name: 'CIH', image: '/CIH-logo.png', hasCaseStudy: false, website: 'https://cloud-in-hand.com/' },
  { id: 10, name: 'Ginos', image: '/Ginos-logo.png', hasCaseStudy: false, website: 'https://ginosonline.com/' },
  { id: 11, name: 'Axle', image: '/Axle-logo.png', hasCaseStudy: false, website: 'https://www.axle.com' },
  { id: 12, name: 'AR Unlimited', image: '/ar-unlimited-logo2.png', hasCaseStudy: false, website: 'https://www.arunlimited.com' },
];

function Logos() {
  return (
    <section className="logos">
      <h2 className="logos-title">CMOs & CDMOs that trust Outreachboosters to grow their Pipeline</h2>
      
      <div className="logos-slider-container">
        <div className="logos-slider-row logos-slider-top">
          <div className="logos-slider-track">
            {[...topRowLogos, ...topRowLogos].map((logo, index) => (
              <div key={`top-${logo.id}-${index}`} className="logo-slide-item">
                {logo.website ? (
                  <a
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logo-slide-link"
                  >
                    <img src={logo.image} alt={logo.name} className="logo-slide-image" />
                  </a>
                ) : (
                  <img src={logo.image} alt={logo.name} className="logo-slide-image" />
                )}
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
                {logo.website ? (
                  <a
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logo-slide-link"
                  >
                    <img src={logo.image} alt={logo.name} className="logo-slide-image" />
                  </a>
                ) : (
                  <img src={logo.image} alt={logo.name} className="logo-slide-image" />
                )}
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

