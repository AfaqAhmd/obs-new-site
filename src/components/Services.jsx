
import React from 'react';

const services = [
  {
    title: 'LinkedIn SDRs, done for you',
    label: 'LinkedIn SDRs',
    subtitle: 'Daily prospecting that turns the right buyer accounts into real conversations.',
    points: [
      'Daily targeting, connection strategy, and follow ups',
      'Reply handling, routing, and meeting intent qualification',
      'Handoff into your CRM with a clear owner and next step',
    ],
    outcome: 'More qualified conversations, without building an SDR team.',
    cta: 'See LinkedIn SDR workflow',
  },
  {
    title: 'LinkedIn content that supports outbound',
    label: 'LinkedIn Content',
    subtitle: 'Founder led content that builds trust with buyers of contract manufacturing.',
    points: [
      'Weekly content planning tied to your buyer personas and offer',
      'Content that makes prospects recognize the switching triggers before you pitch',
      'Messaging angles that feed outbound sequences and LinkedIn follow ups',
    ],
    outcome: 'Higher trust, warmer replies, faster conversions.',
    cta: 'See content system',
  },
  {
    title: 'Email outbound that scales safely',
    label: 'Outbound, Email Prospecting',
    subtitle: 'Personalization at scale powered by clean data and deliverability.',
    points: [
      'Buyer lists, enrichment, validation, and segmentation for contract manufacturing',
      'Deliverability setup, sequencing, reply handling, and iteration',
      'Positive response tracking and CRM logging',
    ],
    outcome: 'A consistent stream of positive replies you can measure.',
    cta: 'See outbound workflow',
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our RevOps system for contract manufacturers</h2>
      <p className="section-subtitle">
        Three execution lanes that work together to create predictable meetings and opportunities.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            {/* <div className="service-label-row">
              <span className="service-chip">{service.label}</span>
            </div> */}

            <h3>{service.title}</h3>
            <p className="service-subtitle">{service.subtitle}</p>

            <ul className="service-list">
              {service.points.map((point) => (
                <li key={point} className="service-item">
                  <span className="service-icon">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="service-outcome">
              <strong>{service.outcome}</strong>
            </p>

            {/* {service.cta && (
              <button className="secondary-btn service-cta" type="button">
                {service.cta}
              </button>
            )} */}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
