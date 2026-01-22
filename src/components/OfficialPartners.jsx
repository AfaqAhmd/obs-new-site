import React from 'react';

const partners = [
  { id: 1, name: 'hubspot.com', image: '/partner11.png', link: 'https://www.hubspot.com' },
  { id: 2, name: 'smartlead.ai', image: '/partner22.png', link: 'https://www.smartlead.ai' },
  { id: 3, name: 'clay.com', image: '/partner33.png', link: 'https://www.clay.com' },
  { id: 4, name: 'salesforce.com', image: '/partner44.png', link: 'https://www.salesforce.com' },
  { id: 5, name: 'instantly.ai', image: '/partner55.png', link: 'https://instantly.ai/' },
  { id: 6, name: 'outboundsync.com', image: '/partner66.png', link: 'https://outboundsync.com/' },
  { id: 7, name: 'leadmagic.io', image: '/partner77.png', link: 'https://leadmagic.io/' },
  { id: 8, name: 'fireflies.ai', image: '/partner88.png', link: 'https://fireflies.ai/' },
  { id: 9, name: 'fullenrich.com', image: '/partner99.png', link: 'https://fullenrich.com/' },
  { id: 10, name: 'n8n.io', image: '/partner100.png', link: 'https://n8n.io/' },
  { id: 11, name: 'attio.com', image: '/partner111.png', link: 'https://attio.com/' },
  // { id: 12, name: 'openmart.com', image: '/partner122.png', link: 'https://www.openmart.com/' },
];

function OfficialPartners() {
  return (
    <section className="official-partners">
      <h2 className="partners-title">Official partners of Outrech Boosters AI</h2>
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-item">
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="partner-logo"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficialPartners;
