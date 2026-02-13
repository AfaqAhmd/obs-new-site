import React, { useState, useEffect } from 'react';

const YT_EMBED_URL = 'https://www.youtube.com/embed/MLpWrANjFbI?si=v4fpTVP_BWKKa8Ys';

const testimonials = [
  {
    id: 1,
    name: 'Max Gowing',
    location: 'Ohio',
    heading: 'I am so grateful',
    quote: "OBS' knowledge of the platforms is incredible and the systems they build lead to personalized messages at scale that bring us good quality leads.",
    image: '/testimonial-1.jpg', // Placeholder - user will replace
  },
  {
    id: 2,
    name: 'Yee Lin Loke',
    location: 'California',
    heading: 'We got so many leads',
    quote: "Our client came back to us and said they didn't have enough people to follow up with everyone. OBS transformed our outreach completely.",
    image: '/testimonial-2.jpg', // Placeholder - user will replace
  },
  {
    id: 3,
    name: 'Joe DeWulf',
    location: 'Texas',
    heading: 'Consistent qualified demos',
    quote: 'We consistently get new qualified demos every week from the outbound motion OBS runs for us. It feels like having an in-house team.',
    image: '/testimonial-3.jpg', // Placeholder - user will replace
  },
  {
    id: 4,
    name: 'Austin Evans',
    location: 'New York',
    heading: 'In-house demand-gen team',
    quote: 'It feels like an in-house demand-gen team that happens to live outside our company. The results speak for themselves.',
    image: '/testimonial-4.jpg', // Placeholder - user will replace
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="proof" className="testimonials">
      <h2 className="section-title">Hear it from clients</h2>
      <p className="section-subtitle">
        Short, direct feedback from Contract Manufacturers who needed predictable meetings.
      </p>

      {/* Center Video */}
      <div className="testimonials-video-container">
        <div className="testimonials-video">
          <div className="testimonials-video-inner">
            <iframe
              src={YT_EMBED_URL}
              title="Client testimonial video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="testimonials-slider-container">
        <button
          className="testimonials-nav-btn testimonials-nav-prev"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="testimonials-slider">
          <div
            className="testimonials-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <h3 className="testimonial-heading">{testimonial.heading}</h3>
                <p className="testimonial-text">{testimonial.quote}</p>
                <p className="testimonial-attribution">
                  -{testimonial.name}, {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="testimonials-nav-btn testimonials-nav-next"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="testimonials-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
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

