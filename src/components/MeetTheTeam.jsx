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
    name: 'Muhammad Shuraim',
    role: 'ClayOps + GTM',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/shuraim.png',
    linkedin: 'https://www.linkedin.com/in/muhammad-shuraim-shaikh-a33272320',
  },
  {
    name: 'Shayan Basit',
    role: 'ClayOps + GTM',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/shayan.png',
    linkedin: 'https://www.linkedin.com/in/shayan-basit-476b3738a',
  },
  {
    name: 'Salahudin',
    role: 'ClayOps + GTM',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/salahudin.png',
    linkedin: 'https://www.linkedin.com/in/salahudin-00b955386',
  },
  {
    name: 'Sahil Imran',
    role: 'Content Design Specialist',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/sahil.png',
    linkedin: 'https://www.linkedin.com/in/sahil-imran-6aa916280',
  },
  {
    name: 'Shariq Sheikh',
    role: 'Linkedin Operator',
    credibility: 'Writes messaging that matches buyer language across email and LinkedIn.',
    image: '/shariq.png',
    linkedin: 'https://www.linkedin.com/in/shariq-sheikh-sherry',
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
            {/* <p className="team-credibility">{member.credibility}</p> */}

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn team-cta"
            >
              <span>Connect on</span>
              <svg
                className="team-cta-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.25h4.56V24H.22zM8.34 8.25h4.37v2.13h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-7.39c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V24H8.34z" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;

