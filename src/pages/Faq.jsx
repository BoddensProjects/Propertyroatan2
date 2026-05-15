import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import bgPR1 from '../assets/bgPR1.jpg';
import bgPR2 from '../assets/bgPR2.jpg';
import gabbyImage from '../assets/gabby.png';

const faqData = [
  {
    category: 'Why Buy in Roatan?',
    eyebrow: 'Island Opportunity',
    headline: 'Own a piece of the Caribbean with confidence.',
    description:
      'Roatan blends world-class natural beauty, growing tourism, and attractive property values, making it one of the most compelling real estate markets in the region.',
    image: bgPR1,
    questions: [
      {
        id: 'r1',
        q: 'Can foreigners legally own property in Roatan?',
        a: 'Absolutely. Honduran law allows foreigners to personally own up to 3,000 square meters of land. Larger holdings are commonly handled through a Honduran corporation, which is a standard process with legal guidance.',
      },
      {
        id: 'r2',
        q: 'What makes Roatan a strong real estate investment?',
        a: 'Roatan combines Caribbean lifestyle appeal with strong rental and appreciation potential. Tourism, direct international access, and a growing global buyer audience all help support long-term value.',
      },
      {
        id: 'r3',
        q: 'What is the infrastructure like on the island?',
        a: 'Roatan continues to improve with better roads, modern grocery stores, private healthcare, and reliable high-speed internet in many areas. It offers a much more comfortable day-to-day experience than many buyers expect.',
      },
    ],
  },
  {
    category: 'Why Property Roatan?',
    eyebrow: 'Trusted Guidance',
    headline: 'A more personal and informed way to buy in Roatan.',
    description:
      'Property Roatan is built around clear advice, strong local knowledge, and a thoughtful experience for international and local buyers alike.',
    image: gabbyImage,
    questions: [
      {
        id: 'p1',
        q: 'What sets Property Roatan apart from other brokerages?',
        a: 'The approach is personal, strategic, and highly local. Instead of simply opening doors, we help clients understand areas, lifestyle fit, long-term value, and the real differences between opportunities.',
      },
      {
        id: 'p2',
        q: 'Do you help with the process after the sale is closed?',
        a: 'Yes. Support often continues after closing through recommendations for attorneys, contractors, property management, local services, and practical next steps for settling in or preparing a rental property.',
      },
      {
        id: 'p3',
        q: 'Can I view properties remotely?',
        a: 'Definitely. Virtual tours, video walkthroughs, neighborhood context, and remote guidance make it possible to begin confidently even if you are not on the island yet.',
      },
    ],
  },
  {
    category: 'Real Estate Basics',
    eyebrow: 'Know The Process',
    headline: 'Straight answers to the practical side of buying.',
    description:
      'From closing costs to financing realities, understanding the basics helps buyers move with more clarity and fewer surprises.',
    image: bgPR2,
    questions: [
      {
        id: 'b1',
        q: 'What are the standard closing costs?',
        a: 'Closing costs in Honduras typically range around 4% to 6% of the purchase price, depending on the transaction details. This often includes transfer taxes, legal fees, and registry costs.',
      },
      {
        id: 'b2',
        q: 'Is financing available for foreigners?',
        a: 'Most transactions in Roatan are cash purchases. Traditional local financing for non-residents can be difficult, but seller financing is sometimes available and can be negotiated depending on the property.',
      },
      {
        id: 'b3',
        q: 'Do I need title insurance?',
        a: 'It is not always required, but many buyers appreciate the extra peace of mind. Proper legal review, title verification, and due diligence are essential parts of a secure purchase.',
      },
    ],
  },
];

