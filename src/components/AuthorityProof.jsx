import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const proofPoints = [
  {
    label: 'Native Roatan Perspective',
    title: 'Local intelligence buyers cannot get from listing portals.',
    text: 'Gavy understands the neighborhoods, access points, island rhythm, and practical questions that matter before a buyer commits.',
  },
  {
    label: 'Licensed + RENE Certified',
    title: 'Clear guidance for negotiations, expectations, and next steps.',
    text: 'The advisory process is built around communication, preparation, and calm decision-making for local and international clients.',
  },
  {
    label: '12+ Combined Years',
    title: 'Experience across real estate, administrative sales, and closings.',
    text: 'That transaction-cycle knowledge helps clients understand what happens from first conversation through due diligence and closing.',
  },
  {
    label: 'Private Advisory Flow',
    title: 'Curated options instead of generic property browsing.',
    text: 'Buyers can share goals, budget, preferred area, and timeline so recommendations are relevant from the first response.',
  },
];

export default function AuthorityProof() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.12),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-white/50 sm:text-xs">
                Built For Serious Buyers
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Trust signals that matter before a high-value island purchase.
              </h2>
            </div>

            <div className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base lg:ml-auto">
              <p>
                Real estate in Roatan is personal, local, and detail-driven. This site
                is structured to help buyers and sellers move from curiosity to a
                qualified private conversation with the right context already in place.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point) => (
            <FadeIn key={point.label}>
              <article className="h-full border border-white/10 bg-white/[0.055] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]">
                <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-sky-100/55">
                  {point.label}
                </p>
                <h3 className="mb-4 font-serif text-2xl leading-tight text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {point.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-white/70">
              Want a curated shortlist instead of scrolling through every listing?
              Send your goals and Gavy can guide the next step privately.
            </p>

            <Link
              to="/contact?intent=buyer-brief"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-slate-100"
            >
              Start Private Brief
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
