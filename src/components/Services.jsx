import React from 'react';

const services = [
  {
    title: 'LinkedIn SDRs, done for you',
    points: [
      'Daily targeting, connection strategy and follow-ups.',
      'Reply handling, routing and meeting booking done for you.',
      'Hands-off outbound that still feels personal.',
    ],
  },
  {
    title: 'LinkedIn content that supports outbound',
    points: [
      'Weekly content planning tied to your ICP and offers.',
      'Posts that make prospects want to take the next step.',
      'Messaging that feeds outbound and warms up future deals.',
    ],
  },
  {
    title: 'Email outbound that scales safely',
    points: [
      'Infrastructure, domains and deliverability handled for you.',
      'Sequencing, reply handling and handoff to your CRM.',
      'A consistent stream of positive replies every month.',
    ],
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our multi-channel services</h2>
      <p className="section-subtitle">
        Three execution lanes that work together to create a predictable pipeline.
      </p>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <ul className="service-list">
              {service.points.map((point) => (
                <li key={point} className="service-item">
                  <span className="service-icon">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button className="secondary-btn">Learn more</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

