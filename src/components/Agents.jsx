import FadeIn from './FadeIn';
import gabbyImage from '../assets/gabby.png';
const agent = {
  name: 'Gavy Hernandez',
  role: 'Licensed Realtor · RENE Certified',
  bio: 'A licensed realtor and certified Real Estate Negotiation Expert passionate about elevating the buyer and seller experience in Roatan. She has served both international and local clients with outstanding results, and is a proud member of NAR USA, the Honduran Realtor Association, and the Roatan Realtor Association.',
  image: '/images/gavy-transparent.png',
  tags: ['NAR Member', 'RENE Certified', 'International Clients', 'Roatan Specialist'],
};

export default function Agents() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f7_45%,#f7f8f5_100%)] py-24 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-10 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center gap-4">
              <span className="h-px w-10 bg-slate-400/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Your Roatan Expert
              </span>
              <span className="h-px w-10 bg-slate-400/60" />
            </div>

            <h2 className="mb-5 font-serif text-4xl tracking-wide text-slate-900 md:text-5xl">
              Meet Gavy
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Professional guidance, strong negotiation skills, and local market
              expertise for buyers and sellers looking to invest with confidence in Roatan.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/45 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08))]" />
            <div className="relative grid items-center gap-12 px-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-14 md:py-14">
              <div className="order-2 md:order-1">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-slate-600 backdrop-blur-md">
                  Trusted Real Estate Advisor
                </div>

                <h3 className="mb-2 font-serif text-3xl text-slate-900 md:text-5xl">
                  {agent.name}
                </h3>

                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {agent.role}
                </p>

                <div className="mb-6 h-px w-20 bg-slate-300" />

                <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-700 md:text-lg">
                  {agent.bio}
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-sm backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
                  >
                    Contact Gavy
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="#listings"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 transition hover:bg-white/80"
                  >
                    View Listings
                  </a>
                </div>
              </div>

              <div className="order-1 flex justify-center md:order-2">
                <div className="relative flex w-full max-w-md items-end justify-center rounded-[2rem] border border-white/50 bg-white/30 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                  <div className="absolute inset-x-8 bottom-4 h-10 rounded-full bg-slate-900/10 blur-2xl" />
                  <img
  src={gabbyImage}
  alt={agent.name}
  className="relative z-10 max-h-[34rem] w-auto object-contain drop-shadow-[0_18px_35px_rgba(15,23,42,0.22)]"
/>

                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
