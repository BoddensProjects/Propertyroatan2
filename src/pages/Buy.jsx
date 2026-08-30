import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import bgPR2 from '../assets/bgPR2.jpg';

const buyingSteps = [
  {
    title: 'Choose the right area',
    text: 'Roatan changes quickly from West End to Sandy Bay, French Cay, Milton Point, Calabash Bight, and the east side. Area fit matters as much as the property itself.',
  },
  {
    title: 'Understand land potential',
    text: 'When buying land in Roatan, review access, road quality, slope, views, utilities, water, title, build feasibility, and whether the parcel supports your long-term goal.',
  },
  {
    title: 'Compare lifestyle and investment use',
    text: 'Some buyers want a private island home. Others want rental income, development potential, or long-term appreciation. The search should reflect that from the beginning.',
  },
  {
    title: 'Move with local guidance',
    text: 'International buyers benefit from clear guidance on ownership structure, due diligence, attorneys, closing steps, and practical next moves after purchase.',
  },
];

const landSignals = [
  'Ocean-view lots with build potential',
  'Road and utility access',
  'Quiet residential communities',
  'Development-ready parcels',
  'Long-term island growth zones',
  'Custom home opportunities',
];

export default function Buy() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef5f7_46%,#f7f4ef_100%)] text-slate-900">
      <section className="relative min-h-[84vh] px-4 pb-14 pt-28 text-white sm:px-6 sm:pt-32 lg:pt-40">
        <div className="absolute inset-0">
          <img
            src={bgPR2}
            alt="Roatan coastline and hillside property views"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/58" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.88),rgba(15,23,42,0.22),rgba(15,23,42,0.42))]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl items-end">
          <FadeIn>
            <div className="max-w-4xl pb-8">
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                Buy in Roatan
              </p>

              <h1 className="mb-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Buy land and property in Roatan with a clearer plan.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">
                From ocean-view lots to income-minded homes, Gavy helps buyers compare areas, understand the process, and focus on opportunities that fit their goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
                Buying Land in Roatan
              </p>
              <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                The right lot is about more than the view.
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {buyingSteps.map((step) => (
              <FadeIn key={step.title}>
                <div className="h-full border border-slate-200 bg-white/80 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.05)] sm:p-8">
                  <h3 className="mb-4 font-serif text-3xl text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <div>
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/55">
                What Buyers Compare
              </p>
              <h2 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl">
                Build a short list before you fall in love with a property.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                A strong Roatan search compares the property, the area, the access, and the future use case. That is how browsing turns into confident decision-making.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2">
            {landSignals.map((signal) => (
              <FadeIn key={signal}>
                <div className="border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/82">
                  {signal}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 sm:py-20">
        <FadeIn>
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
            Ready to Explore?
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            Start with current properties, then ask for a focused buyer short list.
          </h2>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/listings"
              className="inline-flex items-center justify-center bg-slate-900 px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              View Properties
            </Link>

            <Link
              to="/contact?intent=buyer-brief"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-800 transition hover:bg-slate-50"
            >
              Request Buyer Guidance
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
