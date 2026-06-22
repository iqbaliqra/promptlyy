"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "MVP development usually takes 4-8 weeks. Complex enterprise systems can take 3-6 months depending on the integration requirements.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes, we offer ongoing maintenance and optimization retainers to ensure your AI models and software remain performant as you scale.",
  },
  {
    question: "Can you work with our existing dev team?",
    answer:
      "Absolutely. We often act as a specialized AI extension to existing engineering departments, handling the complex implementation layers.",
  },
];

const FAQ = () => {
  const [openFaqs, setOpenFaqs] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section className="py-xxl px-gutter max-w-3xl mx-auto" id="faq">
      <h2 className="font-display-lg text-headline-lg mb-xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-md">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="glass-card rounded-2xl overflow-hidden">
            <button
              className="w-full p-xl text-left flex justify-between items-center group"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-headline-md text-headline-md">
                {faq.question}
              </span>
              <span
                className="material-symbols-outlined group-hover:text-primary transition-colors"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </button>
            <div
              className={
                openFaqs[index] ? "px-xl pb-xl text-on-surface-variant" : "hidden"
              }
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
