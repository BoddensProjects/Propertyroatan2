import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const reasons = [
  'A growing international destination with limited coastal inventory',
  'Strong short-term rental demand driven by tourism and diving industry',
  'Favorable entry pricing compared to other Caribbean markets',
  'Direct flight access from major U.S. cities',
  'Lifestyle and investment hybrid market with long-term appreciation potential',
];

export default function ExperienceStats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-20">
          <FadeIn>
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">
                Why Invest in Roatan
              </p>

              <h2 className="mb-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
                A rare Caribbean market with lifestyle and investment depth.
              </h2>

              <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                Roatan rewards buyers who look beyond the listing and understand
                scarcity, access, rental demand, and long-term island positioning.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/insights"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-slate-100 sm:text-xs"
                >
                  Read Insights
                </Link>

                <a
                  href="https://wa.me/50432377727?text=Hi%20Gavy%2C%20I%27d%20like%20to%20discuss%20Roatan%20investment%20opportunities."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white/10 sm:text-xs"
                >
                  Request Investment Guidance
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-3">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="flex items-start gap-5 border border-white/10 bg-white/5 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm transition hover:bg-white/10 sm:p-6"
                >
                  <span className="font-serif text-2xl text-white/45">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base leading-relaxed text-white sm:text-lg">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
