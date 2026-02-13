import React from 'react';

const officialPartners = [
  { name: 'Clay', image: '/clay.png', link: 'https://www.clay.com' },
  { name: 'Instantly', image: '/instantly.png', link: 'https://instantly.ai' },
  { name: 'HeyReach', image: '/heyreach.png', link: 'https://heyreach.io' },
  { name: 'Apify', image: '/apify.png', link: 'https://apify.com' },
  { name: 'Prospeo', image: '/prospeo.png', link: 'https://prospeo.io' },
];

const integrations = [
  {
    category: 'AI, research, personalization',
    tools: [
      { name: 'OpenAI', image: '/openai.png', link: 'https://openai.com' },
      { name: 'Claude', image: '/claude.png', link: 'https://claude.ai' },
    ],
  },
  {
    category: 'CRM and sales systems',
    tools: [
      { name: 'HubSpot', image: '/hubspot.png', link: 'https://www.hubspot.com' },
      { name: 'Attio', image: '/attio.png', link: 'https://attio.com' },
      { name: 'Salesforce', image: '/salesforce.png', link: 'https://www.salesforce.com' },
      { name: 'GoHighLevel', image: '/gohighlevel.png', link: 'https://www.gohighlevel.com' },
    ],
  },
  {
    category: 'Data, automation, and ops',
    tools: [
      { name: 'Airtable', image: '/airtable.png', link: 'https://www.airtable.com' },
      { name: 'n8n', image: '/n8n.png', link: 'https://n8n.io' },
    ],
  },
  {
    category: 'Data providers and prospecting sources',
    tools: [
      { name: 'Apollo', image: '/apollo.png', link: 'https://www.apollo.io' },
      { name: 'LeadMagic', image: '/leadmagic.png', link: 'https://leadmagic.io' },
      { name: 'Wiza', image: '/wiza.png', link: 'https://wiza.co' },
    ],
  },
];

function OfficialPartners() {
  return (
    <section id="partners" className="official-partners">
      <h2 className="partners-title">Official partners and tools</h2>
      <p className="section-subtitle">
        We integrate with the stack you already use, and we can run the infrastructure if you need speed.
      </p>

      <div className="partners-section">
        <h3 className="partners-section-title">Official partners we build on</h3>
        <div className="partners-grid partners-grid-official">
          {officialPartners.map((partner) => (
            <div key={partner.name} className="partner-item">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                <img src={partner.image} alt={partner.name} className="partner-logo" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="integrations-section">
        <h3 className="partners-section-title">Common integrations we support</h3>
        <div className="integrations-grid">
          {integrations.map((group, index) => (
            <div key={index} className="integration-category">
              <h4 className="integration-category-title">{group.category}</h4>
              <div className="integration-tools">
                {group.tools.map((tool) => (
                  <div key={tool.name} className="integration-item">
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="integration-link"
                    >
                      <img src={tool.image} alt={tool.name} className="integration-logo" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="integrations-cta">
        <a href="https://calendly.com/outreachboosters/30min" className="secondary-btn">
          Ask about integrations
        </a>
      </div>
    </section>
  );
}

export default OfficialPartners;
