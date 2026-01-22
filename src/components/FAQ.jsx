import React, { useState } from 'react';

const faqItems = [
  {
    question: 'How quickly can you launch a campaign?',
    answer: 'We typically launch campaigns within 2-3 weeks of onboarding, including setup, warmup, and initial outreach.',
  },
  {
    question: 'How do you protect my domain reputation? Will my emails land in spam if we send too many?',
    answer: 'We use dedicated sending domains separate from your primary domain, implement proper warmup protocols, and monitor deliverability metrics to ensure your main domain reputation stays protected.',
  },
  {
    question: 'What visibility do I have on the process? Do I get to see the messages and who you\'re reaching out to?',
    answer: 'You have full visibility through our dashboard. You can review all messages before sending, see the target lists, track engagement metrics, and monitor reply handling in real-time.',
  },
  {
    question: 'What is the pricing model like? Do I need to commit for several months at once?',
    answer: 'We offer flexible monthly pricing with a 3-month minimum commitment to properly assess campaign performance. After the initial period, you can continue month-to-month.',
  },
  {
    question: 'Are there any upfront fees or hidden costs?',
    answer: 'No upfront fees. Our pricing is transparent and covers all setup, infrastructure, and execution. Tool costs for data enrichment and sending platforms are included in the monthly retainer.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently asked questions</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="faq-question-text">{item.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
