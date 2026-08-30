import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const options = [
  {
    label: 'Buy in Roatan',
    title: 'Begin a guided search for the right Roatan opportunity.',
    text: 'Explore curated listings, compare areas, and request private recommendations based on lifestyle, rental potential, access, and long-term goals.',
    to: '/buy',
    cta: 'Start Buying',
  },
  {
    label: 'Sell with Property Roatan',
    title: 'Position your property with a refined advisory approach.',
    text: 'Prepare a smarter seller strategy with pricing perspective, property positioning, luxury marketing, local knowledge, and direct buyer conversations.',
    to: '/sell',
    cta: 'Start Selling',
  },
];

export default function BuySellGateway() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.13),transparent_38%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {options.map((option) => (
          <FadeIn key={option.label}>
            <Link
              to={option.to}
              className="group flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/15 bg-white shadow-[0_24px_80px_rgba(2,6,23,0.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.38)]"
            >
              <div className="p-6 sm:p-8">
                <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-slate-500">
                  {option.label}
                </p>

                <h3 className="mb-5 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">
                  {option.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {option.text}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between bg-slate-900 px-6 py-5 text-white transition duration-500 group-hover:bg-slate-800 sm:px-8">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/78 transition group-hover:text-white">
                  {option.cta}
                </span>
                <span className="text-xl leading-none text-white/55 transition group-hover:translate-x-1 group-hover:text-white">
                  -&gt;
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
