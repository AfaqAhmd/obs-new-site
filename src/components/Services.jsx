
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'AI-Augmented Outbound',
    label: 'LinkedIn SDRs',
    subtitle: 'Done for you email + LinkedIn that turns target accounts into booked meetings.',
    points: [
      'Best for, teams that want meetings without building an SDR team',
      'Cold email sequences built on clean data and safe deliverability',
      'LinkedIn prospecting, connection requests, follow ups, and reply routing',
      'AI assisted personalization and intent based triage',
      'We respond to positive replies within 15 minutes and qualify fast',
      'Meetings booked on your calendar, with CRM handoff and next step',

    ],
    outcome: 'More qualified conversations, without building an SDR team.',
    cta: 'See LinkedIn SDR workflow',
  },
  {
    title: 'Dedicated Calling SDR',
    label: 'LinkedIn Content',
    subtitle: 'A designated SDR running cold calling + warm lead follow up to book calls.',
    points: [
      'Best for, offers that convert better on live conversations',
      'Daily cold dialing to your target list with tight scripts and objection handling',
      'Warm calling for inbound, reactivation, event leads, and referrals',
      'Qualification on the call, then booking directly onto your calendar',
      'CRM activity logging, stage tracking, and sales cycle visibility',
      'Automated reports and attribution so you know what creates pipeline',
    ],
    outcome: 'Higher trust, warmer replies, faster conversions.',
    cta: 'See content system',
  },
  {
    title: 'Content + Retargeting',
    label: 'Outbound, Email Prospecting',
    subtitle: 'Multichannel content and ads that build authority and keep you top of mind.',
    points: [
      'Best for, teams that want inbound lift and warmer outbound replies',
      'Founder led content that educates your niche and builds trust',
      'Messaging angles tied to real buying triggers and switching moments',
      'Retargeting on Google and Meta to reinforce proof and offers',
      'Ongoing creative iteration based on engagement and pipeline signals',
      'Influence tracked inside CRM, from first touch to booked meeting',
    ],
    outcome: 'A consistent stream of positive replies you can measure.',
    cta: 'See outbound workflow',
  },
];

function Services() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services">
      <h2>Our GTM & RevOps system for contract manufacturers</h2>
      <p className="section-subtitle">
        Three execution lanes that work together to create predictable meetings and opportunities.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`service-card ${revealed ? 'service-card-revealed' : ''}`}
            style={revealed ? { transitionDelay: `${index * 160}ms` } : undefined}
          >
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

            {/* <p className="service-outcome">
              <strong>{service.outcome}</strong>
            </p> */}

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
