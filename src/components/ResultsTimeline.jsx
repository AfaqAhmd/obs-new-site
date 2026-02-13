import React, { useState, useEffect, useRef } from "react";

const timelineSections = [
  {
    id: "week1-2",
    title: "Week 1 & 2: Define & Setup",
    subtitle: "Build the foundations of your GTM engine.",
    description:
      "We align on your ICP, map your accounts, build your messaging, and connect the tools. By the end of Week 2, every core system is live and ready for launch, with a shared dashboard that lets you see everything in one place.",
    image: "/image1.svg",
  },
  {
    id: "week3-4",
    title: "Weeks 3 & 4: Create & Launch",
    subtitle: "Craft your email sequences and build your lead lists.",
    description:
      "In Weeks 3 and 4, we publish your first content sprint, launch ABM ads, and send the first outbound sequences to warm ICP contacts. This is where the Flywheel starts to move, and real engagement data appears in your dashboard.",
    image: "/image2.svg",
  },
  {
    id: "month2",
    title: "Month 2: Amplify & Convert",
    subtitle: "Double down on winners and turn engagement into pipeline.",
    description:
      "By Month 2 we know what is resonating. We scale the best content and ads, expand your target lists, and create automations so every warm signal flows into outbound follow-ups and pipeline.",
    image: "/image1.svg",
  },
  {
    id: "month3",
    title: "Month 3: Learn & Scale",
    subtitle: "Turn the Flywheel into a repeatable system.",
    description:
      "In Month 3, the focus shifts from experimentation to repeatability. We promote winning content into BOF ads, scale successful outbound frameworks, and document everything into a playbook and growth roadmap for the next quarter.",
    image: "/image2.svg",
  },
  {
    id: "day90",
    title: "After Day 90: What Happens Next",
    subtitle: "Pilot proven, next step is your call.",
    description:
      "At Day 90, we sit down for a Flywheel Performance Review. We look at pipeline created, cost per opportunity, winning messages, and how each channel contributed. If the results are strong, we move into a 6-month strategic partnership to scale what works. If not, you still leave with a complete playbook, assets, and a working system.",
    image: "/image1.svg",
  },
];

function ResultsTimeline() {
  const [activeSection, setActiveSection] = useState(0);

  const sectionRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const els = sectionRefs.current.filter(Boolean);
    if (!els.length) return;

    const getRoot = () => {
      const rootEl = contentRef.current;
      if (!rootEl) return null;

      const styles = window.getComputedStyle(rootEl);
      const overflowY = styles.overflowY;
      const isScrollable = overflowY === "auto" || overflowY === "scroll";

      return isScrollable ? rootEl : null;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const idx = els.indexOf(visible.target);
        if (idx !== -1) setActiveSection(idx);
      },
      {
        root: getRoot(),
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.8, 1],
      }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="results-timeline" id="results-timeline">
      <h2 className="timeline-title">Your results timeline</h2>
      <p className="timeline-subtitle">What we build first, what launches next, and how we scale.</p>

      <div className="timeline-container">
        <div className="timeline-content" ref={contentRef}>
          {timelineSections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`timeline-section ${
                activeSection === index ? "active" : ""
              }`}
            >
              <h3 className="timeline-section-title">{section.title}</h3>
              <p className="timeline-section-subtitle">{section.subtitle}</p>
              <p className="timeline-section-description">
                {section.description}
              </p>

              {/* Mobile-only image (shows under each section) */}
              <div className="timeline-section-image">
                <img
                  src={section.image}
                  alt={section.title}
                  className="timeline-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only sticky image */}
        <div className="timeline-image-container">
          <div className="timeline-image-wrapper">
            <img
              key={timelineSections[activeSection].id}
              src={timelineSections[activeSection].image}
              alt={timelineSections[activeSection].title}
              className="timeline-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultsTimeline;
