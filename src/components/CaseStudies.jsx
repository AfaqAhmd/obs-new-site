import React from 'react';

const caseStudies = [
  {
    company: 'Acme Personal Care',
    icp: 'VP Operations, Head of Procurement – contract manufacturing',
    channels: 'Email + LinkedIn',
    metric: '27 qualified meetings in 90 days',
    outcome: 'Built a repeatable outbound engine from zero to a full pipeline review in 90 days.',
  },
  {
    company: 'NorthBridge CDMO',
    icp: 'Commercial leaders, BizDev for CDMO accounts',
    channels: 'LinkedIn-first',
    metric: '4x increase in positive reply rate',
    outcome: 'Shifted from ad‑hoc outreach to signal-based LinkedIn sequences that consistently convert.',
  },
  {
    company: 'Atlas Packaging CM',
    icp: 'Brand owners, Operations, and Sourcing teams',
    channels: 'Email-first',
    metric: '32% of positive replies turned into opportunities',
    outcome: 'Clean data and deliverability turned “ghost” lead lists into a measurable outbound channel.',
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies">
      <h2 className="section-title">Case studies</h2>
      <p className="section-subtitle">Real builds, real execution, clear outcomes.</p>

      <div className="case-grid">
        {caseStudies.map((cs) => (
          <article key={cs.company} className="case-card">
            <div className="case-pill">Case study</div>

            <h3 className="case-company">{cs.company}</h3>

            <div className="case-meta">
              <p>
                <span className="case-label">ICP:</span> {cs.icp}
              </p>
              <p>
                <span className="case-label">Channels:</span> {cs.channels}
              </p>
            </div>

            <p className="case-metric">{cs.metric}</p>
            <p className="case-outcome">{cs.outcome}</p>

            <button type="button" className="secondary-btn case-cta">
              Read case study
            </button>
          </article>
        ))}

        <article className="case-card case-card-soon">
          <div className="case-pill">Coming soon</div>
          <h3 className="case-company">More case studies on the way</h3>
          <p className="case-outcome">
            We&apos;re adding more examples from different contract manufacturing categories as they launch.
          </p>
          <p className="case-metric case-metric-muted">More coming soon</p>
        </article>
      </div>
    </section>
  );
}

export default CaseStudies;

