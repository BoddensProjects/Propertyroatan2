import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import bgPR1 from '../assets/bgPR1.jpg';

const insightBlocks = [
  {
    title: 'Why Invest in Roatan',
    text: 'Roatan offers a rare blend of Caribbean lifestyle, international buyer interest, limited coastal inventory, and multiple paths for ownership, rental use, or future development.',
  },
  {
    title: 'Best Areas to Compare',
    text: 'West End and West Bay tend to attract lifestyle and tourism-driven demand, Sandy Bay offers scale and access, while mid-island and east-side areas can appeal to buyers seeking privacy or early growth potential.',
  },
  {
    title: 'Rental Demand Lens',
    text: 'Strong rental candidates usually combine access, views, comfort, beach or dock proximity, and easy movement to restaurants, dive shops, beaches, or tour corridors.',
  },
  {
    title: 'Land Buyer Strategy',
    text: 'For land, the conversation should include access, grade, utilities, title review, water, road quality, build feasibility, and whether the parcel supports your long-term use.',
  },
];

const buyerQuestions = [
  'Is this property lifestyle-first, rental-first, or land-banking?',
  'What makes the location hard to replace?',
  'How easy is the property to manage from off island?',
  'What due diligence should happen before an offer?',
];

export default function Insights() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef5f7_46%,#f7f4ef_100%)] text-slate-900">
      <section className="relative min-h-[82vh] px-4 pb-14 pt-28 text-white sm:px-6 sm:pt-32 lg:pt-40">
        <div className="absolute inset-0">
          <img
            src={bgPR1}
            alt="Roatan coastline and Caribbean water"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/58" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.88),rgba(15,23,42,0.22),rgba(15,23,42,0.4))]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl items-end">
          <FadeIn>
            <div className="max-w-4xl pb-8">
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                Investment Insights
              </p>

              <h1 className="mb-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Buy Roatan with a sharper investment lens.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">
                Market context, area strategy, rental thinking, and due diligence questions for international buyers considering Roatan.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2">
            {insightBlocks.map((block) => (
              <FadeIn key={block.title}>
                <div className="h-full border border-slate-200 bg-white/78 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.05)] sm:p-8">
                  <h2 className="mb-4 font-serif text-3xl text-slate-900">
                    {block.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {block.text}
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
                Advisor Questions
              </p>

              <h2 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl">
                The best purchase starts before the showing.
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                A serious buyer conversation should sort strategy first, then inventory. That is how the search becomes more focused and less noisy.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-3">
            {buyerQuestions.map((question) => (
              <FadeIn key={question}>
                <div className="border border-white/10 bg-white/5 px-5 py-5 text-white/82">
                  {question}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 sm:py-20">
        <FadeIn>
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
            Ready for a Private Short List?
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            Tell Gavy what kind of Roatan opportunity you want.
          </h2>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact?intent=buyer-brief"
              className="inline-flex items-center justify-center bg-slate-900 px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              Request Buyer Brief
            </Link>

            <Link
              to="/listings"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-800 transition hover:bg-slate-50"
            >
              Browse Listings
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
