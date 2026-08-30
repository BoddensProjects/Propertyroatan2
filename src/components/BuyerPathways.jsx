import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const pathways = [
  {
    title: 'Waterfront Opportunities',
    text: 'Beachfront homes, dock-access properties, and coastal estates for buyers who want lifestyle and long-term scarcity.',
    to: '/listings?waterfront=true',
    cta: 'View waterfront',
  },
  {
    title: 'Investment Properties',
    text: 'Income-focused homes, commercial parcels, and rental-ready assets positioned around island demand drivers.',
    to: '/insights',
    cta: 'Study the market',
  },
  {
    title: 'Land Parcels',
    text: 'Ocean-view lots, development-ready land, and strategic parcels for custom homes or future growth.',
    to: '/listings?type=Land',
    cta: 'Browse land',
  },
  {
    title: 'Private Buyer Brief',
    text: 'Send your budget, timeline, and ideal area to receive a more focused short list instead of scrolling everything.',
    to: '/contact?intent=buyer-brief',
    cta: 'Request guidance',
  },
];

export default function BuyerPathways() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
              Start With Intent
            </p>

            <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
              Curated paths for serious Roatan buyers.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((pathway) => (
            <FadeIn key={pathway.title}>
              <Link
                to={pathway.to}
                className="group flex min-h-[19rem] flex-col justify-between border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-7"
              >
                <div>
                  <h3 className="mb-4 font-serif text-2xl leading-tight text-slate-900">
                    {pathway.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {pathway.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-500 transition group-hover:text-slate-900">
                    {pathway.cta}
                  </span>
                  <span className="text-xl leading-none text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-900">
                    →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
