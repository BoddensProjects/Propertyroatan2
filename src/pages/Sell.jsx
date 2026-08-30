import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import bgPR1 from '../assets/bgPR1.jpg';

const reasons = [
  'Property Roatan brand presence and focused island buyer recognition.',
  'Marketing across websites, MLS exposure, social media, newsletters, print, and buyer networks.',
  'Experienced agents with local knowledge, designations, and professional standards.',
  'Ethics-focused representation and professional transaction guidance.',
  'Local Roatan presence and practical island accessibility.',
  'A seller-focused strategy built around price, terms, condition, and marketing effort.',
];

const marketingChannels = [
  {
    title: 'Internet and Social Media',
    text: 'Property Roatan uses website visibility, social channels, property alerts, listing exposure, and digital marketing to help serious buyers find island properties.',
  },
  {
    title: 'Print and Island Visibility',
    text: 'Listings can be promoted through MLS publications, Property Roatan materials, and high-traffic island locations where visitors and buyers are already looking.',
  },
  {
    title: 'Seasonal Campaigns',
    text: 'Targeted campaigns, newsletters, investor updates, and buyer communication help keep properties in front of the right audience over time.',
  },
  {
    title: 'Agent Collaboration',
    text: 'Listing tours, open houses, buyer walkthroughs, broker relationships, and remote showing options help increase the chance that the right buyer sees the property.',
  },
];

const sellerFactors = ['Price', 'Terms', 'Condition', 'Marketing effort'];

export default function Sell() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef5f7_46%,#f7f4ef_100%)] text-slate-900">
      <section className="relative min-h-[84vh] px-4 pb-14 pt-28 text-white sm:px-6 sm:pt-32 lg:pt-40">
        <div className="absolute inset-0">
          <img
            src={bgPR1}
            alt="Roatan beachfront property and Caribbean water"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/58" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.88),rgba(15,23,42,0.22),rgba(15,23,42,0.42))]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[62vh] max-w-7xl items-end">
          <FadeIn>
            <div className="max-w-4xl pb-8">
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                Sell with Property Roatan
              </p>

              <h1 className="mb-5 font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Market your Roatan property with reach, strategy, and experience.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">
                Property Roatan combines local market knowledge, MLS exposure, strategic marketing, and practical seller guidance to help position your property for qualified buyers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <div>
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
                Why Sell With Us
              </p>
              <h2 className="mb-5 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                A proven brand with island-level attention.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Property Roatan is built around attentive service, market knowledge, clear communication, and a marketing-first approach. On Roatan, sellers need a company that understands the island and can present a property with intention.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-3">
            {reasons.map((reason) => (
              <FadeIn key={reason}>
                <div className="border border-slate-200 bg-white/80 px-5 py-5 text-sm leading-relaxed text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                  {reason}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/55">
                Marketing Your Property
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                What you need is a company that will market your property.
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-2">
            {marketingChannels.map((channel) => (
              <FadeIn key={channel.title}>
                <div className="h-full border border-white/10 bg-white/5 p-6 sm:p-8">
                  <h3 className="mb-4 font-serif text-3xl text-white">
                    {channel.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                    {channel.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <FadeIn>
            <div>
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
                Seller Strategy
              </p>
              <h2 className="mb-5 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                Selling time is shaped by the right fundamentals.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                A strong seller strategy considers how the property is priced, how terms are structured, how the condition compares, and how consistently the property is marketed. Gavy can help you think through all of it before going live.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2">
            {sellerFactors.map((factor) => (
              <FadeIn key={factor}>
                <div className="border border-slate-200 bg-white/80 px-5 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                  <p className="font-serif text-3xl text-slate-900">{factor}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center sm:px-6 sm:py-20">
        <FadeIn>
          <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
            Ready to Sell?
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            Let us show you what Property Roatan can do.
          </h2>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact?intent=seller"
              className="inline-flex items-center justify-center bg-slate-900 px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
            >
              Request Seller Consultation
            </Link>

            <a
              href="https://wa.me/50432377727?text=Hi%20Gavy%2C%20I%27m%20interested%20in%20selling%20my%20property%20in%20Roatan."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-800 transition hover:bg-slate-50"
            >
              WhatsApp Gavy
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
