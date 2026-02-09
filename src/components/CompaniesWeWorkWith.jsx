import React from 'react';

const companyTypes = [
  'CMOs',
  'CDMOs',
  'Co packers',
  'Private label manufacturers',
  'Toll manufacturers',
  // 'Healthcare B2B',
  // 'IT services',
  // 'Professional services',
  // 'B2B suppliers',
  // 'Home services, multi-location',
];

function CompaniesWeWorkWith() {
  return (
    <section className="companies-section">
      <h2 className="section-title companies-title">Companies we work with</h2>
      <p className="section-subtitle">
        We work best when the offer is clear and follow up is fast
      </p>

      <div className="companies-container">
        <div className="companies-grid">
          {companyTypes.map((type, index) => (
            <button key={index} className="company-pill">
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
