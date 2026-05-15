import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const pillars = [
  {
    eyebrow: 'Guidance',
    title: 'Clear next steps',
    text: 'From first questions to closing day, every step is explained simply so buyers and sellers can move forward with confidence.',
  },
  {
    eyebrow: 'Insight',
    title: 'Roatan market knowledge',
    text: 'Neighborhoods, access, lifestyle, waterfront considerations, and long-term value are all part of the conversation.',
  },
  {
    eyebrow: 'Support',
    title: 'Remote-friendly process',
    text: 'Video tours, detailed updates, and responsive communication make it easier for off-island buyers to stay informed.',
  },
  {
    eyebrow: 'Advocacy',
    title: 'Professional representation',
    text: 'Thoughtful strategy, strong negotiation, and personal attention help protect your goals throughout the transaction.',
  },
];

export default function ExperienceStats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:w-[36%]">
            <FadeIn>
              <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
                <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">
                  Why Clients Reach Out
                </p>

                <h2 className="mb-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
                  A more personal
                  <br />
                  real estate experience.
                </h2>

                <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                  The right property is only part of the journey. What matters
                  just as much is having a knowledgeable, responsive guide who
                  understands Roatan and knows how to help you make smart
                  decisions along the way.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-slate-100 sm:text-xs"
                  >
                    Meet Gavy
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white/10 sm:text-xs"
                  >
                    Start the Conversation
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-[64%]">
            <FadeIn>
              <div className="grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex min-h-[13rem] flex-col rounded-[1.5rem] border border-slate-700/60 bg-slate-800/35 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm transition hover:bg-slate-800/55 sm:min-h-[14rem] sm:p-7"
                  >
                    <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {pillar.eyebrow}
                    </p>

                    <h3 className="mb-3 font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
