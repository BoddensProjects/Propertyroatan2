import FadeIn from './FadeIn';

const trustSignals = [
  'Licensed Realtor',
  'RENE Certified',
  '12+ Combined Years',
  'Local Market Guidance',
];

export default function LuxuryIntro() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <FadeIn>
          <div>
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
              Roatan Advisory
            </p>
            <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              A More Refined Way to Invest in Roatan
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Roatan is no longer just a destination. It is one of the Caribbean's
              most quietly powerful real estate markets. From oceanfront villas and
              hillside estates to income-producing vacation properties, the island
              offers rare value for discerning buyers.
            </p>
            <p>
              With on-the-ground expertise and direct access to both listed and
              off-market opportunities, Gavy helps clients navigate Roatan with
              clarity, discretion, and confidence.
            </p>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="border border-slate-200 bg-slate-50 px-4 py-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-700"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
