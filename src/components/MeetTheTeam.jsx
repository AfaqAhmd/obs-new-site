import React from 'react';

const team = [
  {
    name: 'Awais Saad',
    role: 'Data Ops & Targeting',
    credibility: 'Built scalable enrichment and routing systems across Clay and CRMs.',
    image: '/profile-1.png',
    linkedin: 'https://www.linkedin.com/in/alex-carter',
  },
  {
    name: 'Hameez Akhtar',
    role: 'Deliverability & Infrastructure',
    credibility: 'Keeps multi-domain sending setups warm, compliant, and inboxing.',
    image: '/profile-1.png',
    linkedin: 'https://www.linkedin.com/in/maya-singh',
  },
  {
    name: 'Shariq Sheikh',
    role: 'LinkedIn SDR Lead',
    credibility: 'Runs daily LinkedIn touch frameworks that turn views into booked calls.',
    image: '/profile-1.png',
    linkedin: 'https://www.linkedin.com/in/jordan-lee',
  },
  {
    name: 'Riley Chen',
    role: 'Copy & Messaging',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/profile-1.png',
    linkedin: 'https://www.linkedin.com/in/riley-chen',
  },
];

function MeetTheTeam() {
  return (
    <section className="team-section">
      <h2 className="section-title">Meet the team</h2>
      <p className="section-subtitle">
        The people who build the workflows, run execution, and manage performance.
      </p>

      <div className="team-grid">
        {team.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-avatar" aria-hidden="true">
              <img src={member.image} alt={member.name} className="team-avatar-image" />
            </div>

            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-credibility">{member.credibility}</p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn team-cta"
            >
              Connect on LinkedIn
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;

