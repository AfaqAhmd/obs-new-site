import React, { useState } from 'react';

const faqItems = [
  {
    question: 'How fast do we see replies and meetings?',
    answer: 'Most teams see early reply signals within the first 30 days. Strong, stable results typically show up between day 60 and day 120 as targeting, deliverability, and messaging compound.',
  },
  {
    question: 'What counts as a positive response?',
    answer: 'A positive response is a real reply that shows interest, asks for details, requests a follow up, or agrees to a meeting. What does not count: out of office replies, spam, insults, or irrelevant responses, wrong person replies when they cannot route you to the right owner.',
  },
  {
    question: 'How does pricing work?',
    answer: 'We price on pay per positive response, you only win when we create positive responses. How it is tracked, every positive response is tagged, logged, and reported. If you want, qualified positive responses are pushed into your CRM with the right owner and status.',
  },
  {
    question: 'Do you provide lead lists, or use ours?',
    answer: 'Both. If you have lists, we will clean, validate, and segment them. If you do not, we build lists using public data plus enrichment workflows, aligned to your buyer personas and offer.',
  },
  {
    question: 'Do you handle deliverability, domains, and inboxes?',
    answer: 'Yes. We can set up and manage sending infrastructure so campaigns run safely at scale. If you already have infrastructure, we can audit and improve it.',
  },

  {
    question: 'Do you do LinkedIn ads?',
    answer: 'No. We do LinkedIn SDR execution and LinkedIn content, we do not manage paid ads.',
  },

  {
    question: 'Do you push leads into our CRM automatically?',
    answer: 'Yes. Positive replies and qualified prospects can be routed into your CRM, assigned to the right owner, and tracked with clear statuses.',
  },

  {
    question: 'What do you need from us to start?',
    answer: 'A clear offer, your buyer personas, access to your CRM if you want automated handoff, and a point of contact who can approve targeting and messaging fast.',
  },

  {
    question: 'What industries do you work best with?',
    answer: 'CMOs and CDMOs with a clear buyer profile, a real reason to switch, and the ability to follow up fast. If you are unsure, we can validate fit on a short call.',
  },

  {
    question: 'What is the minimum engagement period?',
    answer: 'We recommend at least 60 to 90 days to move from launch to stable performance, because the system improves through iteration and data. Your current site references a 3 month minimum, this will be updated to match the model and expectations.',
  },

  {
    question: 'How do you avoid spam issues?',
    answer: 'We protect deliverability through infrastructure setup, validation, segmentation, realistic volumes, and weekly optimization. We do not rely on spammy tactics, we rely on precision.',
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
      <div class="faq-cta"><a href="https://calendly.com/outreachboosters/30min" class="secondary-btn">Still have questions, book your free strategy call</a></div>
    </section>
  );
}

export default FAQ;
