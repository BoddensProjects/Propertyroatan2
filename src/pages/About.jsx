import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import gabbyImage from '../assets/gabby.png';

const highlights = [
  'International Buyers',
  'RENE Certified',
  'Native Roatan Advisor',
  'Roatan Market Knowledge',
];

const values = [
  {
    title: 'Property Roatan',
    text: 'A focused island real estate brand built around clear guidance, curated opportunities, and thoughtful client support.',
  },
  {
    title: 'Gavy Hernandez',
    text: 'A native Roatan advisor who blends client-focused service, local pride, and real estate process knowledge.',
  },
  {
    title: 'Island Strategy',
    text: 'Support that goes beyond property details into lifestyle fit, location, access, investment potential, and long-term use.',
  },
];

const stats = [
  { value: '12+', label: 'Combined Years' },
  { value: 'RENE', label: 'Certified' },
  { value: 'Roatan', label: 'Focused' },
  { value: '1:1', label: 'Service' },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#f7fafc_0%,#edf5f7_44%,#f6f3ee_100%)] text-slate-900">
      <section className="relative px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:pb-20 lg:pt-40">
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <div>
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-500 sm:text-xs">
                About Property Roatan
              </p>

              <h1 className="mb-4 max-w-4xl font-serif text-4xl leading-[1.05] tracking-wide text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
                Meet Gavy and the Property Roatan approach.
              </h1>

              <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                Property Roatan is built for buyers and sellers who want more than
                a list of properties. Led by Gavy Hernandez, the goal is clear
                advice, local context, and a smoother path through one of the
                Caribbean's most unique markets.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/70 bg-white/70 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-slate-700 shadow-sm backdrop-blur-md sm:px-4 sm:text-[0.7rem]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 sm:max-w-2xl sm:grid-cols-4 sm:gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/60 bg-white/58 px-3 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-4 sm:py-4"
                  >
                    <p className="font-serif text-xl text-slate-900 sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative mx-auto flex w-full max-w-xs justify-center sm:max-w-sm md:max-w-md lg:max-w-xl">
              <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/55 bg-white/35 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.1)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-5">
                <div className="absolute inset-x-8 bottom-4 h-8 rounded-full bg-slate-900/10 blur-2xl" />
                <img
                  src={gabbyImage}
                  alt="Gavy Hernandez"
                  className="relative z-10 mx-auto max-h-[21rem] w-auto object-contain drop-shadow-[0_22px_36px_rgba(15,23,42,0.16)] sm:max-h-[27rem] md:max-h-[32rem] lg:max-h-[42rem]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <FadeIn>
            <div className="rounded-[1.5rem] border border-white/50 bg-slate-900 p-6 text-white shadow-[0_18px_70px_rgba(15,23,42,0.15)] sm:rounded-[2rem] sm:p-8 lg:p-10">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-xs">
                Meet Gavy
              </p>

              <h2 className="mb-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                A Roatan native helping clients turn island dreams into reality.
              </h2>

              <div className="grid gap-3 text-sm leading-relaxed text-white/80 sm:text-base">
                <p>
                  Gavy Hernandez is a licensed realtor, certified Real Estate
                  Negotiation Expert, and Roatan native whose passion for her
                  homeland shaped her desire for real estate from an early age.
                </p>
                <p>
                  With over 12 combined years across licensed real estate,
                  administrative sales, and closings, she understands the full life
                  cycle of island real estate and helps clients move efficiently,
                  strategically, and with confidence.
                </p>
                <p>
                  She has worked with local and international investors, first-time
                  buyers, repeat clients, and sellers who want a smoother, more
                  informed experience on the island.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {values.map((item) => (
              <FadeIn key={item.title}>
                <div className="h-full rounded-[1.35rem] border border-white/55 bg-white/62 p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:rounded-[1.5rem] lg:p-7">
                  <p className="mb-2 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-[0.68rem]">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-2 sm:px-6 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/55 bg-white/58 shadow-[0_20px_70px_rgba(15,23,42,0.09)] backdrop-blur-2xl sm:rounded-[2.25rem]">
              <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                <div className="p-6 sm:p-8 lg:p-12">
                  <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                    Why Clients Choose Property Roatan
                  </p>

                  <h2 className="mb-4 max-w-3xl font-serif text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Buying in Roatan should feel exciting, not overwhelming.
                  </h2>

                  <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
                    The goal is to understand your vision, guide you with honesty,
                    and help you move forward with clarity in one of the Caribbean's
                    most beautiful markets.
                  </p>
                </div>

                <div className="flex items-center px-6 pb-6 sm:px-8 sm:pb-8 lg:px-12 lg:pb-0">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 sm:w-auto sm:text-xs"
                  >
                    Start the Conversation
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
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
