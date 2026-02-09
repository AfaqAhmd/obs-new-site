import React from 'react';

const YT_EMBED_URL =  
'https://www.youtube.com/embed/MLpWrANjFbI?si=v4fpTVP_BWKKa8Ys';
  

const testimonials = [
  {
    name: 'Max Gowing',
    role: 'CEO and Founder',
    quote:
      "OBS' knowledge of the platforms is incredible and the systems they build lead to personalized messages at scale that bring us good quality leads.",
  },
  {
    name: 'Yee Lin Loke',
    role: 'Director & Digital Strategist',
    quote:
      "We got so many leads that our client came back to us and said they didn’t have enough people to follow up with everyone.",
  },
  {
    name: 'Joe DeWulf',
    role: 'Co-Founder',
    quote: 'We consistently get new qualified demos every week from the outbound motion OBS runs for us.',
  },
  {
    name: 'Austin Evans',
    role: 'VP of Sales',
    quote: 'It feels like an in-house demand-gen team that happens to live outside our company.',
  },
  {
    name: 'Jessie Litwin',
    role: 'Sales Outreach Consultant',
    quote: 'Positive connection rates are well above what we were expecting before partnering with OBS.',
  },
  {
    name: 'Kelly Hamlin',
    role: 'President',
    quote: 'Within a short time we had a steady stream of booked calls replacing slow, manual outreach.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="section-title">Hear it from clients</h2>
      <p className="section-subtitle">
        Short, direct feedback from Contract Manufacturers who needed predictable meetings.
      </p>

      <div className="testimonial-row">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial-card">
            <div className="testimonial-video">
              <div className="testimonial-video-inner">
                <iframe
                  src={YT_EMBED_URL}
                  title={t.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="testimonial-body">
              {/* <div className="testimonial-icon-row">
                <span className="testimonial-icon" />
              </div> */}
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
              <p className="testimonial-quote">“{t.quote}”</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

// import React from 'react';

// function Testimonials() {
//   return (
//     <section className="testimonials">
//       <h2 className="section-title">Hear it from clients</h2>
//       <p className="section-subtitle">
//         Short, direct feedback from teams who needed pipeline fast.
//       </p>

//       <div className="testimonial-row">
//         <div className="testimonial-card" />
//         <div className="testimonial-card" />
//         <div className="testimonial-card" />
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

