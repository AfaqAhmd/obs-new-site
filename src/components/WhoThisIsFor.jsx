import React from 'react';

function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="who-for">
      <h2 className="section-title">Who this is for</h2>
      <p className="section-subtitle">Clear fit criteria saves everyone time.</p>

      <div className="who-grid">
        <div className="who-column who-good">
          <h3 className="who-column-title">Good fit if:</h3>
          <ul className="who-list">
            <li className="who-item who-item-good">
              <span className="who-icon who-icon-good">✔</span>
              <span>
                You are a CMO (Contract Manufacturing Organization), and CDMO (Contract Development & Manufacturing Organization) and need consistent meetings with qualified buyers
              </span>
            </li>
            <li className="who-item who-item-good">
              <span className="who-icon who-icon-good">✔</span>
              <span>You have an offer, or want help tightening it for the right buyer personas</span>
            </li>
            <li className="who-item who-item-good">
              <span className="who-icon who-icon-good">✔</span>
              <span>You want done for you execution, not coaching</span>
            </li>
            <li className="who-item who-item-good">
              <span className="who-icon who-icon-good">✔</span>
              <span>You can follow up quickly once a reply is interested</span>
            </li>
          </ul>
        </div>

        <div className="who-column who-bad">
          <h3 className="who-column-title">Not a fit if:</h3>
          <ul className="who-list">
            <li className="who-item who-item-bad">
              <span className="who-icon who-icon-bad">!</span>
              <span>You want ad management</span>
            </li>
            <li className="who-item who-item-bad">
              <span className="who-icon who-icon-bad">!</span>
              <span>You want content only without outbound execution</span>
            </li>
            <li className="who-item who-item-bad">
              <span className="who-icon who-icon-bad">!</span>
              <span>You cannot follow up on replies, leads die without speed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="who-callout">
        <p>
          If you are unsure, take the call – we will tell you fast whether this fits.{' '}
          <span className="who-callout-highlight">If unsure, book a call, and we will tell you fast.</span>
        </p>
      </div>
    </section>
  );
}

export default WhoThisIsFor;