const guidePillars = [
  'Buyer clarity',
  'Remote-friendly',
  'Market insight',
  'Island guidance',
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openQuestion, setOpenQuestion] = useState(faqData[0].questions[0].id);

  const activeEntry = useMemo(
    () => faqData.find((item) => item.category === activeCategory) || faqData[0],
    [activeCategory]
  );

  const toggleQuestion = (id) => {
    setOpenQuestion((current) => (current === id ? null : id));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7fbfc_0%,#edf5f6_44%,#f7f4ef_100%)] text-slate-900 selection:bg-slate-900 selection:text-white">
      <section className="relative px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-xs">
              Frequently Asked Questions
            </p>

            <h1 className="mb-5 max-w-4xl font-serif text-4xl leading-[1.02] text-slate-900 sm:text-5xl md:text-6xl">
              Answers that make the Roatan buying process feel clearer.
            </h1>

            <p className="mb-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              Real estate decisions feel better when the information feels calm,
              direct, and trustworthy. This page is designed to answer the questions
              buyers ask most before they make their next move.
            </p>

            <div className="mb-8 flex flex-wrap gap-2.5">
              {guidePillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-full border border-white/70 bg-white/72 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-sm backdrop-blur-xl"
                >
                  {pillar}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 sm:w-auto"
              >
                Ask Gavy Directly
              </Link>

              <Link
                to="/listings"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-white sm:w-auto"
              >
                Explore Listings
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/48 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur-2xl">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[30rem]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeEntry.image}
                      src={activeEntry.image}
                      alt={activeEntry.category}
                      initial={{ opacity: 0.32, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.22, scale: 1.02 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className={`h-full w-full ${
                        activeEntry.category === 'Why Property Roatan?'
                          ? 'object-contain bg-[#eef3f4] p-6 sm:p-8'
                          : 'object-cover'
                      }`}
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.68),rgba(15,23,42,0.12),transparent)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                    <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/75">
                      {activeEntry.eyebrow}
                    </p>
                    <h2 className="max-w-xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                      {activeEntry.headline}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5 bg-slate-900 p-5 text-white sm:p-6 lg:p-7">
                  <div>
                    <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/55">
                      Why This Matters
                    </p>
                    <p className="text-sm leading-relaxed text-white/78 sm:text-base">
                      {activeEntry.description}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/55">
                      Quick Take
                    </p>
                    <p className="text-sm leading-relaxed text-white/78">
                      Thoughtful guidance, local context, and clean answers make it
                      easier to move from curiosity to confidence.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-[1rem] border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-xl">
                      <p className="font-serif text-xl text-white">3</p>
                      <p className="mt-1 text-[0.58rem] uppercase tracking-[0.16em] text-white/55">
                        Categories
                      </p>
                    </div>
                    <div className="rounded-[1rem] border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-xl">
                      <p className="font-serif text-xl text-white">
                        {activeEntry.questions.length}
                      </p>
                      <p className="mt-1 text-[0.58rem] uppercase tracking-[0.16em] text-white/55">
                        Answers
                      </p>
                    </div>
                    <div className="rounded-[1rem] border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-xl">
                      <p className="font-serif text-xl text-white">1:1</p>
                      <p className="mt-1 text-[0.58rem] uppercase tracking-[0.16em] text-white/55">
                        Guidance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="inline-flex min-w-full gap-2 rounded-full border border-white/60 bg-white/58 p-1.5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:min-w-0">
              {faqData.map((tab) => {
                const isActive = activeCategory === tab.category;

                return (
                  <button
                    key={tab.category}
                    onClick={() => {
                      setActiveCategory(tab.category);
                      setOpenQuestion(tab.questions[0].id);
                    }}
                    className={`relative whitespace-nowrap rounded-full px-4 py-3 text-[0.64rem] font-bold uppercase tracking-[0.14em] transition-colors sm:px-6 sm:text-xs ${
                      isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="faq-pill"
                        className="absolute inset-0 rounded-full bg-slate-900 shadow-sm"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{tab.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-8">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                key={activeEntry.category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="rounded-[1.75rem] border border-white/60 bg-white/65 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-7"
              >
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Current Focus
                </p>

                <h3 className="mb-4 font-serif text-2xl leading-tight text-slate-900 sm:text-3xl">
                  {activeEntry.category}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeEntry.description}
                </p>

                <div className="mt-6 rounded-[1.35rem] bg-slate-50/90 p-4">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Best For
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Buyers comparing areas, planning next steps, or trying to understand
                    the island market before reaching out.
                  </p>
                </div>
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="flex flex-col gap-4"
              >
                {activeEntry.questions.map((faq, index) => {
                  const isOpen = openQuestion === faq.id;

                  return (
                    <motion.div
                      key={faq.id}
                      layout
                      className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                        isOpen
                          ? 'border-slate-300 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.07)]'
                          : 'border-white/70 bg-white/70 hover:border-slate-200'
                      }`}
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-slate-500">
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          <span className="font-serif text-lg leading-snug text-slate-900 sm:text-xl">
                            {faq.q}
                          </span>
                        </div>

                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.26 }}
                          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-500"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.26, ease: 'easeInOut' }}
                          >
                            <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                              <div className="mb-5 h-px w-full bg-slate-100" />
                              <p className="text-sm leading-loose text-slate-600 sm:text-base">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-16 rounded-[2rem] border border-white/60 bg-slate-900 px-6 py-8 text-center text-white shadow-[0_20px_70px_rgba(15,23,42,0.14)] sm:px-8 sm:py-10"
          >
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/55">
              Still Have Questions?
            </p>

            <h3 className="mb-4 font-serif text-2xl sm:text-3xl">
              Let’s talk through what matters most to you.
            </h3>

            <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base">
              The fastest way to get clarity is a direct conversation. Reach out with
              your questions, your timeline, or the kind of property you are exploring.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-slate-100"
            >
              Schedule a Consultation
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
