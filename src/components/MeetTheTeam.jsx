import React from 'react';

const team = [
  {
    name: 'Abuld Rehman',
    role: 'Chief Growth Officer',
    credibility: 'Built scalable enrichment and routing systems across Clay and CRMs.',
    image: '/ab-rehman.png',
    linkedin: 'https://www.linkedin.com/in/aberehman',
  },
  {
    name: 'Awais Saad',
    role: 'Data Ops & Targeting',
    credibility: 'Built scalable enrichment and routing systems across Clay and CRMs.',
    image: '/awais.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-awais-saad-43922812b',
  },
  {
    name: 'Hameez Akhtar',
    role: 'Deliverability & Infrastructure',
    credibility: 'Keeps multi-domain sending setups warm, compliant, and inboxing.',
    image: '/hameez.png',
    linkedin: 'https://www.linkedin.com/in/hameez-akhtar-8aab3b250/',
  },
  {
    name: 'Afaq Ahmed',
    role: 'Developer',
    credibility: 'Runs daily LinkedIn touch frameworks that turn views into booked calls.',
    image: '/afaq.png',
    linkedin: 'https://www.linkedin.com/in/afaq-ahmed-',
  },
  {
    name: 'Muhammad Shuraim Shaikh',
    role: 'ClayOps + GTM',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/shuraim.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-shuraim-shaikh-a33272320',
  },
];

function MeetTheTeam() {
  return (
    <section id="team" className="team-section">
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

