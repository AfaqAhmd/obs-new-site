import React from 'react';

const features = [
  {
    icon: '🎯',
    title: 'ICP precision and list building',
    description: 'We segment by buyer, trigger, and offer, then build lists that match reality.',
  },
  {
    icon: '⚙️',
    title: 'Deliverability and infrastructure',
    description: 'We protect sending reputation so scale does not break results.',
  },
  {
    icon: '👤',
    title: 'Personalization at scale',
    description: 'We personalize on signals that matter, not filler variables.',
  },
  {
    icon: '✓',
    title: 'LinkedIn SDR execution',
    description: 'We run daily touches that convert awareness into conversations.',
  },
  {
    icon: '☁️',
    title: 'CRM handoff and pipeline visibility',
    description: 'Qualified replies get logged, assigned and tracked so nothing gets dropped.',
  },
  {
    icon: '📅',
    title: 'Weekly reporting and iteration',
    description: 'We review what is working, fix what is not and ship improvements weekly.',
  },
];

function WhereWeShine() {
  return (
    <section className="where-we-shine">
      <h2 className="section-title">Where we shine</h2>
      <p className="section-subtitle">
        Execution quality, visibility, and iteration, not random activity.
      </p>

      <div className="shine-grid">
        {features.map((feature, index) => (
          <div key={index} className="shine-card">
            <div className="shine-icon">{feature.icon}</div>
            <h3 className="shine-title">{feature.title}</h3>
            <p className="shine-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhereWeShine;
