import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
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
      'Roatan blends natural beauty, tourism appeal, and selective property opportunities, making it a compelling market for lifestyle buyers and long-term investors.',
    image: bgPR1,
    questions: [
      {
        id: 'r1',
        q: 'Can foreigners legally own property in Roatan?',
        a: 'Yes, foreign buyers can purchase property in Roatan, but ownership rules can depend on land size, location, intended use, and legal structure. Individual ownership is commonly discussed around the 3,000 square meter threshold for residential property, while larger or more complex purchases may require a Honduran legal structure. Always confirm the right path with a qualified Honduran real estate attorney before making an offer.',
      },
      {
        id: 'r2',
        q: 'What makes Roatan a strong real estate investment?',
        a: 'Roatan combines Caribbean lifestyle appeal, limited coastal inventory, tourism demand, and international buyer interest. The strongest opportunities are usually the ones with clear access, strong location fundamentals, usable infrastructure, and a realistic plan for lifestyle use, rental demand, or future development.',
      },
      {
        id: 'r3',
        q: 'What is the infrastructure like on the island?',
        a: 'Roatan continues to improve with better roads in many corridors, modern grocery options, private healthcare, and high-speed internet available in several areas. Infrastructure still varies by neighborhood, so buyers should confirm access, utilities, water, road quality, and service providers for the specific property they are considering.',
      },
      {
        id: 'r4',
        q: 'Is Honduras politically stable?',
        a: 'Honduras has an established legal system for property ownership, but political, legal, and regulatory conditions can change over time. International buyers should rely on current attorney guidance, proper title review, and careful due diligence rather than assumptions from any single website.',
      },
      {
        id: 'r5',
        q: 'Is it safe to live in the Bay Islands?',
        a: 'Many residents and visitors find the Bay Islands welcoming and comfortable, but safety can vary by area and situation. Buyers relocating from abroad should visit neighborhoods in person when possible, speak with local residents, review current travel guidance, and use the same common-sense precautions they would in any destination market.',
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
        a: 'The approach is personal, strategic, and highly local. Instead of simply opening doors, Property Roatan helps clients understand areas, lifestyle fit, long-term value, and the real differences between opportunities.',
      },
      {
        id: 'p2',
        q: 'Do you help after the sale is closed?',
        a: 'Yes. Support often continues after closing through recommendations for attorneys, contractors, property management, local services, and practical next steps for settling in or preparing a rental property.',
      },
      {
        id: 'p3',
        q: 'Can I view properties remotely?',
        a: 'Definitely. Virtual tours, video walkthroughs, neighborhood context, and remote guidance make it possible to begin confidently even if you are not on the island yet.',
      },
      {
        id: 'p4',
        q: 'Can you help me find a local attorney?',
        a: 'Yes. Property Roatan can provide referrals to experienced real estate attorneys for title searches, corporate formations, closings, and other legal questions. If you do not speak Spanish, working with an English-speaking attorney can make the process much easier because legal documents in Honduras are prepared in Spanish.',
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
        a: 'Closing costs vary by transaction structure, property type, attorney, and whether the purchase involves a direct title transfer or a corporate structure. Buyers should budget for legal review, registration, transfer-related costs, and other closing expenses, while sellers should confirm commission and tax obligations with their attorney or tax advisor before accepting an offer.',
      },
      {
        id: 'b2',
        q: 'Is financing available for foreigners?',
        a: 'Many Roatan transactions are cash purchases. Traditional local financing for non-resident buyers can be limited, but seller financing, home-country financing, or private financing may be possible depending on the property and the parties involved. Terms should always be reviewed by an attorney before signing.',
      },
      {
        id: 'b3',
        q: 'Do I need title insurance?',
        a: 'Title insurance is not always required, but some buyers value the additional peace of mind. Either way, a proper title search, cadastral review, survey review, tax confirmation, and attorney-led due diligence are essential before closing.',
      },
      {
        id: 'b4',
        q: 'What does the purchase process look like step by step?',
        a: 'The process usually starts with an offer that outlines price, timing, deposits, and conditions. After acceptance, the attorney reviews title, surveys, taxes, and closing documents before funds are moved through the agreed escrow or closing process. Exact deposit amounts, timelines, and registration timing should be confirmed for each transaction.',
      },
      {
        id: 'b5',
        q: 'What are property taxes like?',
        a: 'Property taxes in the Bay Islands are often lower than buyers expect, but the exact amount depends on the municipality, property value, classification, and current assessment. Before closing, your attorney should confirm that taxes are current and explain the expected annual obligation.',
      },
    ],
  },
  {
    category: 'Buyer Guide',
    eyebrow: 'Bay Islands Buyer Info',
    headline: 'Helpful context before purchasing in the Bay Islands.',
    description:
      'Buying in Roatan, Guanaja, Utila, Cayos Cochinos, or elsewhere in the Bay Islands is exciting, but the best decisions come from clear expectations, local guidance, and proper due diligence.',
    image: bgPR1,
    questions: [
      {
        id: 'g1',
        q: 'What should Bay Islands buyers understand before starting?',
        a: 'The Bay Islands are not a one-size-fits-all market. Ocean-view condos, beachfront homes, land, and development opportunities can each serve different goals. A strong search starts by clarifying whether you are buying for lifestyle, rental potential, relocation, long-term investment, or a future build.',
      },
      {
        id: 'g2',
        q: 'Why do buyers choose Roatan and the Bay Islands?',
        a: 'Many buyers are drawn to the Bay Islands for Caribbean lifestyle, reef access, ocean views, island communities, and relative value compared with many other Caribbean destinations. The strongest opportunities still need to be evaluated carefully through location, access, title, infrastructure, condition, and long-term use.',
      },
      {
        id: 'g3',
        q: 'How is buying in Roatan different from buying at home?',
        a: 'The overall idea may feel familiar: choose a property, make an offer, conduct due diligence, and close. The difference is that local attorneys, title review, surveys, municipal records, taxes, escrow timing, and island-specific procedures become especially important. Having an experienced local advisor helps make the process feel less unfamiliar.',
      },
      {
        id: 'g4',
        q: 'What professionals should be involved in a purchase?',
        a: 'Buyers should work with a real estate advisor they trust and a qualified Honduran attorney who can review title, surveys, taxes, closing documents, ownership structure, and any corporation or residency questions. Property Roatan can provide referrals, but the final attorney choice should always be yours.',
      },
      {
        id: 'g5',
        q: 'What is the best mindset for buying in a foreign country?',
        a: 'Here is not there. Laws, timing, customs, utilities, and service expectations can be different from what buyers know at home. Patience, good questions, and dependable local guidance are essential. The more informed you are before offering, the smoother the process tends to feel.',
      },
    ],
  },
  {
    category: 'Cost of Living',
    eyebrow: 'Day-to-Day Life',
    headline: 'What to expect when you make the island your home.',
    description:
      'Living in Roatan is an adjustment, and an exciting one. Understanding where costs differ from home helps you plan the lifestyle you want.',
    image: bgPR1,
    questions: [
      {
        id: 'c1',
        q: 'Is the cost of living lower than in North America?',
        a: 'It depends heavily on your lifestyle. Imported goods can be more expensive because many items arrive by boat or air, while local produce, seafood, and island services may be more affordable. A realistic budget should separate imported comforts from local living costs.',
      },
      {
        id: 'c2',
        q: 'What should I know about electricity costs?',
        a: 'Electricity can be higher than many newcomers expect, especially for homes using air conditioning often. Orientation, elevation, breezes, shade, appliance efficiency, and solar planning can all make a meaningful difference in monthly operating costs.',
      },
      {
        id: 'c3',
        q: 'What are internet and phone options like?',
        a: 'Several internet and mobile providers operate on the island, and high-speed service is available in many areas. Service quality can change by neighborhood and provider, so remote workers should verify available plans, speeds, backup options, and reliability for the exact property before purchasing.',
      },
      {
        id: 'c4',
        q: 'Is health insurance available for expats?',
        a: 'Health insurance options are available for many expats, but eligibility, coverage, exclusions, and cross-border benefits vary widely. Speak with a licensed insurance advisor before relying on any specific plan.',
      },
    ],
  },
  {
    category: 'Residency & Legal Setup',
    eyebrow: 'Making It Official',
    headline: 'Understanding residency and how to structure your ownership.',
    description:
      'Whether you are planning to visit often or relocate permanently, understanding your legal options in Honduras helps you move forward with confidence.',
    image: bgPR2,
    questions: [
      {
        id: 'l1',
        q: 'Do I need residency to own property in Honduras?',
        a: 'Residency is generally not required simply to purchase property, but it may matter if you plan to live in Honduras long term, open certain bank accounts, work locally, or access specific services. Entry rules and extensions can change, so confirm current immigration requirements before planning an extended stay.',
      },
      {
        id: 'l2',
        q: 'What types of residency are available?',
        a: 'Honduras offers several residency pathways, including options commonly discussed for retirees, investors, and people with qualifying income. Requirements, documentation, timelines, and fees change, so residency planning should be handled with a Honduran immigration attorney using current rules.',
      },
      {
        id: 'l3',
        q: 'What is a Honduran corporation and why would I need one?',
        a: 'A Honduran corporation may be used for certain ownership structures, especially where land size, multiple owners, business use, or future transfer planning matters. It is not automatically the right choice for every buyer, so the decision should be made with an attorney who can explain setup costs, annual obligations, tax considerations, and control structure.',
      },
      {
        id: 'l4',
        q: 'Can I open a bank account on the island?',
        a: 'It depends on the bank and your legal status, documentation, residency, and ownership structure. Some buyers work through corporate accounts, while others may need residency or additional documentation. Your attorney or banking contact can confirm the current requirements.',
      },
      {
        id: 'l5',
        q: 'Is banking in Honduras safe?',
        a: 'Banking decisions should be made carefully, just like in any international market. Buyers should compare institutions, ask about deposit protection, understand account requirements, and speak with an attorney or financial advisor before moving significant funds.',
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
              direct, and trustworthy. This page is designed to answer common
              questions before you make your next move.
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
                      <p className="font-serif text-xl text-white">
                        {faqData.length}
                      </p>
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
                    Important Note
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    This page is general guidance, not legal, tax, immigration, or
                    financial advice. Always confirm current requirements with the
                    right professional before making decisions.
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
              Let's talk through what matters most to you.
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
