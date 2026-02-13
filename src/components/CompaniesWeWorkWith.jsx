import React, { useEffect, useState } from 'react';

const companyTypes = [
  'Personal Care and Beauty Care',
  'Pharma and Biotech',
  'Nutraceuticals and Dietary Supplements',
  'OTC Healthcare Products',
  'Medical Devices and Diagnostics',
  'Food and Beverage Manufacturing',
  'Pet Care and Pet Wellness',
  'Household and Home Care Products',
  'Baby and Family Care Products',
  'Fragrance and Home Scent Products',
];

function CompaniesWeWorkWith() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-highlight different industries for subtle slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companyTypes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="companies-section">
      <h2 className="section-title companies-title">Industries we work with</h2>
      <p className="section-subtitle">
        We work best when the offer is clear and follow up is fast
      </p>

      <div className="companies-container">
        <div className="companies-grid">
          {companyTypes.map((type, index) => (
            <button
              key={index}
              className={`company-pill ${index === activeIndex ? 'company-pill-active' : ''}`}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <p className="companies-footer-text">
        If you have a clear buyer and a real problem, we can build a repeatable outbound system around it
      </p>
    </section>
  );
}

export default CompaniesWeWorkWith;
