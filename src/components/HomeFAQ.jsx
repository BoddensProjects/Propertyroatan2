import { useState } from 'react';
import FadeIn from './FadeIn';

const faqs = [
  {
    q: 'Can foreigners buy property in Roatan?',
    a: 'Yes. Foreign buyers can own property in Honduras, with common ownership paths depending on land size, use, and legal structure. Gavy can help you understand what questions to ask before making an offer.',
  },
  {
    q: 'Can you help me buy land in Roatan?',
    a: 'Yes. Land buyers should compare access, utilities, water, road quality, slope, title, build feasibility, and long-term area growth before choosing a parcel.',
  },
  {
    q: 'How do I start selling my property?',
    a: 'Start with a seller conversation about price, condition, timing, marketing, and what makes your property valuable. Property Roatan can help you prepare a clear path before going live.',
  },
  {
    q: 'Can I start the process remotely?',
    a: 'Yes. Video walkthroughs, property context, WhatsApp communication, and remote guidance can help you narrow options before arriving on the island.',
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.q}>
                <div className="border border-slate-200 bg-slate-50/80">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="font-serif text-xl leading-snug text-slate-900 sm:text-2xl">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-2xl leading-none text-slate-400">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                      <div className="mb-5 h-px bg-slate-200" />
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
